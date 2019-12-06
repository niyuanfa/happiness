import Vue from 'vue'
import Router from 'vue-router'

import toCalculate from '../views/toCalculate/index.vue'
import { resolve } from 'path';


Vue.use(Router)

const router = new Router({
	routes: [
		{
			// 水电费计算
			path: '/',
            name: 'toCalculate',
            component:toCalculate
		},
		{
			// 菜钱计算
			path: '/vegetable',
			name: 'vegetable',
			component: resolve => require(["@/views/toCalculate/vegetable.vue"],resolve)

		},
	]
})
export default router