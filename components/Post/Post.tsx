import React, { FC } from 'react'
import { Post } from '../../_types_/posts.type'
import Commments from './Comments'

type PostType = {
    post: Post
}

const PostComponent: FC<PostType> = ({post}) => {
    
    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button> Delete post </button>
            {post.comments !== [] && <Commments comments={post.comments} />}
        </div>
    )
}

export default PostComponent