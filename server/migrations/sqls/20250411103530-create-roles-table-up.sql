-- Enable pgcrypto extension for gen_random_uuid()
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE roles (
  id SERIAL PRIMARY KEY,
  uuid UUID NOT NULL DEFAULT gen_random_uuid(), 
  role VARCHAR(50) NOT NULL UNIQUE,
  created_at TIMESTAMP with TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  created_by INTEGER
);

-- Insert default roles
INSERT INTO roles (role) VALUES 
  ('Admin'),
  ('Patient'),
  ('Doctor');