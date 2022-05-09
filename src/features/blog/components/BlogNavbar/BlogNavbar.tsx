import { Tabs, useTheme } from "@geist-ui/core"
import styled from "styled-components"

const BlogNavbar = styled.nav`
position: fixed;
top: 0;
width: 100%;
max-width: 65.5rem;

background-color: ${
    // @ts-ignore
    (props) => props.background
    };

animation: fadeIn 0.25s ease-in;

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
`

export default () => {

    const { palette: { background } } = useTheme()
    return (
        //@ts-ignore
        <BlogNavbar background={background}>
            <Tabs hideDivider initialValue="1">
                <Tabs.Item value="1" label={<>All</>} />
                <Tabs.Item value="2" label={<>Tutorials</>} />
            </Tabs>
        </BlogNavbar>
    )
}

