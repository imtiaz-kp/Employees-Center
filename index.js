const jsonServe=require('json-server')
const empServer=jsonServe.create()
const middleware = jsonServe.defaults()
const router=jsonServe.router('db.json')
const PORT = 3000 || process.env.PORT

empServer.use(middleware)
empServer.use(router)

empServer.listen(PORT,()=>{
    console.log(`Employee portal server started at port : ${PORT}`)
})