let filesystem = require('fs')
let http = require('http');

let folderName = process.argv[2];
let arquivos = filesystem.readdirSync(folderName);

let server = http.createServer(function(req, res){
  res.end(arquivos.join("\n"));
});

server.listen(3000);