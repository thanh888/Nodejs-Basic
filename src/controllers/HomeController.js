import pool from "../config/connectDB.js"


let getHomepage = async (req, res) => {
    //logic
    // simple query

    const [rows, fields] = await pool.execute('SELECT * FROM users ');
    // console.log('>>>check datas', rows)
    return res.render('index.ejs', { dataUsers: rows })
}
let getDetailUser = async(req, res) => {
    // console.log('check params', req.params)
    let userID = req.params.userID;
    let [user] = await pool.execute('select * from users where id=?', [userID])
    return res.send(JSON.stringify(user))
}
let postUser = async(req, res)=>{
    let {fname, lname, email, address} = req.body
    await pool.execute('insert into users(firstname, lastname, email, address) values(?, ?, ?, ?)', [fname, lname, email, address])
    return res.redirect('/')
}
let deleteUser= async (req, res)=>{
    let userID = req.body.userID
    await pool.execute('delete from users where id=?', [userID])
    return res.redirect('/')

}
let getEditPage = async(req, res)=>{
    let userID = req.params.userID;
    let [user] = await pool.execute('select * from users where id=?', [userID])
    return res.render('updateUser.ejs', {dataUser: user})
}
let updateUser = async (req, res)=>{
    let {fname, lname, email, address, userID} = req.body;
    await pool.execute('update users set firstname=?, lastname=?, email=?, address=? where id=?', [fname, lname, email, address, userID])
    return res.redirect('/')
}
export default {
    getHomepage,
    getDetailUser,
    postUser,
    deleteUser,
    getEditPage,
    updateUser
}