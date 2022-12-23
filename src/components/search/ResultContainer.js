import React from 'react';
import styled from 'styled-components';

const ResultContainer = () => {

  return (
    <ul>
     <ResultText>추천 검색어</ResultText>
    </ul>
  )
}

const ResultText = styled.div`
  padding: 10px;
`;

export default ResultContainer;