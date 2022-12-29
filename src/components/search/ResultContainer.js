import React, { useNavigate } from 'react';
import styled from 'styled-components';


const ResultContainer = ( {
 searchedValue, setResultOpen, clearValue, filterValue }) => {
  // const navigate = useNavigate(); 
  // const resultClick= el =>{
  //   setResultOpen(false);
  //   //  navigate(`/detail/${el.Id}`)
  //   clearValue();
  // };
return (
  <Container >
  {searchedValue.map (item =>(
  <UserInfo>
      <Name key={item.id}>{item.name}</Name>
      <Info>▶︎ 제형 : {item.form}</Info>
  </UserInfo>
 ))}
</Container>
)
  };
export default ResultContainer;



const Container = styled.div`
    display: flex;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20px;
`;

const Name = styled.span`
    font-size: 20px;
    font-weight: 600;
`;
const Info = styled.span`
    font-size: 14px;
`;