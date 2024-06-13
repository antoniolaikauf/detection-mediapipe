# Come usare mediapipe

link mediapipe https://ai.google.dev/edge/mediapipe/solutions/guide?hl=it

**Mediapipe** è un framework sviluppato da Google che utilizza machine learning per compiere compiti visivi: 

- tracciamento delle mani 
- rilevamento dei volti
- rilevamento degli oggetti

Mediapipe fornisce modelli che possono essere integrati all'interno delle applicazioni usando le le API 


Nel codice all'interno di [rilevamento_mano](https://github.com/antoniolaikauf/detection-mediapipe/tree/main/rilevamento_mani) troverete il codice in cui si può rilevare l'immagine di una mano, mentre nell'altro file [rilevamento_mani_video](https://github.com/antoniolaikauf/detection-mediapipe/tree/main/rilevamento_mani_video) (è ancora in sviluppo) viene rilevata la mano della persona durante un video.

Il rilevamento delle mani avviene tramite 21 punti ![mano](img/struttura%20mano.png) ogni punto ha le cordinate x, y, x che verranno usate per disegnare la mano rilevata 

Nel file nella cartella [rilevamento_oggetti](/rilevamento_oggetti) si potra vedere un modello che è capace di rilevare oggetto dell'immagine, a seconda del modello utilizzato, ci sono vari oggetti che possono essere rilevati.

- person
- bicycle
- car
- motorcycle
- airplane
- bus
- train
- truck
- boat
- traffic light
- fire hydrant
- stop sign
- parking meter
- bench
- bird
- cat
- dog
- horse
- sheep
- cow
- elephant
- bear
- zebra
- giraffe
- backpack
- umbrella
- handbag
- tie
- suitcase
- frisbee
- skis
- snowboard
- sports ball
- kite
- baseball bat
- baseball glove
- skateboard
- surfboard
- tennis racket
- bottle
- wine glass
- cup
- fork
- knife
- spoon
- bowl
- banana
- apple
- sandwich
- orange
- broccoli
- carrot
- hot dog
- pizza
- donut
- cake
- chair
- couch
- potted plant
- bed
- dining table
- toilet
- tv
- laptop
- mouse
- remote
- keyboard
- cell phone
- microwave
- oven
- toaster
- sink
- refrigerator
- book
- clock
- vase
- scissors
- teddy bear
- hair drier
- toothbrush



# Procedimento 
Il procedimento per implementare il rilevamento è il seguente:
1. Importare MediaPipe e ottenere i valori necessari 
2. Importare il file per il rilevamento visivo 
3. Importare il modello desiderato 
   - se si volesse mettere il file dentro alla repo e quindi scaricare il modello penso che dovresti avere un server perche usando il relative path mi dava errore di cors policy
   - tutti i modelli disponibili sono elencati [qui](https://ai.google.dev/edge/mediapipe/solutions/guide?hl=it) nella sezione **soluzioni disponibili** essa presenta una tabella con tutti i modelli disponibili ![](img/Screenshot%202024-06-11%20174609.png)
5. una volta finito di importare bisogna fare un evento e far rilevare l'immagine al modello objectDetector.detect(event.target) even.target sarebbe l'immagine invece objectDetector sarebbe il modello
6. una volta che il modello ha preso le cordinate bisogna stampare e si ottiene il rilevamento dell'imagine o video

e si vuole capire di più, si potrebbero guardare i [video](https://www.youtube.com/watch?v=C3-WnwzsaJA&list=PLOU2XLYxmsILVnjfBvtTWZC4YiHBwz-4l) che sono usciti su youtube da parte di google poichè questo framework è sviluppato da loro. Se lo sviluppi con Python non dovresti avere problemi, ma se usi un altro linguaggio potrebbe essere più complicato trovare informazioni.

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