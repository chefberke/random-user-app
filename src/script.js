const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  fetch("https://randomuser.me/api/")
    .then((data) => {
      const opacitySettings = document.querySelectorAll(".opacity-settings");
      const nullTitle = document.querySelector(".null");

      opacitySettings.forEach((opacity) => {
        opacity.classList.remove("opacity-0");
      });

      if (nullTitle) {
        nullTitle.innerHTML = "";
      }
      return data.json();
    })
    .then((dataReturn) => {
      document.querySelector(
        ".name"
      ).innerHTML = `<strong>Name:</strong> ${dataReturn.results[0].name.first} ${dataReturn.results[0].name.last}`;
      document.querySelector(
        ".age"
      ).innerHTML = `<strong> Age:</strong> ${dataReturn.results[0].dob.age}`;
      document.querySelector(
        ".email"
      ).innerHTML = `<strong>Email:</strong> ${dataReturn.results[0].email}`;
      document.querySelector(
        ".phone"
      ).innerHTML = `<strong>Phone:</strong> ${dataReturn.results[0].phone}`;
      document.querySelector(
        ".location"
      ).innerHTML = `<strong>Location:</strong> 📍${dataReturn.results[0].location.country} / ${dataReturn.results[0].location.city}`;
      document.querySelector(".image").src =
        dataReturn.results[0].picture.large;

      if (dataReturn.results[0].location.city == "İzmir") {
        console.log("izmirr");
      }
    })
    .then(() => {
      const date = new Date().getTime();
      console.log(`${date}usercreated`);
    })
    .catch(() => {
      const opacitySettings = document.querySelectorAll(".opacity-settings");
      const nullTitle = document.querySelector(".null");

      opacitySettings.forEach((opacity) => {
        opacity.classList.add("opacity-0");
      });

      nullTitle.innerHTML = "404: Error <br> Try Again!";

      console.error("404: Error");
    });
});
