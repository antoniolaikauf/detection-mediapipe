import('https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0').then(module => { // si importa il moduli dal link e dopo si prendono solo i due valori interessano (HandLandmarker, FilesetResolver)
  const { HandLandmarker, FilesetResolver, DrawingUtils } = module;
  
    console.log(DrawingUtils);
    let handLandmarker = undefined
    let runningMode = 'IMAGE'
    // i parametri con * sono opzionali
    // chiamata per caricare il modello prima bisogna che si carichi il modello prima di fare altro 
    const createHandLandmarker = async () => {
        const vision = await FilesetResolver.forVisionTasks(
            "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm"
      );
        handLandmarker = await HandLandmarker.createFromOptions(vision, {
            baseOptions: {
                modelAssetPath: 'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task', // modello algoritmo 
                // delegate:'GPU' //*
          },
          scoreTreshold: 0.5, // score che da il modello *
          runningMode: runningMode, //*
          numHands:2 //*
        })
    }
  createHandLandmarker()
  // se si ha solo un immagine si può togliere 
  const imageContainers = document.getElementsByClassName("detectOnClick");  
  for (let i = 0; i < imageContainers.length; i++) {
    imageContainers[i].addEventListener("click", handleClick);
  }
  async function handleClick(event) {
    if (!handLandmarker) {
      console.log("Wait for handLandmarker to load before clicking!"); // modello non ha ancora caricato
      return;
    }
    // serve solo se il modello è impostato male
    if (runningMode === "VIDEO") {
      runningMode = "IMAGE";
      await handLandmarker.setOptions({ runningMode: "IMAGE" });
    }
 
    const handLandmarkerResult = handLandmarker.detect(event.target);
    console.log(handLandmarkerResult.handednesses[0][0]); // score del modello 
    console.log(handLandmarkerResult);  // qua ci sono le cordinate con i suoi 21 punti e ogni punto ha un x, y , z
    // score in html 
    const score = document.getElementById('score')
    score.innerHTML=''
    score.innerHTML=handLandmarkerResult.handednesses[0][0].score
    const canvas = document.getElementById('canvas') // si ottiene il canvas in cui ci sarà l'immagine 
    const cxt = canvas.getContext("2d");


    cxt.clearRect(0, 0, canvas.width, canvas.height) // si cancella il disegno del canvas precedente
    // const Drawingutils= new DrawingUtils(cxt)
    for (const landmarks of handLandmarkerResult.landmarks) { // handLandmarkerResult.landmarks contiene tutte le cordinate dei 21 punti della mano x,y,z
      drawConnectors(cxt, landmarks, HAND_CONNECTIONS, {
        color: "#00FF00",
        lineWidth:1,
      });
      drawLandmarks(cxt, landmarks, { color: "#FF0000", lineWidth: 1 });
      // drawLandmarks  drawConnectors permettono di disegnare la mano che ha rilevato
    }
    }

});