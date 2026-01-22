const pageSize = 10;
let allAsetData = [];
let filteredAsetData = [];
let currentPage = 1;

function renderAsetTable(data) {
  const tbody = document.querySelector("#aset-table tbody");
  tbody.innerHTML = "";
  if (data.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5">Belum ada data aset.</td></tr>';
    renderPagination(0, pageSize, currentPage, onPageChange);
    return;
  }
  const startIdx = (currentPage - 1) * pageSize;
  const endIdx = startIdx + pageSize;
  const pageData = data.slice(startIdx, endIdx);
  pageData.forEach(row => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="py-2 px-4">${row.kode_aset}</td>
      <td class="py-2 px-4">${row.nama_aset}</td>
      <td class="py-2 px-4">${row.tanggal_perolehan}</td>
      <td class="py-2 px-4">${formatRupiah(row.harga_perolehan)}</td>
      <td class="py-2 px-4">
        <a href="edit_aset.html?kode_aset=${encodeURIComponent(row.kode_aset)}" class="inline-block bg-yellow-400 text-gray-900 px-3 py-1 rounded mr-2 hover:bg-yellow-300 font-semibold">Edit</a>
        <a href="src/actions/hapus_aset.php?kode_aset=${encodeURIComponent(row.kode_aset)}" class="inline-block bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500 font-semibold" onclick="return confirm('Yakin ingin menghapus data ini?')">Hapus</a>
      </td>
    `;
    tbody.appendChild(tr);
  });
  renderPagination(data.length, pageSize, currentPage, onPageChange);
}

function onPageChange(page) {
  currentPage = page;
  renderAsetTable(filteredAsetData);
}

function loadAset() {
  fetch("src/actions/data_aset.php")
    .then(response => response.json())
    .then(data => {
      allAsetData = data;
      filteredAsetData = allAsetData;
      currentPage = 1;
      renderAsetTable(filteredAsetData);
    })
    .catch(err => {
      showToast("Gagal memuat data aset", "error");
      filteredAsetData = [];
      renderAsetTable(filteredAsetData);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  loadAset();
  const searchInput = document.getElementById("searchInput");
  const filterKategori = document.getElementById("filterKategori");

  function applyFilters() {
    const keyword = searchInput ? searchInput.value.trim().toLowerCase() : "";
    const kategori = filterKategori ? filterKategori.value : "";
    filteredAsetData = allAsetData.filter(row => {
      let kategoriMatch = true;
      if (kategori === "K") {
        kategoriMatch =
          row.kode_aset.startsWith("K1-") || row.kode_aset.startsWith("K2-");
      } else if (kategori === "MP") {
        kategoriMatch = row.kode_aset.startsWith("MP-");
      } else if (kategori === "INV") {
        kategoriMatch = row.kode_aset.startsWith("INV-");
      }
      let namaMatch = row.nama_aset.toLowerCase().includes(keyword);
      return kategoriMatch && namaMatch;
    });
    currentPage = 1;
    renderAsetTable(filteredAsetData);
  }

  if (searchInput) {
    searchInput.addEventListener("input", applyFilters);
  }
  if (filterKategori) {
    filterKategori.addEventListener("change", applyFilters);
  }
});
