# bad-example-express-backdoor

express middleware containing a backdoor

for demonstration purposes only

from the [excellent Snyk blog post](https://snyk.io/blog/what-is-a-backdoor/).


### usage

```js
const express = require("express")
const browserRedirect = require("bad-idea-express-backdoor")

const app = express();

app.use(browserRedirect())

app.get("/", (req, res)=>{
  res.send("Hello Chrome User!")
})

app.listen(8080)
```