-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS mi_base_de_datos;

-- Seleccionar la base de datos
USE mi_base_de_datos;

-- Crear la tabla de usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    correo VARCHAR(50) NOT NULL,
    edad INT NOT NULL
);

-- Insertar datos en la tabla de usuarios
INSERT INTO usuarios (nombre, correo, edad) VALUES
('Juan Perez', 'juan@example.com', 30),
('Ana Lopez', 'ana@example.com', 25);





--script de la bbdd de muestra
INSERT INTO alumnos(id,nombre, apellido,nota) VALUES(5, 'kevin', 'sboboda', 7)


--modificiar datos de la tala city( el nombre segun un id)

--update
UPDATE cityset
`name`="Buenos Aires"
WHERE `ID`=1

--DELETE
DELETE FROM city WHERE ID=1;
--no olvidarse del WHERE en el DELETE, puede borrar toda la tabla


--SELECT
SELECT * FROM city WHERE ID=1

SELECT * FROM city WHERE ID > 20


--ORDER BY
--obtener todos los empleados ordenados por apellido
SELECT * 
FROM empleado
ORDER BY apellido;


--LIMIT
--especifica el numero de registros a devolver
SELECT columna_name(s)
FROM table_name
WHERE condition
LIMIT number;

SELECT * FROM city WHERE id>20 LIMIT 10;



--LIKE
--Se utliza para comparaciones con campos de tipo cadenas de texto, esta sentencia se podria utlizar para consultar cuales son los clientes que viven en una calle que contiene el texto "san martin"

SELECT * FROM clientes c WHERE calle LIKE '%san martin%'




