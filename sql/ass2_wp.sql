-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 21, 2018 at 08:36 AM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ass2_wp`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id_admin` int(11) NOT NULL,
  `username` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `house_rent`
--

CREATE TABLE `house_rent` (
  `id_house` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `id_rent` int(11) NOT NULL,
  `date_start_rent` date NOT NULL,
  `date_end_rent` date NOT NULL,
  `error_sofa` tinyint(1) NOT NULL,
  `error_bedroom` tinyint(1) NOT NULL,
  `error_bathroom` tinyint(1) NOT NULL,
  `error_toilet` tinyint(1) NOT NULL,
  `error_bed` tinyint(1) NOT NULL,
  `error_air_conditioner` tinyint(1) NOT NULL,
  `error_tivi` tinyint(1) NOT NULL,
  `error_refrigerator` tinyint(1) NOT NULL,
  `error_washing_machine` tinyint(1) NOT NULL,
  `error_wall` tinyint(1) NOT NULL,
  `error_light` tinyint(1) NOT NULL,
  `error_floor` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `info_house`
--

CREATE TABLE `info_house` (
  `id_house` int(11) NOT NULL,
  `dien_tich` int(7) NOT NULL,
  `dai` int(7) NOT NULL,
  `rong` int(7) NOT NULL,
  `chung_cu` tinyint(1) NOT NULL,
  `floors` int(3) NOT NULL,
  `street` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `ward` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `district` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `city` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `number_people_in_house` int(11) NOT NULL,
  `validates` tinyint(1) NOT NULL,
  `status` int(1) NOT NULL,
  `description` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `image1` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `image2` int(100) NOT NULL,
  `image3` int(100) NOT NULL,
  `image4` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `info_user`
--

CREATE TABLE `info_user` (
  `id` int(11) NOT NULL,
  `id_house` int(11) NOT NULL,
  `username` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `firstname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `lastname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `date_of_birth` date NOT NULL,
  `foreign` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `idenntily_number` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `phone_number` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(70) COLLATE utf8_unicode_ci NOT NULL,
  `street` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `ward` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `district` int(50) NOT NULL,
  `city` int(50) NOT NULL,
  `have_house` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `service_available`
--

CREATE TABLE `service_available` (
  `id_house` int(11) NOT NULL,
  `sofa` tinyint(1) NOT NULL,
  `bedroom` int(5) NOT NULL,
  `bathroom` int(5) NOT NULL,
  `toilet` int(5) NOT NULL,
  `kitchen` tinyint(1) NOT NULL,
  `bed` int(5) NOT NULL,
  `garden` tinyint(1) NOT NULL,
  `wifi` tinyint(1) NOT NULL,
  `electricity` tinyint(1) NOT NULL,
  `water` tinyint(1) NOT NULL,
  `air_conditioner` tinyint(1) NOT NULL,
  `tivi` tinyint(1) NOT NULL,
  `refrigerator` tinyint(1) NOT NULL,
  `washing_machine` tinyint(1) NOT NULL,
  `pet` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id_admin`);

--
-- Indexes for table `house_rent`
--
ALTER TABLE `house_rent`
  ADD PRIMARY KEY (`id_house`);

--
-- Indexes for table `info_house`
--
ALTER TABLE `info_house`
  ADD UNIQUE KEY `id_house` (`id_house`);

--
-- Indexes for table `info_user`
--
ALTER TABLE `info_user`
  ADD PRIMARY KEY (`id_house`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `service_available`
--
ALTER TABLE `service_available`
  ADD PRIMARY KEY (`id_house`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id_admin` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `info_user`
--
ALTER TABLE `info_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `service_available`
--
ALTER TABLE `service_available`
  MODIFY `id_house` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `house_rent`
--
ALTER TABLE `house_rent`
  ADD CONSTRAINT `house_rent_ibfk_1` FOREIGN KEY (`id_house`) REFERENCES `info_house` (`id_house`);

--
-- Constraints for table `info_house`
--
ALTER TABLE `info_house`
  ADD CONSTRAINT `info_house_ibfk_1` FOREIGN KEY (`id_house`) REFERENCES `service_available` (`id_house`);

--
-- Constraints for table `info_user`
--
ALTER TABLE `info_user`
  ADD CONSTRAINT `info_user_ibfk_1` FOREIGN KEY (`id_house`) REFERENCES `info_house` (`id_house`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
