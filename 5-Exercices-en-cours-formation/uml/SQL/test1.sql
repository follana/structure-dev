-- requete ajouter une base
-- create database ticket;
use ticket;
-- requête ajout table
create table ceinture(
id_ceinture int primary key auto_increment not null,
couleur_ceinture varchar(50)
)Engine=InnoDB;

create table competition(
id_competition int primary key auto_increment not null,
nom_competition varchar (50) not null,
date_competition datetime not null
)Engine=InnoDB;

create table judoka (
id_judoka int primary key auto_increment not null,
nom_judoka varchar(50) not null,
prenom_judoka varchar (50) not null,
age_judoka int not null,
sexe_judoka varchar (50) not null,
id_ceinture int
)Engine=InnoDB;

create table participer(
id_judoka int,
id_competition int,
primary key (id_judoka, id_competition)
)Engine=InnoDB;

-- ajout contrainte foreign key

alter table judoka
add constraint fk_posseder_ceinture
foreign key(id_ceinture)
references ceinture(id_ceinture);

alter table participer
add constraint fk_participer_competition
foreign key(id_competition)
references competion(id_competition);

alter table participer
add constraint fk_participer_judoka
foreign key(id_judoka)
references competion(id_judoka);