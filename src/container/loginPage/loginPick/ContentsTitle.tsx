import React from "react";
import styled from "styled-components";

function ContentsTitle({ children }: { children: string }) {
  return <ContentsTitleComponent>{children}</ContentsTitleComponent>;
}
export default ContentsTitle;

const ContentsTitleComponent = styled.div`
  @media screen and (min-width: 1920px) {
    margin: 28px 0 12px 0;
    height: 71px;
    font-size: 48px;
  }
  @media screen and (max-width: 1919px) {
    margin: 17.7px 0 12px 0;
    height: 44px;
    font-size: 30px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #ff6f00;
`;
