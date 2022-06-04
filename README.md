TICSI es un ecommerce de plantas, específicamente de kokedamas y cactus. 

El proyecto todavía está en desarrollo, hasta ahora utilicé sólo la libreria Material UI, desde donde fui importando los diferentes componentes que le dieron funcionalidad a la app.

No inclui ninguna dependencia por fuera de las trabajadas en clase, por ahora se utiliza sólo MUI (iconos de MUI) y react-router-dom

Utilicé los siguientes hooks: 
- useEffect para hacer llamados a componentes sólo en el momento de su inicialización
- useStatus para almacenar el estado de los componentes y para generar arrays que traigan la nueva información que se va a renderizar

Para el ruteo instalé react-router-dom, importando desde allí BrowserRouter, Routes, Route y useParams.

Por medio de promises simulé el llamado a la API, que contiene la base de datos.

Desde la sección "PRODUCTOS" vas a ver el total de productos, se puede ingresar al detalle de cada uno y con otro boton volver al total de productos. 
Se puede filtrar el listado de productos por categorías para traer únicamente los productos que le interesen al cliente.
