# Rais ϟ

Raiz é uma biblioteca javascript reativa para desenvolvimento de interface do cliente.

#### Features

  - **{{ }}** - Interpolação
  - **raiz-if** - HTML Condicional
  - **raiz-for** - Laço diretamente no HTML
  - **raiz-bind** - Sincronia entre elementos (data-bind)
  - **raiz-components** - Componentes

#### Instalação
Para iniciar um projeto, apenas inclua a chamada ao script core no documento HTML.

- HTTP
```html
<script  type="text/javascript"  src="http://raiz.wallrio.com/core/0.2.2/raiz.js"></script>
```
- HTTPS
```html
<script  type="text/javascript"  src="https://raiz.wallrio.com/core/0.2.2/raiz.js"></script>
```

#### Utilização
Para verificar se a biblioteca esta funcionando corretamente, insira uma string de interpolação no corpo do documento HTML para testar com um Hello World:
```html
<body raiz-controller > {{ __helloworld__ }} </body>
```
Se tudo ocorrer bem, ao acessar a página deverá aparecer o texto abaixo:
```
Congratulations, **Raiz ...** was successfully loaded
```

> é obrigatório a utilização do atributo **raiz-controller**, mesmo que não seja atribuido a um controller.
> Se sua classe for de uso global, é recomendável utilizar o atributo **raiz-controller** na tag HTML do documento.

#### Teste online
Para fazer um teste rápido você pode acessar um exemplo no [JSFiddle](https://jsfiddle.net/wallrio/8vwfb9dc/)

#### Topicos

##### [Exemplos](help/examples/home.md)
##### [Classes](help/classes.md)
##### [Atributos iniciais](help/classes.md)
##### [Interpolação](help/interpolation.md)
##### [If](help/if.md)
##### [for](help/for.md)
##### [Bind](help/bind.md)
##### [Components](help/components.md)

#### Funções úteis
##### [ajax](help/functions/ajax.md)