import { Post, NewPost, PostListItem } from "../../_types_/posts.type"
import { Reducer, Dispatch } from "react"
import postsAPI from "../../API/posts"
import { CommentData, Comment } from "../../_types_/comment.type"
import { ThunkAction } from "redux-thunk"
import { AppStateType } from ".."
import { Action } from "redux"

type InitialState = {
    posts: null | Array<PostListItem>
    post: null | Post,
    isDeleted: null | boolean,
    isCreated: null | boolean
}

type CombineActions = 
    ReturnType<typeof setPostsList> |
    ReturnType<typeof setPost> |
    ReturnType<typeof setDeletePostResult> |
    ReturnType<typeof setCreationPostResult> |
    ReturnType<typeof setComment>

type ThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, undefined, A>
type PostThunk = ThunkType<CombineActions>

const initialState: InitialState = {
    posts: null, 
    post: null,
    isDeleted: null,
    isCreated: null
}
    
export const postsReduser: Reducer<InitialState, CombineActions> = (state = initialState, action) => {
    switch (action.type) {
        case 'posts/SET_POSTS_LIST': 
            return {...state, posts: action.posts}
        case 'posts/SET_POST':
            return {...state, post: action.post}
        case 'posts/IS_POST_DELETED':
            return {...state, isDeleted: action.isDeleted}
        case 'posts/IS_POST_CREATED':
            return {...state, isCreated: action.isCreated}
        default:
            return state
    }
}

export const setPostsList = (posts: Array<PostListItem>) => ({type: 'posts/SET_POSTS_LIST', posts} as const)
export const setPost = (post: Post) => ({type: 'posts/SET_POST', post} as const)
export const setDeletePostResult = (isDeleted: boolean) => ({type: 'posts/IS_POST_DELETED', isDeleted} as const)
export const setCreationPostResult = (isCreated: boolean) => ({type: 'posts/IS_POST_CREATED', isCreated} as const)
export const setComment = (comment: Comment) => ({type: 'posts/SET_COMMENT', comment} as const)

export const getPostsList = () => async (dispatch: Dispatch<CombineActions>) => {
    const resData = await postsAPI.getPostsList()
    dispatch(setPostsList(resData.posts))
}

export const getPost = (postId: number): PostThunk => async (dispatch) => {
    const post = await postsAPI.getPost(postId)
    dispatch(setPost(post))
}

export const createPost = (newPostData: NewPost): PostThunk => async (dispatch) => {
    const post = await postsAPI.createPost(newPostData)
    dispatch(setPost(post))
}

export const deletePost = (postId: number): PostThunk => async (dispatch) => {
    const result = await postsAPI.deletePost(postId)
    dispatch(setDeletePostResult(true))
}

export const addComment = (commentData: CommentData): PostThunk => async (dispatch) => {
    const newComment = await postsAPI.addComment(commentData)
    dispatch(setComment(newComment))
}

export default postsReduser