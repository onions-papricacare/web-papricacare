import React, { useState , useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ResultContainer from '../search/ResultContainer';
import { BiSearchAlt2,BiXCircle } from 'react-icons/bi';

const SearchBar = () => {
   const [inputValue, setInputValue] = useState('');
   const [resultOpen, setResultOpen] = useState(false);
   const [searchedValue, setSearchedValue] = useState([]);
   const [copy, setCopy]= useState([]);

   const onChangeInput = (e) => {
    setInputValue(e.target.value);
    }
const clearValue =() => {
  setInputValue('');
}

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
        rows: 100000,
      },
      headers: {
        Accept: 'application/json',
        ServiceId: '85326991-3865-4224-8386-7b3fd045b7ca',
        DeviceId: '512',
        Authorization: 'Bearer CW2UeZmN7dYXUl-by*FHRcEQIKVX-ukxrv9diuZbhWc',
        'Content-Type': 'application/x-www-form-urlencod ed',
      },
    });
    setSearchedValue(data);
    setCopy(data);
    setResultOpen(true);
  }
  fetch();
});
  

useEffect (()=> {
  setSearchedValue(
  copy.filter((e) =>
    e.name.includes(inputValue)
  ));
},[inputValue,copy]);

// const filterValue = data.filter ((p) => {
//   return p.name.includes(inputValue);
// })


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
      </InputWrapper>
      <Button>검색</Button>
          <br />
           {resultOpen && (
           <ResultContainer
            searchedValue={searchedValue}
            clearValue ={clearValue}
            setResultOpen ={setResultOpen}
            /> 
            )}
        </SearchContainer>
      
      </Container>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 29px 20px;
  max-width: 700px;
  width: 700px;
  padding: 20px 0px;
`;

const SearchContainer = styled.div`
  padding: 10px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  line-height: 28.8px;
  width: 660px;
  padding: 20px 24px;
  font-weight: 400;
  font-size: 16px;
  border: 1px solid #ff8947;
`;
const Icon = styled.div`
  width: 20px;
  height: 20px;
`;
const Div = styled.div`
  padding-right: 12px;
`;
const Input = styled.input`
  width: 100%;
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
  width: 94.76px;
  padding: 12px 24px;
  cursor: pointer;
  line-height: 18px;
  border-width: 0;
  border-top-right-radius: 42px;
  border-bottom-right-radius: 42px;
  background-color: #ff8947;
  color: #ffffff;
  font-size: 1.12rem;
  font-weight: 700;
  text-align: center;
  letter-spacing: -0.018em;
`;


export default SearchBar;
