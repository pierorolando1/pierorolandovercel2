import { AutoComplete, Spacer, Text } from "@geist-ui/core"
import { Heart } from '@geist-ui/icons'
import styled from "styled-components"
import BlogNavbar from "../../components/BlogNavbar"
import { useStoreBlog } from "../../zustand/navbarBlog"

const Button = styled.button`
display: flex;
flex-direction: column;
border: none;

padding: 0.5rem 0.8rem;

background-color: transparent;
cursor: pointer;
transition: all 0.2s ease;

border-radius: 5px;

&:hover {
    background-color: rgba(255, 255, 255, 0.009);
}

`

const Card = styled.article`
max-width: 49rem;
border-bottom: 1px solid rgba(255, 255, 255, 0.03);
padding: 1.9rem 0;
`


export default () => {

    const show = useStoreBlog(state => state.showBlogBar)

    console.log("SHOW", show)

    return (
        <>
            {
                show ? <BlogNavbar /> : <></>
            }
            <div style={{ height: "120vh" }}>
                <Spacer />
                <AutoComplete options={[]} placeholder="Search..." onSearch={() => { }} />
                <Spacer />
                <Card>
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "nowrap",
                        }}
                    >

                        <Spacer w={0.8} />
                        <div style={{
                            width: "100%",
                        }}>
                            <Text h4>How to be happy</Text>
                            <Text h6 style={{ opacity: "0.6" }}>Lorem ipsum idk what more adjsajdhsa </Text>
                        </div>
                        <div>
                            <Button>
                                <Heart size={18} />
                                16
                            </Button>
                        </div>

                    </div>
                </Card>
                <Card>
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "nowrap",
                        }}
                    >

                        <Spacer w={0.8} />
                        <div style={{
                            width: "100%",
                        }}>
                            <Text h4>How to be happy</Text>
                            <Text h6 style={{ opacity: "0.6" }}>Lorem ipsum idk what more adjsajdhsa </Text>
                        </div>
                        <div>
                            <Button>
                                <Heart size={18} />
                                16
                            </Button>
                        </div>

                    </div>
                </Card>
            </div>
        </>
    )
}
