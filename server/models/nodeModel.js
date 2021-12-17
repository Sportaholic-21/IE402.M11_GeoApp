const mongoose = require('mongoose')
const schema = mongoose.Schema

const nodeSchema = schema({
    //_id: { type: Number },
    x: { type: Number },
    y: { type: Number },
    z: { type: Number }
})

const Node = mongoose.model("Node", nodeSchema)
module.exports = { Node }