var express = require('express')
var router = express.Router()


const instrumentos = [
  {codigo: "01", descricao: "metal", marca: "hailon", modelo: "mediano", numSerie: "12301", localizacao: "barro preto", setor: "manutenção", periodicidade: new Date("2016,10,14").toISOString().substring(0, 10), ultimaCalibragem: new Date("2016,1,21").toISOString().substring(0, 10), certificado: "9001", vencimento: new Date("2019,12,22").toISOString().substring(0, 10), situacao: "semi-novo"},
  {codigo: "02", descricao: "madeira", marca: "nailed", modelo: "curvo", numSerie: "12003", localizacao: "ouro preto", setor: "venda", periodicidade: new Date("2016,3,17").toISOString().substring(0, 10), ultimaCalibragem: new Date("2016,5,21").toISOString().substring(0, 10), certificado: "8008", vencimento: new Date("2020,9,22").toISOString().substring(0, 10), situacao: "novo"},
  {codigo: "03", descricao: "plástico", marca: "nottec", modelo: "streito", numSerie: "32103", localizacao: "prado", setor: "teste", periodicidade: new Date("2016,10,14").toISOString().substring(0, 10), ultimaCalibragem: new Date("2016,6,26").toISOString().substring(0, 10), certificado: "7002", vencimento: new Date("2021,10,22").toISOString().substring(0, 10), situacao: "novo"},
  {codigo: "04", descricao: "alumínio", marca: "numsei", modelo: "achatado", numSerie: "32204", localizacao: "floresta", setor: "teste", periodicidade: new Date("2016,10,14").toISOString().substring(0, 10), ultimaCalibragem: new Date("2016,9,11").toISOString().substring(0, 10), certificado: "8001", vencimento: new Date("2022,11,22").toISOString().substring(0, 10), situacao: "semi-novo"},
  {codigo: "05", descricao: "pvc", marca: "mannk", modelo: "esfera", numSerie: "49003", localizacao: "granada", setor: "venda", periodicidade: new Date("2016,9,21").toISOString().substring(0, 10), ultimaCalibragem: new Date("2016,4,11").toISOString().substring(0, 10), certificado: "6066", vencimento: new Date("2022,8,22").toISOString().substring(0, 10), situacao: "semi-novo"}
]

router.get('/', function(req, res, next) {
  res.json(instrumentos)
})

/* GET em /users/:id */
// router.get('/:id', function(req, res, next) {
//   const id = req.paramas.id
//   res.send('consulta 1 usuário pelo seu id = ${id}')
// })

module.exports = router
