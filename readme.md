## Nuxt-handout-0724-comment
A comment API developed for Nuxt-handout-0724.
Powered by Express.

## Usage
1. Clone the repository.
2. `yarn install`
3. `node main.js`
4. If you want to change the port binding to, you could edit the `port` variable inside `main.js`

Now the API would listen on Port `port` (default 10001)

## Get
`/path=<path>`
Return the JSON content of `./comments/<path>.json`

## Post
In `req.body`:
```JSON
{
  "path": "<path>", 
  "data": {
    "time": <time>,
    "nickname": "<nickname>",
    "email": "<email>",
    "content": "<content>"
  }
}
```
Return `Accepted` if processed correctly.