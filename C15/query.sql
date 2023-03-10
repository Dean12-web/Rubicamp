CREATE TABLE mahasiswa(
    nim CHARACTER(3) PRIMARY KEY NOT NULL,
    nama_mhs VARCHAR(100) NOT NULL,
    alamat TEXT(255) NOT NULL,
    id_jurusan CHARACTER(3) NOT NULL,
    FOREIGN KEY(id_jurusan) REFERENCES jurusan(id_jurusan));
ALTER TABLE mahasiswa ADD COLUMN umur INTEGER;

CREATE TABLE jurusan(
    id_jurusan CHARACTER(3) PRIMARY KEY NOT NULL,
    nama_jurusan VARCHAR(100) NOT NULL
);

CREATE TABLE matakuliah(
    id_matakuliah CHARACTER(3) PRIMARY KEY NOT NULL,
    nama_mk VARCHAR(100) NOT NULL,
    sks INTEGER NOT NULl
);


CREATE TABLE dosen(
    nip CHARACTER(4) PRIMARY KEY NOT NULL,
    nama_dosen VARCHAR(100) NOT NULL);


CREATE TABLE teachs(
    id_kontrak INTEGER PRIMARY KEY AUTOINCREMENT,
    nim CHARACTER(3) NOT NULL,
    nip CHARACTER(4) NOT NULL,
    id_matakuliah CHARACTER(3) NOT NULL,
    FOREIGN KEY(nim) REFERENCES mahasiswa(nim),
    FOREIGN KEY(nip) REFERENCES dosen(nip),
    FOREIGN KEY(id_matakuliah) REFERENCES matakuliah(id_matakuliah)
);
ALTER TABLE teachs RENAME TO kontrak
ALTER TABLE kontrak ADD COLUMN  nilai CHARACTER(2);

-- 1. Tampilkan seluruh data mahasiswa beserta nama jurusannya;
SELECT nim, nama_mhs, alamat, jurusan.nama_jurusan FROM mahasiswa 
INNER JOIN jurusan on mahasiswa.id_jurusan = jurusan.id_jurusan;

-- 2. Tampilkan mahasiswa yang memiliki umur dibawah 20 tahun;
SELECT * FROM mahasiswa WHERE umur < 20;

-- 3. Tampilkan mahasiswa yang memiliki nilai 'B' ke atas;
SELECT mahasiswa.nim, mahasiswa.nama_mhs, kontrak.nilai 
FROM mahasiswa INNER JOIN kontrak ON mahasiswa.nim = kontrak.nim 
WHERE kontrak.nilai = 'A' OR kontrak.nilai = 'B';

-- 4. Tampilkan mahasiswa yang memiliki jumlah SKS lebih dari 10;
SELECT kontrak.nim, mahasiswa.nama_mhs, matakuliah.nama_mk 
FROM kontrak INNER JOIN mahasiswa ON kontrak.nim = mahasiswa.nim 
INNER JOIN matakuliah ON kontrak.id_matakuliah = matakuliah.id_matakuliah 
GROUP BY kontrak.nim HAVING matakuliah.sks > 10;

-- 5. Tampilkan mahasiswa yang mengontrak mata kuliah 'data mining';
SELECT kontrak.nim, mahasiswa.nama_mhs, matakuliah.nama_mk 
FROM kontrak INNER JOIN mahasiswa ON kontrak.nim = mahasiswa.nim 
INNER JOIN matakuliah ON kontrak.id_matakuliah = matakuliah.id_matakuliah 
WHERE matakuliah.nama_mk = 'Data Mining';

-- 6. Tampilkan jumlah mahasiswa untuk setiap dosen;
SELECT dosen.nip, dosen.nama_dosen, COUNT(mahasiswa.nim) as jumlah_mhs 
FROM dosen INNER JOIN kontrak ON dosen.nip = kontrak.nip
INNER JOIN mahasiswa ON mahasiswa.nim = kontrak.nim GROUP BY dosen.nip;

-- 7. Urutkan mahasiswa berdasarkan umurnya.
SELECT * FROM mahasiswa ORDER BY umur ASC|DESC

-- 8. Tampilkan kontrak matakuliah yang harus diulang (nilai D dan E), serta tampilkan data mahasiswa jurusan dan dosen secara lengkap. 
SELECT mahasiswa.nim, mahasiswa.nama_mhs, mahasiswa.alamat, jurusan.nama_jurusan, dosen.nama_dosen, kontrak.nilai as matakuliah_diulang
FROM mahasiswa INNER JOIN jurusan on mahasiswa.id_jurusan = jurusan.id_jurusan 
INNER JOIN kontrak on mahasiswa.nim = kontrak.nim 
INNER JOIN dosen on dosen.nip = kontrak.nip WHERE kontrak.nilai BETWEEN 'D' AND 'E';
-- INNER JOIN dosen on dosen.nip = kontrak.nip WHERE kontrak.nilai = 'D' OR kontrak.nilai = 'E';
-- gunakan mode JOIN dan WHERE clause;
