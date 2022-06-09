import { Timestamp } from "firebase/firestore";

export type CommentType = {
    id: number;
    text: string;
    createdAt: string;
    displayName: string;
}

export type PostType = {
    id: string,
    title: string,
    description: string,
    createdAt: Timestamp,
    content: string,
    votes: number,
    comments: CommentType[],
}
