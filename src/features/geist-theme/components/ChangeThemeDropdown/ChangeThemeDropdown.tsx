import { Select, Spacer } from "@geist-ui/core"
import { useGeistTheme } from "../../zustand/useStoreThemeGeist"
import { Moon, Sun } from '@geist-ui/icons'

import type { Theme } from '../../zustand/useStoreThemeGeist'

const OptionTheme = ({
    type,
    theme
}: {
    type: "light" | "dark",
    theme: Theme | "dark (Black)"
}) => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
        }}>
            {type == "dark" ? <Moon size={14} /> : <Sun size={14} />}
            <Spacer w={0.35} />
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
        </div>
    )
}

const ChangeThemeDropdown = () => {
    const { currentTheme, setTheme } = useGeistTheme()

    return (
        <Select
            style={{
                minWidth: "4.5rem",
            }}
            value={currentTheme}
            onChange={setTheme as any}
            pure
        >
            <Select.Option value="default">
                <OptionTheme theme="default" type="dark" />
            </Select.Option>

            <Select.Option value="light">
                <OptionTheme theme="light" type="light" />
            </Select.Option>

            <Select.Option value="dark">
                <OptionTheme theme="dark (Black)" type="dark" />
            </Select.Option>
        </Select>
    )

}

export default ChangeThemeDropdown
