DROP TABLE IF EXISTS tb_RoundOrders;
DROP TABLE IF EXISTS tb_Rounds;
DROP TABLE IF EXISTS tb_People;
DROP TABLE IF EXISTS tb_Drinks;

CREATE TABLE tb_Drinks (
    Drink_Id INTEGER AUTO_INCREMENT PRIMARY KEY,
    Drink_Name NVARCHAR(255) NOT NULL,
    Drink_Instructions NVARCHAR(255) NOT NULL,
);

CREATE TABLE tb_People (
    Person_Id INTEGER AUTO_INCREMENT PRIMARY KEY,
    Person_First_Name NVARCHAR(255) NOT NULL,
    Person_Last_Name NVARCHAR(255) NOT NULL,
    Pref_Drink INTEGER NOT NULL,
    FOREIGN KEY (Drink_Id) REFERENCES drinks(Drink_Id)
);

CREATE TABLE tb_Preferences (
    Pref_Id INTEGER AUTO_INCREMENT PRIMARY KEY,
    Pref_Person INTEGER NOT NULL,
    Pref_Drink INTEGER NOT NULL,
    FOREIGN KEY (Pref_Person) REFERENCES tb_People(Person_Id),
    FOREIGN KEY (Pref_Drink) REFERENCES tb_Drinks(Drink_Id)
);

CREATE TABLE tb_Rounds (
    Round_Id INTEGER AUTO_INCREMENT PRIMARY KEY,
    Round_Active BOOLEAN NOT NULL, 
    Round_StartTimeUTC DATETIME NOT NULL, 
    Round_Initiator INTEGER NOT NULL,
    FOREIGN KEY (Round_Initiator) REFERENCES tb_People(Person_Id)
);

CREATE TABLE tb_RoundOrders (
    ROrder_Round_Id INTEGER AUTO_INCREMENT PRIMARY KEY,
    ROrder_Id INTEGER NOT NULL,
    ROrder_Person INTEGER NOT NULL,
    ROrder_Drink INTEGER NOT NULL,
    FOREIGN KEY (ROrder_Id) REFERENCES rounds(round_id),
    FOREIGN KEY (ROrder_Person) REFERENCES tb_People(Person_Id),
    FOREIGN KEY (ROrder_Drink) REFERENCES tb_Drinks(Drink_Id)
);