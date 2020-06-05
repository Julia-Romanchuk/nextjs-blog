export interface Post {
    title: string
    body: string
    id: number
    comments: Array<Comment> | []    
}

export type Comment = {
    id: number
    postId: number
    body: string
}

export type PostListItem = {
    title: string
    body: string
    id: number
}

export type PostsList = {
    posts: Array<PostListItem>
}

export type NewPost = {
    title: string
    body: string
}
