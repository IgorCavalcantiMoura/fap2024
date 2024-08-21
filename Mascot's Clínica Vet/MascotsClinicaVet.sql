
CREATE DATABASE MascotsClinicaVet;
USE MascotsClinicaVet;

CREATE TABLE Veterinario (
    ID_Veterinario INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    CRMV VARCHAR(20) NOT NULL UNIQUE,
    Especialidade VARCHAR(100),
    Telefone VARCHAR(20),
    Email VARCHAR(100)
);

CREATE TABLE Auxiliar_Veterinario (
    ID_Auxiliar INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    Telefone VARCHAR(20),
    Email VARCHAR(100)
);

CREATE TABLE Administrador (
    ID_Administrador INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    Telefone VARCHAR(20),
    Email VARCHAR(100)
);

CREATE TABLE Animal (
    ID_Animal INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    Especie VARCHAR(50) NOT NULL,
    Raca VARCHAR(50),
    Idade INT,
    Peso DECIMAL(5,2),
    Nome_Responsavel VARCHAR(100),
    Contato_Responsavel VARCHAR(20)
);

CREATE TABLE Consulta (
    ID_Consulta INT AUTO_INCREMENT PRIMARY KEY,
    Data_Consulta DATE NOT NULL,
    Descricao TEXT,
    Diagnostico TEXT,
    Tratamento_Sugerido TEXT,
    ID_Animal INT,
    ID_Veterinario INT,
    FOREIGN KEY (ID_Animal) REFERENCES Animal(ID_Animal),
    FOREIGN KEY (ID_Veterinario) REFERENCES Veterinario(ID_Veterinario)
);

CREATE TABLE Internacao (
    ID_Internacao INT AUTO_INCREMENT PRIMARY KEY,
    Data_Entrada DATE NOT NULL,
    Data_Saida DATE,
    Status_Internacao VARCHAR(50),
    ID_Animal INT,
    ID_Veterinario INT,
    ID_Auxiliar INT,
    FOREIGN KEY (ID_Animal) REFERENCES Animal(ID_Animal),
    FOREIGN KEY (ID_Veterinario) REFERENCES Veterinario(ID_Veterinario),
    FOREIGN KEY (ID_Auxiliar) REFERENCES Auxiliar_Veterinario(ID_Auxiliar)
);

CREATE TABLE Medicacao (
    ID_Medicacao INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    Dosagem VARCHAR(50),
    Forma_Farmaceutica VARCHAR(50)
);

CREATE TABLE Prescricao (
    ID_Prescricao INT AUTO_INCREMENT PRIMARY KEY,
    Data_Prescricao DATE NOT NULL,
    ID_Internacao INT,
    ID_Medicacao INT,
    Frequencia_Administracao VARCHAR(50),
    FOREIGN KEY (ID_Internacao) REFERENCES Internacao(ID_Internacao),
    FOREIGN KEY (ID_Medicacao) REFERENCES Medicacao(ID_Medicacao)
);

CREATE TABLE Estoque (
    ID_Item INT AUTO_INCREMENT PRIMARY KEY,
    Nome_Item VARCHAR(100) NOT NULL,
    Quantidade_Disponivel INT NOT NULL,
    Quantidade_Minima INT NOT NULL
);

CREATE TABLE Arquivo (
    ID_Arquivo INT AUTO_INCREMENT PRIMARY KEY,
    Nome_Arquivo VARCHAR(100) NOT NULL,
    Tipo_Arquivo VARCHAR(50),
    Data_Upload DATE NOT NULL,
    URL_Arquivo VARCHAR(255),
    ID_Consulta INT,
    FOREIGN KEY (ID_Consulta) REFERENCES Consulta(ID_Consulta)
);

CREATE TABLE Exame (
    ID_Exame INT AUTO_INCREMENT PRIMARY KEY,
    Tipo_Exame VARCHAR(100) NOT NULL,
    Resultado TEXT,
    Data_Solicitacao DATE NOT NULL,
    Data_Resultado DATE,
    Status_Exame VARCHAR(50),
    ID_Animal INT,
    ID_Veterinario INT,
    FOREIGN KEY (ID_Animal) REFERENCES Animal(ID_Animal),
    FOREIGN KEY (ID_Veterinario) REFERENCES Veterinario(ID_Veterinario)
);

