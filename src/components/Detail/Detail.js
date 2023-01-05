import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

function Detail ({ posts }) {
  return (
    <Container>
      {posts.map((post) => (
        <>
        <h1>{post.title}</h1>
        <p>{post.name}</p>
        <img src= {post.image}/>
        </>
      ))}
    </Container>
  )
}
//getStaticProps 
export async function getStaticProps (context) {
  const { id } = context.query 
  const res = await fetch (`https://dev.papricacare.com/v3/api-app/drugs/${id}`)
  const posts = await res.json()

  console.log(`Show data fetched. Count: ${posts.name}`)
  return {
    props : { posts }
  },
  revalidate : 20 //처음 접속후 일정시간 뒤 접속이 일어나면 렌더링 
}

export default Detail;


// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'GET') {
//     res.setHeader('Allow', ['GET']);
//     res.status(405).json({ message: `Method ${req.method} is not allowed` });
//   } else {
//     const products = getProducts();
//     res.status(200).json(products);
//   }
// }

const Container = styled.div`
  padding-top: 200px;
`;
