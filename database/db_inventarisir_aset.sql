CREATE DATABASE IF NOT EXISTS db_inventarisir_aset;
USE db_inventarisir_aset;

CREATE TABLE IF NOT EXISTS satona (
	kode_aset VARCHAR(20) PRIMARY KEY,
	nama_aset VARCHAR(100),
	tanggal_perolehan TIMESTAMP,
	harga_perolehan BIGINT
);

INSERT INTO satona (kode_aset, nama_aset, tanggal_perolehan, harga_perolehan) VALUES
('K1-0001', 'Honda Beat', '2015-07-03 00:00:00', 13000000),
('K1-0002', 'Honda Vario', '2024-10-06 00:00:00', 22000000),
('K2-0001', 'Fortuner Silver Metalik', '2015-01-01 00:00:00', 450000000),
('K2-0002', 'Avanza', '2015-05-11 00:00:00', 150000000),
('K2-0003', 'Honda Accord', '2018-07-30 00:00:00', 590000000),
('MP-0001', 'Forklif', '2023-05-01 00:00:00', 2500000000),
('MP-0002', 'Loading Dock', '2024-03-01 00:00:00', 35000000),
('MP-0003', 'Tangki/ Storage', '2024-10-01 00:00:00', 75000000),
('INV-0001', 'Notebook Asus X441 MA', '2019-06-01 00:00:00', 4200000),
('INV-0002', 'Laptop Asus', '2019-06-01 00:00:00', 4500000),
('INV-0003', 'AC', '2020-06-19 00:00:00', 3500000),
('INV-0004', 'TV LED 32"', '2022-06-19 00:00:00', 4000000),
('INV-0005', 'Tablet samsung', '2023-08-12 00:00:00', 10000000),
('INV-0006', 'HP Samsung', '2024-11-01 00:00:00', 6000000),
('INV-0007', 'PC Lenovo 1 Pcs', '2025-05-01 00:00:00', 4450000);
