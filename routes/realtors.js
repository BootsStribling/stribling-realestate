import { Router } from 'express'
import * as realtorsCtrl from '../controllers/realtors.js'

const router = Router()

//GET - localhost:3000/realtors
router.get('/', realtorsCtrl.index)
//GET - localhost:3000/realtors/new
router.get('/new', realtorsCtrl.new)
//GET - localhost:3000/realtors/:id
router.get('/:id', realtorsCtrl.show)

//POST - localhost:3000/realtors
router.post('/', realtorsCtrl.create)

//DELETE - localhost:3000/realtors/:id
router.delete('/:id', realtorsCtrl.delete)


export {
  router
}