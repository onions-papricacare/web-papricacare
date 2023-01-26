import React from 'react'; 
import styled from 'styled-components';

const MediInfo= () => {
  return (
    <MediInfoContainer>
      <TitleWrapper>
        <Title>건강정보</Title>
        <span>더보기 > </span>
      </TitleWrapper>
      <RankingDrugs>
          <li>1</li>
          <li>2</li>
          <li>3</li>
      </RankingDrugs>
    </MediInfoContainer>
  )
}

export default MediInfo;

const MediInfoContainer = styled.div `
margin : 0.3rem;
padding-left: 6rem;
`

const TitleWrapper = styled.div `
display:flex; 
justify-content: space-between;
`

const Title = styled.div `
font-size: 1.2rem;
font-weight: 700;
`

const RankingDrugs = styled.ul `
padding-left:0px;
li{
  border: 1px solid #C0C0C0;
  width: 25rem;
  height: 3rem;
  list-style:none;
  margin-top: 2rem;
  border-radius: 1rem;
}
`
