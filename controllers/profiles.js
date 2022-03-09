import { Profile } from '../models/profile.js'
import { Listing } from '../models/listing.js'

function index(req,res){
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      profiles,
      title: 'All Profiles'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  index,
}