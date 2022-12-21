const Puppeteer =  require(`puppeteer`);
const HTTP = require("http");
const Browser;
const Page;

async function main(){
Browser = await Puppeteer.launch({args:["--no-sandbox"]})
Page    = await Browser.newPage();
}
HTTP.createServer(async (req,res)=>{
if(Page){
  await Page.goto(`https://google.com`);
  res.end(`${await Page.content()}`);
}
  res.end(`hello world`);

}).listen(process.env.PORT,()=>console.log(`server is listening`))
main();
