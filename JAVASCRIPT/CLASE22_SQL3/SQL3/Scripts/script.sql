


--RELACIONES ENTRE LAS TABLAS 

--FOREING KEY
--realizar una tabla pedido que traiga el id del cliente y el id del producto, que se hizo la compra
--tenemos la tabla cliente y productos

CREATE TABLE pedido(
    numero int(10) primary key auto_increment,
    fecha date,
    id_producto int(10),
    id_cliente int(10),

    foreign key (id_cliente) references cliente(id),
    foreign key (id_producto) references producto(codigo)

)





--INSERTAR DATOS EN TABLA CON FOREING KEY
INSERT INTO pedido (fecha, id_producto, id_cliente)
VALUES ("2024-05-26",1,2), ("2023-02-26",5,3), ("2023-01-2",6,5)





--INNER JOIN
--traer quines hicieron compras de la tabla clientes que estan en la tabla pedidos
SELECT c.id, c.nombre
FROM cliente c
INNER JOIN pedido p ON c.id= p.id_cliente;






--LEFT JOIN
--traemos como en el inner join las coincidencias pero en este caso, traemos todo lo la tabla de la izquierda y las que no le corresponde la coincidencia pone null

SELECT c.*, p.*
FROM cliente c 
LEFT JOIN pedido p ON c.id = p.id_cliente;

--salen todos los clientes auqnue no hayan comprado nada




--SUBCONSULTA
--obtener en uno de los parametros una subconsulta obteniendo el minimo de fecha de compra 
SELECT id, nombre,
(SELECT MIN(fecha)
FROM pedido
WHERE pedido.id_cliente = cliente.id) AS fecha_minima
FROM cliente;




--EXISTE
--pedir al menos una coincidencia de si existe una compra del cliente 
SELECT id, nombre
FROM clientes
WHERE EXISTS(
    SELECT 1
    FROM pedido
    WHERE pedido.id_cliente = cliente.id
);




--GROUP BY HAVING COUNT
--junta en un grupo sin repeticion los elementos que coincidan
--el javing count funciona solo con el group BY
SELECT c.id, c.nombre
FROM clientes c
JOIN pedido p ON c.id= p.id_cliente
GROUP BY c.id, c.nombre
HAVING COUNT(p.numero) >=2;
--trae un unico resultado, que es el nombre y el id de la persona que compro mas de 2 productos
--En resumen, este código selecciona los id y nombre de los clientes que tienen al menos 2 pedidos registrados en la tabla pedido.