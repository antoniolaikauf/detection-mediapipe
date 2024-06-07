const videoElement = document.getElementById('video');
const canvasElement = document.getElementById('output_canvas');
const canvasCtx = canvasElement.getContext('2d'); // metodo che permette di disegnare 

// funzione camera 
function video() {
    navigator.getUserMedia(
        { video: { width:1000,height:480} },
        stream => videoElement.srcObject = stream,
        error=>console.error(error),
    )
}

// const handLandmarker = await HandLandmarker.createFromOptions(
//     vision,
//     {
//       baseOptions: {
//         modelAssetPath: "hand_landmarker.task"
//       },
//       numHands: 2
// });


async function main() {
    video();

    const hands = new Hands({
        locateFile: (file) => {
        console.log(file);
        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
    }});

    hands.setOptions({
        // static_image_mode:false, // serve solo per immagini e il rilevamento delle mani 
        maxNumHands: 2,
        modelComplexity: 1, // modello algoritmo complessità 
        minDetectionConfidence: 0.1, // piu è alto e piu farà fatica a rilevare le mani 
        minTrackingConfidence: 0.5
        });
    // dire quando ottiene i risultati onResults
    hands.onResults(onResults);

    const camera = new Camera(videoElement, {
        onFrame: async () => {
            await hands.send({image: videoElement});
        },
        width: 1000,
        height: 480
    });
    camera.start();
}

function onResults(results) {
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height); // cancella tutti i pixel in un area 
    canvasCtx.drawImage(
        results.image, 0, 0, canvasElement.width, canvasElement.height);

    if (results.multiHandLandmarks) {
        for (const landmarks of results.multiHandLandmarks) {
            drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS,
                            {color: '#00FF00', lineWidth: 8}); // linee mano 
            drawLandmarks(canvasCtx, landmarks, { color: '#FF0000', lineWidth: 2}); // nodi mano
        }
    }
    canvasCtx.restore();
}

main();

// tutti i modelli
// https://ai.google.dev/edge/mediapipe/solutions/guide?hl=it

// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect

// https://mediapipe.readthedocs.io/en/latest/solutions/hands.html#:~:text=MediaPipe%20Hands%20is%20a%20high,from%20just%20a%20single%20frame.
