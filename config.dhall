let appName = "Sebastian-WS"
let version = "0.0.0"

let AppConfig: Type = {
  name: Text,
  version: Text,
  port: Natural,
  apiPrefix: Text,
  toggl: {
    baseUrl: Text,
    apiToken: Text
  }
}

in {
  name = appName,
  version = version,
  port = 8080,
  apiPrefix = "/api/v1",
  toggl = {
    baseUrl = "https://api.track.toggl.com/api/v8",
    apiToken = ""
  }
}: AppConfig
