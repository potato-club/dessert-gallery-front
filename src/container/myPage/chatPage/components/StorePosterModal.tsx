import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ModalWrapper from "../../../../components/ModalWrapper";
import DetailPoster from "./DetailPoster";
import myPageBack from "../../../../../public/image/myPageBack.png";
import { useGetInfinityPosterList } from "../../../../hooks/useBoard";
import { useInfinityScrollLoading } from "../../../../hooks/useInfinityScroll";
import LoadingSpinner from "../../../storePage/components/Modal/LoadingSpinner";
import { userInfoType } from "../ChatPage";

const StorePosterModal = ({
  storeId,
  userInfo,
}: {
  storeId: any;
  userInfo?: userInfoType;
}) => {
  const [isShown, setIsShown] = useState(false);

  const { posterList, isLoading, hasNextPage, fetchNextPage } =
    useGetInfinityPosterList(storeId);
  const { pageList, isLoad, ref } = useInfinityScrollLoading({
    data: posterList,
    isLoading,
    hasNextPage,
    fetchNextPage,
  });

  useEffect(() => {
    if (pageList && !pageList.length) {
      setIsShown(true);
    }
  }, [pageList]);

  return (
    <ModalWrapper>
      <Container>
        {isLoading ? (
          <LoadingWrapper>
            <LoadingSpinner borderWidth={2} width={50} height={50} />
          </LoadingWrapper>
        ) : (
          <InnerContent>
            <PosterList>
              {pageList &&
                pageList.length &&
                pageList.map((item: any) => (
                  <DetailPoster
                    key={item.boardId}
                    boardId={item.boardId}
                    thumbnail={item.thumbnail.fileUrl}
                    userInfo={userInfo}
                  />
                ))}
              {isShown && <NonePoster>등록된 게시물이 없습니다.</NonePoster>}
              <IoDiv ref={ref}></IoDiv>
            </PosterList>
            {isLoad && (
              <LoadingDiv>
                <LoadingSpinner width={20} height={20} borderWidth={2} />
              </LoadingDiv>
            )}
          </InnerContent>
        )}
      </Container>
    </ModalWrapper>
  );
};

export default StorePosterModal;

const Container = styled.div`
  width: 1000px;
  height: 700px;
  padding: 40px 87px;
  background-color: white;
  background-color: #fcf0e1;
  background-image: url(${myPageBack.src});
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const InnerContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const PosterList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;
const NonePoster = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0px;
  font-weight: 700;
  font-size: 30px;
`;
const LoadingDiv = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IoDiv = styled.div`
  margin-top: 30px;
`;
