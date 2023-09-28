
const config = require('../config/config.json')
const { Sequelize, QueryTypes } = require('sequelize')
const sequelize = new Sequelize(config.development)


const getUser = async (req, res) => {
    try {
    const response = await sequelize.query(`SELECT * FROM "Users"`, {
        type: QueryTypes.SELECT,
      });
  
      // Extract only the data from the response
      const data = response.map((row) => ({
        id: row.id,
        email: row.email,
        username: row.username,
        phone: row.phone,
        password: row.password,
        createdAt: row.createdAt,
        updatedAt: row.updatedAt,
      }));

      console.log(data);
    
    res.status(200).json(response);
     
    } catch (error) {
        console.log(error);
    }
}

const createUser = async (req, res) => {
    try {
        const {email, username, phone, password} = req.body

       await sequelize.query(`INSERT INTO public."Users"(email, username, phone, password, "createdAt", "updatedAt") VALUES ('${email}','${username}',${phone},'${password}', NOW(), NOW())`)

        res.status(200).json({message: 'User berhasil ditambahkan' });

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getUser, createUser
}