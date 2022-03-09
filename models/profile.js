import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  avatar: String,
  role: {type: Number, min: 100, max: 900},
  favorites: [{ type: Schema.Types.ObjectId, ref: "Favorite"}]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
