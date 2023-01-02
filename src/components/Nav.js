import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'


function Navbar() {
  return (
    <Wrapper>
      <LSide>
        <Link href={"https://www.papricacare.com/"}>
          <Onions>팝푸리카케어</Onions>
        </Link>
      </LSide>
      <RSide>
        <InfoBtn href="https://www.papricacare.com/">서비스 소개</InfoBtn>
        <BtnIn href="https://www.papricacare.com/">앱 다운로드</BtnIn>
      </RSide>
    </Wrapper>
  );
  }

export default Navbar;

const Wrapper = styled.div`
  position: fixed;
  top: 0px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
  background: rgba(0, 0, 0, 0.85);
  border: none;
`;

// const Logo = styled.img`
//   width: 130px;
//   margin-right: 20px;
// `;
const Onions = styled.span`
  color: black;
`;


const LSide = styled.header`
  margin left: 10px;
`;

const RSide = styled.header`
margin left: 10px;
`;


const BtnIn = styled.a`
  padding: 10px 30px;
  color:black;
  border: 1px solid white;
  border-radius: 3px;
  text-decoration: none;
  font-weight: 700;
  border: none;
  &:hover {
    background-color: rgba(0, 127, 255, 0.04);
  }
`;

const InfoBtn = styled.a`
  padding: 10px 30px;
  color:black;
  border: 1px solid white;
  border-radius: 3px;
  text-decoration: none;
  font-weight: 700;
  border: none;
  &:hover {
    background-color: rgba(0, 127, 255, 0.04);
  }
`;