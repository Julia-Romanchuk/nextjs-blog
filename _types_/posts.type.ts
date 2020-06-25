import { Comment } from './comment.type'

export type Post = {
    title: string
    body: string
    id: number
    comments: Array<Comment> | []    
}

export type PostListItem = Omit<Post, 'comments'>

export type PostsList = {
    posts: Array<PostListItem>
}

export type NewPost = Omit<PostListItem, 'id'>
