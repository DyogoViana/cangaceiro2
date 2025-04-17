import { handleStatus, log } from './utils/promise-helpers.js';
import './utils/array-helpers.js';


const somaItens = numeracaoItem => notas => notas
	.$flatMap(nota => nota.itens)
	.filter(item => item.codigo == numeracaoItem)
	.reduce((totalItens, item) => totalItens + item.valor, 0);

document
	.querySelector('#btnBuscarNotas')
	.onclick = () =>
		fetch('http://localhost:3000/notas')

		.then(handleStatus)
		.then(somaItens('2143'))
		.then(log)
		.catch(log);
