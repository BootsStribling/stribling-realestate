import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as listingsCtrl from '../controllers/listings.js'

const router = Router()

//*GETS*//
//GET - localhost:3000/listings
router.get('/', isLoggedIn, listingsCtrl.index)
//GET - localhost:3000/listings/new
router.get('/new', isLoggedIn, listingsCtrl.new)
//GET- localhost:3000/listings/:id
router.get('/:id', isLoggedIn, listingsCtrl.show)

//*POSTS*//
router.post('/', isLoggedIn, listingsCtrl.create)

//*DELETE*..
router.delete('/:id', isLoggedIn, listingsCtrl.delete)


export {
  router
}