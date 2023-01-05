import styled from 'styled-components';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { SiNaver } from 'react-icons/si';

const Footer = () => {
  return (
    <FooterContainer>
    <Wrapper>
      <LSide>
      <CompanyInfo>
            <h4> (주) 어니언스</h4>
            <br />
            <TimeInfo>
              주소 : 경기도 성남시 분당구 운중동 969-1
              <br />
              전화 : 031-705-1550
            </TimeInfo> 
          </CompanyInfo>
      </LSide>
      <RSide>
           <CompanyImage>
              <li><FaFacebookSquare /></li>
              <li><SiNaver /></li>
              <li><FaInstagram /></li>
          </CompanyImage>
          <CompanyAbout>
            <li>이용 약관</li>
            <li>개인정보 처리방침</li>
            <li>개인정보 수집 및 이용동의</li>
          </CompanyAbout>
      </RSide>
    </Wrapper> 
    </FooterContainer>
  )
};

export default Footer;

const FooterContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 100%;
  // background: rgba(0, 0, 0, 0.85);
  padding: 10px 0;
`;

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0;
`;

const CompanyInfo = styled.div`
  width: 130px;
`;

const TimeInfo = styled.div`
  width: 20rem;
`;

const LSide = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
`;

const RSide = styled.header`
  align-items: center;
  font-size: 14px;
`;

const CompanyImage = styled.div`
`
const CompanyAbout = styled.div`
  padding: 10px 30px;
  list-style:none;
  padding-left:0px;
`;
