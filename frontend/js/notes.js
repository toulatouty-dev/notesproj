const notesContainer = document.getElementById("notesContainer");
const logoutButton = document.getElementById("logoutBtn");

logoutButton.addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "index.html";
});

fetch("http://localhost:3000/api/notes",{
  headers: {
    "Authorization": `Bearer ${localStorage.getItem("token")}`
  }
})
  .then((res) => {
    if (!res.ok) {
      throw new Error(`Unable to load notes (${res.status})`);
    }
    return res.json();
  })
  .then((notes) => {
    displayNotes(notes);
  })
  .catch((error) => {
    console.error(error);
    notesContainer.innerHTML = "<p>Unable to load notes.</p>";
  });

function displayNotes(notes) {
  notesContainer.innerHTML = "";

  if (!Array.isArray(notes) || notes.length === 0) {
    notesContainer.innerHTML = "<p>No notes available.</p>";
    return;
  }

  notes.forEach((note) => {
    const div = document.createElement("div");
    div.classList.add("note-card");
    div.innerHTML = `
      <h3>${note.title}</h3>
      <p>${note.content}</p>
      <button class="delete-btn" onclick="deleteNote('${note._id}')">Delete</button>
    `;
    notesContainer.appendChild(div);
  });
}
