create database objectif;
use objectif;

create table utilisateur(
id_utilisateur int primary key auto_increment not null,
nom_utilisateur varchar(50) not null,
prenom_utilisateur varchar(50) not null,
mail_utilisateur varchar(50) not null,
mdp_utilisateur varchar(50) not null,
login_utilisateur varchar(50) not null
)Engine=InnoDB;

create table categorie(
id_categorie int primary key auto_increment not null,
nom_categorie varchar(50) not null
)Engine=InnoDB;



create table produit(
id_produit int primary key auto_increment ,
nom_produit varchar(50) not null,
description_produit varchar(50) not null,
prix_produit float not null
)Engine=InnoDB;

create table magasin(
id_magasin int primary key auto_increment ,
nom_magasin varchar(50) not null,
nom_rue_magasin varchar(50) not null,
num_rue_magasin varchar(50) not null,
cp_magasin int not null,
ville_magasin varchar(50) not null,
num_tel_magasin varchar(50) not null
)Engine=InnoDB;

create table posseder(
id_utilisateur int not null,
id_produit int not null,
quantite_produit int  ,
date_achat varchar(50),
primary key(id_utilisateur, id_produit)
)Engine=InnoDB;

create table contact(
id_contact int primary key auto_increment not null,
nom_contact varchar(50) not null,
prenom_contact varchar(50) not null,
mail_contact varchar(50) not null,
id_type_contact int not null
)Engine=InnoDB;

create table type_contact(
id_type_contact int primary key auto_increment ,
nom_type_contact varchar(50) not null
)Engine=InnoDB;

create table adresse(
id_adresse int primary key auto_increment not null,
nom_rue_adresse varchar(50) not null,
ville_adresse varchar(50) not null,
code_postal_adresse int not null,
pays_adresse varchar(50) not null
)Engine=InnoDB;

create table type_adresse(
id_type_adresse int primary key auto_increment not null,
nom_type_adresse varchar(50) not null
)Engine=InnoDB;

create table appartenir(
id_categorie int not null,
id_produit int not null,
primary key (id_categorie, id_produit)
)Engine=InnoDB;

create table relier(
id_utilisateur int not null,
id_adresse int not null,
primary key (id_utilisateur, id_adresse)
)Engine=InnoDB;

alter table relier
add constraint fk_relier_adresse
foreign key(id_adresse)
references adresse(id_adresse);


alter table relier
add constraint fk_relier_utilisateur
foreign key(id_utilisateur)
references utilisateur(id_utilisateur);

alter table contact
add constraint fk_detailler_contact
foreign key(id_type_contact)
references type_contact(id_type_contact);

alter table posseder
add constraint fk_posseder_utilisateur
foreign key(id_utilisateur)
references utilisateur(id_utilisateur);

alter table posseder
add constraint fk_posseder_produit
foreign key(id_produit)
references produit(id_produit);

alter table appartenir
add constraint fk_appartenir_produit
foreign key(id_produit)
references produit(id_produit);

alter table appartenir
add constraint fk_appartenir_categorie
foreign key(id_categorie)
references categorie(id_categorie);

 
 -- requêtes:
 
insert into produit (nom_produit, description_produit, prix_produit)values
('cadre','cadre photo en bois',10.99),
('portfolio','cahier plastifié avec feuilles protectrices', 24.99);

insert into utilisateur (nom_utilisateur, prenom_utilisateur, mail_utilisateur, mdp_utilisateur, login_utilisateur) values
('grosjean','romain','r34grosjean@gmail.com','shgfaz64','rgrosjean'),
('dupont','marlène','m34dupont@yahoo.fr','jghhgf74ss','mdupont');

select nom_utilisateur, id_utilisateur from utilisateur;







 
 