//这里面就是为了存储数据到本地中
export const setStorage=function(data){
  localStorage.setItem("list",JSON.stringify(data))
};
export const getStorage=function(){
  return JSON.parse(localStorage.getItem("list"))
}
