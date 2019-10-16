## Una Aplicacion de nodeJs por consola, la cual recibe un comando con dos parametros 
## por consola. 

## ---------------------------Parametros----------------------
## base: Numero sobre el cual se hara la multiplicacion.
## limite: Numero donde finalizara la multiplicacion. Por defecto es hasta 10.

## ---------------------------Comandos------------------------
## listar: Hace la multiplicacion de la base ingresado por consola, hasta el limite si se especifica
## y muestra el resultado en consola.

## crear: Crea un .txt que contiene la tabla de multiplicar de la base hasta el limite si se especifica.
## El nombre de este archivo sera tablabase-al-limite.txt
## Los .txt se guardaran en la carpeta tablas

## ---------------------------Ejemplo-------------------------
## node app.js listar -b 5 -l 5 //muestra la tabla del 5 del 1 al 5
## node app.js crear -b 5 l 5 //crear el .txt de la tabla del 5 del 1 al 5

## ---------------------------Notas---------------------------
## Para correr primero ejecutar npm install para instalar las dependencias.
## Crear la carpeta tablas en el mismo nivel del app.js.
## ejecutar cualquiera de los ejemplos para verificar.