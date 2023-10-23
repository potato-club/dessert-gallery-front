import styled from 'styled-components'

interface componentsProps {
  menu: number;
}

export const FeedSwitcherWrap = styled.div`
  width: 100vw;
  min-height: 880px;
  background-color: #FCF0E1;
  display: flex;
  justify-content: center;
`

export const ContentsWrap = styled.div`
  width: 1280px;
  display: flex;
  justify-content: space-between;

`

export const NenuWrap = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin: 70px;
`

export const ToggleWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`

export const TextLogo = styled.div`
  height: 136px;
  font-family: noto-sans-cjk-kr;
  font-size: 92px;
  font-weight: bold;
  color: #FF6F00;
  text-shadow: 0px 3px 6px rgba(255, 111, 0, 0.486);
  cursor: default;
`

export const PostWrap = styled.div`
  width: 70%;
  display: flex;
  margin: 24px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Text = styled.div<componentsProps>`
  width: 200px;
  font-size: 27px;
  color: #FDC886;
  font-weight: bold;
  font-family: noto-sans-cjk-kr;
  cursor: pointer;
  
`
export const TextNEW = styled(Text)`
  margin-bottom: 10px;
  ${({menu}) =>{
      if(menu === 1)
        return `color: #FF8D00;
                border-bottom: 3px solid #FF8D00`
  }};
`

export const TextFollow = styled(Text)`
  margin-top: 10px;
  ${({menu}) =>{
      if(menu === 2)
        return `color: #FF8D00;
                border-top: 3px solid #FF8D00`
  }};
`

export const MoveStoreListWrap = styled.div``

export const SummaryText = styled.div`
  font-size: 16px;
  color: #FF6F00;
  font-weight: bold;
  font-family: noto-sans-cjk-kr;
  margin: 33px 0 18px 0;
`