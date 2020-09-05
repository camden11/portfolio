import "styles/globals.css";
import { Nav } from "components";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
