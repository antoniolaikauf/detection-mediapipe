# Come usare mediapipe

link mediapipe https://ai.google.dev/edge/mediapipe/solutions/guide?hl=it

**Mediapipe** è una libreri sviluppata da Google che utilizza machine learning per compiere compiti visivi: 

- tracciamento delle mani 
- rilevamento dei volti 

Mediapipe fornisce modelli che possono essere integrati all'interno delle applicazzioni usando le le API 

Nel codice all'interno di [index2.js](https://github.com/antoniolaikauf/detection-mediapipe/blob/main/index2.js) trovere un codice in cui qualsiasi immagine verrà messa rileverà l'immagine  invece nel altro file [index.js](https://github.com/antoniolaikauf/detection-mediapipe/blob/main/index.js) è ancora in sviluppo ma rileva le mani della persona davanti alla telecamera

Il rilevamento delle mani avviene tramite 21 punti ![mano](img/struttura%20mano.png) ogni punto ha delle cordinate x,y,x che verranno usate per disegnare la mano rilevata 

# Procedimento 
Il procedimento peer implementare il rilevamento è il seguente:
- importare il modello desiterato, tutti i vari tipi di modelli sono ad [qui](https://ai.google.dev/edge/mediapipe/solutions/guide?hl=it) nella sezione **soluzioni disponibili** essa presenta una tabella in cui può eseguire i modelli ![](img/Screenshot%202024-06-11%20174609.png)

- una volta importato il modello bisogna lasciare che il modello carichi 

- una volta caricati i modelli bisogna stampare i punti che ha rilevato della mano 

quindi per usarlo bisognerebbe compiere questi tre passaggi e il resto lo farà mediapipe 

se si vuole capire di piu si potrebbe guardare i [video](https://www.youtube.com/watch?v=C3-WnwzsaJA&list=PLOU2XLYxmsILVnjfBvtTWZC4YiHBwz-4l) che sono usciti su youtube da parte di google essendo che questo framework è sviluppato da loro o se lo sviluppi con python non dovresti avere problemi ma se lo sviluppi con altro lo troverai più complicato essendo che è piu difficile trvare informazioni

# links utili
```
- https://ai.google.dev/edge/mediapipe/solutions/guide?hl=it

- https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect

- https://mediapipe.readthedocs.io/en/latest/solutions/hands.html#:~:text=MediaPipe%20Hands%20is%20a%20high,from%20just%20a%20single%20frame.

- https://github.com/google-ai-edge/mediapipe/blob/master/docs/solutions/hands.md

- https://ai.google.dev/edge/mediapipe/solutions/vision/object_detector?hl=it#models

- https://codepen.io/mediapipe-preview/pen/gOKBGPN

-https://codepen.io/mediapipe-preview/details/zYamdVd
```