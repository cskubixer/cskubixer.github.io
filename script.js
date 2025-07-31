function openModal(element) {
  const modal = document.getElementById("lightbox");
  const modalImg = document.getElementById("lightbox-img");
  modal.style.display = "block";
  modalImg.src = element.src;
}

function closeModal() {
  document.getElementById("lightbox").style.display = "none";
}
