import axios from 'axios';
import DetailContents from 'components/Detail/DetailTiltle/DetailContents';
import DetailTitle from 'components/Detail/DetailTiltle/DetailTitle';

 function Detail({data}) {
  
  return(
    <div>
      <DetailTitle data={data}/>
      <DetailContents data={data} />
    </div>
  );
}

export default Detail; 


export const getServerSideProps = async({query}) => {
  const {params} = query;
  const res = await axios.get(`https://dev.papricacare.com/v4/api-www/drugs/medi/${params}`,{
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  }})
  const data= res.data;
 
  return {
    props: { data }
  }
};

