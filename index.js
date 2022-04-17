const express = require('express')
const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  const { blockchainInfo, progress } = require('./blockchain')

  res.render('index', {
    title: 'Marie Bitcoin Full Node',
    loaded_progress: 'Số lượng blocks đã load: ' + blockchainInfo.blocks + '/' + blockchainInfo.headers + ' (' + progress + '%)',
    size_on_disk: 'Dung lượng của node: ' + Number(blockchainInfo.size_on_disk / 1024 / 1024 / 1024).toPrecision(4) + ' GB'
  })
})

app.listen(80)
