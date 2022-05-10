import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as realtorsCtrl from '../controllers/realtors.js'

const router = Router()

//*GETS*//
//GET - localhost:3000/realtors
router.get('/', isLoggedIn, realtorsCtrl.index)
//GET - localhost:3000/realtors/new
router.get('/new', isLoggedIn, realtorsCtrl.new)
//GET - localhost:3000/realtors/:id
router.get('/:id', isLoggedIn, realtorsCtrl.show)
//GET - localhost:3000/realtors/:id/edit
router.get('/:id/edit', isLoggedIn, realtorsCtrl.edit)

//POST - localhost:3000/realtors
router.post('/', isLoggedIn, realtorsCtrl.create)

//PUT - localhost:3000/realtors/:id
router.put('/:id', isLoggedIn, realtorsCtrl.update)

//DELETE - localhost:3000/realtors/:id
router.delete('/:id', isLoggedIn, realtorsCtrl.delete)


export {
  router
}