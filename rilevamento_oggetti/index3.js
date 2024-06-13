import('https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.2').then(module => { // si importa mediapipe dal link e dopo si prendono i valori che servono 
    const { ObjectDetector, FilesetResolver} = module;

    let objectDetector = undefined
    let runningMode = 'IMAGE'
    const initializeObjectDetector = async () => {
        const vision = await FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.2/wasm"); // file per rilevamento visivo
        objectDetector = await ObjectDetector.createFromOptions(vision, {
            // opzioni di configuramento
            baseOptions: {
                modelAssetPath: `https://storage.googleapis.com/mediapipe-models/object_detector/efficientdet_lite0/float16/1/efficientdet_lite0.tflite`, // modello algoritmo 
                delegate:'GPU', // non utilizza la tua gpu
            },
            scoreThreshold: 0.5, // score che da il modello *
            runningMode: runningMode, // tipo se video o img
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
        ctx.drawImage(imgObject.children[0],0,0) // disegna l'immagine nel canvas
        imgs_detection.detections.forEach(element => {
            console.log(element);
            // disegno background
            ctx.font = "bold 14px verdana, sans-serif"
            ctx.fillStyle='#ff0000'
            ctx.fillText(element.categories[0].categoryName,element.boundingBox.originX + 6,element.boundingBox.originY + 12 )
            ctx.fillStyle = 'rgb(53, 237, 53, 0.247)'
            ctx.fillRect(element.boundingBox.originX, element.boundingBox.originY, element.boundingBox.width, element.boundingBox.height) // disegna nel canvas le sagome con le cordinate rilevate
            // disegno bordi
            ctx.lineWidth = 2
            ctx.strokeStyle = 'black'
            ctx.strokeRect(element.boundingBox.originX, element.boundingBox.originY, element.boundingBox.width, element.boundingBox.height)
        });
    }

})