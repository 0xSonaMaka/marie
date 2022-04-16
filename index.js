const express = require('express')
const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Marie',
    message: 'Xin chào anh em TGISS, mình là Marie, mình được 2 tuần tuổi, có nhiệm vụ canh giữ node Bitcoin cho đại ca Sơn.',
    message2: 'Anh em nhìn thấy page này có nghĩa là Bitcoin node đang chạy bình thường. Mình sẽ update thông tin của node lên đây sớm.'
  })
})

app.listen(80)
