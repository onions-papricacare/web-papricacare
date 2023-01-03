import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Detail = () => {
  // const [drugs, setDrugsData] = useState([]);
  // const params = useParams();

  // useEffect(() => {
  //   const {data} = axios.get('https://dev.papricacare.com/v3/api-app/drugs', {
  //     params: {
  //       id: `${}`,
  //       // kind: '%EC%9D%98%EC%95%BD%ED%92%88',
  //       //kind: '%EC%98%81%EC%96%91%EC%A0%9C' 영양제
  //       rows: 10,
  //     },
  //     headers: {
  //       Accept: 'application/json',
  //       ServiceId: '85326991-3865-4224-8386-7b3fd045b7ca',
  //       DeviceId: '530',
  //       Authorization: 'Bearer 1b*rlDIrXflfktmn3IkIJHBELGPLZUCTHI81cd*6a2g',
  //       'Content-Type': 'application/x-www-form-urlencod ed',
  //     },
  //     .then(response => response.json())
  //     .then(result => setDrugData(result.post));
  // }, [params.id]);

  // console.log(params);
  return (
    <Container>
      <FeedBox>
        {drugs?.map(drug => {
          return <DetailFeed key={feed.id} feed={feed} />;
        })}
        {console.log(feeds)}
        <ReviewContainer>
          <div>
            <ReviewText1>Detail</ReviewText1>
          </div>
          <Report>신고하기</Report>
        </ReviewContainer>
      </FeedBox>
      <DetailCommentBox postId={feeds.id} />
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  padding-top: 200px;
`;

const FeedBox = styled.div`
  width: 720px;
  margin: 0 auto;
`;

const ReviewContainer = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', 'center')}
  width: 720px;
  height: 40px;
  border-bottom: 1px solid ${props => props.theme.style.middleGrey};
  margin: 0px 0 10px 10px;
`;

const ReviewText1 = styled.span`
  color: ${props => props.theme.style.middleGrey};
`;


const Report = styled.button`
  border: none;
  color: ${props => props.theme.style.middleGrey};
  background-color: ${props => props.theme.style.white};
  font-size: 14px;
  &:hover {
    display: block;
    height: 70%;
    background-color: ${props => props.theme.style.lightGrey};
  }
`;