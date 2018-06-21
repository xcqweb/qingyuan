
const TRANSFORMA = 'TRANSFORMA' 
const SHOWTOAST = 'SHOWTOAST' 


const state = {
	isTypes : 0,
	chain:'',
	toast:false
}


const getters = {
	getState(state){
		return state.isTypes
	},
	getChain(state){
		return state.chain
	},
	getToast(state){
		return state.toast
	}
}

const mutations = {
	[TRANSFORMA] (state,val){
		if(val.chain){
			state.chain = val.chain
		}
		state.isTypes = val.type
	},
	
	[SHOWTOAST] (state,val){
		state.toast = val
	},
}

export default{
  state,
  getters,
  mutations
}