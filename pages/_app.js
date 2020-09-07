import React from "react";

import { ColorControl, Footer, Nav, TransitionWrapper } from "components";
import StateProvider from "state";
import "style/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider>
      <div className="container">
        <ColorControl>
          <Nav />
          <TransitionWrapper>
            <Component {...pageProps} />
            <Footer />
          </TransitionWrapper>
        </ColorControl>
      </div>
    </StateProvider>
  );
}

export default MyApp;
