import { Listing } from '../models/listing.js'
import { Realtor } from '../models/realtor.js'

function index(req,res){
  Listing.find({})
  .populate('realtor')
  .then(listings => {
    res.render('listings/index', {
      listings,
      title:'Current Listings'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/listings')
  })
}

function newListing(req,res) {
  Realtor.find({})
  .then(realtors => {
    res.render('listings/new', {
    realtors,
    title: "New Listing"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/listings')
  })
}

function create(req,res) {
  Listing.create(req.body)
  .then(listing => {
    Realtor.findById(req.body.realtor)
    .then(realtor => {
      realtor.listings.push(listing._id)
      realtor.save()
      .then(() => {
        res.redirect('/listings')
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/listings')
  })
}

export {
  index,
  newListing as new,
  create,
}
