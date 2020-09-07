import { ColorControl, Footer, Nav } from "components";
import StateProvider from "state";
import "style/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider>
      <div className="container">
        <ColorControl>
          <Nav />
          <Component {...pageProps} />
          <Footer />
        </ColorControl>
      </div>
    </StateProvider>
  );
}

export default MyApp;
