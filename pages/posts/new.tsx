import { FC, useState } from 'react'
import CreatePostForm from '../../components/CreatePost/CreatePostForm'
import { NewPost } from '../../_types_/posts.type'
import Router from 'next/router'
import postsAPI from '../../API/posts'

const PostForm: FC<any> = ({}) => {

    const [newPostId, setNewPostId] = useState(null as number)

    const onCreatePost = async (postData: NewPost) => {
        JSON.stringify(postData)
        const newPost = await postsAPI.createPost(postData)
        setNewPostId(newPost.id)
    }

    if (newPostId) Router.push(`/posts/${newPostId}`)

    return <div>
        <CreatePostForm onCreatePost={onCreatePost} />
    </div>
}

export default PostForm 