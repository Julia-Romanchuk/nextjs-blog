import React, { FC, useState } from 'react'
import { Comment } from '../../_types_/comment.type'
import { CommentsList, CommentItem, Button, Input } from '../../styles'

type CommmentsType = {
    comments: Array<Comment>
    onAddComment: (commentText: string) => void
}

const Commments: FC<CommmentsType> = (props) => {

    const {comments, onAddComment} = props

    const [commentText, setCommentText] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        const target = e.target as HTMLInputElement
        setCommentText(target.value)
    }

    const onAddCommentHandler = (commentText: string) => {
        onAddComment(commentText)   
    }
    
    const commentsList = comments.map((comment) => {
        return <CommentItem key={comment.id} >{comment.body}</CommentItem>
    })

    return (
        <div>
            <h3>Comments</h3>
            <CommentsList>
                {commentsList}
            </CommentsList>
            <Input placeholder='Write comment' value={commentText} onChange={handleChange} />
            <Button type='submit' onClick={() => onAddCommentHandler(commentText)}> Send comment </Button>
        </div>
    )
}

export default Commments