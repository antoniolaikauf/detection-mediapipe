 import("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.2").then(module => {
     const { ObjectDetector, FilesetResolver, Detection, ObjectDetectionResult } = module
     
     const initializeObjectDetector = async () => {
         const vision = await FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.2/wasm")
     }
})