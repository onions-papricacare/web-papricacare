import React from 'react'; 
import styled from 'styled-components';
// import DetailTapButton from './DetailTapButton';
import DetailHeader from './DetailHeader';

const DetailTitle = () => {
  return (
      <TitleWrapper>
        <DetailHeader/>
        <LSide>
        <Title><h1>보령아스피린 10mg</h1></Title>
        <Ingredient>성분명: 파마사르탄칼륨 </Ingredient>
        {/* <DetailTapButton/> */}
        </LSide>
        <RSide>
          <image> </image>
        </RSide>
      </TitleWrapper>
  )
}

export default DetailTitle;

const LSide = styled.div `

`

const TitleWrapper = styled.div `

`

const Title = styled.div `

`
const Ingredient= styled.div `

`
const RSide = styled.div `

`


