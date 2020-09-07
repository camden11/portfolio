import "style/globals.css";

import { ColorControl, Footer, Nav, TransitionWrapper } from "components";

import React from "react";
import StateProvider from "state";

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
