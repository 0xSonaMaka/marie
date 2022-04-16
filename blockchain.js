require('dotenv').config()
const fs = require('fs')

const blockchainInfo = JSON.parse(fs.readFileSync(process.env.BLOCKCHAIN_INFO_PATH))
const progress = Number(blockchainInfo.blocks / blockchainInfo.headers * 100).toPrecision(4)

exports.blockchainInfo = blockchainInfo
exports.progress = progress

