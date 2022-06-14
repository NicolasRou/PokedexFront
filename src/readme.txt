Procedimiento realizado:
Primero creamos dos archivos, uno llamado Usefetch que ahi es donde realizamos la conexion con la pokeapi.
Creamos un estado, el cual lo seteamos para que nos devuelva la informacion de la url principal.
La funcion getDatos es la que realiza la conexion con la url usando fetch.
Usefetch se creó para no repetir código en los otros componentes, se va a importar en casi todos ellos luego. 

Creamos otro archivo llamado Pokemon, es el que representa la pagina general de los pokemon. Importamos la funcion creada anteriormente Usefetch.
Creamos unn estado el cual se inicializará con la url principal de la API y nos retornará un array con 20 pokemon con sus datos.
Creamos una variable cuyo valor es lo que nos devuelve el componente Usefetch, con sus atributos loading y data.
Comprobamos si estamos obteniendo la info usando un operador ternario con la variable loading. Si es falso se imprimirá en consola el array con los pokemon usando data.results.

Luego de comprobar que recibimos la info de la api, creamos una carpeta con los archivos donde se verán los pokemon

Creamos CardPokemon e importamos el Usefetch, para sacarle la info de la url que tiene cada pokemon.
Recibimos la url de cada pokemon por parámetro.

Creamos Card, el contendor de todas las cards pokemon.
Importamos CardPokemon
El componente Card recibe como parámetro el array de los 20 pokemon.
Hacemos un recorrido al array results para obtener la url de cada uno de los pokemon y enviarla al componente CardPokemon, para usar su información Y representarla en cada  card.
Luego tomamos los atributos que queremos del arreglo y los colocamos en CardPokemon

Pasamos Card con propiedad results al componente Pokemon para que se muestre la informacion que solicitamos
