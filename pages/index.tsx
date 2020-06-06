import Head from 'next/head'
import Posts from '../components/Posts/Posts'
import { PostListItem } from '../_types_/posts.type'
import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPostsList, setPostsList } from '../redux/redusers/postsReduser'
import { GetStaticProps } from 'next'
import postsAPI from '../API/posts'

type HomeType = {
  posts: Array<PostListItem>
}

const Home: FC<HomeType> = ({posts}) => {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch((setPostsList(posts)))
  }, [dispatch])

  return (
    <>
      <Head>…</Head>
        <div>
          <Posts posts={posts} />
        </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await postsAPI.getPostsList()

  return {props: {posts}}
}

export default Home
