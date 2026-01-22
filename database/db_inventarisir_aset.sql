CREATE DATABASE IF NOT EXISTS db_inventarisir_aset;
USE db_inventarisir_aset;

CREATE TABLE IF NOT EXISTS satona (
	kode_aset VARCHAR(20) PRIMARY KEY,
	nama_aset VARCHAR(100),
	tanggal_perolehan TIMESTAMP,
	harga_perolehan INT
);
