# for
Permite criar laços diretamente no documento HTML utilizando array JavaScript.

- Exemplo

```javascript
this.menu = [
	{title:'home',url:'#home'},
	{title:'about',url:'#about'},
	{title:'contact',url:'#contact'},
];
```

```html
<ul>
	<li raiz-for="key in this.menu">
		<a href="{{key.url}}">{{key.title}}</a>
	</li>
</ul>
```

#### Manipular a lista em tempo de execução
Para manipular a lista em tempo de execução, apenas altere a variável da lista.

```javascript
delete this.menu[1].child[0];
```


#### Reverter listagem

<ul>
	<li raiz-for="key in this.menu" raiz-for-sort="reverse">
		<a href="{{key.url}}">{{key.title}}</a>
	</li>
</ul>