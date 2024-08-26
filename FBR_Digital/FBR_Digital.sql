CREATE DATABASE fbr_digital_providers;
USE fbr_digital_providers;

CREATE TABLE providers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cnpj VARCHAR(14) UNIQUE NOT NULL,
    fantasy_name VARCHAR(100) NOT NULL,
    corporate_name VARCHAR(100) NOT NULL,
    headquarters_address VARCHAR(255) NOT NULL,
    legal_representative_contact VARCHAR(100) NOT NULL,
    ranking_score DECIMAL(5, 2)
);

CREATE TABLE coverage_areas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    provider_id INT NOT NULL,
    city VARCHAR(100) NOT NULL,
    neighborhood VARCHAR(100) NOT NULL,
    technology VARCHAR(50) NOT NULL,
    coverage_file VARCHAR(255),
    FOREIGN KEY (provider_id) REFERENCES providers(id)
);

CREATE TABLE infrastructures (
    id INT AUTO_INCREMENT PRIMARY KEY,
    provider_id INT NOT NULL,
    asn VARCHAR(20) NOT NULL,
    ptt_participation BOOLEAN NOT NULL,
    bgp BOOLEAN NOT NULL,
    backbone_operators VARCHAR(255) NOT NULL,
    capacity VARCHAR(50) NOT NULL,
    FOREIGN KEY (provider_id) REFERENCES providers(id)
);

CREATE TABLE services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    provider_id INT NOT NULL,
    service_type VARCHAR(50) NOT NULL,
    bandwidth VARCHAR(10) NOT NULL,
    sla VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (provider_id) REFERENCES providers(id)
);

CREATE TABLE demands (
    id INT AUTO_INCREMENT PRIMARY KEY,
    provider_id INT NOT NULL,
    demand_description TEXT NOT NULL,
    coverage_area_id INT,
    proposal_sent BOOLEAN DEFAULT FALSE,
    proposal_sent_at DATETIME,
    FOREIGN KEY (provider_id) REFERENCES providers(id),
    FOREIGN KEY (coverage_area_id) REFERENCES coverage_areas(id)
);

INSERT INTO providers (cnpj, fantasy_name, corporate_name, headquarters_address, legal_representative_contact, ranking_score)
VALUES 
('12345678000100', 'Provedor A', 'Provedor A S.A.', 'Rua Principal, 100, Cidade A, Estado X', 'José Silva - (11) 1234-5678', 85.75),
('98765432000199', 'Provedor B', 'Provedor B Ltda.', 'Avenida Central, 500, Cidade B, Estado Y', 'Maria Santos - (21) 8765-4321', 92.50),
('45678912000133', 'Provedor C', 'Provedor C ME', 'Rua Secundária, 200, Cidade C, Estado Z', 'Carlos Oliveira - (31) 7890-1234', 78.20);

INSERT INTO coverage_areas (provider_id, city, neighborhood, technology, coverage_file)
VALUES 
(1, 'Cidade A', 'Centro', 'fibra', '/uploads/cobertura_a.csv'),
(1, 'Cidade A', 'Bairro X', 'rádio', '/uploads/cobertura_b.csv'),
(2, 'Cidade B', 'Bairro Y', 'fibra', NULL),
(2, 'Cidade B', 'Centro', 'satélite', '/uploads/cobertura_c.kmz'),
(3, 'Cidade C', 'Bairro Z', 'fibra', '/uploads/cobertura_d.csv');

INSERT INTO infrastructures (provider_id, asn, ptt_participation, bgp, backbone_operators, capacity)
VALUES 
(1, 'AS12345', TRUE, TRUE, 'Operadora 1', '10 Gbps'),
(2, 'AS67890', FALSE, TRUE, 'Operadora 2, Operadora 3', '5 Gbps'),
(3, 'AS54321', TRUE, FALSE, 'Operadora 4', '2 Gbps');

INSERT INTO services (provider_id, service_type, bandwidth, sla, price)
VALUES 
(1, 'banda larga', '100 MB', '99.9%', 100.00),
(1, 'dedicado', '1 GB', '99.99%', 1000.00),
(2, 'banda larga', '50 MB', '98%', 80.00),
(2, 'corporativo', '500 MB', '99.95%', 500.00),
(3, 'banda larga', '200 MB', '99.8%', 120.00);

INSERT INTO demands (provider_id, demand_description, coverage_area_id, proposal_sent, proposal_sent_at)
VALUES 
(1, 'Demanda para expansão da rede no Bairro X', 2, TRUE, '2024-08-20 14:00:00'),
(2, 'Demanda para melhoria de serviço no Centro', 4, FALSE, NULL),
(3, 'Demanda para novo contrato corporativo em Bairro Z', 5, TRUE, '2024-08-22 10:30:00');

select* from services

