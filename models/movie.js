var mongoose=require('mongoose')
var MovieSchema=require('../schemas/movies.js')
var Movie= mongoose.model('Movie',MovieSchema)

module.exports=Movie