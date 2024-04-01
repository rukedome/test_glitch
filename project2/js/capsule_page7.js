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
    let container = document.getElementsByClassName("base");
    let frame_img = container[0];
    if (frame_img.contains(event.target)) {
        img.style.width = "70px"; 
        img.style.height = "auto"; 

        // let offsetX = event.clientX - frame_img.offsetLeft;
        // let offsetY = event.clientY - frame_img.offsetTop;

        // img.style.right = offsetX - img.width / 2 + "px";
        // img.style.bottom = offsetY - img.height / 2 + "px";
        img.style.right = frame_img.offsetRight;
        img.style.bottom = frame_img.offsetBottom;
        img.style.position = "absolute";

        frame_img
        
        frame_img.appendChild(img); // #notebook 내부에 이미지 추가
    }
}
