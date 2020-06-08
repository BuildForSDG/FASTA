import Document from "next/document";
import Head from "next/head";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => (props) => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            <Head>
              <meta name="application-name" content="Fasta" />
              <meta name="apple-mobile-web-app-capable" content="yes" />
              <meta name="apple-mobile-web-app-status-bar-style" content="default" />
              <meta name="apple-mobile-web-app-title" content="Fasta" />
              <meta name="description" content="Your Travel Companion" />
              <meta name="format-detection" content="telephone=no" />
              <meta name="mobile-web-app-capable" content="yes" />
              <meta name="msapplication-config" content="/images/icons/browserconfig.xml" />
              <meta name="msapplication-TileColor" content="#43a047" />
              <meta name="msapplication-tap-highlight" content="no" />
              <meta name="theme-color" content="#43a047" />
              <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
              />
              <link rel="apple-touch-icon" sizes="180x180" href="/images/icons/apple-touch-icon.png" />
              <link rel="icon" type="image/png" sizes="32x32" href="/images/icons/favicon-32x32.png" />
              <link rel="icon" type="image/png" sizes="16x16" href="/images/icons/favicon-16x16.png" />
              <link rel="manifest" href="/manifest.json" />
              <link rel="mask-icon" href="/images/icons/safari-pinned-tab.svg" color="#5bbad5" />
              <link rel="shortcut icon" href="/images/icons/favicon.ico" />

              <meta name="twitter:card" content="summary" />
              <meta name="twitter:url" content="https://fasta.com" />
              <meta name="twitter:title" content="Fasta" />
              <meta name="twitter:description" content="Your Travel Companion" />
              <meta name="twitter:image" content="https://fasta./comimages/icons/android-chrome-192x192.png" />
              <meta name="twitter:creator" content="@fastaTeam" />
              <meta property="og:type" content="website" />
              <meta property="og:title" content="Fasta" />
              <meta property="og:description" content="Your Travel Companion" />
              <meta property="og:site_name" content="Fasta" />
              <meta property="og:url" content="https://fasta.com" />
              <meta property="og:image" content="https://fasta./comimages/icons/apple-touch-icon.png" />
            </Head>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }
}
