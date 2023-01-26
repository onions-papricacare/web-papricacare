import React, { useState , useEffect, useCallback } from 'react';
import axios from 'axios';
import Link from 'next/link'
import styled from 'styled-components';
import { BiSearchAlt2 } from 'react-icons/bi';
import {AiFillCloseCircle} from 'react-icons/ai'
import SearchedResult from './SearchedResult';
import ToggleSwitch from 'components/ToggleSwitch';
const SearchBar = () => {
   const [inputValue, setInputValue] = useState('');
   const [searchedValue, setSearchedValue] = useState([]);
   const [result, setResult] = useState('');
   const [resultOpen, setResultOpen] = useState(false);

   const onChangeInput = (e)=> {
    setInputValue(e.target.value);
    };

const clearValue =() => {
  setInputValue('');
}
 


useEffect(() => {
  if(inputValue.length){
  const fetch = async () =>{
    const {data} = await axios.get('https://dev.papricacare.com/v4/api-www/drugs/medi?', {
      params: {
        q: `${inputValue}`,
        rows: 100,
      },
      headers: {
        Accept: 'application/json',
        ServiceId: '85326991-3865-4224-8386-7b3fd045b7ca',
    DeviceId: '530',
    Authorization: 'Bearer 1b*rlDIrXflfktmn3IkIJHBELGPLZUCTHI81cd*6a2g',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    setSearchedValue(data.list);
    setResult (data.result);
  }
  fetch();}
},[inputValue]);


  return (
      <Container>
        <ToggleSwitch/>
        <SearchContainer>
        {inputValue.length !== 0 ? 
      <InputWrapper primary>
        <Logo src="/smallLogo.svg" alt="small로고"/>
        <Div  />
        <Input
          value={inputValue}
          onChange={onChangeInput}
          placeholder="약제명으로 검색하세요" 
        />
         {inputValue.length !== 0 && (
           <AiFillCloseCircle onClick={clearValue} />
            )}
       <Icon>
          <BiSearchAlt2 />
        </Icon>
      </InputWrapper>
      :
      <InputWrapper>
        <Logo src="/smallLogo.svg" alt="small로고"/>
        <Div  />
        <Input
          value={inputValue}
          onChange={onChangeInput}
          placeholder="약제명으로 검색하세요" 
        />
         {inputValue.length !== 0 && (
           <AiFillCloseCircle onClick={clearValue} />
            )}
       <Icon>
          <BiSearchAlt2 />
        </Icon>
      </InputWrapper> 
        }
       {inputValue.length !==0 && (  
       <SearchedResult 
        result ={result}
        setResultOpen = {setResultOpen}
        searchedValue ={searchedValue}
        clearValue ={clearValue}
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
  margin-top: 1rem;
  padding: 1rem ;
`;

const SearchContainer = styled.div`
 display : inline;
`;

const Logo = styled.img`

`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  line-height: 28px;
  width: 40rem;
  height: 50px;
  font-weight: 400;
  font-size: 16px;
  border: 4px solid #ff8947;
  border-radius: 5rem;
  padding-left:2rem;
  border-bottom:  ${props => props.primary ? 'none':''};
  border-bottom-left-radius:  ${props => props.primary ? '0px':'5rem'};
  border-bottom-right-radius:  ${props => props.primary ? '0px':'5rem'};
`;
const Icon = styled.div`
  width: 3rem;
  height: 1.2rem;
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
  margin-left: 1rem
`;
 

export default SearchBar;
