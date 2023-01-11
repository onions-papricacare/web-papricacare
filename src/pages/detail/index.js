import axios from 'axios';
import styled from styled-Components;

export const getStaticProps = async () => {
  const res = await fetch ('https://dev.papricacare.com/v4/api-www/drugs/medi/'); 
  const data = await res.json(); 

  return {
    props: { drugs : data }
  }
// }
// useEffect(() => { 
//   axios.get('https://dev.papricacare.com/v4/api-www/drugs/medi/', {
//   params: {
//    id : `${id}`
//   },
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/x-www-form-urlencoded'
//   }
// })
// .then(data => {  
// console.log("통신 결과 : ", data.id);
// setDrugDetail(data)
// })
// },[]);