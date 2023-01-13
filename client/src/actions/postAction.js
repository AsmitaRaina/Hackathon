import axios from 'axios';
import { POST_CREATE_FAIL, POST_CREATE_REQUEST, POST_CREATE_SUCCESS, POST_LIST_FAIL, POST_LIST_REQUEST, POST_LIST_SUCCESS } from '../constants/postConstants';


    export const listPosts = () => async(dispatch) =>{
        try {
            dispatch({type:POST_LIST_REQUEST})
            const {data} = await axios.get('/api/v1/admin/posts')
            console.log(data)
            dispatch({
                type:POST_LIST_SUCCESS,
                payload: data
            })
        } catch (error) {
            dispatch({
                type: POST_LIST_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message: error.message
            })
        }
    }


    export const createPost = (title, description, author) => async(dispatch,getState) =>{
        try {
            dispatch({type: POST_CREATE_REQUEST});
            const {userLogin:{userInfo}} = getState();
            const {data} = await axios.post("/api/v1/admin/posts/create",{title, description, author});
            console.log(data)
            dispatch({type:POST_CREATE_SUCCESS,payload:data});
        } catch (error) {
            console.log(error)
            dispatch(
                {
                    type:POST_CREATE_FAIL,
                    payload:error.response.data.message,
                }
            );
        }
    }