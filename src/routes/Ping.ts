import { BaseRoute } from '../lib'

export class PingEndpoint extends BaseRoute {
  constructor() {
    super('/')
  }

  build() {
    return this.router.get('/', (_ctx, _next) => {
      _ctx.body = 'Pong!'
    })
  }
}
