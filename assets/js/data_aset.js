function formatRupiah(angka) {
  return "Rp " + Number(angka).toLocaleString("id-ID");
}

function loadAset() {
  fetch("src/pages/data_aset.php")
    .then(response => response.json())
    .then(data => {
      const tbody = document.querySelector("#aset-table tbody");
      tbody.innerHTML = "";
      if (data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5">Belum ada data aset.</td></tr>';
        return;
      }
      data.forEach(row => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td class="py-2 px-4">${row.kode_aset}</td>
          <td class="py-2 px-4">${row.nama_aset}</td>
          <td class="py-2 px-4">${row.tanggal_perolehan}</td>
          <td class="py-2 px-4">${formatRupiah(row.harga_perolehan)}</td>
          <td class="py-2 px-4">
            <a href="edit_aset.html?kode_aset=${encodeURIComponent(row.kode_aset)}" class="inline-block bg-yellow-400 text-gray-900 px-3 py-1 rounded mr-2 hover:bg-yellow-300 font-semibold">Edit</a>
            <a href="hapus_aset.php?kode_aset=${encodeURIComponent(row.kode_aset)}" class="inline-block bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500 font-semibold" onclick="return confirm('Yakin ingin menghapus data ini?')">Hapus</a>
          </td>
        `;
        tbody.appendChild(tr);
      });
    })
    .catch(err => {
      showToast("Gagal memuat data aset", "error");
    });
}

document.addEventListener("DOMContentLoaded", loadAset);
