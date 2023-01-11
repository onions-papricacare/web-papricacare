import axios from "axios";
import Footer from "../components/footer";
import Navbar from "../components/Nav";
import {useRouter} from "next/router";


export default function Home( ) {
  const router = useRouter();
  return (
 <div>
  <br/>
  <Footer/>
 </div>
  )
};

