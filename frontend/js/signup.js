const signupForm = document.getElementById("signupForm");
const message = document.getElementById("message");

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  /*
        ============================================
        MOCK SIGN UP
        ============================================

        For now, we don't send anything to a backend.

        Later, this is where you will use fetch():

        fetch("http://localhost:3000/api/auth/register", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: name,
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

  fetch("http://localhost:3000/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password })
  })
    .then((res) => res.json())
    .then((data) => {
      window.location.href = "signin.html";
    });


  // Check passwords
  if (password !== confirmPassword) {
    message.style.color = "red";
    message.textContent = "Passwords do not match.";

    return;
  }

  // Mock success
  message.style.color = "green";
  message.textContent = "Account created successfully!";

  console.log("Mock user:");
  console.log({
    name: name,
    email: email,
    password: password,
  });

  setTimeout(function () {
    window.location.href = "index.html";
  }, 1000);
});
