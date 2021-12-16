const { Face } = require('../models/faceModel')
const helper = require('../utils/helpers')

module.exports.getFace = async (req, res) => {
    const face = await Face.findById(req.params.id)
    //face.renderer = JSON.parse(face.renderer)
    return res.send(face)
}

module.exports.getBitexcoJson = async(req, res) => {
    let bitexcoJson = []
    let nodes = []
    let dummyJson = {}
    const query = await Face.find().then(function (result) {
        for (var i = 0; i < result.length; i++) {
            if (result[i].file != "bitexco_9.json") {
                result.splice(i, 1)
                i--
            }
        }
        return result
    })

    nodes = helper.transformFaceNodeCoords(query)
    for (var i = 0; i < query.length; i++) {
        dummyJson = {
            "type": "polygon",
            "rings": [nodes],
            "symbol": query[i].renderer
        }
        bitexcoJson.push(dummyJson)
    }
    return res.json(bitexcoJson)
}

module.exports.addFace = async (req, res) => {
    const dataset = req.body
    let newFace
    try {
        dataset.forEach(async data => {
            newFace = new Face({
                _id: data.face_id,
                type: data.type,
                renderer: data.face_symbol_or_renderrer
            })
            await newFace.save()
        })
        return res.status(200).send("Successfully saved data")
    } catch (error) {
        return res.status(500).send("Error\n" + e)
    }
}

module.exports.addFaceNode = async (req, res) => {
    const dataset = req.body
    let nodes = []
    let dataGroup = dataset.reduce((r, a) => {
        r[a.face_id] = [...r[a.face_id] || [], a]
        return r
    }, {})

    for (const index in dataGroup) {
        dataGroup[index].forEach(data => {
            delete data.face_id
            nodes.push(data.node_id)
            delete data.node_id
        })
        dataGroup[index] = dataGroup[index].filter(value => Object.keys(value).length != 0)
        dataGroup[index] = nodes
        nodes = []
    }

    try {
        const faces = await Face.find()

        faces.forEach(async face => {
            try {
                face.node = dataGroup[face._id]
                //console.log(dataGroup[face._id])
                await face.save()
            } catch (error) {
                console.log(error)
            }
            
        })
        return res.send("Successfully saved data")
    } catch (error) {
        return res.send("Error\n" + error)
    }


}