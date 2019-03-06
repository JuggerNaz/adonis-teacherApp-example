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
  Route.get('homeworks', 'HomeworkController.index')
  Route.get('homeworks/:id', 'HomeworkController.show')
  Route.get('homeworks/list/:id', 'HomeworkController.list')
  Route.post('homeworks', 'HomeworkController.store')
  Route.put('homeworks/:id','HomeworkController.update')
  Route.delete('homeworks/:id','HomeworkController.delete')
}).prefix('api/v1/teacher')