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
    imgObject.children[0].addEventListener('click', clickImg)
    
    async function clickImg(event) {
        if (!objectDetector) {
            console.log('non sono stato caricato');
            return
        } else console.log('caricato modello');
        const detections = objectDetector.detect(event.target)
         displayImageDetections(detections,event.target)        
        
    }


    imgObject.onload=  ()=> {
        const canvas = document.getElementById('canva')
        const ctx = canvas.getContext('2d')
        canvas.width=imgObject.
    }
    function displayImageDetections(result, resultElement) {
        const ratio = resultElement.height / resultElement.naturalHeight
        for (const detections of result.detections) {
            console.log(detections);
            ctx.drawImage(imgObject.children[0], detections.boundingBox.origiX,detections.boundingBox.origiY)
            // image_detected.innerText = detections.categories[0].categoryName
            // resultElement.parentNode.appendChild(image_detected)  
        }
    }
})