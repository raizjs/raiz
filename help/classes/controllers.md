# Classes/Controllers
Formas para criação de controllers.

#### Em ECMAScript 5

- Exemplo 1

```javascript
var MyController = (function(){

	function Controller(){

		var self = this;
		
		this.construct = function(container) {}

		this.title = 'This is a example of interpolation';

		return this;	
	}

	return new Controller();

})();
```
- Exemplo 2

```javascript
function Controller(){

	var self = this;
	
	this.construct = function(container) {}

	this.title = 'This is a example of interpolation';

	return this;	
}

var MyController = new Controller();

```
- Exemplo 3

```javascript
var MyController = new (function(){

	var self = this;
	
	this.construct = function(container) {}

	this.title = 'This is a example of interpolation';

	return this;
});
```

#### Em ECMAScript 6

- Exemplo 1

```javascript
class Controller {		
	constructor() { 
		this.title = 'This is a example of interpolation';
  	}

  	construct(container){
  		var self = this;
	}
  	
}

var MyController = new Controller();
```

- Exemplo 2
```javascript
var MyController = new class {		
	constructor() { 		
		this.title = 'This is a example of interpolation';
  	}

  	construct(container){
  		var self = this;
	}		  	
}
```

