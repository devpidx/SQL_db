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

CREATE TABLE terminal_countries (
	TERMINAL_ID VARCHAR(20) PRIMARY KEY,
	COUNTRY VARCHAR(30) NOT NULL,
	Submitter VARCHAR (30),
	Terminal_Owner VARCHAR (100),
	Latitude VARCHAR(15),
	Longitude VARCHAR(15)
);

CREATE TABLE terminal_products (
	TERMINAL_ID VARCHAR(20) PRIMARY KEY,
	COUNTRY VARCHAR(30) NOT NULL,
	Submitter VARCHAR (30),
	lat VARCHAR(30),
	long VARCHAR(30),
	B25 NUMERIC,
	B29 NUMERIC,
	B37 NUMERIC,
	D11 NUMERIC,
	D2K NUMERIC,
	D6N NUMERIC,
	D80 NUMERIC,
	P18 NUMERIC,
	P2R NUMERIC,
	P37 NUMERIC,
	P42 NUMERIC,
	O21 NUMERIC,
	O73 NUMERIC,
	O8I NUMERIC,
	OUB NUMERIC
);

SELECT * 
FROM product_codes; 

SELECT code
FROM product_codes
WHERE product_definition LIKE '%ethanol%';

SELECT *
FROM product_codes
WHERE oxygenate_percent >=75;


update public.product_codes set cetane_octane='' where cetane_octane is null
update public.product_codes set description='' where description is null
update public.product_codes set requester='' where requester is null


UPDATE
  public.product_codes
SET
  requester = UPPER(requester)




CREATE OR REPLACE VIEW public."V_ProductGroupbyCountry"
 AS
 SELECT terminal_products.country,
    sum(terminal_products.b25) AS b25,
    sum(terminal_products.b29) AS b29,
    sum(terminal_products.b37) AS b37,
    sum(terminal_products.d11) AS d11,
    sum(terminal_products.d2k) AS d2k,
    sum(terminal_products.d6n) AS d6n,
    sum(terminal_products.d80) AS d80,
    sum(terminal_products.p18) AS p18,
    sum(terminal_products.p2r) AS p2r,
    sum(terminal_products.p37) AS p37,
    sum(terminal_products.p42) AS p42,
    sum(terminal_products.o21) AS o21,
    sum(terminal_products.o73) AS o73,
    sum(terminal_products.o8i) AS o8i,
    sum(terminal_products.oub) AS oub
   FROM terminal_products
  GROUP BY terminal_products.country;
