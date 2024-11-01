const express = require('express')
const nunjucks = require('nunjucks')

const database = require('./data')
const data = require('./data')

const server = express()

server.set('view engine', 'njk')
server.use(express.static('public'))

nunjucks.configure('views', {
  express: server
})

server.get('/', function(req, res) {
  return res.render('home', { recipes: database })
})

server.get('/sobre', function(req, res) {
  return res.render('about')
})

server.get('/receitas', function(req, res) {
  return res.render('recipes', { recipes: database })
})

server.get('/receita/:index', function(req, res) {
  const index = req.params.index

  const recipe = database.find(function(recipe, i) {
    return index == i
  })

  if (!recipe) {
    res.send('Page not found!')
  }

  return res.render('recipe', { recipe })
})

server.use(function(req, res) {
  res.status(404).send('Page not found!')
})

server.listen(5000, function() {
  console.log()
  console.log('> server started...')
  console.log()
})
