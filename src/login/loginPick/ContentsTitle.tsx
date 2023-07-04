import React from "react";
import styled from "styled-components";

function ContentsTitle({ children }: { children: string }) {
  return <ContentsTitleComponent>{children}</ContentsTitleComponent>;
}
export default ContentsTitle;

const ContentsTitleComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 28px 0 12px 0;
  height: 71px;
  font-size: 48px;
  font-weight: bold;
  color: #ff6f00;
`;
