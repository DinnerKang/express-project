const mysql = require('mysql');
const dbconfig = require('../../config');
const connection = mysql.createConnection(dbconfig);

exports.createUser = (req, res) =>{
    const uid = req.body.uid;
    const password = req.body.password;
    if (uid && password) {
        connection.query(`SELECT user_id FROM test_db WHERE user_id = "${uid}"`, function (error, results, fields) {
            if (error) {
                console.log(error);
            }
            if (results.length == 1) {
                connection.query(`INSERT INTO test_db (user_id, user_pwd) VALUES ("${uid}", "${password}")`, function (error, results, fields) {
                    if (error) {
                        console.log(error);
                    }
                    res.status(200).json({
                        'status': 200,
                        'msg': 'success'
                    });
                });
            } else {
                res.status(400).json({
                    'status': 400,
                    'msg': '중복 ID'
                });
            }
        });
    } else {
        res.status(400).json({
            'status': 400,
            'msg': 'id 또는 password 값이 없음'
        });
    }

}