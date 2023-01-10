import styled from "styled-components";
import react , {useState} from 'react';


const ToggleSwitch = () => {
const [value, setValue ] = useState('review');
const onChangeMode = () => {
  if (value=== "info") {
    setValue("info");
  } else if (value === "review") {
    setValue("review");
  }
}
  return (

<Switch value={value}>
  <span /> 
  <InfoBtn // 의약품검색 버튼 
    type="button"
    value={value}
    onClick={() => onChangeMode("info ")}
  >	의약품검색 </InfoBtn> 
  <ReviewBtn //건기식 검색 버튼 
    type="button"
    value={value}
    onClick={() => onChangeMode("review")}
  >
  	건기식검색
  </ReviewBtn>
</Switch>
  );

};

export default ToggleSwitch;

const button = styled.button`
  position: relative;
  margin-left: 1rem;
  width: 11rem;
  height: 2.7rem;
  color: black;
  background-color:#F3F4F6 ;
  font-weight: 400;
  font-size: 13px;
  cursor: pointer;
  z-index: 200;
  border: none;
`;
//button 컴포넌트 상속
const InfoBtn = styled(button)`
border-radius : 5rem; 
${({ value }) =>
    value === "info" ? "color: #9C9C9C;" : null}
`;

//button 컴포넌트 상속
const ReviewBtn = styled(button)`
border-radius : 5rem; 
transition:color 1s ease;
  ${({ value }) =>
    value === "review" ? "color: #9C9C9C;" : null}
    transition:color 1s ease;
`;
        
const Switch = styled.div`
  position: relative;
  width: 29rem;
  height: 3rem;
  margin: 5rem auto 1rem auto;
  background-color: #F3F4F6;
  border-radius : 5rem; 
  span {
    position: absolute;
    width: 15rem;
    height: 40px;
    top: 2px;
    border-radius: 1000px;
    background-color: #ffffff;
    transition: all 0.6s ease-in-out;
    z-index: 999;
    margin-left:0.2rem;
    ${({ value }) => //props에 따른 삼항연산자 처리
      value === "info"
        ? "transform: translateX(0px)"
        : "transform: translateX(90%)"}
  }
`;

