-- 1. Tampilkan seluruh data mahasiswa beserta nama jurusannya;
SELECT nim, nama_mhs, alamat, jurusan.nama_jurusan FROM mahasiswa INNER JOIN jurusan on mahasiswa.id_jurusan = jurusan.id_jurusan;

-- 2. Tampilkan mahasiswa yang memiliki umur dibawah 20 tahun;
SELECT * FROM mahasiswa WHERE umur < 20;
-- 3. Tampilkan mahasiswa yang memiliki nilai 'B' ke atas;
-- 4. Tampilkan mahasiswa yang memiliki jumlah SKS lebih dari 10;
-- 5. Tampilkan mahasiswa yang mengontrak mata kuliah 'data mining';

-- 6. Tampilkan jumlah mahasiswa untuk setiap dosen;
-- 7. Urutkan mahasiswa berdasarkan umurnya.
SELECT * FROM mahasiswa ORDER BY umur ASC|DESC

-- 8. Tampilkan kontrak matakuliah yang harus diulang (nilai D dan E), serta tampilkan data mahasiswa jurusan dan dosen secara lengkap. gunakan mode JOIN dan WHERE clause;
