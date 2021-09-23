import { AppProps } from 'next/app'
import '../styles/globals.css'
import KontentSmartLink from "@kentico/kontent-smart-link";
import { useEffect } from 'react';

function App({ Component, pageProps }: AppProps) {

    useEffect(() => {
        // This is just an example of SDK initialization inside ES6 module.
        // HTML markup should still contain all necessary data-attributes (e.g. PageSection component).
        const kontentSmartLink = KontentSmartLink.initialize({
          defaultDataAttributes: {
            projectId: "3b4e3f40-edce-017e-8b28-93376249bc93",
            languageCodename: "default",
          },
          queryParam: "preview"
        });
    
        return () => {
          kontentSmartLink.destroy();
        };
      });

  return <Component {...pageProps} />
}

export default App