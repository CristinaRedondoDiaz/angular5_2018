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