import React, {FC} from 'react'
import { PostListItem, Post } from '../../_types_/posts.type'
import Link from 'next/link'

type PostsType = {
    posts: Array<PostListItem>
}

const Posts: FC<PostsType> = ({posts}) => {

    const list = posts.map(postItem => {
        return <Link href={`/posts/${postItem.id}`} key={postItem.id} >
        <a><div>
            <h3>{postItem.title}</h3>
            <p>{postItem.body}</p>
        </div></a>
        </Link> 
    })
    return (
        <div>
            {list}
        </div>
    )
}

export default Posts