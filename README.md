# now-utilities

> Utilities for serverless now^2.0

## Installation

```bash
# npm
$ npm install now-utilities

# yarn
$ yarn add now-utilities
```

## API

- `json(response: http.response) => (data: JSON, endAfter: boolean) => null` sets `Content-Type` to `application/json` and prints out json (useful for JSON apis)
