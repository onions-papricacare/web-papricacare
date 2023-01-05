import React from 'react'; 
import styled from 'styled-components';
import dayjs from 'dayjs'; 

const MediInfo= () => {
const dayjs = require ('dayjs')
  return (
    <RankingContainer>
      <TitleWrapper>
        <Title>건강정보</Title>
        <DateTime>{dayjs().format("yyyy년 MM월 DD일 HH시 MM분 SS초")}</DateTime>
      </TitleWrapper>
      <RankingDrugs>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </RankingDrugs>
    </RankingContainer>
  )
}

export default MediInfo;

const RankingContainer = styled.div `

`

const TitleWrapper = styled.div `

`

const Title = styled.div `

`
const DateTime= styled.div `

`
const RankingDrugs = styled.div `

`

