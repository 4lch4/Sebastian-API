import { BaseRoute } from '../../lib'

export class TimersEndpoint extends BaseRoute {
  constructor() {
    super('/toggl')
  }

  build() {
    this.router.get(`/timers`, (_ctx, _next) => {
      _ctx.body = 'Within "/api/v1/toggl/timers"!'
    })

    return this.router
  }
}

