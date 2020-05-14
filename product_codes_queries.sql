CREATE TABLE product_codes (
	code VARCHAR(6) PRIMARY KEY,
	product_definition VARCHAR(50) NOT NULL,
	description VARCHAR (100),
	cetane_octane VARCHAR (10),
	oxygenated_rbob_type VARCHAR(10),
	oxygenate_percent VARCHAR (10),
	comments_ VARCHAR (100),
	requester VARCHAR (50),
	date_code_assigned VARCHAR (11)
);