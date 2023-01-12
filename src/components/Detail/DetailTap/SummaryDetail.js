import React from 'react'; 
import styled from 'styled-components';

const SummaryDetail= ({data}) => {
  return (
      <SummaryDetailWrapper>
        <SummarizedExplanation>
          <h1>상세정보</h1>
        <h3> 제품명 </h3>
           <Summary1>카나브정 120mg Kanarb Tab. 120mg</Summary1>  
          <h3> 성분/함량 </h3>
            <Summary2>Fimasartan Potassium Trihydrate 피마사르탄칼륨삼수화물 132.02mg (피마살탄칼륨(으)로서 120mg)</Summary2>
          <h3> 전문 / 일반 </h3>
          <Summary3>전문의약품 </Summary3>
          <h3> 단일 </h3>
          <Summary3>단일 </Summary3>
          <h3> 대조/생동 </h3>
          <Summary3> </Summary3>
          <h3> 제조/수입사  </h3>
          <Summary3>보령 </Summary3>
          <h3> 복약지도 </h3>
          <Summary3>증상이 개선되더라도 전문가와 상의없이 투약을 중단하지 마세요. 장시간 눕거나 앉은 자세에서 일어나는 경우 천천히 일어나세요. 눈꺼풀, 입술, 입 안에 부종이 나타나거나 호흡곤란을 느끼면 전문가와 상의하세요. 임산부, 수유부는 투여하지 마세요.</Summary3>
          <h3> 포장단위  </h3>
          <Summary3>30정/병, 300정/병 </Summary3>
          <h3> 저장방법  </h3>
          <Summary3>차광기밀용기, 실온(1~30℃)보관</Summary3>
          <Warning>출처: 파프리카케어에서 제공하는 질병 및 약제 통계정보는 건강보험심사평가원에서 매년 제공하는 145만명의 환자 표본데이터 중, 가장 최신의 2017년 자료를 의료데이터 솔루션 전문회사인 Core-Zeta가 수행한 분석자료입니다. </Warning>
          </SummarizedExplanation>
        {/* <DetailTapButton/> */}
          <image> </image>
      </SummaryDetailWrapper>
  )
}

export default SummaryDetail;

const SummaryDetailWrapper = styled.div `
 font-size:2rem;
`

const Summary1 = styled.div `
font-size:2rem;
`

const Summary2 = styled.div `
font-size:2rem;
`
const Summary3 = styled.div `
font-size:2rem;
`

const SummarizedExplanation =styled.div`
font-size: 2rem;
`

const Warning = styled.div`
font-size: 2rem;
`