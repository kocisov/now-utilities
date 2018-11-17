import { IncomingMessage } from 'http'
import { parse } from 'querystring'

const handle = (request: IncomingMessage) =>
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

export default async function(request: IncomingMessage) {
  if (request.method === 'POST') {
    const result = await handle(request)
    return result
  }

  return null
}
