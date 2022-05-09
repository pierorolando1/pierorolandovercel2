import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, GeistProvider, Themes } from '@geist-ui/core'
import Navbar from '../features/ui/components/Navbar'

const defaultTheme = Themes.createFromDark({
    type: "defaultTheme",
    palette: {
        background: "#0f101a"
    }
})

const darkTheme = Themes.createFromDark({ type: "darkTheme" })
const lightTheme = Themes.createFromLight({ type: "lightTheme" })

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <GeistProvider themes={[defaultTheme, darkTheme, lightTheme]} themeType="dark">
            <CssBaseline />
            <div style={{
            }}>
                <Navbar />
                <section style={{ maxWidth: "65rem", margin: "0 auto" }}>
                    <Component {...pageProps} />
                </section>
            </div>
        </GeistProvider>
    )
}

export default MyApp
