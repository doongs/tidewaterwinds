(function () {
  //console.log(sessionStorage.getItem("visited"));
  if (sessionStorage.getItem("visited") == null) {
    $("#alert-modal").modal("show");
    sessionStorage.setItem("visited", true);
  }
})();
