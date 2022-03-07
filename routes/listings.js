import { Router } from 'express'
import * as listingsCtrl from '../controllers/listings.js'

const router = Router()

//*GETS*//
//GET - localhost:3000/listings
router.get('/', listingsCtrl.index)
//GET - localhost:3000/listings
router.get('/new', listingsCtrl.new)

//*POSTS*//
router.post('/', listingsCtrl.create)


export {
  router
}