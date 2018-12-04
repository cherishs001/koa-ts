import {Home} from '../../app/controllers'

const router = require('koa-router')();

export default router.get('/index', Home.index)
