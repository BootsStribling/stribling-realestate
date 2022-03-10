import { Router } from 'express'
import * as realtorsCtrl from '../controllers/realtors.js'

const router = Router()

//GET - localhost:3000/realtors
router.get('/', realtorsCtrl.index)
//GET - localhost:3000/realtors/new
router.get('/new', realtorsCtrl.new)
//GET - localhost:3000/realtors/:id
router.get('/:id', realtorsCtrl.show)
//GET - localhost:3000/realtors/:id/edit
router.get('/:id/edit', realtorsCtrl.edit)

//POST - localhost:3000/realtors
router.post('/', realtorsCtrl.create)

//PUT - localhost:3000/realtors/:id
router.put('/:id', realtorsCtrl.update)

//DELETE - localhost:3000/realtors/:id
router.delete('/:id', realtorsCtrl.delete)


export {
  router
}