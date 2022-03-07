import mongoose from 'mongoose'

const Schema = mongoose.Schema

const listingSchema = new Schema({
  houseNo: {type: Number, min: 0, max: 99999},
  street: String,
  city: String,
  state: {type: String, enum: ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY']},
  zipCode: {type: Number, min: 10000, max: 99999},
  realtor: {type: Schema.Types.ObjectId, ref: 'Realtor'}
})

const Listing = mongoose.model("Listing", listingSchema)

export {
  Listing
}