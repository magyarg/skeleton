# Installation

* Clone the repository into the desired project folder
* Run `yarn`

# Create a new endpoint/module (Manually)

* Create a `controller` under the `src/controllers` folder. (ex.: sampleController.js)
* Create a `model` under the `src/models` folder. (ex.: sample.js)
* Create a `router` under the `src/routes` folder. (ex.: samples.js)
* Register the files in `server.js`: `app.use('/api/samples', sampleRoutes)`. (You have to create a reference first)
* Use the `posts` endpoint as a sample to reproduce the workaround.

# Create new edpoint/module/resource with the API CLI tool

## Command

`npm run-script make-resource`

## Switches

Defines the name of the resource. The following files will be created: postsController.js, post.js (model), posts.js (route file)
* `-n Posts`