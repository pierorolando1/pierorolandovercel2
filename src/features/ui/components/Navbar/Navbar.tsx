import { Tabs, Text } from "@geist-ui/core"
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import styled from 'styled-components';
import { useStoreBlog } from "../../../blog/zustand/navbarBlog";

const NavbarContainer = styled.nav`
background: url('/dark-grey.jpg');
background-size: cover;
background-repeat: no-repeat;
background-position: center;
`

const NavbarAbove = styled.section`
max-width: 65.5rem;
margin: 0 auto;
height: 100%;
display: flex;
align-items: center;
padding: 1rem 0;
padding-top: 10rem;
`

const NavbarBelow = styled.section`
max-width: 65.5rem;
margin: 0 auto;
display: flex;
align-items: center;
position: sticky;
top: -1px;
`

export default () => {


    const bottomNavbar = useRef(null);
    const hideBlogBar = useStoreBlog(state => state.hide)
    const showBlogBar = useStoreBlog(state => state.show)

    useEffect(() => {

        const observer = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) {
                    console.log('hide navbar')
                    hideBlogBar()
                } else {
                    showBlogBar()
                    console.log("show navbar")
                }
            },
        )

        observer.observe(bottomNavbar.current!);
    }, [])

    const { push } = useRouter()

    return (
        <NavbarContainer>
            <NavbarAbove>
                <Text h5 style={{ margin: "auto 0.7rem" }}>Blog</Text>
            </NavbarAbove>
            <NavbarBelow ref={bottomNavbar}>
                <Tabs onChange={e => push(e)} hideDivider hideBorder initialValue="/">
                    <Tabs.Item value="/" label={<Link href="/">Home</Link>} />
                    <Tabs.Item value="/blog" label={<Link href="/blog">Blog</Link>} />
                </Tabs>
            </NavbarBelow>
        </NavbarContainer>
    )
}
