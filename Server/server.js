var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();


//! Connection
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root999",
  database: "rxtrack",
  port: "3307",
});

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

function fetchDataFromDB(table, pk, fk, jointable, req, res) {
  const page = req.query.page ? parseInt(req.query.page) : 1;
  const per_page = req.query.per_page ? parseInt(req.query.per_page) : 10;
  const sort_column = req.query.sort_column || pk;
  const sort_direction = req.query.sort_direction || "asc";
  const search = req.query.search;

  let start_idx = (page - 1) * per_page;
  var params = [];
  var sql = `SELECT * FROM \`${table}\``;

  // ถ้าต้องการเชื่อม table
  if (Array.isArray(jointable) && Array.isArray(fk)) {
    sql += ` INNER JOIN \`${jointable[0]}\` ON ${table}.${fk[0]} = ${jointable[0]}.${fk[0]}`;
    for (let i = 1; i < jointable.length; i++) {
      sql += ` INNER JOIN \`${jointable[i]}\` ON ${table}.${fk[i]} = ${jointable[i]}.${fk[i]}`;
    }
  } else if (jointable && fk) {
    sql += ` INNER JOIN \`${jointable}\` ON ${table}.${fk} = ${jointable}.${fk}`;
  }
  
  if (search) {
    sql += " WHERE name LIKE ?";
    params.push("%" + search + "%");
  }

  if (sort_column) {
    sql += ` ORDER BY \`${sort_column}\` ${sort_direction}`;
  }

  sql += " LIMIT ?, ?";
  params.push(start_idx);
  params.push(per_page);

  connection.execute(sql, params, function (err, results, fields) {
    if (err) {
      console.error("Error executing query: ", err);
      return;
    }
    
    connection.query(
      `SELECT COUNT (${pk}) as total FROM \`${table}\``,
      function (err, counts, fields) {
        if (err) {
          // console.error("Error executing count query: ", err);
          return;
        }

        let total = counts[0]["total"];
        let total_pages = Math.ceil(total / per_page);

        res.json({
          page: page,
          per_page: per_page,
          total: total,
          total_pages: total_pages,
          data: results,
        });
      }
    );
  });
}

app.get("/api/user", function (req, res) {
  fetchDataFromDB("user", "user_id", null, null, req, res);
});

app.post("/api/user", function (req, res) {
  const { username, password, name, isAdmin, email, tel } = req.body;

  connection.query(
    "INSERT INTO user (username, password, name, isAdmin, email, tel) VALUES (?, ?, ?, ?, ?, ?)",
    [username, password, name, isAdmin, email, tel],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("User inserted successfully");
      }
    }
  );
});

app.put("/api/user/:id", (req, res) => {
  const userId = req.params.id;
  const { Username, Password, RealName, isAdmin, Email, Tel } = req.body;
  //? console.log(values)
  connection.query(
    "UPDATE user SET username = ?, password = ?, name = ?, isAdmin = ?, email = ?, tel = ? WHERE user_id = ?",
    [Username, Password, RealName, isAdmin, Email, Tel, userId],
    (error, result) => {
      if (error) {
        console.error("Database error:", error);
        
      } else {
        console.log("User data updated successfully")
      }
    }
  );
});

app.delete("/api/user/:id", (req, res) => {
  const id = req.params.id;
  connection.query("DELETE FROM user WHERE user_id = ? ", id, (err, result) => {
    if (err) {
      console.error("Error deleting user:", err);
    } else {
      console.log("User deleted successfully");
    }
  });
});

app.get("/api/medicine", function (req, res) {
  fetchDataFromDB(
    "medicine",
    "med_id",
    ["type_id", "unit_id","location_id"],
    ["medtype", "medunit","medlocation"],
    req,
    res
  );
});

app.post("/api/medicine", function (req, res) {
  const { name, status, description, quantity, unit_id, type_id } = req.body;

  connection.query(
    "INSERT INTO medicine (name, description, quantity, unit_id, type_id) VALUES (?, ?, ?, ?, ?)",
    [name, status, description, quantity, unit_id, type_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("inserted successfully");
      }
    }
  );
});

app.put("/api/medicine/:id", (req, res) => {
  const medId = req.params.med_id;
  const { name, status, description, quantity, unit_id, type_id } = req.body;
  //? console.log(values)
  connection.query(
    "UPDATE medicine SET name = ?, status = ?, description = ?, quantity = ?, unit_id = ?, type_id = ? WHERE med_id = ?",
    [name, status, description, quantity, unit_id, type_id, medId],
    (error, result) => {
      if (error) {
        console.error("Database error:", error);
      } else {
        console.log("medicine data updated successfully");
      }
    }
  );
});

app.delete("/api/medicine/:med_id", (req, res) => {
  const medId = req.params.med_id;
  connection.query("DELETE FROM medicine WHERE med_id = ? ", medId, (err, result) => {
    if (err) {
      console.error("Error deleting user:", err);
    } else {
      console.log("Medicine deleted successfully");
    }
  });
});

app.get("/api/medtype", function (req, res) {
  fetchDataFromDB("medtype", "type_id", null, null, req, res);
});

app.get("/api/medunit", function (req, res) {
  fetchDataFromDB("medunit", "unit_id", null, null, req, res);
});

app.get("/api/inputstock", function (req, res) {
  fetchDataFromDB("inputstock", "input_id", "user_id", "user", req, res);
});

app.get("/api/outputstock", function (req, res) {
  fetchDataFromDB("outputstock", "output_id", ["user_id","patient_id"], ["user", "patient"], req, res);
});

app.get("/api/patient", function (req, res) {
  fetchDataFromDB("patient", "patient_id", null, null, req, res);
});

app.get("/api/medlocation", function (req, res) {
  fetchDataFromDB("medlocation", "location_id", null, null, req, res);
});

app.listen(5000, function () {
  console.log("CORS-enabled web server listening on port 5000");
});
