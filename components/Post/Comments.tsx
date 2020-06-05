import React, { FC, PropsWithChildren } from 'react'
import { Comment } from '../../_types_/posts.type'

type CommmentsType = {
    comments: Array<Comment>
}
// @ts-ignore
const Commments: FC<CommmentsType> = ({comments}) => {
    
    const commentsList = comments.map((comment) => {
        return <p key={comment.id} >{comment.body}</p>
    })

    return <div> {commentsList} </div>
}

export default Commments