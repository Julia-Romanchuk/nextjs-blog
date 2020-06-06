import { FC, FormEvent, useState } from 'react'
import { NewPost } from '../../_types_/posts.type'
import { NewPostBlock, Input, TextArea, Button } from '../../styles'

type CreatePostFormType = {
  onCreatePost: (postData: NewPost) => void
}

const CreatePostForm: FC<CreatePostFormType> = ({onCreatePost}) => {

  const [postData, setPostData] = useState({
      title: '',
      body: ''
    })

  const handleChange = (e) =>
  setPostData({ ...postData, [e.target.name]: e.target.value })

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    onCreatePost(postData)
  }

  return (
    <NewPostBlock>
      <form onSubmit={onSubmit} >
        <Input placeholder='Title' onChange={handleChange} value={postData.title} name='title' />
        <TextArea placeholder='Text of the post' onChange={handleChange} value={postData.body} name="body" />
        <Button type="submit"> Create </Button>
      </form>
    </NewPostBlock>)
}

export default CreatePostForm