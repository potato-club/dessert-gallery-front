import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    @media screen and (max-width: 1280px) {
      width: 1736px; 
    }
    @media screen and (max-width: 480px) {
      min-width: 100vw; 
    }
`