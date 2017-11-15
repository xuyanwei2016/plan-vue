//mutation不能写异步 一般都是在action中处理 mutation只赋值改变状态

import * as types from './types';
import {setStorage} from "./local";

export const mutations={
  [types.INCREMENT](state,n){
    state.count+=n;
  },
  [types.DECREMENT](state,n){
    state.count-=n;
  },
  [types.ADD_PLAN](state,plan){
    state.lists.push(plan);
    setStorage(state)
  },
  [types.INCREMENT_TOTALTIME](state,n){
    state.totalTime+=n;
    setStorage(state)
  },
  [types.REMOVE_PLAN](state,list){
    state.lists=state.lists.filter(item=>item!=list);
    setStorage(state)
  },
  [types.DECREMENT_TOTALTIME](state,n){
    state.totalTime-=n;
    setStorage(state)
  }
}
