const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root999",
  database: "rxtracker",
  port: "3307",
})

app.get('/datausers', (req,res) => {
  db.query("SELECT * FROM datauser" , (err, result) => {
    if(err){
      console.log(err);
    }else{
      res.send(result);
    }
  });
});

app.get('/datauser/:id', (req,res) => {
  const userId = req.params.id;
  db.query("SELECT * FROM datauser WHERE id = ?",[userId] , (err, result) => {
    if(err){
      console.log(err);
    }else{
      if (result.length > 0) {
        res.send(result[0])
      }else {
        res.send(result)
      }
    }
  });
});

app.post('/create', (req,res) => {
  const sql = "INSERT INTO datauser (user, pass, name, role, email, tel) VALUES (?)";
  const values = [
    req.body.user,
    req.body.pass,
    req.body.name,
    req.body.role,
    req.body.email,
    req.body.tel
  ]
  db.query(sql, [values], (err, result) => {
    if(err){
      console.log(err);
    }else{
      res.send(result);
    }
  })
})

app.put('/update/:id', (req, res) => {
  const sql = "UPDATE datauser SET user =?, pass =?, name =?, role =?, email =?, tel =? WHERE id =?";
  const values = [
    req.body.user,
    req.body.pass,
    req.body.name,
    req.body.role,
    req.body.email,
    req.body.tel,
  ];
  const id = req.params.id;
  db.query(sql, [...values, id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.delete('/delete/:id', (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM datauser WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});