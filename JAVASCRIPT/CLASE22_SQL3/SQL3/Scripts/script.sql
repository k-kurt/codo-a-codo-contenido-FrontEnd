


--RELACIONES ENTRE LAS TABLAS 

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

