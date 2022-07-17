-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: study03
-- ------------------------------------------------------
-- Server version	5.7.38-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `blog_posts`
--
create database study03;
use study03;

DROP TABLE IF EXISTS `blog_posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog_posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `post_text` text,
  `user_name` varchar(100) DEFAULT NULL,
  `pass` varchar(100) DEFAULT NULL,
  `date_posted` datetime DEFAULT CURRENT_TIMESTAMP,
  `likes` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_posts`
--

LOCK TABLES `blog_posts` WRITE;
/*!40000 ALTER TABLE `blog_posts` DISABLE KEYS */;
INSERT INTO `blog_posts` VALUES (1,'복날의 유래','복날은 양력 7월 중순부터 8월 중순 사이의 초복, 중복, 말복을 모두 가리키는 말입니다. 하지로부터 세 번째 경일(庚日)을 초복(初伏), 네 번째 경일을 중복(中伏), 입추 후 첫째 경일을 말복(末伏)이라고 합니다. 양력으로 계산하면 초복은 7월 11일 경, 말복은 8월 16일 경입니다.\n    복날은 1년 중 가장 더운 기간입니다. 이 시기에는 모든 농작물이 부쩍 자라는 때이기도 한데요. 복날의 복은 엎드릴 복(伏)자를 쓰며, 엎드릴 복자는 개 옆에 사람이 있는 모양의 한자입니다. 이를 풀이해보면 사람이 더위에 지쳐서 엎드려 있어야 할 정도로 더운 날이라는 해석과 사람이 개를 잡아먹는 날이라는 해석, 이렇게 두 가지로 나뉘지요. 복날에 대한 기록이 처음 등장한 곳은 중국역사서 사마천의 『사기』입니다. 진나라의 덕공이 2년(기원전 676년)에 처음으로 복날을 만들어 개를 잡아 열독을 다스렸다는 기록이 있습니다.\n    [출처] 복날의 유래와 2019년 알아보기|작성자 레드스토리','red story','1234','2022-07-14 10:22:17',1),(2,'복날의 음식','복날은 일년 중 폭염이 내리쬐는 기간입니다. \n    일상 생활과 활동이 힘든 정도로 더운 까닭에 기운을 보충하기 위해 영양가가 많은 \n    고단백 음식을 먹어 영양분을 섭취하는데요. \n    이 기간에는 예로부터 수분과 단백질을 모두 섭취하기 위해 고기를 물에 끓인 \n    국물 고기 요리를 주로 섭취했으며, 지금까지 이어져 내려오고 있습니다. \n    복날의 대표 음식은 삼계탕과 보신탕인데요. \n    이외에도 다양한 고기로 만든 각종 보양식을 먹기도 합니다. \n    공통적인 것은 고기를 뜨거운 물에 팔팔 끓여서 뜨거운 상태로 먹는 국물 요리라는 점인데요. \n    열을 열로 다스린다는 이열치열로 구성된 것이 특징입니다. \n    오늘날의 복날은 “닭요리를 먹는 날”로 인식이 되어 있는데요. \n    꼭 삼계탕이 아니더라도, 찜닭이나 불닭, 때로는 치킨을 먹으며 \n    삼복 더위를 이기고자 하는 사람들도 많이 있습니다.','red story','1234','2022-07-14 10:23:33',0);
/*!40000 ALTER TABLE `blog_posts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-14 14:24:11
