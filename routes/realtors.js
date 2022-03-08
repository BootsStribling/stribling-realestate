import { Router } from 'express'
import * as realtorsCtrl from '../controllers/realtors.js'

const router = Router()

//GET - localhost:3000/realtors
router.get('/', realtorsCtrl.index)
//GET - localhost:3000/realtors/new
router.get('/new', realtorsCtrl.new)

//POST - localhost:3000/realtors
router.post('/', realtorsCtrl.create)


export {
  router
}