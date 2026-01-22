<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
require_once '../../config/koneksi.php';
try {
	if (
		isset($_POST['kode_aset']) &&
		isset($_POST['nama_aset']) &&
		isset($_POST['tanggal_perolehan']) &&
		isset($_POST['harga_perolehan'])
	) {
		$kode_aset = $conn->real_escape_string($_POST['kode_aset']);
		$nama_aset = $conn->real_escape_string($_POST['nama_aset']);
		$tanggal_perolehan = $conn->real_escape_string($_POST['tanggal_perolehan']);
		$harga_perolehan = intval($_POST['harga_perolehan']);
		$tanggal_perolehan = date('Y-m-d H:i:s', strtotime($tanggal_perolehan));
		$stmt = $conn->prepare("INSERT INTO satona (kode_aset, nama_aset, tanggal_perolehan, harga_perolehan) VALUES (?, ?, ?, ?)");
		$stmt->bind_param("sssi", $kode_aset, $nama_aset, $tanggal_perolehan, $harga_perolehan);
		$stmt->execute();
		$stmt->close();
		header('Location: ../../index.html?msg=Data+berhasil+disimpan');
	} else {
		header('Location: ../../index.html?error=Data+tidak+lengkap');
	}
} catch (mysqli_sql_exception $e) {
	if ($e->getCode() == 1062) {
		header('Location: ../../index.html?error=Kode+aset+sudah+terdaftar');
	} else {
		header('Location: ../../index.html?error=Gagal+simpan+data');
	}
}
$conn->close();
