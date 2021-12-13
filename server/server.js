const express = require('express');
//const path = require('path');
const app = express();
const { ROLE, users } = require('./data')
//const projectRouter = require('./routes/projects')
const{ authUser, authRole} = require('./basicAuth')
app.use(express.json()) //pull data from post request/api
app.use(setUser)
//app.use('/projects', projectRouter)

/*app.get('/', (req, res) => {
    res.send('Home Page')
  })
  
  app.get('/dshbrd', authUser, (req, res) => {
    res.send('Dashboard Page')
  })
  
  //app.get('/admin', authUser, authRole(ROLE.ADMIN), (req, res)
  app.get('/admin', (req, res) => {
    res.send('Admin Page')
  })
  
  //Set user based on user ID
  function setUser(req, res, next) {
    const userId = req.body.userId
    if (userId) {
      req.user = users.find(user => user.id === userId)
    }
    next()
  }*/

/*app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, 'frontend/index.html'));
});*/

const PORT = process.env.PORT || 8080;
app.listen(PORT, _=>{
    console.log('Server is running, YAY');
});

