function renderPagination(totalItems, pageSize, currentPage, onPageChange) {
  const pagination = document.getElementById("pagination");
  if (!pagination) return;
  pagination.innerHTML = "";
  const totalPages = Math.ceil(totalItems / pageSize);
  if (totalPages <= 1) return;

  const prevBtn = document.createElement("button");
  prevBtn.textContent = "<";
  prevBtn.className = "px-3 py-1 rounded border bg-gray-200 hover:bg-gray-300";
  prevBtn.disabled = currentPage === 1;
  prevBtn.onclick = function () {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };
  pagination.appendChild(prevBtn);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.className = `px-3 py-1 rounded border ${i === currentPage ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`;
    btn.disabled = i === currentPage;
    btn.onclick = function () {
      onPageChange(i);
    };
    pagination.appendChild(btn);
  }

  const nextBtn = document.createElement("button");
  nextBtn.textContent = ">";
  nextBtn.className = "px-3 py-1 rounded border bg-gray-200 hover:bg-gray-300";
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.onclick = function () {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };
  pagination.appendChild(nextBtn);
}
