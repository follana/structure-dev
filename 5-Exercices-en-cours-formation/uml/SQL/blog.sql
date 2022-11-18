create database blog;
use blog;

-- creation des tables
create table role_utilisateur(
id_role_utilisateur int primary key auto_increment not null,
nom_role_utilisateur varchar(50) not null
)Engine InnoDB;

create table categorie(
id_categorie int primary key auto_increment not null,
nom_categorie varchar(50) not null
)Engine InnoDB;

create table utilisateur(
id_utilisateur int primary key auto_increment not null,
nom_utilisateur varchar(50) not null,
prenom_utilisateur varchar(50) not null,
mail_utilisateur varchar(50) not null,
password_utilisateur varchar(100) not null,
id_role int not null
)Engine InnoDB;

create table article(
id_article int primary key auto_increment not null,
nom_article varchar(50) not null,
contenu_article text not null,
date_article datetime not null,
id_utilisateur int not null
)Engine InnoDB;

create table commentaires(
id_commentaires int primary key auto_increment not null,
contenu_commentaires varchar(255) not null,
date_commentaires datetime not null,
id_utilisateur int not null,
id_article int not null
)Engine InnoDB;

create table attribuer(
id_article int not null,
id_categorie int not null,
primary key (id_article, id_categorie)
)Engine InnoDB;

-- initialisation des relations
alter table utilisateur
add constraint fk_posseder_role_utilisateur
foreign key (id_role)
references role_utilisateur(id_role_utilisateur);

alter table article
add constraint fk_rediger_id_utilisateur
foreign key(id_utilisateur)
references utilisateur(id_utilisateur);

alter table attribuer
add constraint fk_attribuer_categorie
foreign key (id_categorie)
references categorie (id_categorie);

alter table attribuer 
add constraint fk_attribuer_article
foreign key (id_article)
references article(id_article);

alter table commentaires
add constraint fk_ajouter_utilisateur
foreign key (id_utilisateur)
references utilisateur(id_utilisateur);

alter table commentaires
add constraint fk_completer_article
foreign key (id_article)
references article(id_article);
