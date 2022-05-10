import { Card, Spacer, Text } from "@geist-ui/core"
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

export default () => {

    const show = useStoreBlog(state => state.showBlogBar)

    console.log("SHOW", show)

    return (
        <>
            {
                show ? <BlogNavbar /> : <></>
            }
            <div style={{ height: "120vh", paddingTop: "5rem" }}>
                <Card shadow

                    style={{

                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "nowrap",
                        }}
                    >

                        <div>
                            <Button>
                                <Heart size={18} />
                                16
                            </Button>
                        </div>
                        <Spacer w={0.8} />
                        <div style={{
                            width: "100%",
                        }}>
                            <Text h4>How to be happy</Text>
                            <Text style={{ opacity: "0.6" }}>Lorem ipsum idk what more adjsajdhsa </Text>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}
