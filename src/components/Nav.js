import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'


function Navbar() {
  return (
    <Wrapper>
      <LSide>
        <Link href={"https://www.papricacare.com/"}>
          <Logo src="../pages/public/assets/img/logo.svg" />
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
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: rgba(0, 0, 0, 0.85);
  padding: 10px 0;
`;

const Logo = styled.img`
  width: 130px;
  margin-right: 20px;
`;


const LSide = styled.header`
  display: flex;
  align-items: center;
`;

const RSide = styled.header`
  display: flex;
  align-items: center;
  font-size: 14px;
`;


const BtnIn = styled.a`
  padding: 10px 30px;
  color: white;
  border: 1px solid white;
  border-radius: 3px;
  text-decoration: none;
  font-weight: 700;
  &:hover {
    background-color: rgba(0, 127, 255, 0.04);
  }
`;

const InfoBtn = styled.a`
  padding: 10px 30px;
  color: white;
  border: 1px solid white;
  border-radius: 3px;
  text-decoration: none;
  font-weight: 700;
  &:hover {
    background-color: rgba(0, 127, 255, 0.04);
  }
`;