const noteForm = document.getElementById("noteForm");

noteForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = document.getElementById("noteTitle").value;
  const content = document.getElementById("noteContent").value;

  /*
        ============================================
        MOCK ADD NOTE
        ============================================

        Later, send the note to your backend:

        fetch("http://localhost:3000/api/notes", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                title: title,
                content: content
            })
        })

        .then(response => response.json())

        .then(data => {
            // Add returned note to the UI
        })

        .catch(error => {
            console.error(error);
        });
    */

  fetch("http://localhost:3000/api/notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" , "Authorization": `Bearer ${localStorage.getItem("token")}` },
    body: JSON.stringify({ title, content })
  })
    .then((res) => res.json())
    .then(() => {
      window.location.href = "notes.html";
    });


  // Create mock note
  const newNote = {
    id: Date.now(),

    title: title,

    content: content,
  };

  // Add note to the array
  notes.push(newNote);

  // Refresh notes
  displayNotes(notes);

  // Clear form
  noteForm.reset();
});
