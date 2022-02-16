const mongoose = require('mongoose');

const BootCampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Pleas add a name'],
    unique: true,
    trim: true,
    maxlength: [50, 'Name can not be more than 50 chars'],
  },
  slug: String,
  description: {
    type: String,
    required: [true, 'Pleas add a description'],
    maxlength: [500, 'Name can not be more than 500 chars'],
  },
  website: {
    type: String,
    match: [
      /https?:\/\/(www\.)?[-a-z-A-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      'Pleas add a valid url with http or https',
    ],
  },
  phone: {
    type: String,
    maxlength: [20, 'Phone number can not be more than 20 chars'],
  },
  email: {
    type: String,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'pleas enter a valid email address !',
    ],
  },
  address: {
    type: String,
    required: [true, 'Pleas add an address'],
  },
  location: {
    //GeoJSON Point
    type: {
      type: String,
      enum: ['point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
      index: '2dsphere',
    },
    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    state: String,
    country: String,
  },
  careers: {
    type: [String],
    required: true,
    enum: [
      'web development',
      'Mobile development',
      'UI/UX',
      'Data Science',
      'Business',
      'Other',
    ],
  },
  averageRating: {
    type: Number,
    min: [1, 'Ratting must be at least 1'],
    max: [10, 'Rating must be not more than 10'],
  },
  averageCost: {
    type: Number,
  },
  photo: {
    type: String,
    default: 'no-photo.jpg',
  },
  housing: {
    type: Boolean,
    default: false,
  },
  jobAssistance: {
    type: Boolean,
    default: false,
  },
  jobGuarantee: {
    type: Boolean,
    default: false,
  },
  acceptGi: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Bootcamp', BootCampSchema);
