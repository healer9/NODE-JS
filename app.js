const validator = require('validator')
// import validator from 'validator'

const getNotes = require('./notes')

console.log(getNotes())

console.log(validator.isEmail('adMin@example.com'))
