import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, GeistProvider, Themes } from '@geist-ui/core'
import Navbar from '../features/ui/components/Navbar'
import { useGeistTheme } from '../features/geist-theme/zustand/useStoreThemeGeist'

const defaultTheme = Themes.createFromDark({
    type: "default",
    palette: {
        background: "#0f101a",
        accents_1: "#1b1c2e",
        accents_2: "#272943",
        accents_3: "#313354",
        accents_4: "#3b3e66",
        accents_5: "#464978",
        accents_6: "#50548a",
        accents_7: "#5b5f9c",
        accents_8: "#6a6fa8",
        foreground: "#cbcde1"
    }
})

function MyApp({ Component, pageProps }: AppProps) {
    const { currentTheme } = useGeistTheme()

    return (
        <GeistProvider themes={[defaultTheme]} themeType={currentTheme}>
            <CssBaseline />
            <div>
                <Navbar />
                <section style={{ maxWidth: "65rem", margin: "0 auto" }}>
                    <Component {...pageProps} />
                </section>
            </div>
        </GeistProvider>
    )
}

export default MyApp
