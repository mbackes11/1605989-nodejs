const { Console } = require('console');
const http = require('http');

//escuta e atende requisições
http.createServer((request, response) => {


  // retorna código 200 => requisicao feita com sucesso
  // informa que o tipo de conteudo é html e usa utf-8
    response.writeHead(200, { 'Content-type' : 'text/html; charset=utf-8'});

    response.end('<h1>Isto é um servidor HTTP da aula 01!!!</h1>');
}).listen(3030, () => {
    console.log('Running server!');
}) 