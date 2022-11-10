-- requête pour ajouter une base
create database ticket34;
use ticket34;
-- requête pour ajouter une table
create table ceinture(
id_ceinture int primary key auto_increment not null,
couleur_ceinture varchar(50) not null
)Engine=InnoDB;

create table competition(
id_competition int primary key auto_increment not null,
nom_competition varchar(50) not null,
date_competition datetime not null
)Engine=InnoDB;

create table judoka(
id_judoka int primary key auto_increment not null,
nom_judoka varchar(50) not null,
prenom_judoka varchar(50) not null,
age_judoka int not null,
sexe_judoka varchar(50) not null,
id_ceinture int
)Engine=InnoDB;

-- création d'un table d'association
create table participer(
id_judoka int,
id_competition int,
primary key(id_judoka, id_competition)
)Engine=InnoDB;

-- ajout des contraintes foreign key

alter table judoka
add constraint fk_posseder_ceinture
foreign key(id_ceinture)
references ceinture(id_ceinture);

alter table participer
add constraint fk_participer_competition
foreign key (id_competition)
references competition(id_competition);

alter table participer
add constraint fk_participer_judoka
foreign key (id_judoka)
references judoka(id_judoka);
