-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 28, 2026 at 11:52 PM
-- Server version: 9.1.0
-- PHP Version: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `darksouls`
--

-- --------------------------------------------------------

--
-- Table structure for table `characters`
--

DROP TABLE IF EXISTS `characters`;
CREATE TABLE IF NOT EXISTS `characters` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `level` int DEFAULT NULL,
  `class` varchar(50) DEFAULT NULL,
  `faction_id` int DEFAULT NULL,
  `weapon_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `faction_id` (`faction_id`),
  KEY `weapon_id` (`weapon_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `characters`
--

INSERT INTO `characters` (`id`, `name`, `level`, `class`, `faction_id`, `weapon_id`) VALUES
(1, 'Solaire', 10, 'Knight', 1, 1),
(2, 'Ingward', 12, 'Sorcerer', 2, 3),
(4, 'Eingyi', 9, 'Pyromancer', 4, 7),
(5, 'Shiva', 20, 'Assassin', 5, 4);

-- --------------------------------------------------------

--
-- Table structure for table `factions`
--

DROP TABLE IF EXISTS `factions`;
CREATE TABLE IF NOT EXISTS `factions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `alignment` varchar(50) DEFAULT NULL,
  `leader` varchar(50) DEFAULT NULL,
  `territory` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `factions`
--

INSERT INTO `factions` (`id`, `name`, `alignment`, `leader`, `territory`) VALUES
(1, 'Warriors Of Dark', 'Evil', 'Gwyn\'s Firstborn', 'Anor Londo'),
(2, 'Darkwraiths', 'Evil', 'Darkstalker Kaathe', 'New Londo'),
(3, 'Blade of the Darkmoon', 'Lawful', 'Dark Sun Gwyndolin', 'Anor Londo'),
(4, 'Daughters of Chaos', 'Neutral', 'The Fair Lady', 'Quelaag\'s Domain'),
(5, 'Forest Hunters', 'Chaotic', 'Alvina', 'Darkroot Garden');

-- --------------------------------------------------------

--
-- Table structure for table `weapons`
--

DROP TABLE IF EXISTS `weapons`;
CREATE TABLE IF NOT EXISTS `weapons` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `damage` int DEFAULT NULL,
  `scaling` varchar(20) DEFAULT NULL,
  `weight` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `weapons`
--

INSERT INTO `weapons` (`id`, `name`, `damage`, `scaling`, `weight`) VALUES
(1, 'Longsword', 120, 'STR/DEX', 3.5),
(2, 'Greatsword', 200, 'STR', 8),
(3, 'Staff', 80, 'INT', 2),
(4, 'Dagger', 60, 'DEX', 1),
(5, 'Axe', 150, 'STR', 5),
(6, 'Mace', 140, 'STR', 4),
(7, 'Pyromancy Flame', 100, 'INT', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
