const mongoose = require('mongoose')
//const {Field} = require('./fieldModel')

const schema = mongoose.Schema

const bodySchema = schema({
    _id: { type: Number },
    name: { type: String },
    color: { type: String },
    desc: { type: String },
    height: { type: Number },
    storey: { type: Number },
    address: { type: String },
    face: [{ type: schema.Types.ObjectId, ref: 'Face' }],
    field: { type: schema.Types.ObjectId, ref: 'Field' }
})

bodySchema.pre('find', function() {
    this.populate('face')
    this.populate('field')
})

bodySchema.pre('findOne', function() {
    this.populate('face')
    this.populate('field')
})

bodySchema.pre('findById', function() {
    this.populate('face')
    this.populate('field')
})

const Body = mongoose.model("Body", bodySchema);
module.exports = { Body };
