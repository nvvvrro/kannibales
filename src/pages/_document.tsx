import type { DocumentContext } from "next/document";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="Online cosmetic items shop" />
          <meta
            name="keywords"
            content="cosmetics, shop, erotic cosmetics, sexshop, adult toys"
          />
          <meta name="aplication-name" content="Kannibales" />
          <meta name="author" content="nvvvrro" />
        </Head>

        <body>
          <Main />
          <NextScript />
          <div id="modal-root"></div>
        </body>
      </Html>
    );
  }
}
