-- Adiciona status à tabela de logs de RFID
ALTER TABLE rfid_logs ADD COLUMN status VARCHAR(50) DEFAULT 'pendente';
