const { Body } = require("../models/bodyModel")

//face helper
module.exports.transformCoords = function(x, y, z) {
    return [x, y, z]
}

module.exports.transformNodeCoords = function(query) {
    return this.transformCoords(query.x, query.y, query.z)
}

module.exports.transformFaceNodeCoords = function(query) {
    let nodes = []
    query.forEach(data => {
        data.node.forEach(node => {
            nodes.push(this.transformNodeCoords(node))
        })
    })
    return nodes
}

//Body helper
module.exports.findFaceRange = async (min, max) => {
    return await Body.find().then(function (q) {
        q.forEach(query => {
            for (var i = 0; i < query.face.length; i++) {
                if (query.face[i]._id < min || query.face[i]._id > max) {
                    query.face.splice(i, 1)
                    i--
                }
            }
        })
        return q
    })
}

module.exports.findFacebyFile = async (filename) => {
    return await Body.find().then(function(q) {
        q.forEach(query => {
            for (var i = 0; i< query.face.length; i++) {
                if (query.face[i].file != filename) {
                    query.face.splice(i, 1)
                    i--
                }
            }
        })
        return q
    })
}