const { Node } = require('../models/nodeModel')

module.exports.getNode = async (req, res) => {
    const node = await Node.findById(req.params.id)
    return res.send(node)
}

module.exports.addNode = async (req, res) => {
    const dataset = req.body
    let newNode
    try {
        dataset.forEach(async data => {
            newNode = new Node({
                _id: data.node_id,
                x: data.x,
                y: data.y,
                z: data.z
            })
            await newNode.save()
        })
        return res.status(200).send("Successfully saved data")
    } catch (error) {
        return res.status(400).send("error\n" + error)
    }
}