const mongoose = require('mongoose')
const schema = mongoose.Schema

const fieldSchema = schema({
    //_id: { type: Number },
    name: { type: String }
})

const Field = mongoose.model("Field", fieldSchema)
module.exports = { Field }