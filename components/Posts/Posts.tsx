import React, {FC} from 'react'
import { PostListItem } from '../../_types_/posts.type'
import Link from 'next/link'
import { PostBlock } from '../../styles'

const Posts: FC<{posts: Array<PostListItem>}> = ({posts}) => {

    const list = posts.map(postItem => {
        return (
            <Link href={`/posts/${postItem.id}`} key={postItem.id} >
                <PostBlock>
                    <h3>{postItem.title}</h3>
                    <p>{postItem.body.length > 200 ? postItem.body.slice(0, 200) + ' ...' : postItem.body}</p>
                </PostBlock>
            </Link>
        )
    })

    return <div> {list} </div>
}

export default Posts