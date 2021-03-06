# Agenda en Angular 5 #

Ejercicio para el curso de Fundamentos de Angular
Madrid. KeepCoding 2018

## Instalaciones ##

### Creación del proyecto de Angular ###

- sin testing
- sin generar un repositorio git
- incluyendo un módulo de routing

```npm
ng new -st -sg --routing base-agenda
```

Dentro de la carpeta del proyecto, se instala bootstrap y ng-bootstrap

```npm
npm install bootstrap@4.0.0-beta.2
npm install @ng-bootstrap/ng-bootstrap
```

Para completar la instalación de bootstrap, hay que modificar 

```npm
"styles": [
        "../node_modules/bootstrap/dist/css/bootstrap.min.css",
        "styles.css"
      ],
```

### Creación del simulador del api ###

Se instala JSON Server en una carpeta aparte de angular, despues de inicializar su package json
https://github.com/typicode/json-server

```npm
npm init
npm install json-server
```

Se crea el fichero db.json y se excluye de Git
Se añade un script npm para inicializar el api

```npm
"api": "json-server ./db.json --port:3003"
```

## Angular básico ##

- Módulos Shared
  - Componentes Cabeza, Pie , Logo
  - Uso de assets para los elementos estáticos (e.g. imágenes)
- Módulos Main
  - Componente Main, creado --flat -is -it

- Modulo Main2
  - Componente base Main2 (consumido en lugar de Main, que deja de utilizarse)
  - Componentes:
    - binding (saludo a un contacto usando doble binding)
    - expresiones (uso de expresiones locales)
    - local_contacto (saludo a un contacto usando referencias locales)

- Modulo Comunics
  - Componente base: Padre  (consumido en lugar de Main2, que deja de utilizarse)
  - Componentes padre & hijo que se comunican entre sí
    como ejemplo del uso del interfaz de los componentes: input / output

- Modulo Tareas:
  - Componente base: Tareas (consumido en lugar de Padre, que deja de utilizarse)
  - Lista de tareas en versión 2.x y 4.x
  - Lista de tareas que utiliza el localStorage para darse persistencia
  - Ejemplo del uso de las clases css en un componente Acumulador

- Modulo Tareas2:
  - Componente base: Main-Tareas (consumido en lugar de Tareas, que deja de utilizarse)
  - Componente principal MainTareas
  - Componentes "sin estado": item (NuevaTarea) y lista (ListaTareas)
  - Comunicaciones basadas en input y output

- Modulo Main3:
  - Componente base Main3  (consumido en lugar de Main-Tareas, que deja de utilizarse)
  - Ejemplos de los filtros (pipes) incluidos en Angular

- Modulo Formularios
  - Componente base Main-Forms (consumido en lugar de Main3, que deja de utilizarse)
  - Formulario User: campos input y validación
  - Formulario Print: radio-butons, checkbox y select-options
  - Uso de modelos de datos (Interfaces / Clases)

- Modulo Libros
  - Componente base Main-srv (consumido en lugar de Main-Forms, que deja de utilizarse)
  - Servicios:
    - LibrosMock - métodos buscarLibros y buscarLibrosAsync
    - WrapperMock - encapsula el anterior, método buscarLibro
    - LibrosV5 - encapsula HttpClient, método buscar
  - Componentes:
    - BuscarLibros - Busqueda simulada que utiliza los servicios LibrosMock/WrapperMock
    - BuscarGoogle - Busqueda en Google API directamente con Http / HttpCliente de Angular
    - BuscarHttpSrv - Busqueda en Google  que utiliza el servicio LibrosV5

    Se incorporan las versiones Rx de la gestión de HttpCliet en otra Rama Git

## Aplicación SPA en Angular ##

- Nueva rama de Git "Contactos"

- Módulo Contactos: Main-Contactos y Lista
  - Componente base Main-contactos (consumido en lugar de Main-srv, que deja de utilizarse)
    - Define la lista de contactos de acuerdo al modelo de datos
    - Componente "hijo"  lista, la recibe y la muestra con un ngFor;
    - Cada item de la lista incluye un boton que envia un evento de borrado
    - El componente main gestiona el borrado de items en respuesta a los eventos

- Servicio Contactos: encapsula las acciones sobre los contactos
    - El servicio incluye la lista constante y los metodos capaces de
      - devolver la lista
      - borrar de la lista el elemento indicado
    - El servicio de inyecta en Main-Contactos, al que le proporciona la lista

- Alta de contactos: nuevo componente con el formulario de alta de contactos
  - Incluye un frmulario con una serie de input ligados a ngModel
  - El evento submit dispara un método capaz de emitir un evento
      que envia los datos recogidos al componente principal
  - El manejador del evento en el componente principal ejecuta un nuevo método setter del servicio
  - El método set en el servicio añade un elemnto al array de los contactos
      (que de momento carece de persistencia y desarece al recargar)

- API de Contactos: se utiliza JSON Server, previamente instalado y configurado
    - se modifica el servicio contactos para que utilice el API,
      inyectando en el el serviico http con un get a localhost:3003/contactos
      que dara lugar a un array de objetos contacto
      - el método get recupera la lista de contactos
      - el método post permite añadir contactos
      - el método get permite eliminar contactos 
      Todos ellos se utizan en su forma de promesas