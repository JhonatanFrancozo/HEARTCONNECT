-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE HEARTCONNECT;
USE HEARTCONNECT;

CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(70),
    email VARCHAR (70) UNIQUE,
    senha VARCHAR(50));

CREATE TABLE chat (
	id INT PRIMARY KEY AUTO_INCREMENT,
	comentario VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id));
    
CREATE TABLE pontuacaorank (
	idpontuacao INT auto_increment,
    idusuario INT,
    PRIMARY KEY (idpontuacao, idusuario),
    pontuacao INT,
    erros INT,
    acertos INT,
    FOREIGN KEY (idusuario) REFERENCES usuario(id));
    
    
SELECT * FROM pontuacaorank;

SELECT * FROM usuario;

SELECT * FROM chat;








