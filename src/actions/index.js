import axios from 'axios';

//액션타입 설정
export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY  = '?key=유니크';

export function fecthPosts(){
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type:FETCH_POSTS
        ,payload:request
    };
}