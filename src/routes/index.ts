import Router from '@koa/router'
import { HealthEndpoint } from './Health'
import { PingEndpoint } from './Ping'
import { ProjectsEndpoint, TimersEndpoint, TogglEndpoint } from './toggl'

const Endpoints = [
  PingEndpoint,
  HealthEndpoint,
  TimersEndpoint,
  ProjectsEndpoint,
  TogglEndpoint
]

export function getRoutes() {
  const routes: Router[] = []

  for (const Endpoint of Endpoints) {
    routes.push(new Endpoint().build())
  }

  return routes
}
