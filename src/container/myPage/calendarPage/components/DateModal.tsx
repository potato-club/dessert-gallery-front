import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CheckButton from "../../components/CheckButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { modifyCalendarPage } from "../../../../hooks/useSchedule";

const DateModal = ({ ...props }) => {
  console.log(props.clickDateInfo);
  console.log(props.scheduleList);

  const { scheduleAddFn } = modifyCalendarPage.useAddSchedule(props.dateInfo);
  const { scheduleDeleteFn } = modifyCalendarPage.useDeleteSchedule(
    props.dateInfo
  );

  return (
    <Container>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <InnerContainer>
            <Title>{props.clickDateInfo}</Title>
          </InnerContainer>
        </SwiperSlide>
        <SwiperSlide>
          <InnerContainer>
            <Title>오늘의 스케쥴</Title>
            <EventAddBox>
              <ListColumn>
                <CheckButton
                  width={30}
                  height={30}
                  type="checkbox"
                  id={`eventCheckBox1`}
                  value={1}
                  defaultchecked={props.isSuccess}
                  eventFn={(e) => {
                    scheduleAddFn({ date: props.clickDateInfo, key: 1 });
                  }}
                />
                <EventContent>픽업일 추가하기</EventContent>
              </ListColumn>
              <ListColumn>
                <CheckButton
                  width={30}
                  height={30}
                  type="checkbox"
                  id={`eventCheckBox2`}
                  value={2}
                  defaultchecked={props.isSuccess}
                  eventFn={(e) => {
                    scheduleAddFn({ date: props.clickDateInfo, key: 2 });
                  }}
                />
                <EventContent>휴무일 추가하기</EventContent>
              </ListColumn>
              <ListColumn>
                <CheckButton
                  width={30}
                  height={30}
                  type="checkbox"
                  id={`eventCheckBox3`}
                  value={3}
                  defaultchecked={props.isSuccess}
                  eventFn={(e) => {
                    scheduleAddFn({ date: props.clickDateInfo, key: 3 });
                  }}
                />
                <EventContent>이벤트 추가하기</EventContent>
              </ListColumn>
            </EventAddBox>
          </InnerContainer>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default DateModal;

const Container = styled.div`
  padding: 40px 0px 10px;
  width: 430px;
  height: 500px;
  background-color: white;
  border-radius: 20px;

  /* 스와이퍼 컨텐츠영역 스타일링 */
  .swiper {
    width: 100%;
    height: 100%;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    background-color: white;
  }
  /* 스와이퍼 버튼 스타일링 */
  .swiper-button-next,
  .swiper-button-prev {
    width: 40px;
    height: 40px;
    padding: 8px;
    border-radius: 16px;
    border: 1px solid #ff6f00;
    background: var(--card-header-background, rgba(255, 255, 255, 0.9));
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(4px);
    background-repeat: no-repeat;
    background-position: 50%;
    &::after {
      content: none;
    }
  }
  .swiper-button-next {
    background-image: url("/svg/common/nextButton.svg");
  }
  .swiper-button-prev {
    background-image: url("/svg/common/prevButton.svg");
  }
  .swiper-button-disabled {
    opacity: 0.3;
  }

  /* 스와이퍼 위치 불릿 스타일링 */
  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
  .swiper-pagination-bullet-active {
    background-color: #ff6f00;
  }
`;
const InnerContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 70px 30px;
`;
const Title = styled.span`
  display: flex;
  justify-content: center;
  color: #ff6f00;
  font-family: Noto Sans CJK KR;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const EventAddBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  margin: auto 0px;
`;
const ListColumn = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;
const EventContent = styled.span`
  color: #828282;
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
