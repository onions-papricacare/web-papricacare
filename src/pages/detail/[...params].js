// import React, {useState,useEffect,useRouter} from "react";
// // import Link from "next/link";
// import axios from "axios";



// const Detail = () => {
//   const { id } = router.query.id;
//   const [drugsDetail, setDrugsDetail] = useState([]);

// // useEffect (() => { 
// //  axios.get ('https://dev.papricacare.com/v4/api-www/drugs/medi/${id}'
// //  .then(data => {
// //   setDrugsDetail(data)
// // )},[

//   useEffect(() => {
//     axios.get('https://dev.papricacare.com/v4/api-www/drugs/medi/',{
//       params: {
//          id: `${id}`
//       },
//       headers: {
//         Authorization: 'Bearer 1b*rlDIrXflfktmn3IkIJHBELGPLZUCTHI81cd*6a2g',
//         'Content-Type': 'application/x-www-form-urlencod ed',
//       },
//     } )
//       .then (result=> {
//         console.log("통신 결과 : ", result);
//         setDrugsDetail(result.data);
//       })
//         // console.log("통신 결과 : ", result);
//         // console.log("status : ", result.status);
//         // console.log("data : ", result.data);
//       // .then( result => setSearchedRelatedValue(result.data))
//       .catch (function (error) {
//           console.log("에러 발생 : ", error);
//           })
//   },[]);






//   return (
//    <DetailContainer>
//     <DetailTitle drugsDetail={drugsDetail}/>
//     <br/>
//     <DetailContents />
//    </DetailContainer>
//   )
// }

// export default Detail;

// const DetailContainer = styled.div `
//   display: flex;
//   margin-left : 5rem;
//   flex-direction: column;
// `

// const DrugList = styled.div `
//   padding: 10px;
// `

import axios from 'axios'
import styled from 'styled-components';
import DetailContents from '../../components/Detail/DetailTiltle/DetailContents';
import DetailTitle from '../../components/Detail/DetailTiltle/DetailTitle';
import { useRouter } from "next/router";
import { useEffect } from 'react';
 
export default function Detail({ params }) {
  const router = useRouter();
  const [title , id] = params|| [];


  return(
    <div>
      <DetailTitle title={title}/>
      <h2>{title}</h2>
      <h4>{id}</h4>
    </div>
  )}


export function getServerSideProps({ params: { params } }) {
  // console.log(params);
  return {
    props: { params },
  };
}

