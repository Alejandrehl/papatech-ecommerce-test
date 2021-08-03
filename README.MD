# Papa Tech Ecommerce Test :pizza::fire:

Estimados Devs/TechLeads/CTO/RevisoresDePruebas espero que les guste el desarrollo de mi prueba, creo haber cumplido con todos los requisitos excepto por 2 cosas:

1. Validación de números negativos en los productos del mini cart.
2. Refresh de número de cantidad del producto agregado al carro. Se muestra pero para que se actualicé en el mini cart hay que cerrar y abrir de nuevo.

Además de lo mencionado anteriormente agregué unas cosas extra que a mi parecer deberian estar como por ejemplo cuando entras al mini cart y no tienes productos te muestra un mensaje y no puedes ir al checkout.

### How to run app?

1. Clonar repo: `git clone git@github.com:Alejandrehl/papatech-ecommerce-test.git`.
2. Instalar dependencias: `yarn install` o solo `yarn` en la carpeta root del proyecto.
3. Instalar dependencias en IOS: `cd ios/` & `pod install`.
4. Correr el proyecto en nuestro entorno local: `yarn run ios` o `yarn run android`.
   - Este paso abrira una nueva terminal corriendo "METRO". Lo que yo hago por cómodidad es abrir 2 terminales, una al lado de la otra, en una ejecuto `yarn start` para correr metro y otra `yarn run ios` o `yarn run android` para ejecutar los simuladores.

### Technical Questions

1. ¿Qué es React, React Native y Redux?
2. ¿Cuál es tu experiencia con React Native?
3. ¿Diferencia entre app nativa y híbrida?
4. ¿Qué librerías se involucran cuando guardamos un estado con Redux?
5. ¿Diferencia entre las variables const y let?
6. ¿Diferencia entre stateful y stateless?
7. ¿Has trabajado con Objective-C o Swift?
8. ¿Tienes experiencia con CI/CD?
9. ¿Qué control de versiones utilizas?
10. ¿Has hecho algún deploy de app a las Stores (Google Play / App Store / AppGallery)?¿Cómo lo has realizado?¿Has tenido algún problema?
11. Menciona algunas buenas prácticas que hayas utilizado en el desarrollo de apps.

### Pending Tasks

1. Al momento de sumar o restar elementos en el overlay del carrito no se refresca el valor de la cantidad.
2. Validación números negativos en cantidad de un producto.

### Libraries & Dependencies

1. [Eslint Config Rokket Labs](https://github.com/rokket-labs/eslint-config-rokket-labs): Esta es una configuración de Eslint que me encanta, la descubrí cuando trabajé en Rokket Labs y desde ese momento la implemento en todos mis proyectos. Recomiendo revisar link.
2. [React Native Elements](https://reactnativeelements.com/): UI Toolkit para maquetear los requerimientos más rápido.
3. [Redux](https://redux.js.org/): Librería para manejar estados globales de la aplicación, en algunos casos y si la expertice del equipo lo permite creo que es mejor ocupar la mezcla entre useContext y useReducer ya que así nos ahorrariamos utilizar una librería externa y que cumple la misma función.
   3.1 [React Redux](https://react-redux.js.org/)
4. [Redux Thunk](https://github.com/reduxjs/redux-thunk): Middleware de Redux, la utilicé en este proyecto porque me parece más fácil de implementar que Redux Saga.
5. [Amiibo API](https://www.amiiboapi.com/): API utilizada para mostrar los productos en la app.
6. [Axios](https://github.com/axios/axios): Librería utilizada como HTTP Client en reemplazo de FETCH.
7. [React Navigation](https://reactnavigation.org/): Librería utilizada para navegar entre las pantallas de la aplicación. Yo tenia conocimiento hasta la versión 5 de este package pero en este desafió utilicé la 6 ya que es la más nueva.
8. [React Native Font Awesome](https://www.npmjs.com/package/@fortawesome/react-native-fontawesome): Librería para iconos Font Awesome.
9. [CurrencyJS](https://currency.js.org/): Librería utilizada para formatear precio de los productos.
