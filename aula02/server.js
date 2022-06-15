import { createServer } from "http";
import myName from "./myName.js";
import {currentDate} from "./currentDate.js";

createServer((request, response) => {

    response.writeHead(200, { 'Content-type' : 'text/html; charset=utf-8'});

    const nome = myName();
    const data = currentDate();


    response.end(`<H1>Bem vindo</h1>${data} <br> ${nome}`);

}).listen(3030, () => {
    console.log('Running server!');
}) 