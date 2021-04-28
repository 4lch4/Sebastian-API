import Router from '@koa/router'
import Koa from 'koa'
import logger from 'koa-logger'
import { AppConfig } from './configs'
import { getRoutes } from './routes'

const app = new Koa()
const router = new Router({
  prefix: AppConfig.apiPrefix
})

for (const route of getRoutes()) {
  app.use(route.routes())
}


app.use(logger())
app.use(router.allowedMethods())

app.listen(AppConfig.port)
