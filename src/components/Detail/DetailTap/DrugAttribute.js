import React from 'react'; 
import styled from 'styled-components';

const DrugAttribute = () => {
  return (
      <DetailWrapper>
        <SummarizedExplanation>
          <h1>약제특성</h1>
          <h3>한 줄 요약 설명 </h3>
           <Summary>카나브정은 보령제약에서 출시되는 혈압을 납추는</Summary>
          </SummarizedExplanation>
        {/* <DetailTapButton/> */}
          <image> </image>
      </DetailWrapper>
  )
}

export default DrugAttribute;

const DetailWrapper = styled.div `
 font-size: 10px;
`
const SummarizedExplanation = styled.div `
font-size: 10px;
`

const Summary = styled.div `
font-size:10px;
`