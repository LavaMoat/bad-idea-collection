# @bad-idea/postinstall-corrupt

package with a postinstall hook that modifies other packages

for demonstration purposes only


### usage

```
yarn add @bad-idea/postinstall-corrupt
```

notice all files matching `./node_modules/*/*.js` have been modified

```
node -e "require('tape')"
module has been corrupted
module has been corrupted
module has been corrupted
module has been corrupted
...
```