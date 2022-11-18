-- insertion de données simple (enregistrement par enregistrement)
insert into exemple(nom_exemple, date_exemple, valide_exemple, pas_null_exemple) 
value ("test6",'2022-01-06', 1, 'des valeurs encore');

insert into exemple(nom_exemple, date_exemple,valide_exemple, pas_null_exemple)
value("test1", "2022-01-05",0, "exemple");

insert into exemple(nom_exemple, date_exemple,valide_exemple, pas_null_exemple)
value("test2", "2019-05-26",1, "contenu");
-- insertion de données multiple
insert into exemple(nom_exemple, date_exemple, valide_exemple, pas_null_exemple) values
("ajout multiple", '2021-12-25', 1, 'contenu'),
("ajout multiple 2", '2021-08-28', 0, 'contenu bis'),
("ajout multiple 3", '2022-01-05', 1, 'contenu bis bis');

insert into exemple(nom_exemple, date_exemple, valide_exemple, pas_null_exemple) values
("test3", '2018-05-12', 0, 'texte'),
("test4", '2016-05-22', 1, 'texte multiple'),
("test5", '1999-09-23', 1, 'texte multiple encore');


