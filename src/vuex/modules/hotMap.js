
const TRANSFORMA = 'TRANSFORMA' 


const state = {
	isTypes : 0,
	chain:''
}


const getters = {
	getState(state){
		return state.isTypes
	},
	getChain(state){
		return state.chain
	}
}

const mutations = {
	[TRANSFORMA] (state,val){
		if(val.chain){
			state.chain = val.chain
		}
		state.isTypes = val.type
		//console.log(val.chain)
	}
}

export default{
  state,
  getters,
  mutations
}