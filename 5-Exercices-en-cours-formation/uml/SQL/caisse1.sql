--
-- Base de données : `caisse`
--
CREATE DATABASE caisse;
USE caisse;
-- --------------------------------------------------------

--
-- Structure de la table `ajouter`
--

CREATE TABLE `ajouter` (
  `id_article` int(11) NOT NULL,
  `id_ticket` int(11) NOT NULL,
  `qtx_article` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `ajouter`
--

INSERT INTO `ajouter` (`id_article`, `id_ticket`, `qtx_article`) VALUES
(1, 1, 5),
(1, 3, 8),
(2, 1, 8),
(2, 3, 6),
(3, 1, 10),
(4, 2, 1),
(5, 2, 4),
(5, 3, 4),
(8, 2, 14);

-- --------------------------------------------------------

--
-- Structure de la table `article`
--

CREATE TABLE `article` (
  `id_article` int(11) NOT NULL,
  `nom_article` varchar(50) NOT NULL,
  `description_article` varchar(250) NOT NULL,
  `prix_article` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `article`
--

INSERT INTO `article` (`id_article`, `nom_article`, `description_article`, `prix_article`) VALUES
(1, 'pain', 'baguette de pain', 0.9),
(2, 'chocolat', 'tablette de chocolat', 1.9),
(3, 'lait', 'bouteille', 1.2),
(4, 'cafe', 'paquet de 500 gr', 3.8),
(5, 'pomme de terre', 'kilo', 1.5),
(6, 'yaourt', 'nature pack de 16', 4.2),
(7, 'scotch', 'rouleau de scotch par 3', 5.6),
(8, 'tomate', 'kilo', 3.5);

-- --------------------------------------------------------

--
-- Structure de la table `ticket`
--

CREATE TABLE `ticket` (
  `id_ticket` int(11) NOT NULL,
  `date_ticket` datetime NOT NULL,
  `id_vendeur` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `ticket`
--

INSERT INTO `ticket` (`id_ticket`, `date_ticket`, `id_vendeur`) VALUES
(1, '2022-09-09 15:23:26', 2),
(2, '2022-08-03 14:08:33', 1),
(3, '2021-04-08 18:11:46', 3);

-- --------------------------------------------------------

--
-- Structure de la table `vendeur`
--

CREATE TABLE `vendeur` (
  `id_vendeur` int(11) NOT NULL,
  `nom_vendeur` varchar(50) NOT NULL,
  `prenom_vendeur` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `vendeur`
--

INSERT INTO `vendeur` (`id_vendeur`, `nom_vendeur`, `prenom_vendeur`) VALUES
(1, 'Bonnet', 'Julie'),
(2, 'Dupond', 'Camille'),
(3, 'Antoine', 'Marc');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `ajouter`
--
ALTER TABLE `ajouter`
  ADD PRIMARY KEY (`id_article`,`id_ticket`),
  ADD KEY `FK_ajouter_ticket` (`id_ticket`);

--
-- Index pour la table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id_article`);

--
-- Index pour la table `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`id_ticket`),
  ADD KEY `FK_vendre_vendeur` (`id_vendeur`);

--
-- Index pour la table `vendeur`
--
ALTER TABLE `vendeur`
  ADD PRIMARY KEY (`id_vendeur`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `article`
--
ALTER TABLE `article`
  MODIFY `id_article` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `ticket`
--
ALTER TABLE `ticket`
  MODIFY `id_ticket` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `vendeur`
--
ALTER TABLE `vendeur`
  MODIFY `id_vendeur` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `ajouter`
--
ALTER TABLE `ajouter`
  ADD CONSTRAINT `FK_ajouter_article` FOREIGN KEY (`id_article`) REFERENCES `article` (`id_article`),
  ADD CONSTRAINT `FK_ajouter_ticket` FOREIGN KEY (`id_ticket`) REFERENCES `ticket` (`id_ticket`);

--
-- Contraintes pour la table `ticket`
--
ALTER TABLE `ticket`
  ADD CONSTRAINT `FK_vendre_vendeur` FOREIGN KEY (`id_vendeur`) REFERENCES `vendeur` (`id_vendeur`);


-- Exercice 1 caisse:

select id_ticket, date_ticket, nom_vendeur, prenom_vendeur from ticket inner join vendeur
on ticket.id_vendeur = vendeur.id_vendeur;

select nom_article, qtx_article, prix_article from article inner join ticket on ticket.id_ticket=1 
inner join ajouter on ajouter.id_article = article.id_article ;

select nom_article, ajouter.id_article, qtx_article from ajouter inner join ticket on ajouter.id_article=ticket.id_ticket 
inner join article on article.id_article= ticket.id_ticket
where date_ticket<'2022-01-01 00:00:00';

-- les fonctions en SQL

select sum(prix_article) as prix_total from article;

select sum(prix_article*qtx_article) as somme_article_quantite from article 
inner join ajouter on article.id_article= ajouter.id_article;

select round(sum(prix_article*qtx_article),2) as total_ticket from article 
inner join ajouter on article.id_article= ajouter.id_article 
where ajouter.id_ticket =1;

SELECT ajouter.id_article, nom_article, prix_article, qtx_article, 
round((qtx_article * prix_article),2) as sous_total, 
(select round(sum(prix_article*qtx_article),2) 
FROM ajouter INNER join article on ajouter.id_article = article.id_article 
WHERE ajouter.id_ticket = 1) AS total
FROM ajouter INNER join article on ajouter.id_article = article.id_article 
WHERE ajouter.id_ticket = 1;


-- chiffre d'affaire (qtx *prix de vente)

select nom_vendeur, prenom_vendeur,round(sum(qtx_article*prix_article),2) as chiffre_affaire from ajouter 
inner join article on article.id_article =ajouter.id_article
inner join ticket on ajouter.id_ticket =ticket.id_ticket
inner join vendeur on vendeur.id_vendeur= ticket.id_vendeur
group by vendeur.id_vendeur;