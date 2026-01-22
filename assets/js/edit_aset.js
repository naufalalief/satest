function getQueryParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

const kode_aset = getQueryParam("kode_aset");
if (!kode_aset) {
  showToast("Kode aset tidak ditemukan", "error");
  document.getElementById("editForm").style.display = "none";
} else {
  fetch("src/actions/data_aset.php")
    .then(res => res.json())
    .then(data => {
      const aset = data.find(a => a.kode_aset === kode_aset);
      if (!aset) {
        showToast("Data aset tidak ditemukan", "error");
        document.getElementById("editForm").style.display = "none";
        return;
      }
      document.getElementById("kode_aset").value = aset.kode_aset;
      document.getElementById("nama_aset").value = aset.nama_aset;
      document.getElementById("tanggal_perolehan").value =
        aset.tanggal_perolehan.replace(" ", "T");
      document.getElementById("harga_perolehan").value = aset.harga_perolehan;
    });
}
