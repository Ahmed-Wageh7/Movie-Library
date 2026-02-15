var defaultMovies = [
  { name: "Inception", image: "../images/image_1.webp" },
  { name: "The Dark Knight", image: "../images/image_2.webp" },
  { name: "Fight Club", image: "../images/image_3.webp" },
  { name: "Gladiator", image: "../images/image_4.webp" },
  { name: "Avatar", image: "../images/image_5.webp" },
];

var movies = JSON.parse(localStorage.getItem("moviesList")) || defaultMovies;
if (!Array.isArray(movies) || movies.length === 0) movies = defaultMovies;
localStorage.setItem("moviesList", JSON.stringify(movies));

document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.fontFamily =
  "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";
document.body.style.background =
  "linear-gradient(135deg, #0c0c1a 0%, #1a1a2e 50%, #16213e 100%)";
document.body.style.minHeight = "100vh";
document.body.style.color = "#e2e8f0";

var container = document.createElement("div");
container.style.maxWidth = "1400px";
container.style.margin = "0 auto";
container.style.padding = "2rem";
container.style.minHeight = "100vh";
document.body.appendChild(container);

var header = document.createElement("header");
header.style.textAlign = "center";
header.style.marginBottom = "3rem";
container.appendChild(header);

var title = document.createElement("h1");
title.innerText = "Movies Library";
title.style.fontSize = "3.5rem";
title.style.fontWeight = "800";
title.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
title.style.webkitBackgroundClip = "text";
title.style.webkitTextFillColor = "transparent";
title.style.backgroundClip = "text";
title.style.margin = "0";
title.style.letterSpacing = "-0.05em";
header.appendChild(title);

var subtitle = document.createElement("p");
subtitle.innerText = "Manage your favorite movies collection";
subtitle.style.color = "#94a3b8";
subtitle.style.fontSize = "1.2rem";
subtitle.style.marginTop = "0.5rem";
header.appendChild(subtitle);

var formContainer = document.createElement("div");
formContainer.style.background = "rgba(255, 255, 255, 0.05)";
formContainer.style.backdropFilter = "blur(20px)";
formContainer.style.border = "1px solid rgba(255, 255, 255, 0.1)";
formContainer.style.borderRadius = "24px";
formContainer.style.padding = "2.5rem";
formContainer.style.marginBottom = "3rem";
formContainer.style.boxShadow = "0 25px 50px -12px rgba(0, 0, 0, 0.25)";
container.appendChild(formContainer);

var form = document.createElement("div");
form.style.display = "grid";
form.style.gridTemplateColumns = "repeat(auto-fit, minmax(200px, 1fr))";
form.style.gap = "1rem";
form.style.alignItems = "end";
formContainer.appendChild(form);

var nameInput = document.createElement("input");
nameInput.placeholder = "Movie Name";
nameInput.style.padding = "1.25rem 1.5rem";
nameInput.style.border = "2px solid rgba(255, 255, 255, 0.1)";
nameInput.style.borderRadius = "16px";
nameInput.style.background = "rgba(255, 255, 255, 0.08)";
nameInput.style.backdropFilter = "blur(10px)";
nameInput.style.color = "#fff";
nameInput.style.fontSize = "1.1rem";
nameInput.style.width = "100%";
nameInput.style.transition = "all 0.3s ease";
nameInput.style.outline = "none";
nameInput.onfocus = () => {
  nameInput.style.borderColor = "#667eea";
  nameInput.style.background = "rgba(255, 255, 255, 0.12)";
};
nameInput.onblur = () => {
  nameInput.style.borderColor = "rgba(255, 255, 255, 0.1)";
  nameInput.style.background = "rgba(255, 255, 255, 0.08)";
};
form.appendChild(nameInput);

var imgInput = document.createElement("input");
imgInput.placeholder = "Image URL";
imgInput.style.padding = "1.25rem 1.5rem";
imgInput.style.border = "2px solid rgba(255, 255, 255, 0.1)";
imgInput.style.borderRadius = "16px";
imgInput.style.background = "rgba(255, 255, 255, 0.08)";
imgInput.style.backdropFilter = "blur(10px)";
imgInput.style.color = "#fff";
imgInput.style.fontSize = "1.1rem";
imgInput.style.width = "100%";
imgInput.style.transition = "all 0.3s ease";
imgInput.style.outline = "none";
imgInput.onfocus = () => {
  imgInput.style.borderColor = "#667eea";
  imgInput.style.background = "rgba(255, 255, 255, 0.12)";
};
imgInput.onblur = () => {
  imgInput.style.borderColor = "rgba(255, 255, 255, 0.1)";
  imgInput.style.background = "rgba(255, 255, 255, 0.08)";
};
form.appendChild(imgInput);

var addBtn = document.createElement("button");
addBtn.innerText = "Add Movie";
addBtn.style.padding = "1.25rem 2.5rem";
addBtn.style.border = "none";
addBtn.style.borderRadius = "16px";
addBtn.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
addBtn.style.color = "#fff";
addBtn.style.fontSize = "1.1rem";
addBtn.style.fontWeight = "600";
addBtn.style.cursor = "pointer";
addBtn.style.width = "100%";
addBtn.style.transition = "all 0.3s ease";
addBtn.style.boxShadow = "0 10px 25px rgba(102, 126, 234, 0.4)";
addBtn.onmouseover = () => {
  addBtn.style.transform = "translateY(-2px)";
  addBtn.style.boxShadow = "0 15px 35px rgba(102, 126, 234, 0.5)";
};
addBtn.onmouseout = () => {
  addBtn.style.transform = "translateY(0)";
  addBtn.style.boxShadow = "0 10px 25px rgba(102, 126, 234, 0.4)";
};
form.appendChild(addBtn);

