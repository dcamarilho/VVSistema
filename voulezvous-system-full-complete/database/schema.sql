
CREATE TABLE chat (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);
