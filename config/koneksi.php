<?php
$host = 'localhost';
$username = 'root';
$password = '';
$database = 'db_inventarisir_aset';

$conn = new mysqli($host, $username, $password, $database);
if ($conn->connect_error) {
    die('Koneksi database gagal');
}
?>
