//79장 2:50 ~ 80, 89
import axios from 'axios';

//액션타입 설정
export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY  = '?key=유니크';

export function fetchPosts(){
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(props) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

    return {
        type: CREATE_POST,
        payload: request
    };
}