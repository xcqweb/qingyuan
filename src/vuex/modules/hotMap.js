
const TRANSFORMA = 'TRANSFORMA' 


const state = {
	isTypes : 0,
}


const getters = {
	getState(state){
		return state.isTypes
	}
}

const mutations = {
	[TRANSFORMA] (state,val){
		state.isTypes = val
	}
}

export default{
  state,
  getters,
  mutations
}