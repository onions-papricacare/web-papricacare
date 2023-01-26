import axios from 'axios';
import DetailContents from 'components/Detail/DetailTiltle/DetailContents';
import DetailTitle from 'components/Detail/DetailTiltle/DetailTitle';
import styled from 'styled-components';
 function Detail({data}) {
  
  return(
    <DetailWrapper>
      <DetailTitle data={data}/>
      <DetailContents data={data} />
    </DetailWrapper>
  );
}


export default Detail; 


const DetailWrapper = styled.div`
padding-left: 6rem;
padding-right: 10rem;
`


export const getServerSideProps = async({query}) => {
  const {params} = query;
  const res = await axios.get(`https://dev.papricacare.com/v4/api-www/drugs/medi/${params}`,{
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  }})
  const data= res.data;
  if (data == undefined) {
    return (<>
    Error
    </>)
  }else {
  return {
    props: { data }
  }
}}

