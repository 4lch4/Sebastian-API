import { BaseRoute } from '../../lib'

export class TogglEndpoint extends BaseRoute {
  constructor() {
    super('/toggl')
  }

  build() {
    this.router.get('/', (_ctx, _next) => {
      _ctx.body = 'Within /toggl endpoint'
    })
    return this.router
  }
}

export * from './Projects'
export * from './Timers'

