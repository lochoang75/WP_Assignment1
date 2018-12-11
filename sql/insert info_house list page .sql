-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 11, 2018 lúc 12:32 PM
-- Phiên bản máy phục vụ: 10.1.36-MariaDB
-- Phiên bản PHP: 7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `examples`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `info_house`
--

CREATE TABLE `info_house` (
  `id_house` int(11) NOT NULL,
  `dien_tich` int(4) NOT NULL,
  `dai` int(4) NOT NULL,
  `rong` int(4) NOT NULL,
  `chung_cu` tinyint(1) NOT NULL,
  `floors` int(3) NOT NULL,
  `street` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `ward` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `district` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `city` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `number_people_in_house` int(3) NOT NULL,
  `validates` tinyint(1) NOT NULL,
  `status` int(1) NOT NULL,
  `description` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `image1` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `image2` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `image3` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `image4` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `sofa` int(1) NOT NULL,
  `bedroom` int(2) NOT NULL,
  `bathroom` int(2) NOT NULL,
  `toilet` int(2) NOT NULL,
  `kitchen` tinyint(1) NOT NULL,
  `bed` int(2) NOT NULL,
  `garden` tinyint(1) NOT NULL,
  `wifi` tinyint(1) NOT NULL,
  `electricity` tinyint(1) NOT NULL,
  `water` tinyint(1) NOT NULL,
  `air_conditioner` tinyint(1) NOT NULL,
  `tivi` tinyint(1) NOT NULL,
  `refrigerator` tinyint(1) NOT NULL,
  `washing_machine` tinyint(1) NOT NULL,
  `pet` tinyint(1) NOT NULL,
  `loaicanho` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `loaiduan` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `noithat` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `info_house`
--

INSERT INTO `info_house` (`id_house`, `dien_tich`, `dai`, `rong`, `chung_cu`, `floors`, `street`, `ward`, `district`, `city`, `number_people_in_house`, `validates`, `status`, `description`, `price`, `image1`, `image2`, `image3`, `image4`, `sofa`, `bedroom`, `bathroom`, `toilet`, `kitchen`, `bed`, `garden`, `wifi`, `electricity`, `water`, `air_conditioner`, `tivi`, `refrigerator`, `washing_machine`, `pet`, `loaicanho`, `loaiduan`, `noithat`) VALUES
(1, 40, 10, 4, 0, 3, '200 Tran Hung Dao', '15', '1', 'Ho Chi Minh', 3, 1, 1, 'Co ma', 1000, 'https://i.imgur.com/D51owMM.jpg', 'https://i.imgur.com/XPlofH1.jpg', 'https://i.imgur.com/uG0uErj.jpg', '', 2, 2, 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Apartment', 'Masteri Thao Dien', 'Noi that day du'),
(2, 80, 20, 4, 0, 3, '300 Tran Hung Dao', '15', '1', 'Ho Chi Minh', 3, 1, 1, 'Co ma', 1000, 'https://i.imgur.com/4Lm44xW.jpg', 'https://i.imgur.com/XPlofH1.jpg', 'https://i.imgur.com/uG0uErj.jpg', '', 3, 3, 3, 3, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Apartment', 'Masteri Thao Dien', 'Noi that day du'),
(3, 40, 10, 4, 0, 3, '300 Tran Hung Dao', '15', '1', 'Ho Chi Minh', 3, 1, 1, 'Co ma', 1000, 'https://i.imgur.com/Dl7RA9I.jpg', 'https://i.imgur.com/XPlofH1.jpg', 'https://i.imgur.com/uG0uErj.jpg', '', 3, 3, 3, 3, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 'Apartment', 'Masteri Thao Dien', 'Noi that day du'),
(4, 40, 10, 4, 0, 3, '300 Tran Hung Dao', '15', '1', 'Ho Chi Minh', 3, 1, 1, 'Co ma', 1100, 'https://i.imgur.com/ICsVgFK.jpg', 'https://i.imgur.com/XPlofH1.jpg', 'https://i.imgur.com/uG0uErj.jpg', '', 3, 3, 3, 3, 0, 3, 0, 1, 0, 0, 0, 0, 0, 0, 0, 'Apartment', 'Masteri Thao Dien', 'Noi that day du'),
(5, 40, 10, 4, 0, 3, '300 Tran Hung Dao', '15', '1', 'Ho Chi Minh', 3, 1, 1, 'Co ma', 1200, 'https://i.imgur.com/PUzF6Yk.jpg', 'https://i.imgur.com/XPlofH1.jpg', 'https://i.imgur.com/uG0uErj.jpg', '', 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 'Apartment', 'Masteri Thao Dien', 'Noi that day du'),
(6, 40, 10, 4, 0, 3, '300 Tran Hung Dao', '15', '1', 'Ho Chi Minh', 3, 1, 1, 'Co ma', 1300, 'https://i.imgur.com/zEn63Te.jpg', 'https://i.imgur.com/XPlofH1.jpg', 'https://i.imgur.com/uG0uErj.jpg', '', 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 'Apartment', 'Masteri Thao Dien', 'Noi that day du'),
(7, 40, 10, 4, 0, 3, '300 Tran Hung Dao', '15', '1', 'Ho Chi Minh', 3, 1, 1, 'Co ma', 1400, 'https://i.imgur.com/8135fuP.jpg', 'https://i.imgur.com/XPlofH1.jpg', 'https://i.imgur.com/uG0uErj.jpg', '', 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 'Apartment', 'Masteri Thao Dien', 'Noi that day du'),
(8, 40, 10, 4, 0, 3, '300 Tran Hung Dao', '15', '1', 'Ho Chi Minh', 3, 1, 1, 'Co ma', 1400, 'https://i.imgur.com/T5D71AD.jpg', 'https://i.imgur.com/XPlofH1.jpg', 'https://i.imgur.com/uG0uErj.jpg', '', 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 'Apartment', 'Masteri Thao Dien', 'Noi that day du'),
(9, 40, 10, 4, 0, 3, '300 Tran Hung Dao', '15', '1', 'Ho Chi Minh', 3, 1, 1, 'Co ma', 1500, 'https://i.imgur.com/6q5J7eX.jpg', 'https://i.imgur.com/XPlofH1.jpg', 'https://i.imgur.com/uG0uErj.jpg', '', 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 'Apartment', 'Masteri Thao Dien', 'Noi that day du'),
(10, 40, 10, 4, 0, 3, '300 Tran Hung Dao', '15', '1', 'Ho Chi Minh', 4, 1, 1, 'Co ma', 1600, 'https://i.imgur.com/J36DiPx.jpg', 'https://i.imgur.com/XPlofH1.jpg', 'https://i.imgur.com/uG0uErj.jpg', '', 4, 4, 4, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1, 0, 'Apartment', 'Masteri Thao Dien', 'Noi that day du'),
(11, 40, 10, 4, 0, 3, '300 Tran Hung Dao', '15', '1', 'Ho Chi Minh', 2, 1, 1, 'Co ma', 1600, 'https://i.imgur.com/YQuXZTR.jpg', 'https://i.imgur.com/XPlofH1.jpg', 'https://i.imgur.com/uG0uErj.jpg', '', 4, 4, 4, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 'Apartment', 'Masteri Thao Dien', 'Nội thất đầy đủ'),
(12, 40, 10, 4, 0, 3, '300 Tran Hung Dao', '5', '2', 'Ho Chi Minh', 2, 1, 1, 'Co ma', 1700, 'https://i.imgur.com/ZbOWJ9K.jpg', 'https://i.imgur.com/XPlofH1.jpg', 'https://i.imgur.com/uG0uErj.jpg', '', 4, 4, 4, 4, 0, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 'Apartment', 'Masteri Thao Dien', 'Noi that day du'),
(13, 40, 10, 4, 0, 3, '300 Tran Hung Dao', '5', '2', 'Ho Chi Minh', 3, 1, 1, 'Co ma', 1800, 'https://i.imgur.com/kMcL6Ct.jpg', 'https://i.imgur.com/XPlofH1.jpg', 'https://i.imgur.com/uG0uErj.jpg', '', 3, 3, 3, 3, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Apartment', 'Masteri Thao Dien', 'Noi that day du'),
(14, 40, 10, 4, 0, 3, '300 Tran Hung Dao', '5', '2', 'Ho Chi Minh', 5, 1, 1, 'Co ma', 1900, 'https://i.imgur.com/OFK9ANh.jpg', 'https://i.imgur.com/XPlofH1.jpg', 'https://i.imgur.com/uG0uErj.jpg', '', 3, 3, 3, 3, 0, 3, 0, 1, 0, 0, 0, 0, 0, 0, 0, 'Apartment', 'Masteri Thao Dien', 'Noi that day du'),
(15, 40, 10, 4, 0, 3, '300 Tran Hung Dao', '5', '2', 'Ho Chi Minh', 5, 1, 1, 'Co Quy', 1900, 'https://i.imgur.com/OFK9ANh.jpg', 'https://i.imgur.com/XPlofH1.jpg', 'https://i.imgur.com/uG0uErj.jpg', '', 3, 3, 3, 3, 0, 3, 0, 1, 0, 0, 0, 0, 0, 0, 0, 'Apartment', 'Masteri Thao Dien', 'Noi that day du'),
(16, 40, 10, 4, 0, 3, '300 Tran Hung Dao', '5', '2', 'Ho Chi Minh', 6, 1, 1, 'Co Quy', 2000, 'https://i.imgur.com/w8cplhX.jpg', 'https://i.imgur.com/XPlofH1.jpg', 'https://i.imgur.com/uG0uErj.jpg', '', 3, 3, 3, 3, 0, 3, 0, 0, 1, 0, 0, 0, 0, 0, 0, 'Apartment', 'Masteri Thao Dien', 'Noi that day du'),
(17, 40, 10, 4, 0, 3, '300 Tran Hung Dao', '5', '2', 'Ho Chi Minh', 7, 1, 1, 'Co Quy', 2000, 'https://i.imgur.com/MPgdojU.jpg', 'https://i.imgur.com/XPlofH1.jpg', 'https://i.imgur.com/uG0uErj.jpg', '', 3, 3, 3, 3, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 'Apartment', 'Masteri Thao Dien', 'Noi that day du'),
(18, 40, 10, 4, 0, 3, '300 Tran Hung Dao', '5', '2', 'Ho Chi Minh', 2, 1, 1, 'Co Quy', 2100, 'https://i.imgur.com/v3f3Qni.jpg', 'https://i.imgur.com/XPlofH1.jpg', 'https://i.imgur.com/uG0uErj.jpg', '', 2, 2, 2, 2, 0, 23, 0, 0, 0, 0, 1, 0, 0, 0, 0, 'Apartment', 'Masteri Thao Dien', 'Noi that day du'),
(19, 40, 10, 4, 0, 3, '300 Tran Hung Dao', '5', '2', 'Ho Chi Minh', 2, 1, 1, 'Co Quy', 2200, 'https://i.imgur.com/xrjoPCL.jpg', 'https://i.imgur.com/XPlofH1.jpg', 'https://i.imgur.com/uG0uErj.jpg', '', 2, 2, 2, 2, 0, 23, 0, 0, 0, 0, 0, 1, 0, 0, 0, 'Apartment', 'Masteri Thao Dien', 'Noi that day du'),
(20, 40, 10, 4, 0, 3, '300 Tran Hung Dao', '5', '2', 'Ho Chi Minh', 1, 1, 1, 'Co Quy', 2300, 'https://i.imgur.com/tz5TLgw.jpg', 'https://i.imgur.com/XPlofH1.jpg', 'https://i.imgur.com/uG0uErj.jpg', '', 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 'Apartment', 'Masteri Thao Dien', 'Noi that day du'),
(21, 40, 10, 4, 0, 3, '300 Tran Hung Dao', '5', '2', 'Ho Chi Minh', 1, 1, 1, 'Co Quy', 2500, 'https://i.imgur.com/cnZMENZ.jpg', 'https://i.imgur.com/XPlofH1.jpg', 'https://i.imgur.com/uG0uErj.jpg', '', 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 'Apartment', 'Masteri Thao Dien', 'Noi that day du'),
(22, 40, 10, 4, 0, 3, '300 Tran Hung Dao', '5', '2', 'Ho Chi Minh', 1, 1, 1, 'Co Quy', 2600, 'https://i.imgur.com/o7vGoqt.jpg', 'https://i.imgur.com/XPlofH1.jpg', 'https://i.imgur.com/uG0uErj.jpg', '', 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 'Apartment', 'Masteri Thao Dien', 'Nội thất đầy đủ'),
(23, 40, 10, 4, 0, 3, '300 Tran Hung Dao', '5', '2', 'Ho Chi Minh', 3, 1, 1, 'Co Quy', 2800, 'https://i.imgur.com/5ePOQSS.jpg', 'https://i.imgur.com/XPlofH1.jpg', 'https://i.imgur.com/uG0uErj.jpg', '', 5, 5, 5, 5, 1, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Apartment', 'Masteri Thao Dien', 'Nội thất đầy đủ');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `info_house`
--
ALTER TABLE `info_house`
  ADD PRIMARY KEY (`id_house`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `info_house`
--
ALTER TABLE `info_house`
  MODIFY `id_house` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
