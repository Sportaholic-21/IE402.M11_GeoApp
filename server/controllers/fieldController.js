const { Field } = require('../models/fieldModel')

module.exports.getField = async (req, res) => {
    const field = await Field.findById(req.params.id)
    return res.send(field)
}

module.exports.addField = async (req, res) => {
    const newField = Field({
        _id: req.body.field_id,
        name: req.body.field_name
    })
    try {
        await newField.save()
        return res.status(200).send("Successfully save data")
    } catch (e) {
        return res.status(500).send("Error\n" + e)
    }
}