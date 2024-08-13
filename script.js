const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");


addBtn.addEventListener(
    "click",
    function () {
        addNote();
    }
)



const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes);
    const data = [];
    notes.forEach(
        (note) => { data.push(note.value) }
    )
    if (data.length === 0) {
        localStorage.removeItem("notes");
    }
    else {
        localStorage.setItem("notes", JSON.stringify(data))
    }
}



const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
    <div class="note">
        <div class="tool">
                <img class="cloud" src="./Assets/cloud-solid.svg" alt="">
                <img class="trash" src="./Assets/trash-solid.svg" alt="">
        </div>
            <textarea>${text}</textarea>
    </div>
    `;

    note.querySelector(".trash").addEventListener(
        "click",
        function () {
            note.remove();
            saveNotes();
        }
    )

    note.querySelector(".cloud").addEventListener(
        "click",
        function () {
            saveNotes();
        }
    )
    note.querySelector("textarea").addEventListener(
        "focusout",
        function () {
            saveNotes()
        }
    )
    main.appendChild(note);
    saveNotes();
}

(
    function () {
        const lsnotes = JSON.parse(localStorage.getItem("notes"));
        if (lsnotes === null) {
            addNote()
        } else {
            lsnotes.forEach(
                (lsnotes) => {
                    addNote(lsnotes);
                }
            )
        }
    }
)()