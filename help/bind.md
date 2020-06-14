# Bind

Permite sincronizar valores entre variáveis e elementos HTML.

Para utilizar, inclua o atributo raiz-bind no elemento que queria sincronizar o valor, o valor de raiz-bind deve ser a variável de um controller ou qualquer variável, até mesmo uma que não exista previamente.

```html
<input type="text" name="title" raiz-bind="{{this.title}}" >
```

#### Multi Bind
raiz-bind, permite multiplos elementos, apenas inclua o atributo raiz-bind com o mesmo valor nos elementos que você quiser sincronizar.

```html
<input type="text" name="title" raiz-bind="{{this.title}}" >
<select raiz-bind="{{this.title}}">
	<option value="item1">item 1</option>
	<option value="item1">item 1</option>
	<option value="item1">item 1</option>
</select>
```