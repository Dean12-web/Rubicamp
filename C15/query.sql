-- 1. Tampilkan seluruh data mahasiswa beserta nama jurusannya;
SELECT nim, nama_mhs, alamat, jurusan.nama_jurusan FROM mahasiswa INNER JOIN jurusan on mahasiswa.id_jurusan = jurusan.id_jurusan;

-- 2. Tampilkan mahasiswa yang memiliki umur dibawah 20 tahun;
SELECT * FROM mahasiswa WHERE umur < 20;

-- 3. Tampilkan mahasiswa yang memiliki nilai 'B' ke atas;
SELECT mahasiswa.nim, mahasiswa.nama_mhs, kontrak.nilai FROM mahasiswa INNER JOIN kontrak ON mahasiswa.nim = kontrak.nim WHERE kontrak.nilai = 'A' OR kontrak.nilai = 'B';

-- 4. Tampilkan mahasiswa yang memiliki jumlah SKS lebih dari 10;
SELECT kontrak.nim, mahasiswa.nama_mhs, matakuliah.nama_mk FROM kontrak INNER JOIN mahasiswa ON kontrak.nim = mahasiswa.nim INNER JOIN matakuliah ON kontrak.id_matakuliah = matakuliah.id_matakuliah GROUP BY kontrak.nim HAVING matakuliah.sks > 10;

-- 5. Tampilkan mahasiswa yang mengontrak mata kuliah 'data mining';
SELECT kontrak.nim, mahasiswa.nama_mhs, matakuliah.nama_mk FROM kontrak INNER JOIN mahasiswa ON kontrak.nim = mahasiswa.nim INNER JOIN matakuliah ON kontrak.id_matakuliah = matakuliah.id_matakuliah WHERE matakuliah.nama_mk = 'Data Mining';

-- 6. Tampilkan jumlah mahasiswa untuk setiap dosen;
-- 7. Urutkan mahasiswa berdasarkan umurnya.
SELECT * FROM mahasiswa ORDER BY umur ASC|DESC

-- 8. Tampilkan kontrak matakuliah yang harus diulang (nilai D dan E), serta tampilkan data mahasiswa jurusan dan dosen secara lengkap. gunakan mode JOIN dan WHERE clause;
