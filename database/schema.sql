set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;
create schema "public";

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



CREATE TABLE "sightWords" (
	"word" VARCHAR(255) NOT NULL,
	"wordId" serial NOT NULL,
	CONSTRAINT "sightWords_pk" PRIMARY KEY ("wordId")
) WITH (
  OIDS=FALSE
);
