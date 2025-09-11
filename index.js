const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const route = require('./route/route');

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect(process.env.DATABASE,{
 useNewUrlParser:true
})
.then(()=> console.log("Mongodb is connected"))
.catch(error=>console.log(error))



app.use('/', route)

const PORT=process.env.PORT || 3001
console.log('process.env.PORT', process.env.PORT)
app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})


/*
Command to crete a folder for backend -> mkdir folder-name
Command to enter the folder -> cd folder-name
Command to create a backend application -> npm init or npm init -y
Command to start the backend -> npm start

CRUD
C -> Create
R -> Read
U -> Update
D -> Delete

MVC -> Model View Controller


Status code
100 - 599

1. 100 - 199 -> Informational
2. 200 - 299 -> Success
3. 300 - 399 -> Redirection
4. 400 - 499 -> Client error
5. 500 - 599 -> Server error

* mongoose
*/


/*
1. Create the mongodb free cluster
2. Download and install the mongodb compass
3. Connect the mongodb url from mongodb compass
4. Create the account in github
5. Install postman
*/



/*

Github

*Push your code to a specific github repo
1. git add . -> Add the file to the staging
2. git commit -m "inital setup of backend"
3. git push https://github.com/debobratade/seoak_backend_initial_setup.git


4. git branch -> To check the github current branch
5. git checkout -b initial_setup -> To create a new branch
6. git branch -a -> To see all branches


Local & Remote

*/