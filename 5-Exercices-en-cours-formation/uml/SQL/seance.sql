create database seances;
use seances;

create table role_utilisateur(
id_role_utilisateur int primary key auto_increment not null,
nom_utilisateur varchar(50) not null
)Engine InnoDB;

create table type_seance(
id_type_seance int primary key auto_increment not  null,
nom_type_seance varchar(50) not null
)Engine InnoDB;

create table utilisateurs(
id_utilisateurs int primary key auto_increment not  null,
nom_utilisateurs varchar(50) not null,
prenom_utilisateurs varchar(50) not null,
login_utilisateurs varchar (50) not null, 
mail_utilisateurs varchar(50) not null,
password_utilisateurs varchar(100) not null,
id_role int not null
)Engine InnoDB;

create table classe(
id_classe int primary key auto_increment not  null,
nom_classe varchar(50) not null
)Engine InnoDB;

create table seance(
id_seance int primary key auto_increment not  null,
nom_seance varchar(50) not null,
date_seance datetime not null,
id_type_seance int not null,
id_utilisateurs int not null
)Engine InnoDB;

create table eleve(
id_eleve int primary key auto_increment not  null,
nom_eleve varchar(50) not null,
prenom_eleve varchar(50) not null,
age_eleve int not null,
sexe_eleve varchar (50),
boursier_eleve tinyint(1) not null,
id_classe int not null
)Engine InnoDB;

create table participer(
id_seance int not null,
id_eleve int not null,
presence tinyint(1) not null,
primary key (id_seance, id_eleve)
)Engine InnoDB;

create table detail(
id_detail int primary key auto_increment not  null,
note_detail int not null,
commentaire_seance_detail varchar(255),
materiel_oublie_detail tinyint(1),
id_seance int not null,
id_eleve int not null
)Engine InnoDB;

-- relations:
alter table utilisateurs
add constraint fk_posseder_role_utilisateur
foreign key (id_role)
references role_utilisateur(id_role_utilisateur);

alter table seance
add constraint fk_diriger_utilisateurs
foreign key (id_utilisateurs)
references utilisateurs(id_utilisateurs);

alter table seance
add constraint fk_detailler_type_seance
foreign key (id_type_seance)
references type_seance(id_type_seance);

alter table seance
add constraint fk_detailler_seance
foreign key (id_type_seance)
references type_seance(id_type_seance);

alter table participer
add constraint fk_participer_eleve
foreign key (id_eleve)
references eleve(id_eleve);

alter table participer
add constraint fk_participer_seance
foreign key(id_seance)
references seance(id_seance);

alter table eleve
add constraint fk_appartenir_classe
foreign key (id_classe)
references classe(id_classe);

alter table detail
add constraint fk_noter_eleve
foreign key (id_eleve)
references eleve(id_eleve);

alter table detail
add constraint fk_completer_seance
foreign key (id_seance)
references seance(id_seance);




