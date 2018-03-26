
const SHOWTOAST = 'SHOWTOAST' 


const state = {
	status:false
}


const getters = {
	getState(state){
		return state.status
	}
}

const mutations = {
	[SHOWTOAST] (state,val){
		state.status = val
	}
}

export default{
  state,
  getters,
  mutations
}