
## Requirements
Install nvm

```
nvm install 16
nvm use 16
npm install crypto-js
npm install axios
```

```
npm install -g azure-functions-core-tools@4 --unsafe-perm true
```

## To create project

```
func init <APP-NAME>

```

## To create new function inside project

```
func new
```

## To debug locally

```
az functionapp config set --linux-fx-version "node|16" --name <APP-NAME>
```
```
func start --verbose
```


## Publish to the azure function app.

Note, you need to add the azure cli and add the azure account in the local system first.

```
func azure functionapp publish <APP-NAME>
```