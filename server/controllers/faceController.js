const { Face } = require('../models/faceModel')

function transformCoords(x, y, z) {
    return [x,y,z]
}

module.exports.getFace = async (req, res) => {
    const face = await Face.findById(req.params.id)
    face.renderer = JSON.parse(face.renderer)
    return res.send(face)
}

module.exports.getBitexcoJson = async(req, res) => {
    let bitexcoJson = []
    let nodes = []
    let dummyJson = {}
    const query = await Face.find().sort({_id: 'asc'})
    for (var i = 0; i < 46; i++) {
        for (var z = 0; z < query[i].node.length; z++) {
            nodes.push(transformCoords(query[i].node[z].x, query[i].node[z].y, query[i].node[z].z))
        }
        dummyJson = {
            "type": "polygon",
            "rings": [nodes],
            "symbol": JSON.parse(query[i].renderer)
        }
        // bitexcoJson[i].type = "Polygon"
        // // bitexcoJson.push(query[i])
        bitexcoJson.push(dummyJson)
        //bitexcoJson[i].renderer = JSON.parse(bitexcoJson[i].renderer)
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