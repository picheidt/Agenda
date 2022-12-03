create database agenda;
use agenda;

CREATE table usuario(
id_usuario int primary key not null auto_increment,
login varchar (100) not null,
senha varchar (25) not null
);

CREATE table contatos(
id_contato int primary key not null auto_increment,
nome varchar (100) not null,
telefone varchar (20) not null,
email varchar (100),
id_usuario int,
CONSTRAINT FK_contatos_usuario foreign key (id_usuario) references usuario (id_usuario)
);


