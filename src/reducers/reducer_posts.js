/** 80장 : 보일러 플레이트코드 */
import { FETCH_POSTS } from '../actions/index';

//2개 프로퍼티 리스트 인덱스, +포스트: 내용 
const INITIAL_STATE = { all:[], post:null };

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case FETCH_POSTS:
            return { ...state, all: action.payload.data }; //리듀서 연결. API의 반환값.
        default:
            return state;
    }
}

/* 액션 생상자의 데이터 로드 프로세스 
1. 날씨 프로세스는 검색버튼 을 누를떄 (구별되기 쉬움)

네비게이팅할때(URL 변경할때) -> 미들웨어가 리듀서 호출


*/