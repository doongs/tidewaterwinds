(function () {
  //console.log(sessionStorage.getItem("visited"));
  if (sessionStorage.getItem("visited") == null) {
    $("#alertModal").modal("show");
    sessionStorage.setItem("visited", true);
  }
  windsJSON = loadWinds();

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
})();

function loadWinds() {
  fetch("winds.json")
    .then((response) => response.json())
    .then((data) => processWinds(data));
}

function processWinds(json) {
  console.log(json);
  let carousel = document.querySelector(`#carouselWindsInner`);
  for (const property in json) {
    //console.log(`${property}: ${json[property].length}`);

    //Split the array of members into two even subarrays
    let half = Math.ceil(json[property].length / 2);
    let firstHalf = json[property].splice(0, half);
    let secondHalf = json[property].splice(-half);

    if (secondHalf.length == 0) {
      //Main div for carousel item
      let div = document.createElement("div");
      div.classList.add("carousel-item");

      //Header for the section ("Flutes")
      let section = document.createElement("p");
      section.textContent = property;
      div.appendChild(section);

      //Divider between header and member list
      let hr = document.createElement("hr");
      hr.classList.add("divider", "light", "my-4");
      div.appendChild(hr);

      for (let member of firstHalf) {
        let p = document.createElement("p");
        p.textContent = member;
        div.appendChild(p);
      }
      carousel.appendChild(div);
    } else {
      //console.log(i);

      //Main div for carousel item
      let div = document.createElement("div");
      div.classList.add("carousel-item");

      //Bootstrap Grid elements for member layout
      let row = document.createElement("div");
      row.classList.add("row");

      let col1 = document.createElement("div");
      col1.classList.add("col-6");

      let col2 = document.createElement("div");
      col2.classList.add("col-6");

      row.appendChild(col1);
      row.appendChild(col2);

      //Header for the section ("Flutes")
      let section = document.createElement("p");
      section.textContent = property;
      div.appendChild(section);

      //Divider between header and member list
      let hr = document.createElement("hr");
      hr.classList.add("divider", "light", "my-4");
      div.appendChild(hr);

      for (let member of firstHalf) {
        let p = document.createElement("p");
        p.textContent = member;
        col1.appendChild(p);
      }
      for (let member of secondHalf) {
        let p = document.createElement("p");
        p.textContent = member;
        col2.appendChild(p);
      }
      div.appendChild(row);
      carousel.appendChild(div);
    }
  }

  /*
  for(let section of json.keys) {
    let div = document.createElement("div");
    div.classList.add("carousel-item");
    for (let member of section) {
        let p = document.createElement("p");
        p.textContent = member;
    }
    carousel.appendChild(div);
  }
  */
}
