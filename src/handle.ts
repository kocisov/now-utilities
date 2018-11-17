import { ServerResponse } from 'http'

export default function(response: ServerResponse) {
  return {
    setStatus(code: number) {
      response.statusCode = code
      return this
    },

    json(data: {} | any[]) {
      response.setHeader('Content-Type', 'application/json')
      response.write(JSON.stringify(data, null, 2))
      response.end()
    },

    text(data: string) {
      response.setHeader('Content-Type', 'text/plain')
      response.write(data)
      response.end()
    },
  }
}
