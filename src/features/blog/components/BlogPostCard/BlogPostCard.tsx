import { Text, Spacer, useTheme } from "@geist-ui/core"
import { Share } from "@geist-ui/icons"
import Link from "next/link"
import { FC } from "react"
import styled from "styled-components"
import { PostType } from "../../types/post"

const Card = styled.article`
max-width: 49rem;
border-bottom: 1px solid rgba(255, 255, 255, 0.03);
padding: 1.9rem 0;
`

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

const BlogPostCard: FC<{
    post: Omit<PostType, "content">
}> = ({ post }) => {

    const { palette } = useTheme()

    return (
        <Card key={post.id}>
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
                    <Link href={`/blog/${post.id}`}>
                        <a
                            style={{
                                fontSize: "1.2rem",
                                fontWeight: "450",
                            }}
                        >{post.title}</a>
                    </Link>
                    <Spacer h={0.55} />
                    <Text h6 style={{ opacity: "0.6", fontWeight: "400" }}>{post.description}</Text>
                </div>
                <div>
                    <Button style={{
                        color: palette.successLight
                    }}>
                        <Share size={18} />
                    </Button>
                </div>

            </div>
        </Card>

    )

}

export default BlogPostCard
