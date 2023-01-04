//_app.js파일은 전체적인 설정해줌 
import '../../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <div>
       <Component {...pageProps} />
    </div>
)}
