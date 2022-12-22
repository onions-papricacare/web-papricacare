import React, { useState, useCallback } from 'react';
// import ReactDOM from 'react-dom';
// import Router from '../Router';
// import axios from 'axios';
import styled from 'styled-components';
import InputContainer from 'components/search/InputContainer';
import ResultContainer from 'components/search/ResultContainer';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  return (
      <Container>
        <SearchContainer>
          <InputContainer
            // onChangeInput={onChangeInput}
            inputValue={inputValue}
          />
          <br />
          <ResultContainer
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
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

const HeaderContainer = styled.div`
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 34px;
  line-height: 1.6;
`;

export default SearchBar;
