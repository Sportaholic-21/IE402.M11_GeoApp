const { Body } = require ('../models/bodyModel')

module.exports.getBody = async (req, res) => {
    const body = await Body.findById(req.params.id)
    return res.json(body)

}

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

module.exports.addBodyFace = async (req,res) => {
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