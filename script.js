function updateProfile() {
    const name = document.getElementById("nameInput").value;
    const nick = document.getElementById("nickInput").value;
    const avatar = document.getElementById("avatarInput").value;
    const about = document.getElementById("aboutInput").value;
    const hobbies = document.getElementById("hobbiesInput").value;
  
    document.getElementById("profileName").textContent =
      name || "Мій профіль";
  
    document.getElementById("profileNick").textContent =
      nick ? "@" + nick : "@nickname";
  
    document.getElementById("avatar").textContent =
      avatar || "😊";
  
    document.getElementById("profileAbout").textContent =
      about || "Тут буде інформація про мене!";
  
    document.getElementById("profileHobbies").textContent =
      hobbies || "Малювання, музика, ігри";
  }
  
  // Зміна теми
  let themeNumber = 0;
  
  function changeTheme() {
    const themes = ["", "dark", "pink"];
  
    document.body.classList.remove("dark", "pink");
  
    themeNumber = (themeNumber + 1) % themes.length;
  
    if (themes[themeNumber] !== "") {
      document.body.classList.add(themes[themeNumber]);
    }
  }
  
  // Поділитися профілем
  function shareProfile() {
    const name = document.getElementById("profileName").textContent;
    const nick = document.getElementById("profileNick").textContent;
    const about = document.getElementById("profileAbout").textContent;
    const hobbies = document.getElementById("profileHobbies").textContent;
    const avatar = document.getElementById("avatar").textContent;
  
    const text = `${avatar} ${name}\n${nick}\n${about}\nМої захоплення: ${hobbies}`;
  
    if (navigator.share) {
      navigator.share({
        title: "Мій цифровий профіль",
        text: text
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text)
        .then(() => alert("Профіль скопійовано!"))
        .catch(() => alert(text));
    }
  }
  
  
  
