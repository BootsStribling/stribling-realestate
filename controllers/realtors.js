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
    res.render('realtors/new', {
      realtors, 
      title: 'New Realtor'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/realtors') 
  })
}

function create(req,res){
  console.log(req.body,'create - req.body')
  Realtor.create(req.body)
  .then(() => {
    res.redirect('/realtors')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/realtors')
  })
}

function show(req, res) {
  Realtor.findById(req.params.id)
  .populate('listings')
  .then(realtor => {
    Listing.find({realtor: req.params.id})
    .then(listings => {
      res.render('realtors/show',{
        realtor,
        listings,
        title: `${realtor.name}`,
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/realtors')
  })
}

function deleteRealtor(req,res){
  Listing.find({realtor: req.params.id})
  .then(listings => {
      listings.realtor = {}
    })
  Realtor.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/realtors')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/realtors')
  })
}

function edit(req,res) {
  Realtor.findById(req.params.id)
  .then(realtor => {
    console.log('edit fired')
    res.render('realtors/edit',{
      realtor,
      title: 'Edit Realtor'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`realtors/${req.params.id}`)
  })
}

function update(req,res) {
  Realtor.findById(req.params.id)
  .then(realtor => {
    realtor.updateOne(req.body, {new:true})
    .then(() => {
      res.redirect(`/realtors/${req.params.id}`)
    })
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
  show,
  deleteRealtor as delete,
  edit,
  update,
}