var cirkel;

function loading() {
  cirkel = setTimeout(showPage, 3000); /* 3000 milisekunder*/
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}