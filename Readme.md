

# Note App

This is a **Note-taking application** where users can create, save, and delete notes. The notes are saved in the browser's local storage, ensuring they persist even after the page is refreshed.

## Preview

- **Screenshots**
- ![Screenshot 2024-08-13 220734](https://github.com/user-attachments/assets/e1dd0ab1-e71e-4464-9767-eaecf9f5cfe1)
- ![Screenshot 2024-08-13 220824](https://github.com/user-attachments/assets/3272a8f1-2867-4262-8980-e675d969e6ba)


## Features

- **Add Notes**: Users can easily add new notes using the "Add Note" button.
- **Save Notes**: Notes are automatically saved to the browser's local storage.
- **Delete Notes**: Notes can be deleted using the trash icon.
- **Responsive Design**: The app is responsive and adapts to different screen sizes.
- **Stylish UI**: The app features a modern and clean interface with Bootstrap integration and custom CSS.

## Technologies Used

- **HTML5**: Provides the structure of the app.
- **CSS3**: For custom styling and layout.
- **Bootstrap 5**: Used for responsive design and UI components.
- **JavaScript**: Handles the functionality, including adding, saving, and deleting notes.
- **Font Awesome**: Used for icons like the cloud (save) and trash (delete).

## How It Works

1. **Adding a Note**:
    - Click the "Add Note" button to create a new note.
    - A new note will appear with a textarea for writing.

2. **Saving a Note**:
    - Notes are automatically saved when the textarea loses focus, or when the save icon (cloud) is clicked.
    - The notes are stored in the browser's local storage.

3. **Deleting a Note**:
    - Click the trash icon to delete a note.
    - The note will be removed from both the UI and local storage.

## Installation and Setup

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/prasxor/Note-App.git
    ```
2. **Navigate to the Project Directory**:
    ```bash
    cd note-app
    ```
3. **Open `index.html` in Your Browser**:
    - Simply double-click the `index.html` file to open it in your default web browser.

## Project Structure

```
note-app/
├── index.html
├── styles.css
├── script.js
└── Assets/
    ├── note-sticky-solid.svg
    ├── cloud-solid.svg
    └── trash-solid.svg
```

## Demo

You can view a live demo of the app https://prasxor-noteapp.netlify.app/ .

## Future Improvements

- **Edit Note Title**: Allow users to add a title to each note.
- **Search Functionality**: Implement a search feature to filter notes by content.
- **Multiple Categories**: Organize notes into different categories or folders.

---
