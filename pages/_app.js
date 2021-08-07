import Strucutre from '../componets/Strucutre';

function MyApp({ Component, pageProps }) {
  return (
    <Strucutre>
      <Component {...pageProps} />
    </Strucutre>
  );
}

export default MyApp;
