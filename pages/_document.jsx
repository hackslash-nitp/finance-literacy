import Document from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class CustomDocument extends Document {

// the basic idea is every time our page load at the server side we need to insert our stylesheet into the document.
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
    
    
/*
  //This is how original document.js looks like
  render() {
      return <Html>
          <Head>
            <meta property="custom" content="Rendered through document.js" />
          </Head>

          <body>
              <Main />
          </body>

          <NextScript />
      </Html>
  }
*/
}