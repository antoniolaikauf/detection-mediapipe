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
        imgDraw(detections)      
    }


    function imgDraw(imgs_detection) {
        const canvas = document.getElementById('canva')
        const ctx = canvas.getContext('2d')
        imgs_detection.detections.forEach(element => {
            ctx.rect(element.boundingBox.originX, element.boundingBox.originY, element.boundingBox.width, element.boundingBox.height)
            ctx.stroke()
        });
    }

})