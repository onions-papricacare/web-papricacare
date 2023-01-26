import React from 'react'; 
import styled from 'styled-components';
import dayjs from 'dayjs'; 

const Ranking = () => {


// const fetch ('https://dev.papricacare.com/v4/api-www/info/rankings')
// .then(function(res) {
//   return res.json();
// })
// then((data) => console.log(data)));

  return (
    <RankingContainer>
      <TitleWrapper>
        <Title>오늘 처방약 순위</Title>
        <DateTime>{dayjs().format("YYYY년 MM월 DD일 HH시 MM분")} 기준</DateTime>
      </TitleWrapper>
      <RankingDrugs>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
      </RankingDrugs>
    </RankingContainer>
  )
}

export default Ranking;

const RankingContainer = styled.div `
margin-top : 0.5rem;
padding-left: 10rem;
`

const TitleWrapper = styled.div `

`

const Title = styled.div `
 font-size: 1.2rem;
 font-weight: 700;
`
const DateTime= styled.div `
font-size: 0.8rem;
font-weight: 500;
color: 	#A9A9A9;
`
const RankingDrugs = styled.ul `
padding-left:0px;
li{
  border: 1px solid #C0C0C0;
  width: 25rem;
  height: 2.5rem;
  list-style:none;
  margin-top: 1rem;
  border-radius: 1rem;
}
`


