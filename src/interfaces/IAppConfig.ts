export interface IAppConfig {
  /** The display name of the application. */
  name: string

  /** The version of the app in SemVer format. */
  version: string

  /** The port number the server should listen on. */
  port: number

  /** The prefix to all request endpoints. */
  apiPrefix: string
}
