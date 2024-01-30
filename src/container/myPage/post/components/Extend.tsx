import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Caption from "./Caption";
import useGetStoreInfo from "../../../../hooks/useGetStoreInfo";
import defaultImage from "../../../../../public/image/defaultPhoto.png";

interface ExtendProps {
  postTitle: string;
  content: string;
  onChange: (newContent: string, newTitle: string) => void;
}

const Extend = ({ postTitle, content, onChange }: ExtendProps) => {
  const [amount, setAmount] = useState<number>(0);
  const [caption, setCaption] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const storeInfo = useGetStoreInfo();

  const handleCaptionChange = (value: string) => {
    const currentAmount = value.length;
    setAmount(currentAmount);
    setCaption(value);
    onChange(title, value);
  };

  const handleTitleChange = (value: string) => {
    setTitle(value);
    onChange(content, value);
  };

  return (
    <AddWrapper>
      <InfoBox>
        <ProfileBox>
          <Image
            width={60}
            height={60}
            alt={""}
            src={
              storeInfo?.storeImage?.fileUrl
                ? storeInfo?.storeImage?.fileUrl
                : defaultImage
            }
          />
        </ProfileBox>
        <ProfileName>
          {storeInfo?.name} / {storeInfo?.info}
        </ProfileName>
      </InfoBox>

      <Caption
        titleChange={handleTitleChange}
        contentChange={handleCaptionChange}
        amount={amount}
      />
    </AddWrapper>
  );
};

export default Extend;

const AddWrapper = styled.div`
  width: 373px;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  gap: 20px;
`;

const ProfileBox = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
`;

const ProfileName = styled.div`
  height: 18px;
  font-size: 14px;
  display: flex;
  align-items: center;
  font-weight: 600;
`;