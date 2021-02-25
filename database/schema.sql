set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

CREATE TABLE "products" (
	"productId" serial NOT NULL,
	"name" VARCHAR(255) NOT NULL,
	"price" VARCHAR(255) NOT NULL,
	"color" VARCHAR(255) NOT NULL,
	"description" VARCHAR(255) NOT NULL,
	"image" VARCHAR(255) NOT NULL,
	CONSTRAINT "products_pk" PRIMARY KEY ("productId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "users" (
	"userId" serial NOT NULL,
	"firstName" VARCHAR(255) NOT NULL,
	"lastName" VARCHAR(255) NOT NULL,
	"email" VARCHAR(255) NOT NULL,
	"image" VARCHAR(255) NOT NULL,
	"password" VARCHAR(255) NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);
