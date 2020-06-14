
# Atributos iniciais
Permite definir alguns atributos iniciais.

Os atributos iniciais são importantes para definir como a aplicação ira se comportar durante sua execução.

Para utilizar, insira na index de sua aplicação uma tag script com os atributos type="application/json" e raiz-settings

O conteúdo deve ser no formato JSON.

- Exemplo:
```javascript
<script type="application/json" raiz-settings>
	{		
		"components":{
			"cache":true
		}
	}
</script>
```
- Exemplo 2:
```javascript
<script type="application/json" raiz-settings>
	{		
		"components":{
			"cache":true,
			"repositories":{
				'cp':'./app/components'
			}
		}
	}
</script>
```

#### Listagem de parametros

- components
	- cache
		- tipo: boolean (true|false) 
		- descrição: força o navegador a armazenar o cache os componentes

- repositories
	- tipo: array com chave e valor
	- descrição: define variavel e caminho do diretório de componentes
	- exemplo de uso: &lt;raiz-component name="$chave::COMPONENT">

