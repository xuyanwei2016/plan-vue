import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
//整个app下只能有一个store

//默认应该将storage的数据赋予给state
import {getStorage} from "./local";

const state=getStorage()||{
  //这个app下的状态
  totalTime:0,//总时间
  lists:[]//每个计划的数据
};
import {actions} from './actions';
import {mutations} from "./mutatons";
import {getters} from './getters';

export const store=new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
