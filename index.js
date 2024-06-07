const video_tag = document.getElementById('video')

function video() {
    // primo key  è video 
    navigator.getUserMedia(
        { video: {} },
    // stream è un metodo 
        stream => video_tag.srcObject = stream,
        error => console.error(error),
    )
}

video()