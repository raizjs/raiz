# if
Crie condicionais diretamente nos elementos HTML.

```html
<div raiz-if="window.navigator.onLine == true" >
	<!-- HTML -->
</div>
```

- Execução de scripts

```html
<div raiz-if="window.navigator.onLine == true" raiz-if-true-js="alert('true');" raiz-if-false-js="alert('false');" >
	<!-- HTML -->
</div>
```

- Atribuição de Classes de estilos

```html
<div raiz-if="window.navigator.onLine == true" raiz-if-true-class="myclass" raiz-if-false-class="!myclass" >
	<!-- HTML -->
</div>
```
> O sinal ! (interrogação) é indicado para remover a classe


- Atribuição de estilos inline

```html
<div raiz-if="window.navigator.onLine == true" raiz-if-true-style="background-color:blue" raiz-if-false-style="background-color:red" >
	<!-- HTML -->
</div>
```

- Atribuição de atributos de tag HTML

```html
<div raiz-if="window.navigator.onLine == true" raiz-if-true-attr="title=valor verdadeiro" raiz-if-false-attr="title=valor falso" >
	<!-- HTML -->
</div>
```
