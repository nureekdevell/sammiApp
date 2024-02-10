import { createStore } from 'vuex';

const store = createStore({
	state() {
		return {
			count: 12,
		};
	},
	mutations: {
		increment(state) {
			state.count++;
		},
	},
	actions: {},
	getters: {},
	modules: [],
});

export default store;
