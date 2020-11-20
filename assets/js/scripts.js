(function () {
  if (sessionStorage.getItem("visited") != true) {
    $("#alert-modal").modal("show");
    sessionStorage.setItem("visited", true);
  }
})();
