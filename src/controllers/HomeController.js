import pool from "../config/connectDB.js"


let getHomepage = async (req, res) => {
    //logic
    // simple query

    const [rows, fields] = await pool.execute('SELECT * FROM users ');
    console.log('>>>check datas', rows)
    return res.render('index.ejs', { dataUsers: rows })
}
let getDetailUser = async(req, res) => {
    // console.log('check params', req.params)
    let userID = req.params.userID;
    let [user] = await pool.execute('select * from users where id=?', [userID])
    return res.send(JSON.stringify(user))
}
export default {
    getHomepage,
    getDetailUser
}