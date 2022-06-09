import type { FC } from 'react'
import BlogPage from '@/features/blog/pages/Blog'
import type { PostType } from '@/features/blog/types/post'
import { GetServerSideProps } from 'next'
import { collection, getDocs, type Timestamp } from 'firebase/firestore'
import { db } from 'firebase-config/firebase.config'

export const getServerSideProps: GetServerSideProps<{ posts: PostType[] }> = async () => {

    //TODO: fetch posts from database

    const snapshot = await getDocs(collection(db, "posts_remix"))
    const posts = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
        createdAt: doc.data().createdAt.toDate().toString(),
    } as PostType))

    return {
        props: {
            posts
        }
    }
}

const Blog: FC<{ posts: PostType[] }> = ({ posts }) => <BlogPage posts={posts} />


export default Blog
