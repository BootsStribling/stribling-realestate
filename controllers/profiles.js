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

function show(req,res){
  Profile.findById(req.params.id)
  .populate('favorites')
  .then(profile => {
    res.render('profiles/show', {
      profile,
      title: `${profile.name}'s Favorites`
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}

export {
  index,
  show,
}