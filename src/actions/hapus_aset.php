<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
require_once '../../config/koneksi.php';

try {
    if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
        header('Location: ../../data_aset.html?error=Metode+tidak+diizinkan');
        exit;
    }
    if (!isset($_GET['kode_aset'])) {
        header('Location: ../../data_aset.html?error=Kode+aset+tidak+ada');
        exit;
    }
    $kode_aset = $conn->real_escape_string($_GET['kode_aset']);
    $stmt = $conn->prepare("DELETE FROM satona WHERE kode_aset=?");
    $stmt->bind_param("s", $kode_aset);
    $stmt->execute();
    $stmt->close();
    header('Location: ../../data_aset.html?msg=Data+berhasil+dihapus');
} catch (mysqli_sql_exception $e) {
    header('Location: ../../data_aset.html?error=Gagal+hapus+data');
}
$conn->close();
