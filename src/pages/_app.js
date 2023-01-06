//_app.js파일은 전체적인 설정해줌 
import '../../styles/globals.css';
import Nav from '../components/Nav'
import Footer from '../components/footer'
import SearchBar from 'components/search/SearchBar';
import ToggleSwitch from 'components/ToggleSwitch';

export default function App({ Component, pageProps }) {
  return (
    <div>
       <Nav>
        <p>This is an example header!</p>
      </Nav>
       
       <ToggleSwitch>
        <p>토글스위치입니당 </p>
       </ToggleSwitch>

      <SearchBar>
       <p>서치바입니당 </p>
      </SearchBar> 
       
       <Component {...pageProps} />

 
       <Footer>
        <p>This is an example footer!</p>
      </Footer>

    </div>
)}
