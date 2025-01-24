-- Popula tabela de usuários
INSERT INTO users (name, email, password, role) VALUES
('Admin', 'admin@voulezvous.com', 'admin123', 'admin'),
('Estafeta', 'estafeta@voulezvous.com', 'estafeta123', 'user');

-- Popula tabela de produtos
INSERT INTO produtos (nome, descricao, preco, estoque_atual, unidade_pequena, embalagem_grande, embalagem_media) VALUES
('Produto A', 'Descrição do Produto A', 10.50, 100, 1, 1000, 10),
('Produto B', 'Descrição do Produto B', 20.00, 50, 0.5, 500, 5);
