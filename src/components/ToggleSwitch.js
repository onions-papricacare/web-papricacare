import styled from "styled-components";
import react , {useState} from 'react';


const ToggleSwitch = () => {
const [value, setValue ] = useState('drug');

const onChangeMode = (value) => {
  value == "drug" ? setValue("drug") : (value== "nutri" ? setValue("nutri") :setValue("dur"))
};
  return (
<Switch value={value}>
  <span /> 
  <DurBtn // Dur검색 버튼 
    type="button"
    onClick={() => onChangeMode("dur")}
    value={value}
  >	함께 복약해도 될까요?</DurBtn> 
  <DrugBtn //의약품 검색 버튼 
    type="button"
    value={value}
    onClick={() => onChangeMode("drug")}
  >
  	의약품 검색
  </DrugBtn>
  <NutriBtn //건기식 검색버튼
    value={value}
    onClick={() => onChangeMode("nutri")}
  >
    건기식 검색
  </NutriBtn>
</Switch>
  );

};
export default ToggleSwitch;


const Switch = styled.div`
  width: 34rem;
  height: 3rem;
  color: #696969;
  background-color: #F3F4F6;
  border-radius : 5rem; 
  display: inline;
  margin: 2rem;
  span {
    position: absolute;
    width: 11rem;
    height: 2.4rem;
    margin-top: 4px;
    margin-left: 0.8rem;
    border-radius : 5rem; 
    background-color: #ffffff;
    color:black;
    transition: all 0.6s ease-in-out;
    z-index: 2;
    ${({ value }) => //props에 따른 삼항연산자 처리
    value == "drug"
      ? "transform: translateX(10rem)"
      : ( value == "nutri" ? "transform: translateX(21.5rem)" : "transform: translateX(0rem)")}
   `


 const button = styled.button`
  position: relative;
  width: 11rem;
  height: 2.7rem;
  background-color:#F3F4F6 ;
  font-weight: 400;
  font-size: 13px;
  border: none;
  cursor: pointer; 
`;

const DurBtn = styled(button)`
border-radius : 5rem; 
${({ value }) =>
value == "dur" ? "color: black" : "color :#696969"}
`;



const DrugBtn = styled(button)`
transition:color 1s ease;
${({ value }) =>
value === "drug" ? "color: black" : null}
`;

const NutriBtn = styled(button)`
border-radius : 5rem; 
${({ value }) =>
value === "nutri" ? "color: black" : null}
`;




