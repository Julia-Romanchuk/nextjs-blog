import { useRouter } from 'next/router'
import PostComponent from '../../components/Post/Post'
import { GetServerSideProps } from 'next'
import postsAPI from '../../API/posts'
import { Post } from '../../_types_/posts.type'
import { FC } from 'react'

type PostType = {
  post: Post
}

const PostPage: FC<PostType> = ({ post }) => {
  const router = useRouter()
  const { postId } = router.query

  return <PostComponent post={post} />
}

// @ts-ignore
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { postId } = context.params
  // @ts-ignore
  const post = await postsAPI.getPost(postId)
  console.log(post, '_____________________________________')
  return {props: {post}} 
}

export default PostPage