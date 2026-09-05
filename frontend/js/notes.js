const notesContainer = document.getElementById("notesContainer");

/*
    ============================================
    MOCK NOTES
    ============================================

    This simulates data coming from the backend.

    Later, replace the mock data with:

    fetch("http://localhost:3000/api/notes", {
        method: "GET",

        headers: {
            "Content-Type": "application/json",

            // If your backend uses JWT:
            // "Authorization": `Bearer ${token}`
        }
    })

    .then(response => response.json())

    .then(data => {
        displayNotes(data);
    })

    .catch(error => {
        console.error(error);
    });
*/

fetch("http://localhost:3000/api/notes")
  .then((res) => res.json())
  .then((notes) => displayNotes(notes));

function displayNotes(notes) {
  notesContainer.innerHTML = "";
  notes.forEach((note) => {
    const div = document.createElement("div");
    div.classList.add("note-card");
    div.innerHTML = `
      <h3>${note.title}</h3>
      <p>${note.content}</p>
      <button onclick="deleteNote('${note._id}')">Delete</button>
    `;
    notesContainer.appendChild(div);
  });
}

let notes = [
  {
    id: 1,
    title: "Learn JavaScript",
    content: "Study functions, arrays and objects.",
  },

  {
    id: 2,
    title: "Build a project",
    content: "Create a small Notes application.",
  },

  {
    id: 3,
    title: "Learn Fetch API",
    content: "Understand how frontend communicates with backend.",
  },
];

// Display notes
function displayNotes(data) {
  notesContainer.innerHTML = "";

  if (notes.length === 0) {
    notesContainer.innerHTML = `
            <p>No notes available.</p>
        `;

    return;
  }

  data.forEach(function (note) {
    const noteElement = document.createElement("div");

    noteElement.classList.add("note-card");

    noteElement.innerHTML = `
            <h3>${note.title}</h3>

            <p>${note.content}</p>

            <button
                class="delete-btn"
                onclick="deleteNote('${note._id}')"
            >
                Delete
            </button>
        `;

    notesContainer.appendChild(noteElement);
  });
}

// Initial display
displayNotes(notes);
