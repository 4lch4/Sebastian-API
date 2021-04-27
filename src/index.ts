import Router from '@koa/router'
import Koa from 'koa'
import logger from 'koa-logger'


const app = new Koa()
const router = new Router({
  prefix: process.env.API_PREFIX
})

router.get('/', (_ctx, _next) => {
  _ctx.body = 'Hello world!'
})

app.use(logger())
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(process.env.PORT)
