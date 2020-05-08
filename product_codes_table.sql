CREATE TABLE product_codes(
	Code VARCHAR(6) PRIMARY KEY,
	Product_definition VARCHAR(20) NOT NULL,
	Description VARCHAR (50),
	Cetane_octane VARCHAR (10),
	Oxygenate_percent VARCHAR (10),
    ADD oxygenated_rbob_type VARCHAR(10)
	Comments_ VARCHAR (100),
	Requester VARCHAR (50),
	Date_code_assigned VARCHAR (11)
);