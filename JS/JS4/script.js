
class IntegerSet{
	
	constructor(valor){
		this.valor = valor
		this.conjunto = []

		for(let counter = 0; counter < 100; ++counter){
			if(counter !== valor){
				this.conjunto[counter] = false
			}else{
				this.conjunto[counter] = true
			}
		}
	}

	inserir(valor){
		console.log("O valor " + valor + " foi inserido!")
		this.conjunto[valor] = true
		this.stringConvert()
	}

	remove(valor){
		console.log("O valor " + valor + " foi removido!")
		this.conjunto[valor] = false
	}

	intersecao(valor){
		let arr = []
		for(let counter = 0; counter < this.conjunto.length; ++counter){
			if(this.conjunto[counter] == true && valor.conjunto[counter] === true){
				arr[counter] = true
			}else{
				arr[counter] = false
			}
		}
		return arr
	}


	uniao(valor){

		let union = []
		for(let counter = 0; counter < this.conjunto.length; counter++){
			if(this.conjunto[counter] === true || valor.conjunto[counter] === true){
				union[counter] = true
			}else{
				union[counter] = false
			}
		}

		var uniaoString = "[ ";
		for(var counter = 0; counter < union; ++counter){
			if(union[counter] === true){
				uniaoString += counter + " ";
			}
		}

		uniaoString += " ]"
		console.log(uniaoString)

		return union
	}

	stringConvert(){
		let string = "Conjunto: [ ";

		for(let counter = 0; counter < this.conjunto.length; counter++){
			if(this.conjunto[counter] == true){
				string += counter + " "
			}
		}

		string += "]"
		console.log(string)
		return string
	}
}

dois = new IntegerSet(5);
dois.stringConvert();
dois.inserir(7);
dois.inserir(3);
dois.inserir(6);
dois.remove(6);
dois.stringConvert();

console.log("Novo conjunto: ");
sete = new IntegerSet(50);
sete.stringConvert();
sete.inserir(37);
sete.inserir(96);

console.log("União: ");
let array_Union = [];
array_Union = dois.uniao(sete);