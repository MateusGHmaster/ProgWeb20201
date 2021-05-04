
const counter = function counter(init){
	return () => { return ++init }
}

let incrementar = counter(1)

console.log("Primeira chamada " + incrementar())
console.log("Segunda chamada " + incrementar())
console.log("Terceira chamada " + incrementar())
