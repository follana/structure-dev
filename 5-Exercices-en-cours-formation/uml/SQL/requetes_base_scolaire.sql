create database base_scolaire;
use base_scolaire;

-- ajout des tables
create table eleve(
id_eleve int primary key auto_increment not null,
nom_eleve varchar(50) not null,
prenom_eleve varchar(50) not null,
age_eleve int not null,
sexe_eleve varchar(50) not null,
boursier_eleve tinyint(1) default 0,
id_classe int not null
)Engine=innoDB;

create table classe(
id_classe int primary key auto_increment not null,
nom_classe varchar(50) not null
)Engine=InnoDB;

create table detail(
id_detail int primary key auto_increment not null,
note_detail int not null,
commentaire_seance varchar(255) not null,
materiel_oublie_detail tinyint(1) default 0,
id_seance int not null,
id_eleve int not null
)Engine=InnoDB;

create table seance(
id_seance int primary key auto_increment not null,
nom_seance varchar(50) not null,
date_seance datetime not null,
id_type int not null,
id_utilisateur int not null
)Engine=innoDB;

create table type_seance(
id_type int primary key auto_increment not null,
nom_type varchar(50) not null
)Engine=InnoDB;

create table role_utilisateur(
id_role int primary key auto_increment not null,
nom_role varchar(50) not null
)Engine=InnoDB;

create table utilisateur(
id_utilisateur int primary key auto_increment not null,
nom_utilisateur varchar(50) not null,
prenom_utilisateur varchar(50) not null,
login_utilisateur varchar(50) not null,
mail_utilisateur varchar(50) not null,
password_utilisateur varchar(100) not null,
id_role int not null
)Engine=InnoDB;

create table participer(
id_seance int not null,
id_eleve int not null,
presence tinyint(1) default 0,
primary key(id_seance, id_eleve)
)Engine=InnoDB;


-- ajout des constraintes foreign key
alter table eleve
add constraint fk_appartenir_classe
foreign key(id_classe)
references classe(id_classe);

alter table detail
add constraint fk_noter_eleve
foreign key(id_eleve)
references eleve(id_eleve);

alter table detail
add constraint fk_completer_seance
foreign key(id_seance)
references seance(id_seance);

alter table seance
add constraint fk_detailler_type
foreign key(id_type)
references type_seance(id_type);

alter table seance
add constraint fk_diriger_utilisateur
foreign key(id_utilisateur)
references utilisateur(id_utilisateur);

alter table utilisateur
add constraint fk_posseder_role
foreign key(id_role)
references role_utilisateur(id_role);

alter table participer
add constraint fk_participer_seance
foreign key(id_seance)
references seance(id_seance);

alter table participer
add constraint fk_participer_eleve
foreign key(id_eleve)
references eleve(id_eleve);


-- partie ajout et modifs: 
-- Exo 2
use base_scolaire;

insert into role_utilisateur(nom_role) values ('role'), ('moderateur'), ('administrateur');

insert into utilisateur (nom_utilisateur, prenom_utilisateur, login_utilisateur, mail_utilisateur, password_utilisateur, id_role) values
('Tétrault', 'Guilllaume', 'Gtétrault', 'gt@free.fr', 'Azerty77', 1),
('Laramée', 'Eglantine' , 'EglantineL' , 'el@free.fr',' Azerty99', 2),
('Labbé', 'Nadine' , 'nLabbé ','ln@free.fr', 'Azerty44', 3);

update utilisateur
set id_role = 3  where prenom_utilisateur <'L';

update utilisateur
set password_utilisateur =md5('Azerty2022') where prenom_utilisateur='guillaume';

-- Exo 3

insert into classe(nom_classe)values
('6G1'),('6G5'),('5G9');

insert into eleve(nom_eleve, prenom_eleve, age_eleve, sexe_eleve, boursier_eleve, id_classe) values
('Bernard', 'Emmanuelle', 11, 'F', 1, 1),
('Turner', 'Rodrigue', 12, 'G', 0, 3),
('Patrice', 'Cloutier', 10, 'G', 1, 2),
('Marjolaine', 'Faucher', 11, 'F', 1, 1);

insert into type_seance(nom_type) values
('etude'),('sport'),('club');

insert into seance(nom_seance, date_seance, id_type, id_utilisateur) values
('étude', '2022-10-06 17:00:00', 1, 1),
('foot','2022-08-22 13:15:00', 2, 2),
('échec','2022-10-06 17:00:00', 3, 2);

insert into participer(id_seance,id_eleve, presence)values
(1, 1, 1), (1, 2, 0), (1, 3, 1), (2,1, 1), (3,2, 1);

-- modifications:
update classe set nom_classe= '6G7' where nom_classe= '6G1';
update classe set nom_classe='6G3' where nom_classe= '6G5';

update eleve set nom_eleve= upper(nom_eleve);

update seance set date_seance =' 2022-01-11 18:00:20' where id_seance= 2; 

-- Bonus:
insert into detail (note_detail, commentaire_seance, materiel_oublie_detail, id_seance, id_eleve) values
(18, 'bon travail', 0, 1, 2),
(12, 'participe et fait de son mieux', 0, 1, 3),
(7, 'ne fais rien et est en retard', 1, 2, 1); 

update detail set note_detail = 19 where note_detail >12;
update detail set materiel_oublie_detail = 0 where materiel_oublie_detail=1;

-- Exercice delete
-- Exo 1 et 2 en même temps

-- suppression des entrés dans la table participer
delete from participer where id_seance >=2;
-- suppression des entrés dans la table detail
delete from detail where id_seance = 2;
-- suppression des entrés dans la table seance
delete from seance where id_seance >=2;
-- suppression de l'entrés dans la table utilisateur
delete from utilisateur where id_utilisateur = 2;


--  Exo 3
delete from participer where id_eleve = 3;
delete from detail where id_eleve = 3;
delete from eleve where id_eleve = 3;

-- Les requêtes select:
-- Exo 1

select id_classe, nom_classe from classe;
select id_seance, nom_seance,id_type,id_utilisateur from seance;
select id_detail,note_detail,commentaire_seance,materiel_oublie_detail as materiel, id_seance, id_eleve from detail order by note_detail asc;
select id_eleve,nom_eleve,prenom_eleve,age_eleve,sexe_eleve from eleve order by nom_eleve asc, prenom_eleve asc, sexe_eleve='F';
select id_eleve,nom_eleve,prenom_eleve,age_eleve,sexe_eleve from eleve order by nom_eleve desc, prenom_eleve desc, sexe_eleve='G';

select upper(nom_utilisateur),upper(prenom_utilisateur), mail_utilisateur, password_utilisateur from utilisateur order by mail_utilisateur desc;
select id_seance,upper(nom_seance) from seance order by date_seance desc;

