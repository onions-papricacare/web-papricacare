import Footer from "../components/footer";
import Navbar from "../components/Nav";
import SearchBar from "../components/search/SearchBar";
import ToggleSwitch from "components/ToggleSwitch";
// import Detail from "components/Detail/detail" 

export default function Home() {
  return (
 <div>
  <Navbar/>
  <ToggleSwitch/>
  <SearchBar/>
  <br/>
  {/* <Detail/> */}
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