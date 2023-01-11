import React from 'react'; 
import styled from 'styled-components';

const DetailInfo = ({drugsDetail}) => {
  return (
      <DetailWrapper>
          <SummarizedExplanation>
            <h1>하이</h1>
          <h3>한 줄 요약 설명 </h3>
          <Summary>카나브정은 보령제약에서 출시되는 혈압을 납추는</Summary>
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
font-size:10px;
`