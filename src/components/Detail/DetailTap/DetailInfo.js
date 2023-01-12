import React from 'react'; 
import styled from 'styled-components';

const DetailInfo = ({data}) => {
  return (
      <DetailWrapper>
          <SummarizedExplanation>
          <h3>한 줄 요약 설명 </h3>
          <Summary>{data.feature}</Summary>
        </SummarizedExplanation>
      </DetailWrapper>
      
  )
}

export default DetailInfo;

const DetailWrapper = styled.div `
 font-size: 10px;
`
const SummarizedExplanation = styled.div `
font-size: 10px;
`

const Summary = styled.div `
font-size:30px;
`