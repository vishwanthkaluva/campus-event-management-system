-- Create Database
CREATE DATABASE campus_events;

-- Create Table
CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    description TEXT,
    date DATE,
    location VARCHAR(100)
);