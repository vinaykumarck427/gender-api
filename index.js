const express = require('express')
const axios = require('axios')
const _ = require('lodash')

const app = express()
const port = 3005

app.get('/users/gender', function(req,res){
  const name = req.query.name
  axios.get(`https://genderapi.io/api/?name=${name}&key=5d0fbd84e4b2040816102942`)
  .then(response => {
    res.json(_.pick(response.data,['name','gender']))
  })
})

app.listen(port, function(){
  console.log('listening to port', port)
})

