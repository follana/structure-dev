-- création de la base judoka
create database judoka;

-- utilisation de la base judoka
use judoka;

-- création des tables
create table ceinture(
id_ceinture int primary key auto_increment not null,
couleur_ceinture varchar(50) not null
)Engine=InnoDB;

create table competition(
id_competition int primary key auto_increment not null,
nom_competition varchar(50) not null ,
date_competition datetime not null
)Engine=InnoDB;

create table judoka(
id_judoka int primary key auto_increment not null,
nom_judoka varchar(50) not null,
prenom_judoka varchar(50) not null,
age_judoka int not null,
sexe_judoka varchar(50) not null,
id_ceinture int not null
)Engine=InnoDB;

create table participer(
id_judoka int not null,
id_competition int not null,
primary key(id_judoka, id_competition)
)Engine=InnoDB;

-- ajouter les contraintes
alter table judoka
add constraint fk_posseder_ceinture
foreign key(id_ceinture)
references ceinture(id_ceinture);

alter table participer
add constraint fk_participer_judoka
foreign key(id_judoka)
references judoka(id_judoka);

alter table participer
add constraint fk_participer_competition
foreign key(id_competition)
references competition(id_competition);
