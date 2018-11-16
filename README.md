# now-utilities

> Utilities for serverless now^2.0

## Installation

```bash
# npm
$ npm install now-utilities

# yarn
$ yarn add now-utilities
```

## Usage

```js
import { handle } from 'now-utilities'

export default function(req, res) {
  handle(res)
    .setStatus(200)
    .json({
      status: 'success',
      message: 'Hello World!',
    })
}
```

## API

#### `handle(response: http.response)`

- `setStatus(code: number) => { .json(), .text(), ... }`

- `json(response: http.response) => (data: JSON) => null`

  - sets `status code` to `200`
  - sets `Content-Type` to `application/json`
  - prints out json

- `text(response: http.response) => (data: string) => null`

  - sets `status code` to `200`
  - sets `Content-Type` to `text/plain`
  - prints out text
