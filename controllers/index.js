import { Listing } from '../models/listing.js'
import { Realtor } from '../models/realtor.js'

function index(req,res){
  Listing.find({})
  .populate('realtor')
  .then(listings => {
      res.render('index', {
        listings,
        title:'Home Page',
        user: req.user ? req.user: null,
      })
    })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}


export{
  index
}
