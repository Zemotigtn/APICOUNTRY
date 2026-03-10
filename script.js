let infos = document.querySelector("section");

var capitaldiv = document.createElement("div");
var flagdiv = document.createElement("div");
var countrydiv = document.createElement("div");
var continentdiv = document.createElement("div");

function search() {
  let textcountry = document.querySelector(".text").value;
  //   textcountry.innerHTML = `<span>pays</span><br>
  //   <p>${textcountry}</p>`;

  let url = "https://restcountries.com/v3.1/name/" + textcountry;
  fetch(url).then((response) =>
    response.json().then((data) => {
      // console.log(data)
      const country = data[0];
      const capital = country.capital;
      const continent = country.continents;
      const flag = country.flags.svg;

      countrydiv.innerHTML = `<span>pays</span><br>
  <p>${textcountry}</p>`;
      capitaldiv.innerHTML = `<span>capital</span><br>
  <p>${capital}</p>`;
      continentdiv.innerHTML = `<span>continent</span><br>
  <p>${continent}</p>`;
      flagdiv.innerHTML = `<span>flag</span><br>
  <img src="${flag}">`;

      infos.appendChild(countrydiv);
      infos.appendChild(continentdiv);
      infos.appendChild(capitaldiv);
      infos.appendChild(flagdiv);
    }),
  );
}

