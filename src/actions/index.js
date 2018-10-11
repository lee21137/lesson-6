//79장 2:50 ~ 80, 89
import axios from 'axios';

//액션타입 설정
export const FETCH_POSTS = 'FETCH_POSTS';
//2
export const CREATE_POST = 'CREATE_POST';

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