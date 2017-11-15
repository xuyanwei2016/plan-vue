//计算lists中有没有数据
export const getters={
  isShow(state){//有长度就是true 没有就是false
    return Boolean(state.lists.length);
  }

}