INSERT INTO Veterinario (Nome, CRMV, Especialidade, Telefone, Email)
VALUES
('Dr. João Silva', 'CRMV-12345', 'Clínica Geral', '(11) 1234-5678', 'joao.silva@clinicavet.com'),
('Dra. Maria Oliveira', 'CRMV-67890', 'Cirurgia', '(11) 8765-4321', 'maria.oliveira@clinicavet.com');

INSERT INTO Auxiliar_Veterinario (Nome, Telefone, Email)
VALUES
('Carlos Souza', '(11) 2345-6789', 'carlos.souza@clinicavet.com'),
('Ana Lima', '(11) 9876-5432', 'ana.lima@clinicavet.com');

INSERT INTO Administrador (Nome, Telefone, Email)
VALUES
('Pedro Santos', '(11) 3456-7890', 'pedro.santos@clinicavet.com'),
('Lucas Ferreira', '(11) 8765-0987', 'lucas.ferreira@clinicavet.com');

INSERT INTO Animal (Nome, Especie, Raca, Idade, Peso, Nome_Responsavel, Contato_Responsavel)
VALUES
('Rex', 'Cachorro', 'Labrador', 5, 30.5, 'Paulo Almeida', '(11) 5566-7788'),
('Mimi', 'Gato', 'Persa', 3, 4.2, 'Carla Ribeiro', '(11) 9988-7766');

INSERT INTO Consulta (Data_Consulta, Descricao, Diagnostico, Tratamento_Sugerido, ID_Animal, ID_Veterinario)
VALUES
('2024-08-01', 'Consulta de rotina', 'Saudável', 'Manter alimentação balanceada', 1, 1),
('2024-08-02', 'Consulta devido a queda de pelo', 'Dermatite', 'Uso de shampoo medicamentoso', 2, 2);

INSERT INTO Internacao (Data_Entrada, Data_Saida, Status_Internacao, ID_Animal, ID_Veterinario, ID_Auxiliar)
VALUES
('2024-08-03', NULL, 'Em tratamento', 1, 2, 1),
('2024-08-04', '2024-08-07', 'Alta', 2, 1, 2);

INSERT INTO Medicacao (Nome, Dosagem, Forma_Farmaceutica)
VALUES
('Antibiótico XYZ', '500mg', 'Comprimido'),
('Anti-inflamatório ABC', '200mg', 'Comprimido');

INSERT INTO Prescricao (Data_Prescricao, ID_Internacao, ID_Medicacao, Frequencia_Administracao)
VALUES
('2024-08-03', 1, 1, '2 vezes ao dia'),
('2024-08-04', 2, 2, '1 vez ao dia');

INSERT INTO Estoque (Nome_Item, Quantidade_Disponivel, Quantidade_Minima)
VALUES
('Antibiótico XYZ', 50, 10),
('Anti-inflamatório ABC', 30, 5);

INSERT INTO Arquivo (Nome_Arquivo, Tipo_Arquivo, Data_Upload, URL_Arquivo, ID_Consulta)
VALUES
('Exame de sangue - Rex', 'PDF', '2024-08-02', 'https://clinicavet.com/arquivos/exame_rex.pdf', 1),
('Radiografia - Mimi', 'JPG', '2024-08-03', 'https://clinicavet.com/arquivos/radiografia_mimi.jpg', 2);

INSERT INTO Exame (Tipo_Exame, Resultado, Data_Solicitacao, Data_Resultado, Status_Exame, ID_Animal, ID_Veterinario)
VALUES
('Exame de Sangue', 'Normal', '2024-08-01', '2024-08-02', 'Finalizado', 1, 1),
('Radiografia', 'Fratura leve', '2024-08-02', '2024-08-03', 'Finalizado', 2, 2);

