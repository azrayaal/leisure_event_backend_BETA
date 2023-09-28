const config = require('../config/config.json')
const { Sequelize, QueryTypes } = require('sequelize')
const sequelize = new Sequelize(config.development)


const getCategory = async (req, res) => {
    try {
        const response = await sequelize.query(`SELECT * FROM "Categories"`, {
            type: QueryTypes.SELECT,
        })

        res.status(200).json(response)
    } catch (error) {
        console.log(error);
    }
}

const addCategory = async (req, res) => {
    try {
        const {category_name, price, quantity} = req.body

        await sequelize.query(`INSERT INTO "Categories"(category_name, price, quantity, "createdAt", "updatedAt") VALUES ('${category_name}', ${price}, ${quantity}, NOW(), NOW())`)

        res.status(200).json({message: 'Category has been added'})

    } catch (error) {
        console.log(error)
    }
}

const viewEdit = async (req, res) => {
    try {
        const {id} = req.params

        const response = await sequelize.query(`SELECT * FROM "Categories" WHERE id = ${id}`, {
            type: QueryTypes.SELECT
        })

        res.status(200).json(response)
    } catch (error) {
        console.log(error)
    }
}

const editCategory = async (req, res) => {
    try {
        const {id} = req.params
        const {category_name, price, quantity} = req.body

        await sequelize.query(`UPDATE "Categories" SET category_name='${category_name}', price=${price}, quantity=${quantity}, "createdAt"=NOW(), "updatedAt"=NOW() WHERE id = ${id}`)

        res.status(200).json({message: 'Category has been adited!'})
    } catch (error) {
        console.log(error)
    }
}

const deleteCategory = async (req, res) =>{
    try {
        const {id} = req.params

        await sequelize.query(`DELETE FROM "Categories" WHERE id = ${id}`)
        
        res.status(200).json({message: 'Category has been DELETED!'})
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getCategory, addCategory, viewEdit, editCategory,  deleteCategory

}