## Una Aplicacion de nodeJs por consola

## ---------------------------Parametros----------------------
1. base: Numero sobre el cual se hara la multiplicacion.
2. limite: Numero donde finalizara la multiplicacion. Por defecto es hasta 10.

## ---------------------------Comandos------------------------
1. Listar: Hace la multiplicacion de la base ingresado por consola, hasta el limite si se especifica
y muestra el resultado en consola.

2. Crear: Crea un .txt que contiene la tabla de multiplicar de la base hasta el limite si se especifica.
 El nombre de este archivo sera tablabase-al-limite.txt. Los .txt se guardaran en la carpeta tablas

## ---------------------------Ejemplo-------------------------
1. node app.js listar -b 5 -l 5 //muestra la tabla del 5 del 1 al 5
2. node app.js crear -b 5 l 5 //crear el .txt de la tabla del 5 del 1 al 5

## ---------------------------Pasos---------------------------
1. Ejecutar npm install para instalar las dependencias.
2. Crear la carpeta tablas en el mismo nivel del app.js.
3. ejecutar cualquiera de los ejemplos para verificar.