// === Grid Display ===
var grid = document.createElement("div");
grid.style.display = "grid";
grid.style.gridTemplateColumns = "repeat(auto-fill, minmax(320px, 1fr))";
grid.style.gap = "2rem";
container.appendChild(grid);

var updateIndex = null;

function displayMovies() {
  grid.innerHTML = "";
  movies.forEach((movie, i) => {
    var card = document.createElement("div");
    card.style.background =
      "linear-gradient(145deg, rgba(30,41,59,0.8), rgba(15,23,42,0.9))";
    card.style.backdropFilter = "blur(20px)";
    card.style.border = "1px solid rgba(255,255,255,0.1)";
    card.style.borderRadius = "24px";
    card.style.overflow = "hidden";
    card.style.position = "relative";
    card.style.boxShadow = "0 25px 50px -12px rgba(0,0,0,0.3)";
    card.style.transition = "all 0.4s cubic-bezier(0.4,0,0.2,1)";

    var imgContainer = document.createElement("div");
    imgContainer.style.position = "relative";
    imgContainer.style.height = "280px";
    imgContainer.style.overflow = "hidden";
    card.appendChild(imgContainer);

    var img = document.createElement("img");
    img.src = movie.image;
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";
    img.style.transition = "transform 0.5s ease";
    imgContainer.appendChild(img);

    var overlay = document.createElement("div");
    overlay.style.position = "absolute";
    overlay.style.bottom = "0";
    overlay.style.left = "0";
    overlay.style.right = "0";
    overlay.style.background = "linear-gradient(transparent, rgba(0,0,0,0.8))";
    overlay.style.height = "80px";
    imgContainer.appendChild(overlay);

    var movieTitle = document.createElement("h3");
    movieTitle.innerText = movie.name;
    movieTitle.style.position = "absolute";
    movieTitle.style.bottom = "1rem";
    movieTitle.style.left = "1.5rem";
    movieTitle.style.right = "1.5rem";
    movieTitle.style.margin = "0";
    movieTitle.style.fontSize = "1.4rem";
    movieTitle.style.fontWeight = "700";
    movieTitle.style.color = "#fff";
    movieTitle.style.textShadow = "0 2px 10px rgba(0,0,0,0.5)";
    imgContainer.appendChild(movieTitle);

    var actions = document.createElement("div");
    actions.style.position = "absolute";
    actions.style.top = "1.5rem";
    actions.style.right = "1.5rem";
    actions.style.display = "flex";
    actions.style.gap = "0.75rem";
    card.appendChild(actions);

    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.style.padding = "10px";
    deleteBtn.style.border = "none";
    deleteBtn.style.borderRadius = "12px";
    deleteBtn.style.background = "rgba(239,68,68,0.9)";
    deleteBtn.style.color = "#fff";
    deleteBtn.style.fontSize = "1.2rem";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.style.transition = "all 0.3s ease";
    deleteBtn.style.backdropFilter = "blur(10px)";
    deleteBtn.onclick = () => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#ef4444",
        cancelButtonColor: "#6b7280",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          movies.splice(i, 1);
          localStorage.setItem("moviesList", JSON.stringify(movies));
          displayMovies();
          Swal.fire("Deleted!", "Movie has been deleted.", "success");
        }
      });
    };
    actions.appendChild(deleteBtn);

    var editBtn = document.createElement("button");
    editBtn.innerHTML = "Update";
    editBtn.style.border = "none";
    editBtn.style.borderRadius = "12px";
    editBtn.style.background = "rgba(245,158,11,0.9)";
    editBtn.style.color = "#fff";
    editBtn.style.fontSize = "1.2rem";
    editBtn.style.cursor = "pointer";
    editBtn.style.transition = "all 0.3s ease";
    editBtn.style.backdropFilter = "blur(10px)";
    editBtn.onclick = () => {
      nameInput.value = movie.name;
      imgInput.value = movie.image;
      updateIndex = i;
      addBtn.innerText = "Update Movie";
      addBtn.style.background =
        "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)";
    };
    actions.appendChild(editBtn);

    grid.appendChild(card);
  });
}

addBtn.onclick = function () {
  if (!nameInput.value.trim() || !imgInput.value.trim()) {
    Swal.fire({
      icon: "error",
      title: "Error!",
      text: "Please fill all fields",
    });
    return;
  }
  if (updateIndex === null) {
    movies.push({ name: nameInput.value.trim(), image: imgInput.value.trim() });
    localStorage.setItem("moviesList", JSON.stringify(movies));
    displayMovies();
    nameInput.value = "";
    imgInput.value = "";
    Swal.fire({
      icon: "success",
      title: "Added!",
      text: "Movie has been added successfully",
      timer: 2000,
      showConfirmButton: false,
    });
  } else {
    Swal.fire({
      title: "Confirm Update?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#f59e0b",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, update it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (!result.isConfirmed) return;
      movies[updateIndex] = {
        name: nameInput.value.trim(),
        image: imgInput.value.trim(),
      };
      localStorage.setItem("moviesList", JSON.stringify(movies));
      displayMovies();
      updateIndex = null;
      addBtn.innerText = "Add Movie";
      addBtn.style.background =
        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
      nameInput.value = "";
      imgInput.value = "";
      Swal.fire({
        icon: "success",
        title: "Updated!",
        text: "Movie has been updated successfully",
        timer: 2000,
        showConfirmButton: false,
      });
    });
  }
};

displayMovies();
