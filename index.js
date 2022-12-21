const HTTP = require("http");
HTTP.createServer((req,res)=>{
res.end(`hello world`);
}).listen(process.env.PORT,()=>console.log(`server is listening`))
