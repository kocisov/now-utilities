import { IncomingMessage, ServerResponse } from 'http'
import { parse } from 'querystring'

interface Handle {
  setStatus(code: number): Handle
  json<T>(data: T): void
  text(data: string): void
}

export function handle(response: ServerResponse): Handle {
  return {
    setStatus(code: number): Handle {
      response.statusCode = code
      return this
    },

    json<T>(data: T) {
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

const handleBody = (request: IncomingMessage) =>
  new Promise((resolve) => {
    let body: string = ``

    request.on('data', (chunk: Buffer) => {
      body += chunk.toString()
    })

    request.on('end', () => {
      if (body.length > 0) {
        resolve(parse(body))
      }
    })

    resolve(false)
  })

export async function body(request: IncomingMessage) {
  if (request.method === 'POST') {
    const result = await handleBody(request)
    return result
  }

  return null
}
