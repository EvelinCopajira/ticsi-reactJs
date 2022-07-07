TICSI 

Es un ecommerce de plantas, específicamente de kokedamas y cactus, este ecommerce forma parte de un proyecto del curso de REACT JS de Coderhouse. 

En el proyecto utilicé la libreria Material UI, desde donde fui importando los diferentes componentes, que le dieron funcionalidad a la app.

Utilicé los siguientes hooks: 
- useEffect para hacer llamados a componentes sólo en el momento de su inicialización
- useStatus para almacenar el estado de los componentes y para generar arrays que traigan la nueva información que se va a renderizar

Para el ruteo de la app utilice react-router-dom, importando BrowserRouter, Routes, Route y useParams.

En la page HOME incorporé un carrusel, para el que tuve que instalar react-responsive-carrusel y le modifiqué estilos para que esté alineado con el diseño general de la página.

Dentro del component FORM utilicé react-hook-form para poder validar los campos del formulario de compra, muestra errores y sugiere formato de respuesta a través de texto auxiliar.

Utilizo firebase para alojar el array de productos (que simula una API con base de datos) y también para guardar las órdenes confirmadas por clientes y genera un nro de orden aleatorio que se muestra al confirmar la orden de compra. 

Para el diseño trabajé, en su mayoría con CSS, si los componentes tenían estilos que me servían los conservé.

