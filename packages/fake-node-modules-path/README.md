# @bad-idea/fake-node-modules-path

package that has a directory named "node_modules" that is not the real "node_modules"

### usage

```
yarn add @bad-idea/fake-node-modules-path
```

notice that this non-package directory shows up in simple searches for "node_modules"
```sh
find . -type d -name "node_modules" #| grep fake-node-modules-path
```
