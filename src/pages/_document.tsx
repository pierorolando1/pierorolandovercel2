import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { CssBaseline } from '@geist-ui/core'
import { ServerStyleSheet } from 'styled-components'

// @ts-ignore
class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const originalRenderPage = ctx.renderPage

        const sheet = new ServerStyleSheet()

        try {
            ctx.renderPage = () => originalRenderPage({
                enhanceApp: (App) => (props) =>
                    sheet.collectStyles(<App {...props} />),
            })

            const initialProps = await Document.getInitialProps(ctx)
            const styles = CssBaseline.flush()


            const styleTags = sheet.getStyleElement();

            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {styles}
                        {styleTags}
                    </>
                )
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html lang="es">
                <Head>
                    <meta name="description" content="Piero Rolando Blog and Website" />
                    <meta charSet="UTF-8" />
                    <meta name="keywords" content="Fullstack developer, freelancer, Piero Rolando" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
