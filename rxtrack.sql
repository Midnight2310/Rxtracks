-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 21, 2024 at 04:52 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rxtrack`
--

-- --------------------------------------------------------

--
-- Table structure for table `inputstock`
--

CREATE TABLE `inputstock` (
  `no` int(11) NOT NULL,
  `input_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `inputstock`
--

INSERT INTO `inputstock` (`no`, `input_id`, `user_id`, `date`) VALUES
(1, 66001, 1, '2024-04-05 03:12:12');

-- --------------------------------------------------------

--
-- Table structure for table `medicine`
--

CREATE TABLE `medicine` (
  `med_id` int(4) NOT NULL,
  `name` varchar(20) NOT NULL,
  `status` varchar(20) NOT NULL,
  `description` varchar(50) NOT NULL,
  `medQuantity` int(3) NOT NULL,
  `unit_id` int(4) DEFAULT NULL,
  `type_id` int(4) NOT NULL,
  `location_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `medicine`
--

INSERT INTO `medicine` (`med_id`, `name`, `status`, `description`, `medQuantity`, `unit_id`, `type_id`, `location_id`) VALUES
(1, 'Paracetamol', 'ปกติ', 'ยาลดไข้', 96, 1, 1, 1),
(2, 'Chlorpheniramine', 'ใกล้หมดอายุ', 'ยาแก้แพ้', 35, 1, 2, 1),
(3, 'Mebendazole', 'ใกล้หมด', 'ยาถ่ายพยาธิ', 22, 1, 3, 2);

-- --------------------------------------------------------

--
-- Table structure for table `medlocation`
--

CREATE TABLE `medlocation` (
  `no` int(3) NOT NULL,
  `location_id` int(3) NOT NULL,
  `location_name` varchar(10) NOT NULL,
  `rack` varchar(10) NOT NULL,
  `room` varchar(10) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `medlocation`
--

INSERT INTO `medlocation` (`no`, `location_id`, `location_name`, `rack`, `room`, `quantity`) VALUES
(1, 1, 'A', 'R01', '205', 50),
(2, 2, 'B', 'R01', '205', 50);

-- --------------------------------------------------------

--
-- Table structure for table `medtype`
--

CREATE TABLE `medtype` (
  `type_id` int(4) NOT NULL,
  `medType` varchar(20) NOT NULL,
  `medTypeDetail` varchar(50) DEFAULT NULL,
  `Date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `medtype`
--

INSERT INTO `medtype` (`type_id`, `medType`, `medTypeDetail`, `Date`) VALUES
(1, 'ยาแก้ปวด', '...................', '2024-03-26 13:05:53'),
(2, 'ยาแก้ภูมิแพ้', '...................', '2024-04-08 16:27:46'),
(3, 'ยาถ่ายพยาธิ', '...................', '2024-04-08 16:27:57');

-- --------------------------------------------------------

--
-- Table structure for table `medunit`
--

CREATE TABLE `medunit` (
  `unit_id` int(4) NOT NULL,
  `medUnit` varchar(20) NOT NULL,
  `Date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `medunit`
--

INSERT INTO `medunit` (`unit_id`, `medUnit`, `Date`) VALUES
(1, 'กระปุก', '2024-03-26 07:28:18'),
(2, 'ขวด', '2024-04-08 18:18:01'),
(3, 'แผง', '2024-04-08 18:18:01');

-- --------------------------------------------------------

--
-- Table structure for table `outputstock`
--

CREATE TABLE `outputstock` (
  `no` int(11) NOT NULL,
  `output_id` varchar(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `patient_id` varchar(11) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `outputstock`
--

INSERT INTO `outputstock` (`no`, `output_id`, `user_id`, `patient_id`, `date`) VALUES
(1, 'O6600001', 1, 'P660001', '2024-04-05 08:25:00'),
(2, 'O6600002', 1, 'P660001', '2024-04-21 20:58:21');

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE `patient` (
  `patient_id` varchar(11) NOT NULL,
  `patient_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`patient_id`, `patient_name`) VALUES
('P660001', 'Patient Patient');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(4) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` int(20) NOT NULL,
  `name` varchar(30) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL,
  `email` varchar(30) NOT NULL,
  `tel` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `username`, `password`, `name`, `isAdmin`, `email`, `tel`) VALUES
(1, 'admin', 1234, 'Pitchaya Hutajuta', 1, 'Pitchaya.hut@spumail.net', '0000000000');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `inputstock`
--
ALTER TABLE `inputstock`
  ADD PRIMARY KEY (`input_id`),
  ADD KEY `user_id fk` (`user_id`);

--
-- Indexes for table `medicine`
--
ALTER TABLE `medicine`
  ADD PRIMARY KEY (`med_id`),
  ADD KEY `fk_medtype` (`type_id`),
  ADD KEY `fk_medunit` (`unit_id`),
  ADD KEY `fk_location` (`location_id`);

--
-- Indexes for table `medlocation`
--
ALTER TABLE `medlocation`
  ADD PRIMARY KEY (`location_id`),
  ADD UNIQUE KEY `no_2` (`no`),
  ADD UNIQUE KEY `no_4` (`no`),
  ADD KEY `no` (`no`),
  ADD KEY `no_3` (`no`);

--
-- Indexes for table `medtype`
--
ALTER TABLE `medtype`
  ADD PRIMARY KEY (`type_id`);

--
-- Indexes for table `medunit`
--
ALTER TABLE `medunit`
  ADD PRIMARY KEY (`unit_id`);

--
-- Indexes for table `outputstock`
--
ALTER TABLE `outputstock`
  ADD PRIMARY KEY (`output_id`),
  ADD KEY `patient_fk` (`patient_id`),
  ADD KEY `user_fk` (`user_id`);

--
-- Indexes for table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`patient_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `inputstock`
--
ALTER TABLE `inputstock`
  MODIFY `input_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66002;

--
-- AUTO_INCREMENT for table `medicine`
--
ALTER TABLE `medicine`
  MODIFY `med_id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `inputstock`
--
ALTER TABLE `inputstock`
  ADD CONSTRAINT `user_id fk` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `medicine`
--
ALTER TABLE `medicine`
  ADD CONSTRAINT `fk_location` FOREIGN KEY (`location_id`) REFERENCES `medlocation` (`location_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_medtype` FOREIGN KEY (`type_id`) REFERENCES `medtype` (`type_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_medunit` FOREIGN KEY (`unit_id`) REFERENCES `medunit` (`unit_id`) ON DELETE CASCADE;

--
-- Constraints for table `outputstock`
--
ALTER TABLE `outputstock`
  ADD CONSTRAINT `patient_fk` FOREIGN KEY (`patient_id`) REFERENCES `patient` (`patient_id`),
  ADD CONSTRAINT `user_fk` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
