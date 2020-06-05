import Head from 'next/head'
import Layout from '../components/common/Layout'
import Link from 'next/link'
import postsAPI from '../API/posts'
import Posts from '../components/Posts/Posts'
import { connect, useDispatch, useSelector } from 'react-redux'
import { AppStateType, wrapper } from '../redux'
import { PostListItem } from '../_types_/posts.type'
import { getPostsList } from '../redux/redusers/postsReduser' 
import { useEffect } from 'react'

//type MapStateProps = {
//  posts: Array<PostListItem>
//}
//type MapDispatchProps = {
//  getPostsList: () => void
//}

const Home = () => {

  const dispatch = useDispatch()
  // @ts-ignore
  const {posts} = useSelector(state => state.posts)

  useEffect(() => {
    dispatch(getPostsList())
  }, [posts])

  return (
    <>
      <Head>…</Head>
        <div>
          <Posts posts={posts} />
        </div>
    </>
  )
}

//Home.getInitialProps = async () => {
//  const posts = await postsAPI.getPostsList()
//  return { posts }
//}

export default Home
