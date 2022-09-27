import { AppProps } from 'next/app'
import '../styles/globals.css'
import KontentSmartLink from "@kontent-ai/smart-link";
import { useEffect } from 'react';

function App({ Component, pageProps }: AppProps) {

    useEffect(() => {
        // This is just an example of SDK initialization inside ES6 module.
        // HTML markup should still contain all necessary data-attributes (e.g. PageSection component).
        const kontentSmartLink = KontentSmartLink.initialize({
          defaultDataAttributes: {
            projectId: "d0e757a2-f5db-01e2-4c92-6b329bdc77a9",
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