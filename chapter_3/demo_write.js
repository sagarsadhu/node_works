var fs = require('fs')

var data = {
    name: 'Blank'
}

fs.writeFile('data.json', JSON.stringify(data), (err) => {
    console.log('write finished', err)
})