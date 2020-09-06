import { ColorControl, Nav } from "components";
import { TextColor } from "state";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <TextColor.Provider>
      <div className="container">
        <ColorControl>
          <Nav />
          <Component {...pageProps} />
        </ColorControl>
      </div>
    </TextColor.Provider>
  );
}

export default MyApp;
