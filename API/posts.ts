import axios from 'axios'
import { PostsList, Post, NewPost } from '../_types_/posts.type'
import { CommentData, Comment } from '../_types_/comment.type'

const postsAPI = {
    async getPostsList () {
        const res = await axios.get<PostsList>('https://simple-blog-api.crew.red/posts')
        return res.data
    },
    async getPost (postId: number) {
        const res = await axios.get<Post>(`https://simple-blog-api.crew.red/posts/${postId}?_embed=comments`)
        return res.data
    },
    async createPost (newPostData: NewPost) {
        const res = await axios.post<Post>('https://simple-blog-api.crew.red/posts', newPostData)
        console.log(res.data)
        return res.data
    },
    async deletePost (postId: number) {
        return (await axios.delete<{}>(`https://simple-blog-api.crew.red/posts/${postId}`)).data
    },
    async addComment (commentData: CommentData) {
        const res = await axios.post<Comment>('https://simple-blog-api.crew.red/comments', commentData)
        return res.data
    }
}

export default postsAPI