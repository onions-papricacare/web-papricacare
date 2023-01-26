import React from 'react'; 
import styled from 'styled-components';
// import DetailTapButton from './DetailTapButton';
import DetailHeader from './DetailHeader';

const DetailTitle = ({data}) => {
  return (
      <TitleWrapper>
        <DetailHeader data={data}/>
         <SubTitleWrapper>
        <LSide>
        <Title><h1>{data.name}</h1></Title>
        <Ingredient>성분명: {data.mainIngredient == undefined ? '' : data.mainIngredient[0].nameKo }</Ingredient>  
        </LSide>
        
        <RSide>
          <ItemImage src = {data.image}/>
        </RSide>
        </SubTitleWrapper>
      </TitleWrapper>
  )
}

export default DetailTitle;

const LSide = styled.div `
`

const TitleWrapper = styled.div `
`
const SubTitleWrapper = styled.div`
display :flex;
flex-direction : row;
justify-content: space-between;
`

const Title = styled.div `

`
const Ingredient= styled.div `

`
const RSide = styled.div `

`

const ItemImage =styled.img `
width: 15rem;
height: 8rem;
border-radius: 10px;
`


