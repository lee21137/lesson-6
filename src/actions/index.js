//79장 2:50 ~ 80, 89
import axios from 'axios';
//액션타입 설정
export const FETCH_POSTS = 'FETCH_POSTS';
//2
export const CREATE_POST = 'CREATE_POST';
//95장
export const FETCH_POST = 'FETCH_POST';
//97장
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY  = '?key=xcxcxzczxcxzcx';

export function fetchPosts(){
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

//1. 폼 -> props -> 앤드포인트로 전달
export function createPost(props) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

    return {
        type: CREATE_POST,
        payload: request
    };
}

//95장 post...오타
export function fetchPost(id) {
    //console.log(`https://reduxblog.herokuapp.com/api/posts/${id}${API_KEY}`);
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
    
    return {
        type: FETCH_POST,
        payload: request
    };
}

//97장-리퀘스트를 쓰지않아 리듀가가 필요없음.
export function deletePost(id) {
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: DELETE_POST,
        payload: request
    };

}

