const express = require('express')
const axios = require('axios')
const app = express()

const api = axios.create({
	baseURL: 'http://thecatapi.com'
})

const params = {format: 'html'}

app.get('/cade-meus-gatos', (req, res) => 
	api.get('/api/images/get', {params})
	.then(ret => res.send(ret.data)))

app.listen(5000, _ => console.log('online'))