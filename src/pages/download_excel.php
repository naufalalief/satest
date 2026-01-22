<?php
require_once '../../config/koneksi.php';
if (ob_get_level()) ob_end_clean();
ob_start();
header('Content-Type: application/vnd.ms-excel');
header('Content-Disposition: attachment; filename="data_aset_satona.xls"');

echo "<table border='1'>";
// KENDARAAN
echo "<tr><th colspan='5' style='background:#e0e0e0'>KENDARAAN</th></tr>";
echo "<tr style='background:#0074c2;color:#fff'><th>NO</th><th>KODE BARU</th><th>NAMA</th><th>TANGGAL PEROLEHAN</th><th>NILAI PEROLEHAN</th></tr>";
$q = $conn->query("SELECT * FROM satona WHERE kode_aset LIKE 'K1-%' OR kode_aset LIKE 'K2-%' ORDER BY kode_aset");
$no = 1; $total = 0;
while($row = $q->fetch_assoc()) {
    echo "<tr><td>{$no}</td><td>{$row['kode_aset']}</td><td>{$row['nama_aset']}</td><td>".date('d/M/Y', strtotime($row['tanggal_perolehan']))."</td><td>".number_format($row['harga_perolehan'],0,',','.')."</td></tr>";
    $total += $row['harga_perolehan'];
    $no++;
}
echo "<tr><td colspan='4'><b>TOTAL</b></td><td><b>".number_format($total,0,',','.')."</b></td></tr>";

// MESIN & PERALATAN
echo "<tr><td colspan='5'></td></tr>";
echo "<tr><th colspan='5' style='background:#e0e0e0'>MESIN & PERALATAN</th></tr>";
echo "<tr style='background:#0074c2;color:#fff'><th>NO</th><th>KODE BARU</th><th>NAMA</th><th>TANGGAL PEROLEHAN</th><th>NILAI PEROLEHAN</th></tr>";
$q = $conn->query("SELECT * FROM satona WHERE kode_aset LIKE 'MP-%' ORDER BY kode_aset");
$no = 1; $total = 0;
while($row = $q->fetch_assoc()) {
    echo "<tr><td>{$no}</td><td>{$row['kode_aset']}</td><td>{$row['nama_aset']}</td><td>".date('d/M/Y', strtotime($row['tanggal_perolehan']))."</td><td>".number_format($row['harga_perolehan'],0,',','.')."</td></tr>";
    $total += $row['harga_perolehan'];
    $no++;
}
echo "<tr><td colspan='4'><b>TOTAL</b></td><td><b>".number_format($total,0,',','.')."</b></td></tr>";

// INVENTARIS
echo "<tr><td colspan='5'></td></tr>";
echo "<tr><th colspan='5' style='background:#e0e0e0'>INVENTARIS</th></tr>";
echo "<tr style='background:#0074c2;color:#fff'><th>NO</th><th>KODE BARU</th><th>NAMA</th><th>TANGGAL PEROLEHAN</th><th>NILAI PEROLEHAN</th></tr>";
$q = $conn->query("SELECT * FROM satona WHERE kode_aset LIKE 'INV-%' ORDER BY kode_aset");
$no = 1; $total = 0;
while($row = $q->fetch_assoc()) {
    echo "<tr><td>{$no}</td><td>{$row['kode_aset']}</td><td>{$row['nama_aset']}</td><td>".date('d/M/Y', strtotime($row['tanggal_perolehan']))."</td><td>".number_format($row['harga_perolehan'],0,',','.')."</td></tr>";
    $total += $row['harga_perolehan'];
    $no++;
}
echo "<tr><td colspan='4'><b>TOTAL</b></td><td><b>".number_format($total,0,',','.')."</b></td></tr>";
echo "</table>";
$conn->close();
ob_end_flush();
