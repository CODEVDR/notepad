// adding title
document.title = "Untitled - Notepad";
// styling textarea
let textarea = document.getElementById("notepad");
if (screen.width < 900) {
  textarea.style.width = `${screen.width}px`;
  document.getElementById("head").innerHTML = null;
} else {
  textarea.style.width = `${screen.width - 50}px`;
}
textarea.style.height = `${screen.height}px`;
// Main
// Saving File in LocalStorage
document.getElementById("save").onclick = () => {
  let fileName = prompt("Enter FileName To Save : ").toLowerCase();
  let content = document.getElementById("notepad").value;
  if (fileName === "") {
    alert("Error !! Filename Can't Be Empty");
  } else if (content === "") {
    alert("Error !! File Can't Be Saved With Empty Content");
  } else {
    document.title = `${fileName} - Notepad`;
    localStorage.setItem(fileName, content);
    alert(`${fileName} Stored Sucessfully!!!!`);
  }
};
// Saving As File in LocalStorage
document.getElementById("saveAs").onclick = () => {
  let fileName = prompt("Enter FileName To SaveAs : ").toLowerCase();
  let content = document.getElementById("notepad").value;
  if (fileName === "") {
    alert("Error !! Filename Can't Be Empty");
  } else if (content === "") {
    alert("Error !! File Can't Be Saved With Empty Content");
  } else {
    document.title = `${fileName} - Notepad`;
    localStorage.setItem(fileName, content);
    alert(`${fileName} Stored Sucessfully!!!!`);
  }
};
// opening File From LocalStorage
document.getElementById("open").onclick = () => {
  let files = [];
  for (var i = 0, len = localStorage.length; i < len; ++i) {
    files.push(localStorage.key(i));
  }

  let fileName = prompt(
    `Enter FileName To Open\nFiles Available : ${files}`
  ).toLowerCase();
  let val = localStorage.getItem(fileName);
  if (val === null) {
    alert("No Such File In Our Database");
  } else {
    document.getElementById("notepad").innerHTML = val;
    document.title = `${fileName} - Notepad`;
  }
};
document.getElementById("close").onclick = () => {
  let val = confirm("Do You Want To Close File??");
  if (val) {
    document.title = `Untitled - Notepad`;
    document.getElementById("notepad").innerHTML = null;
  }
};

// Implementation of tab key for spaces in text area
document.getElementById('notepad').addEventListener('keydown', function(e) {
  if (e.key == 'Tab') {
    e.preventDefault();
    var start = this.selectionStart;
    var end = this.selectionEnd;

    // set textarea value to: text before caret + tab + text after caret
    this.value = this.value.substring(0, start) +
      "\t" + this.value.substring(end);

    // put caret at right position again
    this.selectionStart =
      this.selectionEnd = start + 1;
  }
});
