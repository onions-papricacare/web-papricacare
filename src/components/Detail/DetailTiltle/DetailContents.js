// import axios from 'axios';
import React,{useState} from 'react';
import styled from 'styled-components';
import DetailInfo from '../DetailTap/DetailInfo';
import DrugAttribute from '../DetailTap/DrugAttribute';
import PrescriptionDisease from'../DetailTap/PrescriptionDisease';
import QnA from '../DetailTap/QnA';
import SummaryDetail from'../DetailTap/SummaryDetail';


const DetailContents= ( drugsDetail ) => {
 const [openTab, setOpenTab] = useState ( "요약설명");


 const MAPPING_OBJ = {
  요약설명: <DetailInfo drugsDetail={drugsDetail} />,
  약제특성: <DrugAttribute drugsDetail={drugsDetail}/>,
  처방질병: <PrescriptionDisease drugsDetail={drugsDetail}/>,
  상세정보: <SummaryDetail drugsDetail={drugsDetail}/>,
  QnA: <QnA drugsDetail={drugsDetail}/>
 };

  return (
 <TapButtonContainer>  
    <MenuTab>
          {Object?.keys(MAPPING_OBJ)?.map((tab, index) => (
            <DrugDetailUl key={index} onClick={() => setOpenTab(tab)}>
              <DrugDetailLi>{tab}</DrugDetailLi>
            </DrugDetailUl>
          ))}
    </MenuTab>
  <ContentsWrapper>
  <Contents>
    {MAPPING_OBJ[openTab]}</Contents>
  </ContentsWrapper>
 </TapButtonContainer>
)};

export default DetailContents;


const TapButtonContainer = styled.div`

`


const MenuTab = styled.div`
display: flex;
width: 80%;
height: 100px;
`

const DrugDetailUl= styled.div`
display: flex;
align-items: center;
justify-items:center;
font-size: 15px;
font-weight: 600;
background-color: white;
margin: 0.8rem;
border: 1px solid #E6E8ED;
width: 6rem;
height: 2.8rem;
border-radius: 18px;
&:hover {
  color: white;
  background-color:black;
}
`

const DrugDetailLi = styled.div`
width: 6rem;
padding : 1.3rem;
list-style: none;
`


const ContentsWrapper= styled.div`

`

const Contents = styled.div`
background-color: white;
width: 80%;
border: 1px solid black;
`