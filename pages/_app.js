import Strucutre from '../componets/Strucutre';
import Head from 'next/head';
import '../styles/globals.css';
function MyApp({ Component, pageProps }) {
  return (
    <Strucutre>
      <Head>
        <title>Users List</title>
      </Head>
      <Component {...pageProps} />
    </Strucutre>
  );
}

export default MyApp;
