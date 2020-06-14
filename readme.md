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

```html
<script  type="text/javascript"  src=".../raiz.js"></script>
```

#### CDN
É possivel utilizar o core js do Raiz em um CDN, segue o link para utilização:

```html
<script  type="text/javascript"  src="https://cdn.jsdelivr.net/gh/raizjs/raiz@master/dist/raiz.min.js"></script>
```

[Baixe o core javascript](https://cdn.jsdelivr.net/gh/raizjs/raiz@master/dist/raiz.min.js)

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

##### [Exemplos](help/examples.md)
##### [Classes](help/classes.md)
##### [Atributos iniciais](help/attributes.md)
##### [Interpolação](help/interpolation.md)
##### [If](help/if.md)
##### [for](help/for.md)
##### [Bind](help/bind.md)
##### [Components](help/components.md)

#### Funções úteis
##### [Funções](help/functions.md)