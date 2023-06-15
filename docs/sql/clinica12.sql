-- MySQL dump 10.16  Distrib 10.1.21-MariaDB, for Win32 (AMD64)
--
-- Host: localhost    Database: localhost
-- ------------------------------------------------------
-- Server version	10.1.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `consultas`
--

DROP TABLE IF EXISTS `consultas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `consultas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pacienteid` int(11) DEFAULT NULL,
  `medicoid` int(11) DEFAULT NULL,
  `fechaconsulta` datetime DEFAULT NULL,
  `duracionminutos` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pacienteid` (`pacienteid`),
  KEY `medicoid` (`medicoid`),
  CONSTRAINT `consultas_ibfk_1` FOREIGN KEY (`pacienteid`) REFERENCES `pacientes` (`id`),
  CONSTRAINT `consultas_ibfk_2` FOREIGN KEY (`medicoid`) REFERENCES `medicos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consultas`
--

LOCK TABLES `consultas` WRITE;
/*!40000 ALTER TABLE `consultas` DISABLE KEYS */;
INSERT INTO `consultas` VALUES (1,1,1,'2023-06-01 09:30:00',30),(2,2,2,'2023-06-02 14:00:00',45),(3,3,3,'2023-06-03 10:15:00',20),(4,4,4,'2023-06-04 11:45:00',60),(5,5,5,'2023-06-05 15:30:00',30),(6,6,6,'2023-06-06 16:00:00',45),(7,7,7,'2023-06-07 09:00:00',30),(8,8,8,'2023-06-08 10:30:00',60),(9,9,9,'2023-06-09 14:30:00',45),(10,10,10,'2023-06-10 11:00:00',30);
/*!40000 ALTER TABLE `consultas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `formulas`
--

DROP TABLE IF EXISTS `formulas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `formulas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pacienteid` int(11) DEFAULT NULL,
  `medicoid` int(11) DEFAULT NULL,
  `fechaformula` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pacienteid` (`pacienteid`),
  KEY `medicoid` (`medicoid`),
  CONSTRAINT `formulas_ibfk_1` FOREIGN KEY (`pacienteid`) REFERENCES `pacientes` (`id`),
  CONSTRAINT `formulas_ibfk_2` FOREIGN KEY (`medicoid`) REFERENCES `medicos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `formulas`
--

LOCK TABLES `formulas` WRITE;
/*!40000 ALTER TABLE `formulas` DISABLE KEYS */;
INSERT INTO `formulas` VALUES (1,1,1,'2023-06-01'),(2,2,2,'2023-06-02'),(3,3,3,'2023-06-03'),(4,4,4,'2023-06-04'),(5,5,5,'2023-06-05'),(6,6,6,'2023-06-06'),(7,7,7,'2023-06-07'),(8,8,8,'2023-06-08'),(9,9,9,'2023-06-09'),(10,10,10,'2023-06-10');
/*!40000 ALTER TABLE `formulas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `habitaciones`
--

DROP TABLE IF EXISTS `habitaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `habitaciones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `numero` int(11) DEFAULT NULL,
  `tipo` varchar(50) DEFAULT NULL,
  `piso` int(11) DEFAULT NULL,
  `ocupada` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `habitaciones`
--

LOCK TABLES `habitaciones` WRITE;
/*!40000 ALTER TABLE `habitaciones` DISABLE KEYS */;
INSERT INTO `habitaciones` VALUES (1,101,'Individual',1,0),(2,102,'Individual',1,1),(3,103,'Individual',1,0),(4,201,'Individual',2,0),(5,202,'Individual',2,1),(6,203,'Individual',2,0),(7,301,'Compartida',3,0),(8,302,'Compartida',3,1),(9,303,'Compartida',3,1),(10,401,'Compartida',4,1);
/*!40000 ALTER TABLE `habitaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ingresos`
--

DROP TABLE IF EXISTS `ingresos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ingresos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pacienteid` int(11) DEFAULT NULL,
  `fechaingreso` date DEFAULT NULL,
  `diagnostico` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pacienteid` (`pacienteid`),
  CONSTRAINT `ingresos_ibfk_1` FOREIGN KEY (`pacienteid`) REFERENCES `pacientes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingresos`
--

LOCK TABLES `ingresos` WRITE;
/*!40000 ALTER TABLE `ingresos` DISABLE KEYS */;
INSERT INTO `ingresos` VALUES (1,1,'2023-06-01','Gripe'),(2,2,'2023-06-02','Alergia'),(3,3,'2023-06-03','Dolor de espalda'),(4,4,'2023-06-04','Hipertensión'),(5,5,'2023-06-05','Resfriado'),(6,6,'2023-06-06','Depresión'),(7,7,'2023-06-07','Migraña'),(8,8,'2023-06-08','Cáncer'),(9,9,'2023-06-09','Diabetes'),(10,10,'2023-06-10','Esguince');
/*!40000 ALTER TABLE `ingresos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medicamentos`
--

DROP TABLE IF EXISTS `medicamentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `medicamentos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `existencias` int(11) DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicamentos`
--

LOCK TABLES `medicamentos` WRITE;
/*!40000 ALTER TABLE `medicamentos` DISABLE KEYS */;
INSERT INTO `medicamentos` VALUES (1,'Paracetamol','Analgésico y antipirético',100,5.99),(2,'Amoxicilina','Antibiótico',50,10.99),(3,'Ibuprofeno','Antiinflamatorio',80,8.50),(4,'Omeprazol','Inhibidor de la bomba de protones',60,12.75),(5,'Loratadina','Antihistamínico',70,7.25),(6,'Simvastatina','Estatina para reducir el colesterol',40,15.50),(7,'Metformina','Antidiabético oral',90,9.99),(8,'Salbutamol','Broncodilatador',30,6.50),(9,'Diazepam','Ansiolítico y sedante',20,10.50),(10,'Tramadol','Analgésico opioide',10,18.75);
/*!40000 ALTER TABLE `medicamentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medicamentos_formulas`
--

DROP TABLE IF EXISTS `medicamentos_formulas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `medicamentos_formulas` (
  `medicamentosid` int(11) NOT NULL,
  `formulasid` int(11) NOT NULL,
  `cantidad` int(11) DEFAULT NULL,
  PRIMARY KEY (`medicamentosid`,`formulasid`),
  KEY `formulasid` (`formulasid`),
  CONSTRAINT `medicamentos_formulas_ibfk_1` FOREIGN KEY (`medicamentosid`) REFERENCES `medicamentos` (`id`),
  CONSTRAINT `medicamentos_formulas_ibfk_2` FOREIGN KEY (`formulasid`) REFERENCES `formulas` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicamentos_formulas`
--

LOCK TABLES `medicamentos_formulas` WRITE;
/*!40000 ALTER TABLE `medicamentos_formulas` DISABLE KEYS */;
INSERT INTO `medicamentos_formulas` VALUES (1,1,2),(2,2,1),(3,3,3),(4,4,2),(5,5,1),(6,6,2),(7,7,3),(8,8,1),(9,9,2),(10,10,1);
/*!40000 ALTER TABLE `medicamentos_formulas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medicos`
--

DROP TABLE IF EXISTS `medicos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `medicos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `especialidad` varchar(50) DEFAULT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `correoe` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicos`
--

LOCK TABLES `medicos` WRITE;
/*!40000 ALTER TABLE `medicos` DISABLE KEYS */;
INSERT INTO `medicos` VALUES (1,'Dr. Rodriguez','Cardiología','555-1234','rodriguez@example.com'),(2,'Dra. Sanchez','Pediatría','555-5678','sanchez@example.com'),(3,'Dr. Ramirez','Dermatología','555-9876','ramirez@example.com'),(4,'Dra. Martinez','Ginecología','555-5432','martinez@example.com'),(5,'Dr. Torres','Oftalmología','555-1111','torres@example.com'),(6,'Dra. Gomez','Psicología','555-2222','gomez@example.com'),(7,'Dr. Castro','Neurología','555-3333','castro@example.com'),(8,'Dra. Morales','Oncología','555-4444','morales@example.com'),(9,'Dr. Perez','Ortopedia','555-8888','perez@example.com'),(10,'Dra. Lopez','Endocrinología','555-9999','lopez@example.com');
/*!40000 ALTER TABLE `medicos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pacientes`
--

DROP TABLE IF EXISTS `pacientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pacientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `fechanacimiento` date DEFAULT NULL,
  `genero` varchar(10) DEFAULT NULL,
  `direccion` varchar(200) DEFAULT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pacientes`
--

LOCK TABLES `pacientes` WRITE;
/*!40000 ALTER TABLE `pacientes` DISABLE KEYS */;
INSERT INTO `pacientes` VALUES (1,'Juan Perez','1990-05-15','Masculino','Calle 123, Ciudad','1234567890'),(2,'Maria Lopez','1985-12-03','Femenino','Avenida 456, Ciudad','9876543210'),(3,'Pedro Rodriguez','1978-08-21','Masculino','Avenida 789, Ciudad','5555555555'),(4,'Laura Gomez','1995-02-10','Femenino','Calle 789, Ciudad','6666666666'),(5,'Carlos Martinez','1982-11-17','Masculino','Calle 456, Ciudad','7777777777'),(6,'Ana Sanchez','1998-07-25','Femenino','Avenida 123, Ciudad','8888888888'),(7,'David Torres','1975-09-03','Masculino','Avenida 456, Ciudad','9999999999'),(8,'Sofia Ramirez','1989-12-30','Femenino','Calle 789, Ciudad','1010101010'),(9,'Luisa Castro','1992-03-18','Femenino','Calle 123, Ciudad','1212121212'),(10,'Daniel Morales','1987-06-05','Masculino','Avenida 789, Ciudad','1414141414');
/*!40000 ALTER TABLE `pacientes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-14 21:19:29
