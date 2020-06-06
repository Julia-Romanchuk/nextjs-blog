import { Post, NewPost, PostListItem } from "../../_types_/posts.type";
import { Reducer, Dispatch } from "react";
import postsAPI from "../../API/posts";
import { AnyAction } from "redux";
import { CommentData, Comment } from "../../_types_/comment.type";

const initialState = {
    posts: null as Array<PostListItem> | Array<PostListItem>,
    post: null as Post | Post,
    isDeleted: null as boolean | boolean,
    isCreated: null as boolean | boolean
}

type CombineActions = 
    ReturnType<typeof setPostsList> |
    ReturnType<typeof setPost> |
    ReturnType<typeof setDeletePostResult> |
    ReturnType<typeof setCreationPostResult> |
    ReturnType<typeof setComment>
    
type InitialState = typeof initialState

export const postsReduser: Reducer<InitialState, /*CombineActions*/AnyAction> = (state = initialState, action) => {
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

export const getPost = (postId: number) => async (dispatch: Dispatch<CombineActions>) => {
    const post = await postsAPI.getPost(postId)
    dispatch(setPost(post))
}

export const createPost = (newPostData: NewPost) => async (dispatch: Dispatch<CombineActions>) => {
    const post = await postsAPI.createPost(newPostData)
    dispatch(setPost(post))
}

export const deletePost = (postId: number) => async (dispatch: Dispatch<CombineActions>) => {
    const result = await postsAPI.deletePost(postId)
    dispatch(setDeletePostResult(true))
}

export const addComment = (commentData: CommentData) => async (dispatch: Dispatch<CombineActions>) => {
    const newComment = await postsAPI.addComment(commentData)
    dispatch(setComment(newComment))
}

export default postsReduser