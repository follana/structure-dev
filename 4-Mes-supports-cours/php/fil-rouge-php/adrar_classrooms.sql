-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : jeu. 19 jan. 2023 à 01:02
-- Version du serveur : 8.0.31
-- Version de PHP : 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `adrar_classrooms`
--

-- --------------------------------------------------------

--
-- Structure de la table `avis`
--

DROP TABLE IF EXISTS `avis`;
CREATE TABLE IF NOT EXISTS `avis` (
  `avis_id` int NOT NULL AUTO_INCREMENT,
  `avis_contenu` text COLLATE utf8mb4_general_ci NOT NULL,
  `id_utilisateur` int NOT NULL,
  PRIMARY KEY (`avis_id`),
  KEY `id_utilisateur` (`id_utilisateur`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `chapitres`
--

DROP TABLE IF EXISTS `chapitres`;
CREATE TABLE IF NOT EXISTS `chapitres` (
  `chapitre_id` int NOT NULL AUTO_INCREMENT,
  `chapitre_titre` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `chapitre_contenu` longtext COLLATE utf8mb4_general_ci NOT NULL,
  `chapitre_position` int NOT NULL,
  `id_cours` int NOT NULL,
  PRIMARY KEY (`chapitre_id`),
  KEY `id_cours` (`id_cours`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `cours`
--

DROP TABLE IF EXISTS `cours`;
CREATE TABLE IF NOT EXISTS `cours` (
  `cours_id` int NOT NULL AUTO_INCREMENT,
  `cours_titre` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `cours_synopsis` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `cours_niveau` tinyint(1) NOT NULL COMMENT '0: Facile ; 1: Moyen ; 2: Difficile ; 3: Extrême',
  `cours_temps_estime` int NOT NULL COMMENT 'En heures',
  `cours_image` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `cours_date` date NOT NULL,
  `cours_cree` tinyint(1) NOT NULL COMMENT '0: Cours mis à jour ; 1: Cours créé',
  PRIMARY KEY (`cours_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

DROP TABLE IF EXISTS `utilisateurs`;
CREATE TABLE IF NOT EXISTS `utilisateurs` (
  `utilisateur_id` int NOT NULL AUTO_INCREMENT,
  `utilisateur_nom` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `utilisateur_prenom` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `utilisateur_email` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `utilisateur_mot_de_passe` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `utilisateur_image` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`utilisateur_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs_chapitres`
--

DROP TABLE IF EXISTS `utilisateurs_chapitres`;
CREATE TABLE IF NOT EXISTS `utilisateurs_chapitres` (
  `utilisateur_chapitre_id` int NOT NULL AUTO_INCREMENT,
  `utilisateur_chapitre_date_inscription` date NOT NULL,
  `utilisateur_chapitre_termine` tinyint(1) NOT NULL COMMENT '0: Non ; 1: Oui',
  PRIMARY KEY (`utilisateur_chapitre_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
