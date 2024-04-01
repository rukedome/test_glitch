let container = document.getElementById("container");
let initialPageWidth, initialPageHeight;

window.onload = function() {
    initialPageWidth = window.innerWidth;
    initialPageHeight = window.innerHeight;
    container.style.width = initialPageWidth + 'px';
    container.style.height = initialPageHeight + 'px';
    // container.style.overflow = "hidden";
};

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    let img = document.getElementById(data);
    let base = document.getElementsByClassName("base");
    let base_frame = base[0];
    if (container.contains(event.target)) {
        img.removeAttribute("id");
        
        img.style.scale = "0.5";

        let offsetX = event.clientX;
        let offsetY =  event.clientY;

        img.style.left = offsetX - img.width / 2 + "px";
        img.style.top = offsetY - img.height / 2 + "px";

        img.style.position = "absolute";
        container.appendChild(img); // #notebook 내부에 이미지 추가
    }
}
