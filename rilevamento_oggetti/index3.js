 import("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.2").then(module => {
     const { ObjectDetector, FilesetResolver, Detection, ObjectDetectionResult } = module
     
     var runningMode='IMAGE'

     const initializeObjectDetector = async () => {
         const vision = await FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.2/wasm")
     }
     ObjectDetector = ObjectDetector.createFromOptions(vision, {
         baseOptions: {
            modelAssetPath:'../model/efficientdet_lite0 (1).tflite',
         },
         runningMode:runningMode
     })
 })