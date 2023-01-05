import React, { useState , useEffect, useCallback } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { BiSearchAlt2,BiXCircle } from 'react-icons/bi';

const SearchBar = () => {
   const [inputValue, setInputValue] = useState('');
   const [searchedValue, setSearchedValue] = useState([]);
   const [result, setResult] = useState('');

   const onChangeInput = useCallback ( e => {
    debounce(setInputValue(e.target.value), 500);
    },[inputValue]);

const clearValue =() => {
  setInputValue('');
}


const debounce = (callback, duration) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), duration);
  };
};

// const onSubmitSearch = (e) => {
//   if (e.key === "Enter") {
//     검색결과창이 생성. 
//   }
// }

useEffect(() => {
  const fetch = async () =>{
    const {data} = await axios.get('https://dev.papricacare.com/v3/api-app/drugs', {
      params: {
        q: `${inputValue}`,
        kind: '%EC%9D%98%EC%95%BD%ED%92%88',
        //kind: '%EC%98%81%EC%96%91%EC%A0%9C' 영양제
        rows: 10,
      },
      headers: {
        Accept: 'application/json',
        ServiceId: '85326991-3865-4224-8386-7b3fd045b7ca',
        DeviceId: '530',
        Authorization: 'Bearer 1b*rlDIrXflfktmn3IkIJHBELGPLZUCTHI81cd*6a2g',
        'Content-Type': 'application/x-www-form-urlencod ed',
      },
    });
    setSearchedValue(data.list);
    setResult (data.result);
  }
  fetch();
},[inputValue]);
  

  return (
      <Container>
        <SearchContainer>
        <InputWrapper>
        <Icon>
          <BiSearchAlt2 />
        </Icon>
        <Div  />
        <Input
          value={inputValue}
          onChange={onChangeInput}
          placeholder="약제명으로 검색하세요"
        />
         {inputValue.length !== 0 && (
           <BiXCircle onClick={clearValue} />
            )}
      <Button>검색</Button>
      </InputWrapper>
        <>
        <ResultContainer>
        <ResultText>
          <SearchResult>검색결과</SearchResult> 
          <ResultName> {result}건</ResultName> 
        </ResultText>
        {searchedValue.map(el => (
        <ResultItem >
        {/* <Image> "{el.image}"</Image> */}
        <ItemText>{el.name}</ItemText>
        <ItemText2>{el.form}</ItemText2>
       </ResultItem>
        ))}
        </ResultContainer>
        </>
       </SearchContainer>
      </Container>
  );
};

const Container = styled.section`
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
  padding: 1rem ;
`;

const SearchContainer = styled.div`
 display : inline;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  line-height: 28px;
  width: 500px;
  height: 50px;
  font-weight: 400;
  font-size: 16px;
  border: 2px solid #ff8947;
  border-radius: 3rem;
  padding-left:2rem;
`;
const Icon = styled.div`
  width: 20px;
  height: 20px;
`;
const Div = styled.div`
  padding-right: 12px;
   
`;
const Input = styled.input`
  width: 87%;
  height: 22.69px;
  padding: 1px 2px;
  border: none;
  outline: none;
  cursor: text;
  font-size: 18px;
  line-height: 20.7px;
  text-align: start;
`;
const Button = styled.button`
  width: 21%;
  height: 3.4rem;
  padding: 19px 1px;
  cursor: pointer;
  line-height: 20px;
  border-width: 0;
  border-top-right-radius: 45px;
  border-bottom-right-radius: 45px;
  background-color: #ff8947;
  color: #ffffff;
  font-size: 1.12rem;
  font-weight: 600;
  text-align: center;
  letter-spacing: -0.02em;
`;

const ResultContainer = styled.div`
background-color: white;
border: 1px solid black;
`

const ResultItem = styled.div`
position: relative;
height: 40px;
padding: 8px;
font-size: 14px;
display: flex;
align-items: center;
`;


const ResultText = styled.div`
 padding: 1rem;
`;
const SearchResult = styled.div`
 display:inline;
`
const ResultName = styled.div `
display: inline;
color: #ff8947;
font-weight: 700;
`

const ItemText = styled.span`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 15%;
  transform: translate(0%, -50%);
`;

const ItemText2 = styled(ItemText)`
 left : 90%;
`;
export default SearchBar;
