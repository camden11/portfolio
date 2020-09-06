import { ColorControl, Footer, Nav } from "components";
import { TextColor, BackgroundColor } from "state";
import "style/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <TextColor.Provider>
      <BackgroundColor.Provider>
        <div className="container">
          <ColorControl>
            <Nav />
            <Component {...pageProps} />
            <Footer />
          </ColorControl>
        </div>
      </BackgroundColor.Provider>
    </TextColor.Provider>
  );
}

export default MyApp;
