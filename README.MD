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
   - React: Potente librería para desarrollo frontend.
   - React Native: Framework de JavaScript para desarrollo mobile híbrido.
   - Redux: Librería para manejo de estados globales en una aplicación. Cabe destacar que se puede usar en múltiples frameworks y librerías, no es especifico de React.
2. ¿Cuál es tu experiencia con React Native?
   - Junior Developer Año 2017: Desarrollo muy básico de la aplicación mobile de una Startup en la cúal trabaje en ese año, aprendí más que nada a maquetear y a consumir servicios rest con axios. (La Startup se llamaba SocialBuyers/EncargaHoy y ya no existe)
   - Semi Senior Developer Año 2019: Desarrollé la aplicación mobile para la empresa [Organizame](https://www.organizame.cl/), es más, creo que aún ocupan lo que dejé yo en aquel tiempo.
   - Tech Lead Año 2020-2021: Fuí el Tech Lead y el desarrollador principal de la aplicación WiCar de Kaufmann. Estuve a cargo de TODAS las decisiones técnicas del proyecto, de mentorear a los demás devs, repartir tareas y comunicarme activamente con el cliente. Además de React Native utilicé React y NextJS para las partes web, respecto a la arquitectura y el backend podemos hablar otro día jeje.
3. ¿Diferencia entre app nativa y híbrida?
   - APP Nativa: Aplicación desarrollada en Java/Kotlin para Android y Swift/Objective-C para iOS. Este tipo de desarrollo es más costoso pero nos permite sacar el máximo provecho al dispositivo móvil objetivo, además las aplicaciones tienen un rendimiento único y se reducen riesgos como problemas de interfaz. (Menciono lo anterior porque en React Native es muy cómun tener problemas para que la interfaz se vea bien en TODOS los dispositivos, WiCar se veía del asco de iPhone 6 para abajo :laughing:).
   - App Híbrida: App desarrollada para multiples plataformas con un solo código fuente, un ejemplo de esto es React Native, Flutter y Ionic((?) nunca lo he ocupado la verdad).
4. ¿Qué librerías se involucran cuando guardamos un estado con Redux?
   - Se necesita un Middleware como Redux Thunk o Redux Saga.
   - Especificamente en React necesitamos utiliar react-redux.
5. ¿Diferencia entre las variables const y let?
   - `const`: Variables que no puedes cambiar su valor.
   - `let`: Variables que pueden cambiar su valor.
6. ¿Diferencia entre stateful y stateless?
   - `stateful`: Componente que tiene estados, es decir, variables que pueden cambiar su valor sin necesidad de hacer un refresh de la página/pantalla/etc.
   - `stateless`: Componente que no tiene estados. Normalmente solo reciben props y se pintan a partir de estas.
7. ¿Has trabajado con Objective-C o Swift?
   - Solo he trabajado con Swift una véz a nivel profesional, desarrolle las interfaces de la aplicación [BadgeHeroes](https://www.badgeheroes.com/?lang=en)
8. ¿Tienes experiencia con CI/CD?
   - Si, implemente CI/CD en Azure DevOps para el proyecto WiCar.
   - Para aplicaciones móvil nunca he implementado CI/CD pero conozco [Fastlane](https://fastlane.tools/)
   - En mis trabajos anteriores utilizabamos Gitlab, Docker y AWS, nunca metí manos en la implementación pero logré entenderla.
9. ¿Qué control de versiones utilizas?
   - GIT
10. ¿Has hecho algún deploy de app a las Stores (Google Play / App Store / AppGallery)?¿Cómo lo has realizado?¿Has tenido algún problema?

    - Si, he desplegado varias aplicaciones. Para la Play Store necesitas tener una cuenta que cuesta alrededor de 25USD y solo se paga una vez. Puedes subir el APK pero lo recomendable es subir el APP Bundle (archivo .abb) ya que es el compilado optimizado de la aplicación Android. Para iOS necesitas pagar anualmente 99USD y existen dos formas de subir la app, una es generando el .ipa con xCode y subiendolo con Transporte y la otra es subirla directamente con xCode a Testflight y de Testflight pasarlo a prod. En Ambos casos hay que esperar la revisión por parte de la compañia.
    - Si he tenido un monton de problemas pero hay uno muy cuatico que es cuando se me perdieron los certificados para generar el App Bundle de Android y tuve que contactar a google para poder recuperar todo. Creo que podría contarlo mejor en una conversacion :)

11. Menciona algunas buenas prácticas que hayas utilizado en el desarrollo de apps.

    - Linter para obligar a todos a programar como corresponde :laughing:
    - Crear diferentes ambientes para un completo testeo de la aplicación. Develop, Staging, Prod.
    - Generar documentación del proyecto ya que es tanto útil para los nuevos miembros del equipo como para mi.
    - Llevar un buen Gitflow
    - Hmmmm :thinking:

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
