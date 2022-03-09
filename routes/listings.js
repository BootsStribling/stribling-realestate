import { Router } from 'express'
import * as listingsCtrl from '../controllers/listings.js'

const router = Router()

//*GETS*//
//GET - localhost:3000/listings
router.get('/', listingsCtrl.index)
//GET - localhost:3000/listings/new
router.get('/new', listingsCtrl.new)
//GET- localhost:3000/listings/:id
router.get('/:id', listingsCtrl.show)

//*POSTS*//
router.post('/', listingsCtrl.create)

//*DELETE*..
router.delete('/:id', listingsCtrl.delete)


export {
  router
}