# hotel_api_gateway

**this is an example of an API Gateway using GraphQL an apollo**

## Comenzando 🚀

_Para poder reproducir este API Gateway y acceder a su codigo fuente, unicamente debes clonar el repositorio y acceder a la carpeta api-gateway_

_Para desplegar el proyecto local o remotamente debes tener en cuenta las instrucciones encontradas en el apartado **Instalacion** y **Ejecución de API Gateway **._

### Pre-requisitos 📋

_Principalmente se requiere instalar node en su version estable(Preferiblemente v16.13.0), npm y git bush para realizar la copia del proyecto (En su defecto descargar el proyecto como zip), una vez clonado el repositorio accede a api-gateway y realiza el procedimiento descrito en **Instalación** y **Pruebas**._

### Instalación 🔧

_El proyecto lleva las librerias instaladas en la carpeta **node_modules** y en el fichero
**packege-lock.json**, los cuales se instalan habriendo el proyecto en una terminal y ejecutando el comando **npm install**._

## Ejecutando el API Gateway ⚙️

_A continuacion se describe la forma de realizacion de las pruebas locales, posterior a ello se explicara como realiar el despliegue y las pruebas remotas_

## Ejecucion en local ⚙️

_Se debe abrir el proyecto desde una terminal e indicar el comando **node src/index.js** y debera arrojar como respuesta (Server ready at http://localhost:4000/) donde la url la pondremos en un navegador y sera la forma de ver el contenido del API Gateway _

## Despliegue 📦

**En linux**

`sudo heroku login`
`sudo heroku create <nombre app> **para este caso sera hotel-apigateway**`
`sudo heroku container:login`
`sudo heroku container:push web --app <nombre app>**para este caso sera hotel-apigateway**`
`sudo heroku container:release web --app <nombre app> **para este caso sera hotel-apigateway**`

**En Windows y macOS**

` heroku login`
` heroku create <nombre app> **para este caso sera hotel-apigateway**`
` heroku container:login`
` heroku container:push web --app <nombre app>**para este caso sera apigateway-hotel**`
` heroku container:push web --app apigateway-hotel`
` heroku container:release web --app <nombre app> **para este caso sera apigateway-hotel**`
` heroku container:release web --app apigateway-hotel`
