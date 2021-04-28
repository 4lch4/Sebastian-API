import { Middleware, RouterContext } from '@koa/router'
import { BaseRoute } from '../lib'

export class HealthEndpoint extends BaseRoute {
  constructor() {
    super('/health')
  }

  ok(_ctx: RouterContext, _next: Middleware) {
    _ctx.body = 'OK'
    _ctx.status = 200
  }

  build() {
    this.router.get('/liveness', this.ok)
    this.router.get('/readiness', this.ok)

    return this.router
  }
}
