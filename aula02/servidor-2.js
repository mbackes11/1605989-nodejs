import { createServer } from 'http';
import currentDate from './currentDate.js'
 
//escuta e atende requisições
createServer((request, response) => {
  // retorna código 200 => requisicao feita com sucesso
  // informa que o tipo de conteudo é html e usa utf-8
    response.writeHead(200, { 'Content-type' : 'text/html; charset=utf-8'});

  const anoAtual = currentDate().getFullYear()
  const hora = currentDate().getHours()
  const min  = currentDate().getMinutes()
  const seg  = currentDate().getSeconds()

  const horaFull = `${hora}:${min}:${seg}`

    response.end(`<h1>Isto é um servidor HTTP da aula 01!!!</h1> ${anoAtual} - ${horaFull}`);

}).listen(3030, () => {
    console.log('Running server!');
}) 