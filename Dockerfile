# 필요한 경우에만 종속 항목 설치
FROM node:alpine AS deps
RUN apk add --no-cache libc6-compat python3 build-base
WORKDIR /app
RUN npm i -g npm
COPY package.json yarn.lock ./
RUN export NODE_OPTIONS=--max_old_space_size=800
RUN npm install

# 필요할 때만 소스 코드를 다시 빌드함.
FROM node:alpine AS builder
WORKDIR /app
COPY . .
RUN npm i -g npm
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build
RUN npm install --production
RUN rm -rf ./.next/cache

# 프로덕션 이미지, 모든 파일을 복사하고 컨테이너 실행.
FROM node:alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV SHOULD_PROFILE=true
ENV SHOULD_TRACE=true

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js

USER nextjs
EXPOSE 3000

CMD ["npm", "start"]