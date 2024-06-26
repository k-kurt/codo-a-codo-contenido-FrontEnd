


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



