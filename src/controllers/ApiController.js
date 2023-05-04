import pool from "../config/connectDB.js"

let getAllUser = async(req, res) =>{
    const [rows, fields] = await pool.execute('SELECT * FROM users ');
    return res.status(200).json({
        message: 'ok',
        data: rows
    })
}
let createNewUser = async(req, res) =>{
    let {fname, lname, email, address} = req.body
    if(!fname || !lname || !email || !address){
        return res.status(200).json({
            message: 'data missing'
        })
    }
    await pool.execute('insert into users(firstname, lastname, email, address) values(?, ?, ?, ?)', [fname, lname, email, address])
   
    return res.status(200).json({
        message: 'ok'
    })
}
let updateUser = async(req, res)=>{
    let {fname, lname, email, address, userID} = req.body;
    if(!fname || !lname || !email || !address ||!userID){
        return res.status(200).json({
            message: 'data missing'
        })
    }
    await pool.execute('update users set firstname=?, lastname=?, email=?, address=? where id=?', [fname, lname, email, address, userID])
    return res.status(200).json({
        message: 'ok'
    })
}
let deleteUser = async(req, res) =>{
    let userID = req.body.userID
    if(!userID){
        return res.status(200).json({
            message: 'data missing'
        })
    }
    await pool.execute('delete from users where id=?', [userID])
    return res.status(200).json({
        message: 'ok'
    })
}
export default {
    getAllUser,
    createNewUser,
    updateUser,
    deleteUser
}