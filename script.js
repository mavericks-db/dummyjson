let container = document.querySelector(".container");

let api = "https://dummyjson.com/users";

function fetchData() {

  fetch(api).then(res => res.json()).then(data => {
    let users = data.users;

    users.map(user => {
      let userDiv = document.createElement("div");
      userDiv.classList.add("userDiv");

      userDiv.addEventListener("mouseenter", () => {
        hoverDiv.style.display = "flex";
      });

      userDiv.addEventListener("mouseleave", () => {
        hoverDiv.style.display = "none";
      });


      let userImg = document.createElement("img");
      userImg.src = user.image;

      let userName = document.createElement("h2");
      userName.textContent = user.username;

      // hover container 
      let hoverDiv = document.createElement("div");
      hoverDiv.classList.add("hoverDiv");

      let userFirst = document.createElement("p");
      userFirst.textContent = "First Name:  " + user.firstName;
      let userLast = document.createElement("p");
      userLast.textContent = "Last Name:  " + user.lastName;
      let userMaiden = document.createElement("p");
      userMaiden.textContent = "Maiden Name:  " + user.maidenName;
      let userAge = document.createElement("p");
      userAge.textContent = "Age:  " + user.age;
      let userGender = document.createElement("p");
      userGender.textContent = "Gender:  " + user.gender;
      let userBirthDate = document.createElement("p");
      userBirthDate.textContent = "Birth Date:  " + user.birthDate;

      hoverDiv.append(userFirst, userLast, userMaiden, userAge, userGender, userBirthDate);
      userDiv.append(userImg, userName, hoverDiv);
      container.appendChild(userDiv, hoverDiv);
    });
  })

}

fetchData();
