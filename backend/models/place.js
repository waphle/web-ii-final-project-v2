const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Array storage for places. Includes storage of their titles, descriptions, images, address, and geographical coordination location
const placeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  address: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  creator: { type: mongoose.Types.ObjectId, required: true, ref: 'User' }
});

// Export the above information for external access.
module.exports = mongoose.model('Place', placeSchema);
