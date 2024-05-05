-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: allergyawarenessapp
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int DEFAULT NULL,
  `product_name` varchar(500) DEFAULT NULL,
  `brand` varchar(100) DEFAULT NULL,
  `ingredients` varchar(2000) DEFAULT NULL,
  `contains_peanut` tinyint DEFAULT NULL,
  `cross_contamination` tinyint DEFAULT NULL,
  `weight` text,
  `barcode` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Baking Powder','Belbake','',1,1,'170g',4056489198529),(2,'Baking Soda','Belbake','',1,1,'200g',4056489175377),(3,'Caramel Sauce','Belbake','',1,1,'325g',4056489479246),(4,'Caster Sugar','Belbake','',0,1,'1kg',20172688),(5,'Chocolate Chips','Belbake','',1,1,'100g',20005238),(6,'Chocolate Sauce','Belbake','',1,0,'325g',4056489479222),(7,'Cocoa Powder','Belbake','',1,0,'250g',20068110),(8,'Cornflour','Belbake','',1,0,'400g',20012182),(9,'Demerara Sugar','Belbake','',1,0,'1kg',4056489059288),(10,'Granulated Sugar','Belbake','',0,0,'1kg',20172695),(11,'Icing Sugar','Belbake','',1,0,'500g',20172671),(12,'Light brown sugar','Belbake','',1,1,'500g',4056489377603),(13,'Roll Out Icing','Belbake','',1,1,'250g',20601591),(14,'Soft darkbrown sugar','Belbake','',0,1,'500g',4056489377597),(15,'Strawberry Sauce','Belbake','',1,1,'325g',4056489479239),(16,'Sugar Decorations','Belbake','',1,0,'100g/90g/95g',20501730),(17,'Yeast','Belbake','',1,0,'42g',20358228),(18,'Brie Wedge 60%','Chêne d\'Argent','',1,0,'200g',20024727),(19,'Sweetener tablets 100piece','Cologran','',0,0,'100piece/300piece',4056489210153),(20,'Sweetener tablets 300 piece','Cologran','',1,0,'100piece/300piece',4056489210160),(21,'100% Irish Creamery Butter','Dairy Manor','',1,0,'454g',20341602),(22,'100% Irish Unsalted Butter','Dairy Manor','',1,0,'227g',20484255),(23,'Irish Creamery Butter','Dairy Manor','',0,0,'227g',2083411),(24,'Gluten Free Pasta Fusillis','Free From','',1,0,'500g',20284244),(25,'Gluten Free Pasta Penne','Free From','',1,0,'500g',20401108),(26,'Gluten Free Pasta Spaghetti','Free From','',0,0,'500g',20284251),(27,'GF Chocolate Digestives','Just Free','',1,0,'200g',40874210),(28,'GF Digestives','Just Free','',0,1,'170g',40874203),(29,'GF Luxury Chocolate Cookies','Just Free','',1,0,'150g',40874234),(30,'GF Luxury Ginger Cookies','Just Free','',0,1,'150g',40874227),(31,'Apple and Pear Pouch','Lupilu','',0,0,'90g',20995621),(32,'F&V Multipack Pouch','Lupilu','',1,0,'4x90g',4056489314851),(33,'Garden fruit pouch','Lupilu','',1,1,'90g',20995607),(34,'Infant Apple Organic Juice 0g','Lupilu','',0,1,'500ml',20836009),(35,'Infant Apple&Blackcurrant Juice 0g','Lupilu','',1,1,'500ml',20835996),(36,'Lupilu F&V Pouch','Lupilu','',1,0,'4x90g',4056489314868),(37,'Mango Pouch','Lupilu','',1,0,'90g',20995614),(38,'Organic Baby Green Pouches','Lupilu','',1,0,'5x90g',4056489517986),(39,'Organic Baby Red and Purple Pouches','Lupilu','',1,1,'5x90g',4056489198741),(40,'Organic Baby Yellow Pouches','Lupilu','',1,0,'5x90g',4056489517993),(41,'Creamy Spreads - Herbs','Milbona','',0,0,'200g',20064457),(42,'Creamy Spreads - Light','Milbona','',1,1,'200g',20201234),(43,'Creamy Spreads - Natural','Milbona','',0,1,'200g',20064440),(44,'Creamy Spreads - Red Pepper & Chilli','Milbona','',1,1,'200g',20064464),(45,'Sweetened Condensed Milk','Dairy Manor','',1,0,'397g',4056489405337),(46,'Pilau Microwave Rice','Taste Of...','',1,0,'250g',20568221),(47,'Wholegrain Microwave Rice','Taste Of...','',0,1,'250g',20803353);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `symptoms`
--

DROP TABLE IF EXISTS `symptoms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `symptoms` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idUser` int NOT NULL,
  `symptom` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idUser` (`idUser`),
  CONSTRAINT `symptoms_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `symptoms`
--

LOCK TABLES `symptoms` WRITE;
/*!40000 ALTER TABLE `symptoms` DISABLE KEYS */;
INSERT INTO `symptoms` VALUES (1,4,'Sickness'),(2,4,'Death'),(3,4,'zcxz'),(4,4,'asdasda'),(5,9,'Headaches'),(6,9,'More pain'),(7,9,'Pain');
/*!40000 ALTER TABLE `symptoms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(200) NOT NULL,
  `user_surname` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(45) NOT NULL,
  `newsletter` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (4,'Mike','Thompson','mThompson@gmail.com','abc123.',1),(6,'Wendy','Michaels','wmich@gmail.com','abc123.',0),(7,'Joe','Nobody','jnobody@gmail.com','abc123.',1),(8,'MikeJ','Johnson','mJohnson@gmail.com','abc123.',1),(9,'Daniel','Garcia','dggz1993@gmail.com','abc123.',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-05  8:33:04
