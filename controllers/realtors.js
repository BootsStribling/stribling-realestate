import { Realtor } from '../models/realtor.js'
import { Listing } from '../models/listing.js'

function index(req,res){
  Realtor.find({})
  .then(realtors => {
    res.render('realtors/index', {
      realtors,
      title: 'Our Team',
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function newRealtor(req,res){
  Realtor.find({})
  .then(realtors => {
    res.render('realtors/new', {realtors, title: 'New Realtor'})
  })
  .catch(err => {
    console.log(err)
    res.redirect('/realtors') 
  })
}

function create(req,res){
  Realtor.create(req.body)
  .then(realtor => {
    res.redirect('/realtors')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/realtors')
  })
}

export {
  index,
  newRealtor as new,
  create,
}