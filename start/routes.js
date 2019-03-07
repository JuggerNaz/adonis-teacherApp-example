'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() =>{
  Route.post('/register', 'AuthController.register')
  Route.post('/login', 'AuthController.login')
  Route.get('homeworks', 'HomeworkController.index')
  Route.get('homeworks/:id', 'HomeworkController.show')
  Route.get('homeworks/list/:id', 'HomeworkController.list')
  Route.post('homeworks', 'HomeworkController.store').middleware('auth')
  Route.put('homeworks/:id','HomeworkController.update').middleware('auth')
  Route.delete('homeworks/:id','HomeworkController.delete').middleware('auth')
}).prefix('api/v1/teacher')