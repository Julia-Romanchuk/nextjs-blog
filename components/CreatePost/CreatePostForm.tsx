import { FC, FormEvent, useState, ChangeEvent, useCallback } from 'react'
import { NewPost } from '../../_types_/posts.type'
import { NewPostBlock, Input, TextArea, Button } from '../../styles'

type CreatePostFormType = {
  onCreatePost: (postData: NewPost) => void
}

const CreatePostForm: FC<CreatePostFormType> = ({onCreatePost}) => {

  const [body, setBody] = useState('')
  const [title, setTitle] = useState('')

  const handleChangeBody = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setBody(e.target.value)
  }, [])

  const handleChangeTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }, [])

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onCreatePost({body, title})
  }

  return (
    <NewPostBlock>
      <form onSubmit={onSubmit} >
        <Input placeholder='Title' onChange={handleChangeTitle} value={title} name='title' />
        <TextArea placeholder='Text of the post' onChange={handleChangeBody} value={body} name="body" />
        <Button type="submit"> Create </Button>
      </form>
    </NewPostBlock>
  )
}

export default CreatePostForm