import Strucutre from '../componets/Strucutre';
import '../styles/globals.css';
function MyApp({ Component, pageProps }) {
  return (
    <Strucutre>
      <Component {...pageProps} />
    </Strucutre>
  );
}

export default MyApp;
