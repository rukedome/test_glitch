function drawShapes() {
  var shape = document.getElementById("shape").value;
  var size = document.getElementById("size").value;
  var quantity = document.getElementById("quantity").value;

  var result = document.getElementById("shape-result");
  result.innerHTML = "";

  for (var i = 0; i < quantity; i++) {
    var shapeDiv = document.createElement("div");
    shapeDiv.classList.add("shape");

    if (shape === "circle") {
      shapeDiv.innerHTML = `<svg width="${size}" height="${size}"><circle cx="${
        size / 2
      }" cy="${size / 2}" r="${size / 2}" fill="${getRandomColor()}"/></svg>`;
    } else if (shape === "square") {
      shapeDiv.innerHTML = `<svg width="${size}" height="${size}"><rect x="0" y="0" width="${size}" height="${size}" fill="${getRandomColor()}"/></svg>`;
    } else if (shape === "triangle") {
      shapeDiv.innerHTML = `<svg width="${size}" height="${size}"><polygon points="${
        size / 2
      },5 5,${size - 5} ${size - 5},${
        size - 5
      }" fill="${getRandomColor()}"/></svg>`;
    }

    result.appendChild(shapeDiv);
  }
}

function generateRandomImage() {
  var result = document.getElementById("image-result");
  result.innerHTML = "";

  var randomIndex = Math.floor(Math.random() * 5) + 1;
  var randomImage = document.createElement("img");
  randomImage.classList.add("random-image");
  randomImage.src = `./img/airpods_case${randomIndex}.svg`;
  result.appendChild(randomImage);
}


function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
