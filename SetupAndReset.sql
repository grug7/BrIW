Drop Database If Exists greg;
Create Database greg;
Use greg;

Drop Table If Exists tb_RoundOrders;
Drop Table If Exists tb_Rounds;
Drop Table If Exists tb_Preferences;
Drop Table If Exists tb_People;
Drop Table If Exists tb_Drinks;


CREATE TABLE `tb_Drinks` (
  `Drink_Id` int(11) NOT NULL AUTO_INCREMENT,
  `Drink_Name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Drink_Instructions` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`Drink_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `tb_People` (
  `Person_Id` int(11) NOT NULL AUTO_INCREMENT,
  `Person_First_Name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Person_Last_Name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Person_Team` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`Person_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `tb_Preferences` (
  `Pref_Id` int(11) NOT NULL AUTO_INCREMENT,
  `Pref_Person` int(11) NOT NULL,
  `Pref_Drink` int(11) NOT NULL,
  PRIMARY KEY (`Pref_Id`),
  KEY `Pref_Person` (`Pref_Person`),
  KEY `Pref_Drink` (`Pref_Drink`),
  CONSTRAINT `tb_Preferences_ibfk_1` FOREIGN KEY (`Pref_Person`) REFERENCES `tb_People` (`Person_Id`),
  CONSTRAINT `tb_Preferences_ibfk_2` FOREIGN KEY (`Pref_Drink`) REFERENCES `tb_Drinks` (`Drink_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `tb_Rounds` (
  `Round_Id` int(11) NOT NULL AUTO_INCREMENT,
  `Round_Active` tinyint(1) NOT NULL,
  `Round_StartTimeUTC` datetime NOT NULL,
  `Round_Initiator` int(11) NOT NULL,
  PRIMARY KEY (`Round_Id`),
  KEY `Round_Initiator` (`Round_Initiator`),
  CONSTRAINT `tb_Rounds_ibfk_1` FOREIGN KEY (`Round_Initiator`) REFERENCES `tb_People` (`Person_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `tb_Round_Orders` (
  `ROrder_Id` int(11) NOT NULL AUTO_INCREMENT,
  `ROrder_Round_Id` int(11) NOT NULL,
  `ROrder_Person` int(11) NOT NULL,
  `ROrder_Drink` int(11) NOT NULL,
  PRIMARY KEY (`ROrder_Id`),
  KEY `ROrder_Round_Id` (`ROrder_Round_Id`),
  KEY `ROrder_Person` (`ROrder_Person`),
  KEY `ROrder_Drink` (`ROrder_Drink`),
  CONSTRAINT `tb_RoundOrders_ibfk_1` FOREIGN KEY (`ROrder_Round_Id`) REFERENCES `tb_Rounds` (`Round_Id`),
  CONSTRAINT `tb_RoundOrders_ibfk_2` FOREIGN KEY (`ROrder_Person`) REFERENCES `tb_People` (`Person_Id`),
  CONSTRAINT `tb_RoundOrders_ibfk_3` FOREIGN KEY (`ROrder_Drink`) REFERENCES `tb_Drinks` (`Drink_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

Insert Into tb_Drinks (Drink_Name, Drink_Instructions) 
Values ("Tea", ""), #1
("Coffee", ""), #2
("Coke", ""), #3
("Fight Milk", ""), #4
("Dr Pepper", ""), #5
("Cow Milk", ""), #6
("NOT Cow Milk", ""); #7

Insert Into tb_People (Person_First_Name, Person_Last_Name)
Values ("Greg", "Ford"), #1
("Ghan", "Di"), #2
("Hugh", "Jazz"), #3
("Peter", "Ian Staker"), #4
("Moe", "Szyslak"), #5
("Joe", "Mama"), #6
("Whats", "Updog"), #7
("Ligma", "Balls"); #8

Insert Into tb_Preferences (Pref_Person, Pref_Drink)
Values (1, 7),
(3, 2),
(7, 6),
(6, 5),
(2, 3);

Insert Into tb_Rounds (Round_Active, Round_StartTimeUTC, Round_Initiator)
Values (0, UTC_TIMESTAMP(), 1), #1
(1, UTC_TIMESTAMP(), 4), #2
(1, UTC_TIMESTAMP(), 6); #3

Insert Into tb_Round_Orders (ROrder_Round_Id, ROrder_Person, ROrder_Drink)
Values (1, 6, 2), #1
(1, 2, 7), #2
(1, 4, 5), #3
(2, 1, 7), #4
(2, 6, 7), #5
(2, 5, 5), #6
(3, 2, 6), #7
(3, 4, 2), #8
(3, 6, 1); #9