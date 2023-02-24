const http= require('http');

const server = http.createServer((req,res)=>{
   res.write("222222 \r\n");
   res.end();
})

server.listen(80);