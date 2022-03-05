import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema ({
  rating: {type: Number, min: 1, max: 5},
  textContent: String,
})

const realtorSchema = new Schema ({
  name: String,
  experience: {type: String, enum: ['intern', 'beginner', 'advanced', 'expert']},
  listings: {type: Schema.Types.ObjectId, ref: "Listing"},
  reviews: [reviewSchema]
},{
  timestamps: true
})

const Realtor = mongoose.model('Realtor', realtorSchema)

export {
  Realtor
}