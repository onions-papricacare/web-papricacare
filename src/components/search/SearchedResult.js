import React from 'react';
import styled from 'styled-components';
import Router from 'next/router';


const SearchedResult = ({searchedValue, result, setResultOpen, clearValue}) => {
 
 const resultClick = (el) =>  {
      setResultOpen(false);
      //  Router.push(`/detail/${el.name}/${el.id}`);
      Router.push ({
       pathname: `/detail/${el.id}`,
      })
      clearValue();
   };

  return (
    <ResultContainer>
    <ResultText>
      <SearchResult>검색결과</SearchResult> 
      <ResultName> {result}건</ResultName> 
    </ResultText>
    {searchedValue.map(el => (
      <ResultItem onClick = { () => resultClick(el)} key={el.id}>
        <ItemImage src ={el.image}/> 
        <ItemText>{el.name}</ItemText>
      </ResultItem>
    ))}
    </ResultContainer>
  )
}

export default SearchedResult;


const ResultContainer = styled.div`
border: 4px solid #ff8947;
border-bottom-left-radius: 3rem;
border-bottom-right-radius: 3rem;
border-top: none;
padding-left: 1rem;
`

const ResultItem = styled.div`
position: relative;
height: 40px;
padding: 8px;
font-size: 14px;
display: flex;
align-items: center;
justify-content: space-between;
:hover {
  background-color: lightGrey;
}
`;

 const ItemImage = styled.img`
  width: 4rem;
  height: 2rem;
 `

const ResultText = styled.div`
 padding: 1rem;
 margin-left: 4rem;
`;
const SearchResult = styled.div`
 display:inline;
 font-weight: 700;
`
const ResultName = styled.div `
display: inline;
color: #ff8947;
font-weight: 900;
`

const ItemText = styled.span`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 15%;
  transform: translate(0%, -50%);
`;


