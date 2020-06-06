import PostComponent from '../../components/Post/Post'
import { GetServerSideProps } from 'next'
import postsAPI from '../../API/posts'
import { Post } from '../../_types_/posts.type'
import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPost } from '../../redux/redusers/postsReduser'
import Router from 'next/router'
import { CommentData } from '../../_types_/comment.type'

type PostType = {
  post: Post
}

const PostPage: FC<PostType> = ({ post }) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch((setPost(post)))
  }, [dispatch])

  const onPostDelete = (postId: number) => {
    postsAPI.deletePost(postId).then(data => 
    Router.push('/'))
  }

  const addComment = async (commentData: CommentData) => {
    await postsAPI.addComment(commentData)
    Router.push(`/posts/${post.id}`)
  }

  return (
    <PostComponent 
      post={post} 
      onPostDelete={onPostDelete}
      addComment={addComment} />
  )
}

// @ts-ignore
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { postId } = context.params
  const post = await postsAPI.getPost(+postId)
  return {props: {post}} 
}

export default PostPage