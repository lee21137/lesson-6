/** 보일러 플레이트코드 */
import { FETCH_POSTS } from '../actions/index';

//2개 프로퍼티 리스트 인덱스, +포스트: 내용 
const INITIAL_STATE = { all:[], post:null};

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case FETCH_POSTS:

        default:
            return state;
    }
}