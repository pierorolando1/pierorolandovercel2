import { Spacer, Tabs, useTheme } from "@geist-ui/core"
import type { FC } from "react"
import styled from "styled-components"
import ChangeThemeDropdown from "@/features/geist-theme/components/ChangeThemeDropdown"

const BlogNavbar = styled.nav`
position: fixed;
top: 0;
width: 100%;
max-width: 65.5rem;
display: flex;
justify-content: space-between;
align-items: center;
z-index: 1;

background-color: ${
    // @ts-ignore
    (props) => props.background
    };

animation: fadeIn 0.25s ease;

@keyframes fadeIn {
    from {
        top: -10px;
        opacity: 0;
    }
    to {
        top: 0;
        opacity: 1;
    }
}
`

const BlogStickyBar: FC<{
    items: { value: string, label: string }[],
    onChange?: (value: string) => void,
    initialValue?: string
}> = ({
    items,
    onChange,
    initialValue = items[0].value
}) => {
        const { palette: { background } } = useTheme()

        return (
            //@ts-ignore
            <BlogNavbar background={background}>
                <Tabs onChange={onChange} hideDivider initialValue={initialValue}>
                    {
                        items.map(item => {
                            return <Tabs.Item key={item.value} value={item.value} label={<>{item.label}</>} />
                        })
                    }
                </Tabs>
                <ChangeThemeDropdown />
                <Spacer w={10} />
            </BlogNavbar>
        )
    }

export default BlogStickyBar
