import React, {useState,useEffect} from "react";
import Link from "next/link";
import axios from "axios";
import styled from 'styled-components';
import DetailContents from '../../components/Detail/DetailTiltle/DetailContents';
import DetailTitle from '../../components/Detail/DetailTiltle/DetailTitle';

const Detail = () => {

   const [drugsDetail, setDrugsDetail] = useState([]);

useEffect (() => { 
 axios.get ('https://dev.papricacare.com/v4/api-www/drugs/medi/${id}')
 .then(response => response.json())
 .then(result => setDrugsDetail(result));
},[]);


  return (
   <DetailContainer>
    <DetailTitle drugsDetail={drugsDetail}/>
    <br/>
    <DetailContents />
   </DetailContainer>
  )
}

export default Detail;

const DetailContainer = styled.div `
  display: flex;
  margin-left : 5rem;
  flex-direction: column;
`

const DrugList = styled.div `
  padding: 10px;
`



// function Detail ({ posts }) {
//   return (
//     <Container>
//       {posts.map((post) => (
//         <>
//         <h1>{post.title}</h1>
//         <p>{post.name}</p>
//         <img src= {post.image}/>
//         </>
//       ))}
//     </Container>
//   )

// //getStaticProps 
// export async function getStaticProps (context) {
//   const { id } = context.query 
//   const res = await fetch (`https://dev.papricacare.com/v3/api-app/drugs/${id}`)
//   const posts = await res.json()

//   console.log(`Show data fetched. Count: ${posts.name}`)
//   return {
//     props : { posts }
//   },
// }

// }
// export default Detail;


// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'GET') {
//     res.setHeader('Allow', ['GET']);
//     res.status(405).json({ message: `Method ${req.method} is not allowed` });
//   } else {
//     const products = getProducts();
//     res.status(200).json(products);
//   }
// }

// const Container = styled.div`
//   padding-top: 200px;
// `;

// const id = () => {
//   const router = useRouter();
//   const {id} = router.query;
//   const apiURL = `https://dev.papricacare.com/v3/api-app/drugs/${id}.json`;
//   const res = await axios.get(apiURL);
  
//   return {
//     props: {
//       item: data,
//       name: process.env.name  
//     }
//   }

// };


// export default id;