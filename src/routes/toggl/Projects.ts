import { BaseRoute } from '../../lib'

export class ProjectsEndpoint extends BaseRoute {
  constructor() {
    super('/toggl')
  }

  build() {
    this.router.get('/projects', (_ctx, _next) => {
      _ctx.body = "Within /toggl/projects."
    })

    return this.router
  }
}