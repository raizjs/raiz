# Componentes
Um componente é um bloco contendo HTML, JavaScript e CSS, sendo possivel reutilizar em varias partes do documento ou em páginas diferentes.

#### Utilização
Para utilizar um componente, crie um elemento HTML semelhante ao abaixo, deve conter um atributo **name** com o diretório de componentes e o componente especifico.

```html
<raiz-component name="diretório::componente"></raiz-component>
```



#### Exemplo diretórios de componentes
Para utilizar ou criar um componente é necessário um diretório para abrigar os componentes, segue exemplo:

```
	\---application
		|
		|
		|---assets
		|
		|---components
		|	|
		|	|---header
		|		|
		|		|---package.html
		|		
		|	
		|
		|---index.html
```

> No exemplo acima, o diretório header é um componente, e está no diretório de componentes com o nome de components
> Neste caso para incluir este componente na página é necessário incluir "components::header" como valor para raiz-component

#### Criando um component 

Um componente é basicamente constituido de um diretório e um arquivo HTML com o nome **package.html**, onde o diretório define o nome do componente, onde o nome do diretorio deve conter apenas letras e/ou numeros.

- Exemplo
```
|---header
	|
	|---package.html
```

Toda a construção é feita no package.html, ao qual deve conter 3 partes, o corpo HTML, um estilo CSS, e um controller Javascript.

- Exemplo

```html
<script type="text/javascript">
	var Controller = new (function(){
		var self = this;

		self.construct = function(){

		}

		return this;
	});
</script>

<style type="text/css">
	raiz-component.{package}{
	}
</style>

<script type="text/html">
	<!-- corpo HTML -->
</script>

```

> **{package}** é utilizado para referenciar o componente, assim o estilo do componente não afetara outras partes do documento.


#### Keywords disponiveis
||| 
|-|-| 
|{package}| exibe o nome do componente| 
|{package-url}| exibe o diretorio do componente| 

#### Acessar componente via Javascript
É possivel capturar informações do componente via javascript, segue abaixo um exemplo.

```javascript
console.log($component);
```


#### Componentes remotos

É possivel utilizar componentes remotos.

Para isso inclua a URL do diretório do componente, segue exemplo.

```html
<raiz-component name="http://dominio.com/novo-projeto/components::NOME-DO-COMPONENTE"><raiz-component>
```

#### Componentes oficiais

Raiz possui um repositório de componentes no GitHub, para utilizar insira "@raiz-github::NOME-DO-COMPONENTE" no atributo raiz-component.


```html
<raiz-component name="@raiz-github::helloworld"><raiz-component>
```
> [Acessar Repositório](https://github.com/raizjs/components)

#### Versionamento

Para utilizar uma versão especifica de um componente, indique na chamada do componente a versão de utilização com #VERSÃO, segue exemplo:


```html
<raiz-component name="diretório::componente#1.0"><raiz-component>
```

> este componente apontara para o diretorio **componente/version/1.0/package.html**