import { AutoComplete, Spacer } from "@geist-ui/core"

import BlogNavbar from "../../components/BlogNavbar"
import BlogPostCard from "../../components/BlogPostCard"
import { PostType } from "../../types/post"
import { useStoreBlog } from "../../zustand/navbarBlog"


export default function BlogPage({ posts }: { posts: PostType[] }) {

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

                {
                    posts.map(post => {
                        return <BlogPostCard key={post.id} post={post} />
                    })
                }

            </div>
        </>
    )
}
