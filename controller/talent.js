const config = require('../config/config.json')
const { Sequelize, QueryTypes } = require('sequelize')
const sequelize = new Sequelize(config.development)

const getTalent = async (req, res) => {
    try {
        const response = await sequelize.query(`SELECT * FROM "Talents"`, {
            type: QueryTypes.SELECT,
        })

        res.status(200).json(response);
    } catch (error) {
        console.log(error);
    }
}

const addTalent = async (req, res) => {
    try {
        const {talent_picture, talent_name} = req.body

        await sequelize.query(`INSERT INTO "Talents"(talent_picture, talent_name, "createdAt", "updatedAt") VALUES ('${talent_picture}', '${talent_name}', NOW(), NOW())`)

        res.status(200).json({message: 'You have added one talent!'})
        // console.log(talent_picture, talent_name);
    } catch (error) {
        console.log(error);
    }
}

const viewEdit = async (req, res) => {
    try {
        const {id} = req.params

        const response = await sequelize.query(`SELECT * FROM "Talents" WHERE id = ${id}`, {
            type: QueryTypes.SELECT,
        })

        res.status(200).json(response);
       
    } catch (error) {
        console.log(error);
    }
}

const editTalent = async (req, res) => {
    try {
        const {id} = req.params
        const {talent_picture, talent_name} = req.body

        await sequelize.query(`UPDATE "Talents" SET talent_picture='${talent_picture}', talent_name='${talent_name}', "createdAt"=NOW(), "updatedAt"=NOW() WHERE id=${id}`)

        res.status(200).json({message: 'Talent has been edited!'})
    } catch (error) {
        console.log(error);
    }
}

const deleteTalent = async (req, res) => {
    try {
        const {id} = req.params

        await sequelize.query(`DELETE FROM "Talents" WHERE id=${id}`)

        res.status(200).json({message: 'Talent has been DELETED!'})
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getTalent, addTalent, editTalent, viewEdit, deleteTalent
}