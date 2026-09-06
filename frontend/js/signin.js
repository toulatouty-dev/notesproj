const signinForm = document.getElementById("signinForm");
const message = document.getElementById("message");

signinForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  /*
        ============================================
        MOCK LOGIN
        ============================================

        For now, we simulate the backend response.

        Later, replace this section with:

        fetch("http://localhost:3000/api/auth/login", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email: email,
                password: password
            })
        })

        .then(response => response.json())

        .then(data => {
            // Handle backend response
        })

        .catch(error => {
            console.error(error);
        });
    */

 fetch("http://localhost:3000/api/auth/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email, password })
})
.then((res) => {
  if (!res.ok) {
    throw new Error("not valid");
  }
  return res.json();
})
.then((data) => {
  if (data.token) {
    localStorage.setItem("token", data.token);
    window.location.href = "notes.html";
  }
})
.catch((err) => {
  alert(err.message); 
});

  // Mock user
  const mockUser = {
    email: "student@example.com",
    password: "123456",
  };

  if (email === mockUser.email && password === mockUser.password) {
    message.style.color = "green";
    message.textContent = "Login successful!";

    // Save login state temporarily
    localStorage.setItem("isLoggedIn", "true");

    // Go to notes page
    setTimeout(function () {
      window.location.href = "notes.html";
    }, 500);
  } else {
    message.style.color = "red";
    message.textContent = "Invalid email or password.";
  }
});
