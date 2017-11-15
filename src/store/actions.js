//action是提交一个commit的方法提交到mutations中

import * as types from './types';//types是一个对象 拥有INCREMENT，DECREMENT
export const actions={//提交到mutations中
  [types.INCREMENT]({commit},n){
    //commit是为了提交到mutations n是值
    //将[types.INCREMENT] 的值当作key
    //increment(obj,n){obj.commit()}
    commit(types.INCREMENT,n);
  },
  [types.DECREMENT]({commit},n){
    commit(types.DECREMENT,n);
  },

  [types.ADD_PLAN]({commit},list){//list是代表要添加的内容{time,date,comment}
    /*commit(types.ADD_PLAN);*/
    let plan={
      avatar:'http://img3.duitang.com/uploads/item/201602/27/20160227192212_SmNWM.jpeg',
      name:'xianren',
      ...list
    }
    commit(types.ADD_PLAN,plan);
  },
  [types.INCREMENT_TOTALTIME]({commit},n){
    commit(types.INCREMENT_TOTALTIME,n)
  },
  [types.REMOVE_PLAN]({commit},list){
    commit(types.REMOVE_PLAN,list)
  },
  [types.DECREMENT_TOTALTIME]({commit},n){
    commit(types.DECREMENT_TOTALTIME,n)
  }

}

