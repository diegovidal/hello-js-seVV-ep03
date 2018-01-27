const express = require("express")
const app = express()
const axios = require("axios")

const baseURL = "https://api.github.com"
const api = axios.create({baseURL})
const params = {
	
}

app.get("/seguidores/:username", (req, res) => {
  console.log("hello from the other side!")
  api.get('/users/${req.params.username}/followers', { params })
  	.then(ret => res.send(ret.data))
  	.catch(err => res.status(500).send(err.response.data))
})

app.get("/busca", (req, res) => {
	api.get("search/users", {
		params: {
			q: req.query.user
		}
	}).then(ret => {
		res.send(ret.data)
	}).catch(err => {
		res.status(500).send(err.response.data.message)
	})
})

app.listen(3000, () => {
	console.log("server online!")
})