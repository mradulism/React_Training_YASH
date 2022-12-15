console.log("Welcome to Notes Taker");
showNotes();


let btnAdd = document.getElementById('addBtn');
btnAdd.addEventListener("click", function (e) {
  let txtAdd = document.getElementById("addTxt");
  //checking whether we have alrady notes in localstorage or not
  let note = localStorage.getItem("notes");
  let noteObj;
  if (note == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(note);
  }
  notesObj.push(txtAdd.value);
  //alert(txtAdd.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  txtAdd.value = "";
  console.log(notesObj);
  showNotes();
});



function showNotes() {
    let notes = localStorage.getItem("notes");
    let notesObj;
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    let html = "";
    console.log(notesObj);
    notesObj.forEach(function(element, index) {
      html += `
              <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                      <div class="card-body">
                          <h5 class="card-title">Note ${index + 1}</h5>
                          <p class="card-text"> ${element}</p>
                          <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                      </div>
                  </div>`;
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
      notesElm.innerHTML = html;
    } else {
      notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
  }

  function deleteNote(index){
    let notes = localStorage.getItem("notes");
    let notesObj;
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
  }
