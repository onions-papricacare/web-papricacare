
import React from 'react';
import styled from 'styled-components';

const DetailTapButton= () => {
 <TapButtonContainer> 
  <SummaryDetail>요약설명</SummaryDetail>
  <DrugAttribute>약제특성</DrugAttribute>
  <PrescriptionDisease>처방질병</PrescriptionDisease>
  <DetailInfo>상세정보</DetailInfo>
  <QnA>Q&A</QnA>
 </TapButtonContainer>
};

export default DetailTapButton;

const Delete = styled.button`
  width: 40px;
  height: 18px;
  font-size: 12px;
  border: none;
  background-color: ${props => props.theme.style.white};
  color: ${props => props.theme.style.middleGrey};
`;

const SummaryDetail = styled.button``

const DrugAttribute = styled.button``
const PrescriptionDisease = styled.button``
const DetailInfo = styled.button``
const QnA = styled.button``

