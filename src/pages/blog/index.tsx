import { FC } from 'react'
import BlogPage from '../../features/blog/pages/Blog'
import type { PostType } from '../../features/blog/types/post'

export const getServerSideProps: () => Promise<{ props: { posts: PostType[] } }> = async () => {

    //TODO: fetch posts from database

    return {
        props: {
            posts: [{
                title: "Hello World",
                description: "This is a test blog post",

            } as PostType]
        }
    }
}

const Blog: FC<{ posts: PostType[] }> = ({ posts }) => <BlogPage posts={posts} />


export default Blog
