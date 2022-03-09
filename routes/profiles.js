import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()

//*GET*//
//GET - localhost:3000/profiles
router.get('/', profilesCtrl.index)
//GET - localhost:3000/profiles/show
router.get('/:id', profilesCtrl.show)

export {
  router
}