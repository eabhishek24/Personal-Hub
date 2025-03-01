const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");   // require express
const app = express();
const methodOverride = require("method-override");
const path = require("path");
const port = 5050;
const { v4:uuidv4 } = require('uuid');

app.set("view engine","ejs");       // use ejs
app.set("views",path.join(__dirname,"/views"));  
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',   
    password: 'abhi24#'
    });
 
    let getRandomUser = () => {
        return [ 
          faker.string.uuid(),
          faker.internet.username({ length: 20 }), // before version 9.1.0, use userName()
          faker.internet.email({ length: 50 }),
          faker.internet.password({ length: 20 }),
        ];
      };
    
    // home route
    app.get("/",(req,res) => {
      let q = `SELECT count(*) FROM user`;
      try{
      connection.query(q, (err,result) =>{
      if(err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs" , {count});
      }); 
      } catch(err){
      console.log(err);
      res.send("some err in database");
    }
    });
    
    // show all user route
    app.get("/users", (req,res) => {
    let q = `SELECT * FROM user`;
    try{
      connection.query(q, (err,users) =>{
      if(err) throw err;
      res.render("showuser.ejs" , {users});
      }); 
      } catch(err){
      console.log(err);
      res.send("some err in database");
    }
    });
    
    // Edit route
    app.get("/user/:id/edit", (req,res) =>{
      let {id} = req.params;
      let q = `SELECT * FROM user WHERE id = '${id}'`;
      
      try{
        connection.query(q, (err,result) =>{
        if(err) throw err;
        let user = result[0];
        res.render("edit.ejs" , {user});
        }); 
        } catch(err){
        console.log(err);
        res.send("some err in database");
      }
    });

    //Update route (DB)
    app.patch("/user/:id",(req,res) => {
    let {id} = req.params;
    let {password : formPass , username: newUsername } = req.body;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
      
      try{
        connection.query(q, (err,result) =>{
        if(err) throw err;
        let user = result[0];
        if(formPass != user.password){
          res.send("wrong password");
        } else{
          let q2 = `UPDATE user SET username = '${newUsername}' WHERE id='${id}'`;
          connection.query(q2 , (err,result) => {
            if(err) throw err;
            res.redirect("/users");
          });
        }
        }); 
        } catch(err){
        console.log(err);
        res.send("some err in database");
      }
    });

  

    //connection.end();
  
    app.listen(port , () => {
      console.log("listening to port : 5050");
    });

  //   try{
  //   connection.query(q, (err,result) =>{
  //     if(err) throw err;
  //     res.render("home.ejs");
  // }); 
  // }catch(err){
  //     console.log(err);
  //     res.send("some err in DB");
  // }