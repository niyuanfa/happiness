import Vue from 'vue'
import Router from 'vue-router'

import toCalculate from '../views/toCalculate/index.vue'


Vue.use(Router)

const router = new Router({
	routes: [
		{
			// 登录
			path: '/',
            name: 'toCalculate',
            component:toCalculate
        },
	]
})
export default router