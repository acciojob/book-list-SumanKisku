//your JS code here. If required.
const title = document.getElementById("title");
const author = document.getElementById("author");
const isbn = document.getElementById("isbn");
const submit = document.getElementById("submit");
const booklist = document.getElementById("book-list");

submit.addEventListener("click", function(e) {
    e.preventDefault();
    booklist.innerHTML = `
    <tr>
    <td>${title.value}</td>
    <td>${author.value}</td>
    <td>${isbn.value}</td>
    <td><i class="fa-solid fa-xmark delete"></i></td>
    </tr>`
});