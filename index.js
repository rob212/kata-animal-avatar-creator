const express = require('express')


const app = express()
const port = process.env.PORT || 3000

const adjectives = [
'calm',
'cunning',
'lavish',
'ugly',
'discreet',
'combative',
'subdued',
'sweet',
'clever',
'cuddly',
'wise'
]

const animals = [
    'lizard',
    'gerbil',
    'aardvark',
    'koala',
    'penguin',
    'civet',
    'gorilla',
    'walrus',
    'puma',
    'lamb',
    'otter'
]

const randomNumber = () => {
    return Math.floor(Math.random() * 11)
}

app.get('/', (req, res) => {
    const adjective = adjectives[randomNumber()]
    const animal = animals[randomNumber()]
    res.send(`${adjective} ${animal}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port: ${port}`)
})
