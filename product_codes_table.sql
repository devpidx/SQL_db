CREATE TABLE product_codes (
	code VARCHAR(6) NOT NULL,
	product_definition VARCHAR(20) NOT NULL,
	description VARCHAR (50),
	cetane_octane VARCHAR (10),
	oxygenated_rbob_type VARCHAR(10),
	oxygenate_percent VARCHAR (10),
	comments_ VARCHAR (100),
	requester VARCHAR (50),
	date_code_assigned VARCHAR (11)
);