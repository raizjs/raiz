
# classes

Para controlar o conteúdo de uma página utilizamos o conceito de **classe**, assim é possivel controlar uma página inteira ou parte dela através de código javascript.

Segue abaixo os passos para controlar a página:

Primeiramente criamos o **controller**:

```javascript
var MyController = new (function(){

	var self = this;
	
	this.construct = function(container) {}

	this.title = 'This is a example of interpolation';

	return this;
});
```

> É recomendavel utilizar a variavel **self**, pois através dela pegaremos o contexto da classe.

Após a instanciação, adicionamos o nome do objeto no elemento HTML que será controlado:

```html
<div raiz-controller="MyController">
  <h1>{{ this.title }}</h1>
</div>
```
> A palavra reservada this sempre apontará para o último Controller referenciado no atributo raiz-controller
> também é possivel utilizar a palavra **self** semelhantemente à **this**

#### inline ou externo

O Controler pode estar inline no mesmo documento HTML, ou em arquivo externo: 


```html
<!DOCTYPE html>
	<html>
	<head>
		<title></title>
		<script type="text/javascript" src="https://raiz.wallrio.com/core/0.2.2/raiz.js"></script>
		<script type="text/javascript" src="MyController.js"></script>
	</head>
	<body>

		<div raiz-controller="MyController">		  	
		  <h1>{{ this.title }}</h1> 
		</div>

	</body>
</html>
```

### Constructor da classe
O método construct sempre será executado após a renderização do HTML do container, o parametro container é o elemento HTML cujo controller foi referenciado.

```javascript
this.construct = function(container){

}
```

### Importação
É possivel separar código em um arquivo javascript externo e incluí-lo na classe em tempo de execução utilizando a palavra reservada **import[]**, segue exemplo:

```javascript
var MyController = new (function(){

	var self = this;

	import["script1.js"];
	import["directory/script2.js"];
	
	this.construct = function(container) {}	

	return this;
});
```
> Utilizando o import, mantemos a classe principal com a leitura de código mais facil.

### Multiplos Controllers
```html
<div raiz-controller="SecController, MyController">
			  	
	<h1>{{ MyController.title }}</h1>
	<h2>{{ SecController.title }}</h2>
	<h3>{{ this.title }}</h3>
	  
</div>
```

### Definindo ações

As ações podem ser atribuidas para botoẽs, links ou qualquer elemento no documento HTML.

O código de ação deve ser adicionado dentro da classe.

Segue abaixo exemplos para adicionar eventos à elementos HTML.

- Exemplo 1
```javascript
this['[name="alert"]'] = function(element){
	return {
		click:function(e){
			alert("Success");
		}
	}
}
```

- Exemplo 2
```javascript
this['div > #element'] = function(element){
	return {
		click:function(e){
			alert("Success");
		}
	}
}
```

- Exemplo 3
```javascript
this['div > #element'] = function(element){
	return {
		click:function(event){
			alert("Success");
		},
		keypress:function(event){
			alert("Success");
		}
	}
}
```

- Exemplo 4

```javascript
this['div > #element'] = function(element){
	return {
		"click,keypress":function(event){
			alert("Success");
		}
	}
}
```

### Definindo Estilo
para definir um estilo é possivel utilizando a propriedade **attr** no retorno da função.

```javascript
this['div > #element'] = function(element){
	return {
		attr:{
			style:'color:red',
			innerHTML : 'novo texto'
		},
		click:function(event){
			alert("Success");
		}
	}
}
```