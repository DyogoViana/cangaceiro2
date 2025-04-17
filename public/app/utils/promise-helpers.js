export const handleStatus = resposta =>
	resposta.ok ? resposta.json() : Promise.reject(resposta.statusText);

export const log = param => {
	console.log(param);
	return param;
}
