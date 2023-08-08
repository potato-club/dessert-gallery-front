import styled from "styled-components";

export const OrderButtonWrap = styled.div`
    width: 172px;
    height: 103px;
    background-color: #FCF0E1;
    border: 3px solid #FF8D00;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    right: 0;
    margin: 80px 8px;
    z-index: 21;
    font-family: noto-sans-cjk-kr;
    font-weight: bold;
    border-radius: 28px;

`; 

export const OrderMenu = styled.div`
    width: 120px;
    height: 54px;
    border-bottom: 1px solid #FF8D00;
    display: flex;
    flex-direction: row;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;

`

export const OrderButton = styled.button`
    width: 172px;
    height: 54px;
    background-color: #FCF0E1;
    border: 3px solid #FF8D00;
    position: absolute;
    right: 0;
    margin: 24px 8px 0 0;
    font-size: 18px;
    font-family: noto-sans-cjk-kr;
    font-weight: bold;
    border-radius: 28px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const ArrowSVG = styled.div`
    z-index: 25;
`