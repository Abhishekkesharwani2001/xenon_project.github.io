let register = async () => {
  try {
    let register_data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };
    register_data = JSON.stringify(register_data);
    let res = await fetch("https://gadgetapi.herokuapp.com/api/register", {
      method: "POST",
      body: register_data,
      headers: {
        "Content-type": "application/json",
      },
    });
    let data = await res.json();
    console.log("data:", data);
    window.location = "/auth/login.html";
    window.alert("User successfully created. Now login to continue.!");
  } catch (error) {
    console.log("error:", error);
  }
};

let login = async () => {
  try {
    let login_data = {
      email: document.getElementById("login-email").value,
      password: document.getElementById("login-password").value,
    };
    let login_data_json = JSON.stringify(login_data);
    let res = await fetch("https://gadgetapi.herokuapp.com/api/login", {
      method: "POST",
      body: login_data_json,
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    sessionStorage.setItem("isAuthenticated", true);
    sessionStorage.setItem("currUserId", data.user._id);
    sessionStorage.setItem("currUserName", data.user.name.split(" ")[0]);
    console.log("data:", data);
    window.location = "/";
  } catch (error) {
    console.log("error:", error);
  }
};
