import React from 'react'
import styled from 'styled-components';
import {ScoreStar,ScoreStarEmpty, ScoreStarHalf} from "../../../../public/svg";

interface props {
    score: number
    setScore: React.Dispatch<React.SetStateAction<number>>
}


function ReviewScore({score, setScore}: props) {

  const onClickStar = (value:number) => {
    console.log("score! : ", value)
    setScore(value);
  }
  return (
    <StarContainer>
     {[...Array(5)].map((_, index) => (score - index >= 1 ? (
        <IconWrap key={index} >
            <IconHalfWrap key={`half${index}`} onClick={()=>onClickStar(index+0.5)}/>
            <IconFullWrap key={`full${index}`} onClick={()=>onClickStar(index+1)}/>
            <ScoreStar width={80} height={80}/>
        </IconWrap>
     ):(
        score - index === 0.5 
        ? (
            <IconWrap key={index}>
                <IconHalfWrap key={`half${index}`} onClick={()=>onClickStar(index+0.5)}>
                    <ScoreStarHalf width={80} height={80}/>
                </IconHalfWrap>
                <IconFullWrap key={`full${index}`} onClick={()=>onClickStar(index+1)}/>
                <ScoreStarEmpty width={80} height={80}/>
            </IconWrap>)
        :(
            <IconWrap key={index}>
                <IconHalfWrap key={`half${index}`} onClick={()=>onClickStar(index+0.5)}/>
                <ScoreStarEmpty width={80} height={80}/>
                <IconFullWrap key={`full${index}`} onClick={()=>onClickStar(index+1)}/>
            </IconWrap>
        )
     )))}
    </StarContainer>
  )
}

export default ReviewScore

const StarContainer = styled.div`
  width: 360px;
  display: flex;
  justify-content: space-around;
`

const IconWrap = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
`

const IconHalfWrap = styled.div`
  width: 22px;
  height: 45px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`
const IconFullWrap = styled.div`
  width: 23px;
  height: 45px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
`