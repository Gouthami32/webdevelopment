// --------------------
// Library Data
// --------------------
let library = [
  {
    bookName: "Digital Electronics",
    total: 5,
    issued: []
  },
  {
    bookName: "Verilog HDL",
    total: 3,
    issued: []
  },
  {
    bookName: "JavaScript Basics",
    total: 4,
    issued: []
  }
];

// --------------------
// Load Books into Dropdown
// --------------------
let select = document.getElementById("bookSelect");

library.forEach((book, index) => {
  let option = document.createElement("option");
  option.value = index;
  option.text = book.bookName;
  select.add(option);
});

// --------------------
// Issue Book Function
// --------------------
function issueBook() {
  let studentName = document.getElementById("studentName").value.trim();
  let bookIndex = document.getElementById("bookSelect").value;

  if (studentName === "") {
    alert("Please enter student name");
    return;
  }

  let book = library[bookIndex];

  // Check availability
  if (book.total === 0) {
    alert("Book not available");
    return;
  }

  // Prevent same student taking same book again
  if (book.issued.includes(studentName)) {
    alert("This student already took this book");
    return;
  }

  // Issue book
  book.total--;
  book.issued.push(studentName);

  document.getElementById("studentName").value = "";

  displayBooks();
}

// --------------------
// Display Books
// --------------------
function displayBooks() {
  let bookDiv = document.getElementById("bookList");
  bookDiv.innerHTML = "";

  library.forEach(book => {
    let students =
      book.issued.length > 0 ? book.issued.join(", ") : "None";

    bookDiv.innerHTML += `
      <div class="book">
        <h3>${book.bookName}</h3>
        <p><strong>Available Copies:</strong> ${book.total}</p>
        <p><strong>Total Students Taken:</strong> ${book.issued.length}</p>
        <p><strong>Student Names:</strong> ${students}</p>
      </div>
    `;
  });
}

// --------------------
// Initial Display
// --------------------
displayBooks();
