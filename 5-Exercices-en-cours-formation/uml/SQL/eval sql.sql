create database evaljudoka;
use evaljudoka;

create table niveau(
id_niveau int primary key auto_increment not null,
couleur_ceinture_niveau varchar(50)
)Engine = InnoDB;

create table judoka(
id_judoka int primary key auto_increment not null,
nom_judoka varchar(50) not null,
prenom_judoka varchar(50) not null,
age_judoka int not null,
sexe_judoka varchar(50),
id_niveau int not null
)Engine = InnoDB;

create table competition(
id_competition int primary key auto_increment not null,
nom_competition varchar(50) not null,
date_debut_competition datetime not null,
date_fin_competition datetime not null
)Engine = InnoDB;

create table participer(
id_competition int not null,
id_judoka int not null,
primary key(id_competition,id_judoka)
)Engine = InnoDB;

-- contraintes:

alter table judoka
add constraint fk_posseder_niveau
foreign key(id_niveau)
references niveau(id_niveau);

alter table participer
add constraint fk_participer_judoka
foreign key(id_judoka)
references judoka(id_judoka);

alter table participer
add constraint fk_participer_competition
foreign key(id_competition)
references competition(id_competition);

-- les inserts:

insert into niveau(couleur_ceinture_niveau) values
('blanche'),('jaune'),('orange'),('verte'),('bleu'),('marron'),('noire');

insert into judoka (nom_judoka, prenom_judoka, age_judoka, sexe_judoka, id_niveau) values
('lachance','dominique',16,'F',2),
('porter','gilbert',18,'H',3),
('lemaître','anne',15,'F',4),
('robert','juliette',12,'F',1),
('montminy','pierre',17,'H',1),
('charrette','pascal',21,'H',6),
('guay','emilie',19,'F',6),
('maheu','louise',14,'F',4),
('Poulin','Raymond',26,'H',7),
('Dupret','Alain',20,'H',6);

insert into competition(nom_competition, date_debut_competition, date_fin_competition) values
('judo31','2021-02-06','2021-02-07'),
('judo31','2021-02-06','2021-02-07'),
('Judo81','2021-03-20','2021-03-21'),
('Judo82','2021-04-17','2021-04-18');

insert into participer(id_competition,id_judoka) values
(1,1),(1,3),(1,4),(2,2),(2,5),
(2,6),(2,9),(3,10),(3,9),(4,1),
(4,3),(4,8),(4,4);

-- les updates:

update judoka set id_niveau=(id_niveau+1) where id_judoka<6;

insert into judoka (nom_judoka, prenom_judoka, age_judoka, sexe_judoka, id_niveau) values
('lachance','henri',18,'H',6),
('sartres','laurie',16,'F',6);

-- les delete:

delete from judoka where id_judoka = 11;
delete from judoka where id_judoka = 12;

select nom_judoka,prenom_judoka from judoka where id_niveau=4;
select count(id_judoka) from participer inner join competition where nom_competition= 'judo31';
select nom_judoka, prenom_judoka, age_judoka,sexe_judoka from judoka inner join competition where nom_competition ='judo81';
select nom_judoka,prenom_judoka, age_judoka from judoka inner join niveau where judoka.id_niveau=6 and age_judoka<19;

select nom_judoka,prenom_judoka,couleur_ceinture_niveau from judoka inner join niveau
order by nom_judoka asc;



