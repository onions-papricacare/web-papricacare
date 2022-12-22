//(/주소)에 해당하는 페이지 메인페이지로 보여짐 
// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'

import Footer from "../components/footer";
import Navbar from "../components/Nav";
import SearchBar from "components/search/SearchBar";


export default function Home() {
  return (
 <div>
  <Navbar/>
  <SearchBar/>
  <Footer/>
 </div>
  )
}





  {/* <ul>
    <li><a href="/sub">/pages/sub/index.js</a></li>
    <li><a href="/sub/about">/pages/sub/about.js</a></li>
    <li><a href="/sub/1">/pages/sub/[id].js</a></li>
    <li><a href="/sub/2">/pages/sub/[id].js</a></li>
    <li><a href="/sub/2">/pages/sub/fetch.js</a></li>
  </ul> */}