CREATE TABLE mahasiswa(
    nim CHARACTER(3) PRIMARY KEY NOT NULL,
    nama_mhs VARCHAR(100) NOT NULL,
    alamat TEXT(255) NOT NULL,
    id_jurusan CHARACTER(3) NOT NULL,
    FOREIGN KEY(id_jurusan) REFERENCES jurusan(id_jurusan));

INSERT INTO mahasiswa VALUES 
('279', 'mahyudin akbar', 'Jalan lurus', '111' );

CREATE TABLE jurusan(
    id_jurusan CHARACTER(3) PRIMARY KEY NOT NULL,
    nama_jurusan VARCHAR(100) NOT NULL
);

INSERT INTO jurusan VALUES 
('127', 'Teknik Informatika' );

CREATE TABLE matakuliah(
    id_matakuliah CHARACTER(3) PRIMARY KEY NOT NULL,
    nama_mk VARCHAR(100) NOT NULL,
    sks INTEGER NOT NULl
);


INSERT INTO matakuliah VALUES
('001', 'Basis Data Dasar', 4);

INSERT INTO matakuliah(id_matakuliah, nama_mk, sks) VALUES 
('002', 'Basis Data Lanjutan', 2);

CREATE TABLE dosen(
    nip CHARACTER(4) PRIMARY KEY NOT NULL,
    nama_dosen VARCHAR(100) NOT NULL,
    id_matakuliah CHARACTER(3),
    FOREIGN KEY(id_matakuliah) REFERENCES matakuliah(id_matakuliah)
);

INSERT INTO dosen VALUES 
('D001', 'sunaryo', '001' );

CREATE TABLE teachs(
    id_teach INTEGER PRIMARY KEY AUTOINCREMENT,
    nim CHARACTER(3) NOT NULL,
    nip CHARACTER(4) NOT NULL,
    id_matakuliah CHARACTER(3) NOT NULL,
    FOREIGN KEY(nim) REFERENCES mahasiswa(nim),
    FOREIGN KEY(nip) REFERENCES dosen(nip),
    FOREIGN KEY(id_matakuliah) REFERENCES matakuliah(id_matakuliah)
);

INSERT INTO mahasiswa VALUES 
(1, '279', 'D001', '001' );