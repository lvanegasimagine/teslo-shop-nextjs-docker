# Next.js Teslo Shop App

Ejecutar la app localmente, se necesita la Base de datos

```
docker-compose up -d
```

- el -d significa **detached**

- MongoDB URL Local:

```
mongodb://localhost:27019/teslldb
```

## configurar las variables de entorno

Renombrar el archivo **.env.template** a **.env**

## LLenar la base de datos con informacion de pruebas

```
http://localhost:3000/api/seed
```
