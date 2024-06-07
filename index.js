const video_tag = document.getElementById('video')

function video() {
    // permette di accedere alla telecamera 
    navigator.getUserMedia(
    // primo key  è video e sono i parametri 
        { video: { width: 720, height: 720 } },
    // metodo  metodo 
        stream => video_tag.srcObject = stream,
        error => console.error(error),
    )
}

video()