/**
 * vuex配置
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//定义属性
var state ={
	count:16
}
//定义getters
var getters={
	gtype(state){
		return (state.count%2==0)?'基数':'偶数'
	},
	gcount(){
		return state.count
	}
}
//定义actions，要执行的动作
const actions = {
	// increment(context){
	// 	console.log(context)
	// 	//context包含 commit dispatch state
	// 	//context.commit()
	// }
	//上面的写法太麻烦，使用es6对象的解构
	increment({commit,state}){
		commit('xxincrement')//提交一个名为xxincrement的变化，名称可以自定义
	},
	decrement({commit,state}){
		if(state.count>10){
			commit('xxdecrement')
		}
	},
	ASYcrement({commit,state}){
		//异步 操作
		var p = new Promise((resolve,reject) => {
			setTimeout(()=>{
				resolve('可以增加')
			},3000)
		})
		p.then((data)=>{
			console.log(data)//可以增加
			commit('xxincrement')
		}).catch(()=>{
			console.log('异步操作失败')
		})
	}
}
//定义mutation是，处理数据的改变
const mutations = {
	xxincrement(state){
		state.count++
	}
	xxdecrement(state){
		state.count--
	}
}
//创建一个store
const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations

})
//
//导出store
export default store
