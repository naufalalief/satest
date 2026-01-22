<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
require_once '../../config/koneksi.php';

try {
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        header('Location: ../../data_aset.html?error=Metode+tidak+diizinkan');
        exit;
    }

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
        $stmt = $conn->prepare("UPDATE satona SET nama_aset=?, tanggal_perolehan=?, harga_perolehan=? WHERE kode_aset=?");
        $stmt->bind_param("ssds", $nama_aset, $tanggal_perolehan, $harga_perolehan, $kode_aset);
        $stmt->execute();
        $stmt->close();
        header('Location: ../../data_aset.html?msg=Data+berhasil+diupdate');
    } else {
        header('Location: ../../data_aset.html?error=Data+tidak+lengkap');
    }
} catch (mysqli_sql_exception $e) {
    header('Location: ../../data_aset.html?error=Gagal+update+data');
}
$conn->close();
