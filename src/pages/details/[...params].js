import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

const id = () => {
  const router = useRouter();
  const {id} = router.query;
  const apiURL = `https://dev.papricacare.com/v3/api-app/drugs/${id}.json`;
  const res = await axios.get(apiURL);
  
  return {
    props: {
      item: data,
      name: process.env.name  
    }
  }

};

export default id;