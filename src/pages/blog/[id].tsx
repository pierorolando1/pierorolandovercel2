import { PostType } from "@/features/blog/types/post"
import { db } from "firebase-config/firebase.config"
import { doc, getDoc } from "firebase/firestore"
import { GetServerSideProps } from "next"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"

type BlogPostProps = {
    source: MDXRemoteSerializeResult
    post: PostType
}

export const getServerSideProps: GetServerSideProps<BlogPostProps> = async ({ params }) => {

    const postSnap = await getDoc(doc(db, "posts_remix", params!.id as string))

    if (!postSnap.exists()) {
        return {
            redirect: {
                destination: "/blog",
                permanent: false,
            }
        }
    }

    const post = postSnap.data() as PostType | any

    console.log(post)

    return {
        props: {
            source: await serialize(post.content, {
                mdxOptions: {
                    remarkPlugins: [require("remark-code-titles")],
                }
            }
            ),
            post: {
                ...post,
                id: postSnap.id,
                createdAt: post.createdAt.toDate().toString(),
            }
        }
    }
}

const PostPage = ({
    post,
    source
}: BlogPostProps) => {
    return <MDXRemote {...source} />
}

export default PostPage
