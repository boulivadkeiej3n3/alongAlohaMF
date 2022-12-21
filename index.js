const Puppeteer =  require(`puppeteer`);
const HTTP = require("http");
let Browser;
let Page;

async function main(){
Browser = await Puppeteer.launch({args:["--no-sandbox"]})
Page    = await Browser.newPage();
}
HTTP.createServer(async (req,res)=>{
if(Page){
  await Page.goto(`https://google.com`);
  res.end(`${await Page.content()}`);
  return
}
  res.end(`hello world`);

}).listen(process.env.PORT,()=>console.log(`server is listening`))
main();
