import React, { FC, SyntheticEvent } from 'react'
import { Post } from '../../_types_/posts.type'
import Commments from './Comments'
import Link from 'next/link'
import { CommentData } from '../../_types_/comment.type'
import { PostTitle, PostBoby, Button } from '../../styles'

type PostType = {
    post: Post
    onPostDelete: (postId: number) => void
    addComment: (commentData: CommentData) => void
}

const PostComponent: FC<PostType> = (props) => {

    const {post, onPostDelete, addComment} = props

    const onDeleteHandler = (e: SyntheticEvent<HTMLButtonElement>) => {
        onPostDelete(post.id)
    }

    const onAddComment = (commentText: string) => {
        const commentData = {
            postId: post.id,
            body: commentText
        }
        addComment(commentData)
    }
    
    return (
        <div>
            <Link href='/'> Home </Link>
            <PostTitle>{post.title}</PostTitle>
            <PostBoby>{post.body}</PostBoby>
            <Button onClick={onDeleteHandler}> Delete post </Button>
            {post.comments && <Commments comments={post.comments} onAddComment={onAddComment} />}
        </div>
    )
}

export default PostComponent