const { Body } = require('../models/bodyModel')
const helper = require('./helpers')

//Get data functions
module.exports.getBody = async (req, res) => {
    const body = await Body.findById(req.params.id)
    return res.json(body)
}

module.exports.getBitexcoGeojson = async (req, res) => {

    let query = await helper.findFaceRange(97, 165)
    let coords = []
    let faceCoords = []
    let features = []
    let geometry = {}
    let properties
    let dummyJson = {}
    query = query[0]
    for (var i = 0; i < query.face.length; i++) {
        let bodyFace = query.face[i]
        bodyFace.node.forEach(node => {
            coords.push(helper.transformNodeCoords(node))
        })
        faceCoords.push(coords)


        properties = {
            "Building name": "Tầng " + (i + 1) + " " + query.name,
            "address": query.address,
            "height": query.height,
            "color": query.color
        }

        geometry = {
            "type": "Polygon",
            "coordinates": faceCoords
        }

        features.push({
            "type": "Feature",
            "properties": properties,
            "geometry": geometry
        })
        coords = []
        faceCoords = []
    }

    dummyJson = {
        "type": "FeatureCollection",
        "features": features
    }
    return res.json(dummyJson)
}

module.exports.getBitexcoKhung1geojson = async (req, res) => {
    let query = await helper.findFaceRange(80, 95)
    let coords = []
    let features = []
    let faceCoords = []
    let geometry = {}
    let properties
    let dummyJson = {}
    query = query[0]
    for (var i = 0; i < query.face.length; i++) {
        let bodyFace = query.face[i]
        bodyFace.node.forEach(node => {
            coords.push(helper.transformNodeCoords(node))
        })
        faceCoords.push(coords)

        properties = {
            "Name": "Khung "  + query.name,
            "address": query.address,
            "height": query.height,
            "color": query.color
        }

        geometry = {
            "type": "Polygon",
            "coordinates": faceCoords
        }

        features.push({
            "type": "Feature",
            "properties": properties,
            "geometry": geometry
        })
        coords = []
        faceCoords = []
    }

    dummyJson = {
        "type": "FeatureCollection",
        "features": features
    }
    return res.json(dummyJson)
}

module.exports.getBitexcoHanhChinh1geojson = async (req, res) => {
    let query = await helper.findFaceRange(67, 78)
    let coords = []
    let features = []
    let faceCoords = []
    let geometry = {}
    let properties
    let dummyJson = {}
    query = query[0]
    for (var i = 0; i < query.face.length; i++) {
        let bodyFace = query.face[i]
        bodyFace.node.forEach(node => {
            coords.push(helper.transformNodeCoords(node))
        })
        faceCoords.push(coords)

        properties = {
            "Name": "Tòa Hành Chính "  + query.name,
            "address": query.address,
            "height": query.height,
            "color": query.color
        }

        geometry = {
            "type": "Polygon",
            "coordinates": faceCoords
        }

        features.push({
            "type": "Feature",
            "properties": properties,
            "geometry": geometry
        })
        coords = []
        faceCoords = []
    }

    dummyJson = {
        "type": "FeatureCollection",
        "features": features
    }
    return res.json(dummyJson)
}

module.exports.getBitexcoHanhChinhgeojson = async (req, res) => {
    let query = await helper.findFaceRange(49, 66)
    let coords = []
    let features = []
    let geometry = {}
    let faceCoords = []
    let properties
    let dummyJson = {}
    query = query[0]
    for (var i = 0; i < query.face.length; i++) {
        faceCoords = []
        let bodyFace = query.face[i]
        bodyFace.node.forEach(node => {
            coords.push(helper.transformNodeCoords(node))
        })

        faceCoords.push(coords)

        properties = {
            "Name": "Tòa Hành Chính "  + query.name,
            "address": query.address,
            "height": query.height,
            "color": query.color
        }

        geometry = {
            "type": "Polygon",
            "coordinates": faceCoords
        }

        features.push({
            "type": "Feature",
            "properties": properties,
            "geometry": geometry
        })
        coords = []
        faceCoords = []
    }

    dummyJson = {
        "type": "FeatureCollection",
        "features": features
    }
    return res.json(dummyJson)
}

module.exports.getBitexcoSanBayjson = async (req, res) => {
    let query = await helper.findFaceRange(96, 96)
    let coords = []
    let faceCoords = []
    let features = []
    let geometry = {}
    let properties
    let dummyJson = {}
    query = query[0]
    for (var i = 0; i < query.face.length; i++) {
        let bodyFace = query.face[i]
        bodyFace.node.forEach(node => {
            coords.push(helper.transformNodeCoords(node))
        })
        faceCoords.push(coords)


        properties = {
            "Name": "Sân Bay "  + query.name,
            "address": query.address,
            "height": query.height,
            "color": query.color
        }

        geometry = {
            "type": "Polygon",
            "coordinates": faceCoords
        }

        features.push({
            "type": "Feature",
            "properties": properties,
            "geometry": geometry
        })
        coords = []
        faceCoords = []
    }

    dummyJson = {
        "type": "FeatureCollection",
        "features": features
    }
    return res.json(dummyJson)
}

module.exports.getBitexcoHanhChinhBaogeojson = async (req, res) => {
    let query = await helper.findFaceRange(47, 48)
    let coords = []
    let faceCoords = []
    let features = []
    let geometry = {}
    let properties
    let dummyJson = {}
    query = query[0]
    for (var i = 0; i < query.face.length; i++) {
        let bodyFace = query.face[i]
        bodyFace.node.forEach(node => {
            coords.push(helper.transformNodeCoords(node))
        })
        faceCoords.push(coords)

        properties = {
            "Name": "Toàn Hành Chính "  + query.name,
            "address": query.address,
            "height": query.height,
            "color": query.color
        }

        geometry = {
            "type": "Polygon",
            "coordinates": faceCoords
        }

        features.push({
            "type": "Feature",
            "properties": properties,
            "geometry": geometry
        })
        coords = []
        faceCoords = []
    }

    dummyJson = {
        "type": "FeatureCollection",
        "features": features
    }
    return res.json(dummyJson)
}

//Add data functions 
module.exports.addBody = async (req, res) => {
    const dataset = req.body
    let newBody
    try {
        dataset.forEach(async data => {
            newBody = new Body({
                _id: data.body_id,
                name: data.body_name,
                color: data.body_color,
                desc: data.body_desc,
                height: data.body_height,
                storey: data.body_storey,
                address: data.body_address,
                field: data.field_id
            })
            await newBody.save()
        })
        return res.send("Successfully saved data")
    } catch (error) {
        return res.send("error\n" + error)
    }
}

module.exports.addBodyFace = async (req, res) => {
    const dataset = req.body
    let nodes = []
    let dataGroup = dataset.reduce((r, a) => {
        r[a.body_id] = [...r[a.body_id] || [], a]
        return r
    }, {})

    for (const index in dataGroup) {
        dataGroup[index].forEach(data => {
            delete data.body_id
            nodes.push(data.face_id)
            delete data.face_id
        })
        dataGroup[index] = dataGroup[index].filter(value => Object.keys(value).length != 0)
        dataGroup[index] = nodes
        nodes = []
    }

    const bodies = await Body.find()
    bodies.forEach(async body => {
        try {
            body.face = dataGroup[body._id]
            await body.save()
        } catch (error) {
            return res.send("error\n" + error)
        }
    })
    return res.send("Successfully saved data")
}