import Router from '@koa/router'

export abstract class BaseRoute {
  router: Router

  constructor(endpoint: string) {
    this.router = new Router({
      prefix: `${process.env.API_PREFIX}${endpoint}`
    })
  }

  abstract build(): Router
}
