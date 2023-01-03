import React from 'react'; 
import styled from 'styled-components';

const MediInfo= () => {

  return (
    <RankingContainer>
      <TitleWrapper>
        <Title>건강정보</Title>
        <DateTime>2023년 01월 02일 </DateTime>
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

