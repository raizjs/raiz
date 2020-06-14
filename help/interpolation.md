


# Interpolação
A interpolação também conhecido como Mustaches, Double Curly Braces ou simplesmente Chaves duplas.

Na interpolação é possivel utilizar qualquer expressão javascript, variável, objetos, membros de objetos, ou referenciar propriedades de classe instanciadas.

#### Exemplo

Expressão aritimética

```javascript
{{2+2}}
```

conteúdo de variável

```javascript
{{nome_da_variavel}}
```

Propriedade de um objeto direto utilizando a palavra reservada this

```javascript
{{this.title}}
```
Propriedade de um objeto direto utilizando a palavra reservada self

```javascript
{{self.title}}
```
Propriedade de um objeto utilizando o próprio nome da classe

```javascript
{{maincontroller.title}}
```

#### Interpolação via comentário
É possivel utilizar também interpolação via comentário, assim é possivel evitar a exibição das Chaves duplas enquanto o valor não é resolvido.

```javascript
<!--{{this.title}}-->
```

#### Variaveis reservadas

|||
|-|-|
|\_\_helloworld\_\_|	Exibe uma frase de teste|


- Exemplo

```javascript
{{__time__}}
```

#### Configurar a interpolação
É possivel utilizar algums filtros para cada interpolação, esses filtros alteram o valor da interpolação.

Para iniciar a configuração insira **>>>** após o valor da interpolação.

```javascript
{{ "abc" >>> uppercase }}
```

Para cada filtros é possivel definir parametros, segue exemplo:

```javascript
{{ "abc" >>> uppercase | style(color:'red') }}
```

#### Filtros disponiveis

- uppercase: converte texto para maiusculo	

```javascript
{{ "abc" >>> uppercase }}
```

- lowercase: converte texto para lowercase	

```javascript
{{ "ABC" >>> lowercase }}
```

- reverse: reverte a ordem do texto

```javascript
{{ "ABC" >>> reverse }}
```


- delay: aplica um atraso antes de exibir o valor da interpolação, é recomendavel utilizar em modo de comentario.

```javascript
<!-- {{ "abc" >>> delay(3000)}} -->
```

- ajax: reverte a ordem do texto

```javascript
{{ "" >>> ajax(method:'POST',data:{name:"New Name"},url:'http://domain/route')|stop}}
```

- style: define um estilo ao valor da interpolação

- Exemplo 1
```javascript
{{ "abc" >>> style(color:'red')}}
```

- Exemplo 2
```javascript
{{ "abc" >>> style(css_selector)}}
```

- Time: exibe a data atual

	- Exemplo com timestamp
	
		```javascript
		{{ >>> time() }}
		```

	- Exemplo com formatação
	
		```javascript
		{{ >>> time(h:i:s d/m/y)}}
		```

#### Filtros personalizados
É possivel criar filtros personalizado.

```javascript
raiz.interpolation.filter('NOME_DO_FILTRO',function(content,snippetParameters,callback){
    callback('VALOR_DE_RETORNO');
});	
```

- Exemplo

```javascript
raiz.interpolation.filter('remove_space',function(content,snippetParameters,callback){   
    content = content.replace(/ /,'');
    callback(content);
});	
```


#### Interpolação em atributo de elemento

```html
<a href="{{ this.url }}">link</a>
```

#### Interpolação em tag Style
É possivel utilizar a interpolação em códigos styles inline

```html
<style type="text/css">
    body{
        background-color: {{this.bgColor}};
    }

    a[href="{{this.url}}"]{
        color: {{this.aColor}};
    }

</style>
```

#### Outras formas de uso
Os valores dentro da chaves duplas são interpretadas com javascript, dessa forma é possivel diversas formas de utilização.

```javascript
{{
    var a = 'novo';
    var b = 'teste';
    return a+' '+b;
}}
```
