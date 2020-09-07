import React from "react";

import { ColorControl, Footer, Nav, TransitionWrapper } from "components";
import StateProvider from "state";
import "style/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider>
      <ColorControl>
        <div className="container">
          <Nav />
          <TransitionWrapper>
            <div className="main-content-wrapper">
              <Component {...pageProps} />
            </div>
            <Footer />
          </TransitionWrapper>
        </div>
      </ColorControl>
    </StateProvider>
  );
}

export default MyApp;
