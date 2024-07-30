-- TABLE MAHASISWA
-- NIM (CHAR 10), NAME (CHAR 100), TANGGAL_LAHIR(DATE),ALAMAT(TEXT),ID_JURUSAN(CHAR 4)
CREATE TABLE mahasiswa (
    NIM CHARACTER(10) PRIMARY KEY NOT NULL,
    Nama VARCHAR(100) NOT NULL,
    Tanggal_Lahir TEXT NOT NULL,
    Alamat TEXT NOT NULL,
    Kode_Jurusan CHARACTER(4) NOT NULL,
    FOREIGN KEY(Kode_Jurusan) REFERENCES jurusan(Kode_Jurusan)
);

-- ADD DATA MAHASISWA
INSERT INTO mahasiswa (NIM, Nama, Tanggal_Lahir, Alamat, Kode_Jurusan) VALUES 
    ( '2022070001','Abaz',date('2002-05-12'), 'Semarang', 'J001' ),
    ( '2022070002','Faisal',date('2001-11-03'), 'Medan', 'J002' ),
    ( '2022070003','Lutfi',date('2000-12-23'), 'Bali', 'J003' ),
    ( '2022070004','Dimas',date('1999-08-11'), 'Surabaya', 'J004' ),
    ( '2022070005','Ikhsan',date('2000-01-29'), 'Balikpapan', 'J005' ),
    ( '2022070006','Eril',date('2001-02-17'), 'Makasar', 'J006' ),
    ( '2022070007','Zafran',date('2001-06-01'), 'Bandung', 'J007' ),
    ( '2022070009','Emir',date('2000-10-10'), 'Cianjur', 'J009' ),
    ( '2022070008','Zakka',date('1998-12-07'), 'Lampung', 'J010' ),
    ( '2022070010','Agung',date('2002-09-13'), 'Bandung', 'J003' );




-- DELETE DATA MAHASISWA
DELETE FROM mahasiswa WHERE NIM = 2022070011;


-- TABLE JURUSAN
-- ID_JURUSAN (CHAR 4), NAMA_JURUSAN (CHAR 100)
CREATE TABLE jurusan( 
    Kode_Jurusan CHARACTER(4) PRIMARY KEY NOT NULL,
    Nama_Jurusan VARCHAR(100) NOT NULL
);

INSERT INTO jurusan (Kode_Jurusan, Nama_Jurusan) VALUES 
    ('J001', 'Fabrikasi Logam'),('J002', 'Listrik Tenaga'),
    ('J003', 'Elektronika'),('J004', 'Mekatronika'),
    ('J005', 'Otomotif'),('J006', 'Informatika'),
    ('J007', 'Alat Berat'),('J008', 'Gambar Bangunan'),
    ('J009', 'Arsitek'),('J010', 'Gambar Bangunan'),
    ('J012', 'cobalagi');

-- TABLE DOSEN
-- NIP (CHAR 5), NAMA_DOSEN (CHAR 100)
CREATE TABLE dosen( 
    NIP CHARACTER(5) PRIMARY KEY NOT NULL,
    Nama_Dosen VARCHAR(100) NOT NULL
);
-- ADD DATA DOSEN
INSERT INTO dosen(NIP, Nama_Dosen) VALUES 
    ('D2201', 'Rubi'),
    ('D2202', 'Wildan'),
    ('D2203', 'Rizky'),
    ('D2204', 'Hilmi'),
    ('D2205', 'Bambang');


-- TABLE MATA_KULIAH
-- KODE_MATKUL (CHAR 4), NAMA_MATKUL(CHAR 100), SKS (INT)
CREATE TABLE mata_kuliah(
    Kode_Matkul CHARACTER(4) PRIMARY KEY NOT NULL,
    Nama_Matkul VARCHAR(100) NOT NULL,
    sks INTEGER NOT NULL
);

-- ADD DATA MATA KULIAH
INSERT INTO mata_kuliah(Kode_Matkul, Nama_Matkul, SKS) VALUES 
('MK01', 'data mining', 20),
('MK02', 'basic', 20),
('MK03', 'kerja bengkel', 20),
('MK04', 'matematika', 15),
('MK05', 'bahasa inggris', 15);

-- TABLE KONTRAK
-- ID (INT AUTO INCREMENT), NIM(CHAR 10), NIP (CHAR 5), KODE_MATKUL (CHAR 4), NILAI (CHAR 3)
CREATE TABLE kontrak (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    NIM CHARACTER(10) NOT NULL,
    NIP CHARACTER(5) NOT NULL,
    Kode_Matkul CHARACTER(4) NOT NULL,
    Nilai CHARACTER(3),
    FOREIGN KEY(NIM) REFERENCES mahasiswa(NIM),
    FOREIGN KEY(NIP) REFERENCES dosen(NIP),
    FOREIGN KEY(Kode_Matkul) REFERENCES mata_kuliah(Kode_Matkul)
);
-- ('2022070001', 'D2204','MK04')
--('2022070001', 'D2204','MK04');
INSERT INTO kontrak(NIM, NIP, Kode_Matkul, Nilai) VALUES ('2022070001', 'D2204','MK04');
('2022070001', 'D2201', 'MK01', 'C'),
('2022070002', 'D2201', 'MK01', 'A+'),
('2022070003', 'D2204', 'MK04', 'B'),
('2022070004', 'D2202', 'MK02', 'B+'),
('2022070010', 'D2205', 'MK03', 'A'),
('2022070009', 'D2204', 'MK04', 'A++'),
('2022070008', 'D2203', 'MK01', 'B+'),
('2022070007', 'D2202', 'MK05', 'A'),
('2022070006', 'D2204', 'MK04', 'B+'),
('2022070005', 'D2203', 'MK01', 'C+');
(15, '2022070001', 'D2202', 'MK02', 'A');

-- UPDATE students SET age = 20 WHERE id = 1;
UPDATE kontrak SET Nilai = 'A+' WHERE id = 16;

-- TABLE USER
-- USER_ID (INT), USERNAME (CHAR 20), PASSWORD (CHAR 10)
CREATE TABLE user (
    id INT PRIMARY KEY NOT NULL, 
    username CHARACTER(20) NOT NULL, 
    password CHARACTER(10) NOT NULL,
    role CHARACTER(20)
);

INSERT INTO user (id,username,password) VALUES (1,'mahyudin','123');

-- DAFTAR MAHASISWA
SELECT mahasiswa.NIM, mahasiswa.Nama, mahasiswa.Tanggal_Lahir, mahasiswa.Alamat, jurusan.Kode_Jurusan, jurusan.Nama_Jurusan FROM mahasiswa INNER JOIN jurusan ON mahasiswa.Kode_Jurusan = jurusan.Kode_Jurusan;

-- Daftar Kontrak
SELECT kontrak.id,kontrak.nim, mahasiswa.nama, mata_kuliah.Nama_Matkul, dosen.nama_dosen, kontrak.nilai FROM kontrak INNER JOIN mahasiswa ON kontrak.NIM = mahasiswa.NIM INNER JOIN mata_kuliah ON kontrak.Kode_Matkul = mata_kuliah.Kode_Matkul INNER JOIN dosen ON kontrak.NIP = dosen.NIP;

-- SEARCH MAHASISWA
SELECT * FROM mahasiswa WHERE NIM LIKE '2022070005%';

-- JURUSAN
SELECT * FROM jurusan;

-- MATA KULIAH
SELECT * FROM mata_kuliah;

-- DOSEN
SELECT * FROM dosen;

