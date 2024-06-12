import('https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.2').then(module => { // si importa il moduli dal link e dopo si prendono solo i due valori interessano (HandLandmarker, FilesetResolver)
    const { ObjectDetector, FilesetResolver, Detection, ObjectDetectionResult } = module;

    let objectDetector = undefined
    let runningMode = 'IMAGE'
    const initializeObjectDetector = async () => {
        const vision = await FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.2/wasm");
        objectDetector = await ObjectDetector.createFromOptions(vision, {
            baseOptions: {
                modelAssetPath: `https://storage.googleapis.com/mediapipe-models/object_detector/efficientdet_lite0/float16/1/efficientdet_lite0.tflite`, // modello algoritmo 
                delegate:'GPU',
            },
            scoreThreshold: 0.5, // score che da il modello *
            runningMode: runningMode, //*
        })
    }
    initializeObjectDetector()

    const imgObject = document.getElementById('imgObject')
    imgObject.children[0].addEventListener('click',clickImg)
    
    async function clickImg(event) {
        console.log(event.target);
        if (!objectDetector) {
            console.log('non sono stato caricato');
            return
        } else console.log('caricato modello');
        const detections = objectDetector.detect(event.target)
        console.log(detections);
        //  displayImageDetections(detections,event.target)        
        
    }

    // function  displayImageDetections(result, resultElement){
        // const ratio = resultElement.height / resultElement.naturalHeight

        // for (const detection of result.detections) {
        //     // console.log(detection);
        // }
        // cordinate 
        // for (const detection of result.detections) {
        //     const p = document.createElement("p");
        //     p.setAttribute("class", "info");
        //     p.innerText =
        //       detection.categories[0].categoryName +
        //       " - with " +
        //       Math.round(parseFloat(detection.categories[0].score) * 100) +
        //       "% confidence.";
        //     // Positioned at the top left of the bounding box.
        //     // Height is whatever the text takes up.
        //     // Width subtracts text padding in CSS so fits perfectly.
        //     p.style =
        //       "left: " +
        //       detection.boundingBox.originX * ratio +
        //       "px;" +
        //       "top: " +
        //       detection.boundingBox.originY * ratio +
        //       "px; " +
        //       "width: " +
        //       (detection.boundingBox.width * ratio - 10) +
        //       "px;";
        //     const highlighter = document.createElement("div");
        //     highlighter.setAttribute("class", "highlighter");
        //     highlighter.style =
        //       "left: " +
        //       detection.boundingBox.originX * ratio +
        //       "px;" +
        //       "top: " +
        //       detection.boundingBox.originY * ratio +
        //       "px;" +
        //       "width: " +
        //       detection.boundingBox.width * ratio +
        //       "px;" +
        //       "height: " +
        //       detection.boundingBox.height * ratio +
        //       "px;";
        
        //     resultElement.parentNode.appendChild(highlighter);
        //     resultElement.parentNode.appendChild(p);
        // }
    // }
})