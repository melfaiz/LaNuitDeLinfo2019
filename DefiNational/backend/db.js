const { Pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on("connect", () => {
  console.log("connected to the db");
});

/**
 * Create Tables
 */
const createTables = () => {
  const queryText = `CREATE TABLE public.discussion_replies
  (
      id bigint NOT NULL DEFAULT nextval('discussion_replies_id_seq'::regclass),
      text text COLLATE pg_catalog."default" NOT NULL,
      dis_id integer NOT NULL,
      user_id integer NOT NULL,
      CONSTRAINT discussion_replies_pkey PRIMARY KEY (id),
      CONSTRAINT dis_id FOREIGN KEY (dis_id)
          REFERENCES public.discussion (id) MATCH SIMPLE
          ON UPDATE NO ACTION
          ON DELETE NO ACTION,
      CONSTRAINT player_id FOREIGN KEY (user_id)
          REFERENCES public.utilisateur (id) MATCH SIMPLE
          ON UPDATE NO ACTION
          ON DELETE NO ACTION
          NOT VALID
  )
  CREATE TABLE public.discussion
(
    id bigint NOT NULL DEFAULT nextval('discussion_id_seq'::regclass),
    date date NOT NULL,
    text text COLLATE pg_catalog."default" NOT NULL,
    seen integer,
    CONSTRAINT discussion_pkey PRIMARY KEY (id)
)
CREATE TABLE public.utilisateur
(
    id bigint NOT NULL DEFAULT nextval('utilisateurs_id_seq'::regclass),
    pseudo text COLLATE pg_catalog."default" NOT NULL,
    nom text COLLATE pg_catalog."default" NOT NULL,
    prenom text COLLATE pg_catalog."default" NOT NULL,
    xp integer,
    CONSTRAINT utilisateurs_pkey PRIMARY KEY (id)
)`;

  pool
    .query(queryText)
    .then(res => {
      console.log(res);
      pool.end();
    })
    .catch(err => {
      console.log(err);
      pool.end();
    });
};

/**
 * Drop Tables
 */
const dropTables = () => {
  const queryText = "DROP TABLE IF EXISTS reflections";
  pool
    .query(queryText)
    .then(res => {
      console.log(res);
      pool.end();
    })
    .catch(err => {
      console.log(err);
      pool.end();
    });
};

pool.on("remove", () => {
  console.log("client removed");
  process.exit(0);
});

module.exports = {
  createTables,
  dropTables
};

require("make-runnable");
