const mongoose = require('mongoose')
const schema = mongoose.Schema

const faceSchema = schema({
    _id: { type: Number },
    type: { type: String },
    renderer: {},
    node: [{ type: Number, ref: 'Node' }]
})

faceSchema.pre('find', function() {
    this.populate('node', ['x', 'y', 'z'])
})

faceSchema.pre('findOne', function() {
    this.populate('node')
})

faceSchema.pre('findById', function() {
    this.populate('node')
})

faceSchema.post('find', function(result) {
    let nodes = []
    for (const i in result.node) {
        console.log(result.node)
        result.node[i].forEach(data => {
            delete data._id
            nodes.push(data.x, data.y, data.z)
            delete data.x, data.y, data.z
        })
        result.node[i] = result.node[i].filter(value => Object.keys(value).length != 0)
        result.node[i] = nodes
    }
})

// faceSchema.post('findOne', function(result) {
//     result.renderer = JSON.parse(result.renderer)
// })

// faceSchema.post('findById', function(result) {
//     result.renderer = JSON.parse(result.renderer)
// })


const Face = mongoose.model("Face", faceSchema)
module.exports = { Face }