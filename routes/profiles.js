import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()

//*GET*//
//GET - localhost:3000/profiles
router.get('/', profilesCtrl.index)


export {
  router
}