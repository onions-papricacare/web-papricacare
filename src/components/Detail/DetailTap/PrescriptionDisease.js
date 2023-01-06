import React from 'react'; 
import styled from 'styled-components';

const PrescriptionDisease = () => {
  return (
      <DetailWrapper>
        <SummarizedExplanation>
          <h1>처방질병</h1>
          <h3>한 줄 요약 설명 </h3>
           <Summary>카나브정은 보령제약에서 출시되는 혈압을 납추는</Summary>
          </SummarizedExplanation>
        {/* <DetailTapButton/> */}
          <image> </image>
      </DetailWrapper>
  )
}

export default PrescriptionDisease;
const DetailWrapper= styled.div `
 font-size:2rem;
`

const SummarizedExplanation = styled.div `
font-size:2rem;
`

const Summary = styled.div `
font-size:2rem;
`