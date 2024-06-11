import('https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.2').then(module => { // si importa il moduli dal link e dopo si prendono solo i due valori interessano (HandLandmarker, FilesetResolver)
    const { ObjectDetector, FilesetResolver, Detection, ObjectDetectionResult } = module;

    let objectDetector = ObjectDetector
    const img_section=document.getElementById('devos')
    let runningMode = 'IMAGE'
    // i parametri con * sono opzionali
    // chiamata per caricare il modello prima bisogna che si carichi il modello prima di fare altro 
    const initializeObjectDetector = async () => {
        const vision = await FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm");
        objectDetector = await ObjectDetector.createFromOptions(vision, {
            baseOptions: {
                modelAssetPath: `https://storage.googleapis.com/mediapipe-models/object_detector/efficientdet_lite0/float16/1/efficientdet_lite0.tflite`, // modello algoritmo 
            },
            scoreTreshold: 0.5, // score che da il modello *
            runningMode: runningMode, //*
        })
    }

    initializeObjectDetector()

    const imgObject = document.querySelector('.imgObject')
    imgObject.addEventListener('click', clickImg)
    
    async function clickImg(event) {
        if (!objectDetector) {
            console.log('non sono stato caricato');
            return
        } else console.log('caricato modello');
        const detections = objectDetector.detect(event.target)
         displayImageDetections(detections,event.target)        
        
    }

    function  displayImageDetections(result, resultElemnt){
        const radio = resultElemnt.height / resultElemnt.naturalHeight
        console.log(radio);
    }
})