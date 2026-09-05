function deleteNote(noteId) {
  /*
        ============================================
        MOCK DELETE
        ============================================

        Later, send a DELETE request to your backend:

        fetch(`http://localhost:3000/api/notes/${noteId}`, {
            method: "DELETE",

            headers: {
                "Content-Type": "application/json",

                // If using JWT:
                // "Authorization": `Bearer ${token}`
            }
        })

        .then(response => response.json())

        .then(data => {
            // Refresh notes
        })

        .catch(error => {
            console.error(error);
        });
    */


  fetch(`http://localhost:3000/api/notes/${noteId}`, {
    method: "DELETE"
  })
    .then((res) => res.json())
    .then(() => {
      location.reload();
    });

  // Ask for confirmation
  const confirmed = confirm("Are you sure you want to delete this note?");

  if (!confirmed) {
    return;
  }

  // Find note index
  const noteIndex = notes.findIndex(function (note) {
    return note.id === noteId;
  });

  if (noteIndex === -1) {
    return;
  }

  // Delete note from mock data
  notes.splice(noteIndex, 1);

  // Refresh UI
  displayNotes(notes);
}
