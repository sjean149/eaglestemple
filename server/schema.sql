-- Users table used by the auth controllers (register, login, Google sign-in).
-- Safe to run more than once.
CREATE TABLE IF NOT EXISTS users (
  id              SERIAL PRIMARY KEY,
  name            TEXT        NOT NULL,
  email           TEXT        NOT NULL UNIQUE,
  password_hash   TEXT,
  phone_number    TEXT,
  google_sub      TEXT UNIQUE,
  profile_picture TEXT,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
