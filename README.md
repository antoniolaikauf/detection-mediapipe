# Come usare la libreria mediapipe

link media pipe https://ai.google.dev/edge/mediapipe/solutions/guide?hl=it

**Mediapipe** è una libreri sviluppata da Google che utilizza machine learning per compiere compiti visivi: 

- tracciamento delle mani 
- rilevamento dei volti 

Mediapipe fornisce modelli che possono essere integrati all'interno delle applicazzioni usando le le API 

Nel codice all'interno di [index2.js](https://github.com/antoniolaikauf/detection-mediapipe/blob/main/index2.js) trovere un codice in cui qualsiasi immagine verrà messa rileverà l'immagine  invece nel altro file [index.js](https://github.com/antoniolaikauf/detection-mediapipe/blob/main/index.js) è ancora in sviluppo ma rileva le mani della persona davanti alla telecamera

Il rilevamento delle mani avviene tramite 21 punti ![mano](img/struttura%20mano.png)
# Procedimento 
Il procedimento peer implementare il rilevamento è il seguente

```
per i modelli usati da pipeline ce ne sono vari in base a quello in cui si vuole usarli
```

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