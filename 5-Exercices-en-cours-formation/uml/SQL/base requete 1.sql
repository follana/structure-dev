create database cours;
use cours;

create table exemple(
id_exemple int primary key auto_increment not null,
nom_exemple varchar(50) not null,
date_exemple date not null,
valide_exemple tinyint(1) default 0,
pas_null_exemple varchar(100) null
)Engine=InnoDB;