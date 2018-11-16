import { ServerResponse } from 'http'

export function json(response: ServerResponse) {
  response.setHeader('Content-Type', 'application/json')
  response.statusCode = 200

  return (data: {} | any[], end: boolean = false) => {
    response.write(JSON.stringify(data, null, 2))

    if (end) {
      response.end()
    }
  }
}
