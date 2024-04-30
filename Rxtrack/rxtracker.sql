-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Apr 28, 2024 at 01:37 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rxtracker`
--

-- --------------------------------------------------------

--
-- Table structure for table `datauser`
--

CREATE TABLE `datauser` (
  `id` int(10) NOT NULL,
  `user` varchar(20) NOT NULL,
  `pass` varchar(10) NOT NULL,
  `name` varchar(20) NOT NULL,
  `role` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `tel` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `datauser`
--

INSERT INTO `datauser` (`id`, `user`, `pass`, `name`, `role`, `email`, `tel`) VALUES
(1, 'risa', '0000', 'risa', 'admin', 'risa@gmail.com', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `datauser`
--
ALTER TABLE `datauser`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `datauser`
--
ALTER TABLE `datauser`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
