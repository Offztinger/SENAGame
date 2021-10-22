/*
Contrato para el gameObject:
let gameObject = {
  stats : {
    carisma: 20,
    fuerza: 20,
    estilo: 20,
    inteligencia: 20
  },
  items : {
    linternas: 0,
    ecto: 0,
    espejos: 0,
    granada: 0,
    escudo: false, 
  },
}
*/

function ornstein(gameObject) {
  /*
      - Recibe un objeto con la información del juego (estadísticas de vida e inventario)
      - Ornstein SIEMPRE ataca
      - El daño de su ataque puede ser esquivado si el héroe posee un escudo
      - Si el ataque es esquivado, el valor de los atributos quedan intactos
      - Si no se tiene el escudo, todos los atributos se reducen en -10
      - Solo se puede tener un escudo activado (escudo: true). El escudo no es acumulativo
      - El escudo al ser usado, se desactiva (espejo: false)
      Imprimir cada accion en la consola:
      - Nombre del boss
      - Si Ornstein hace daño: un mensaje de ataque
      - Si el héroe usa el escudo: un mensaje de contra ataque
      
      La función retorna un game object actualizado (stats e inventario)
    */
}

function obtenerEscudo(gameObject) {
  /*
      - Este item se obtiene sobre una relacion del valor de fuerza.
      - Si el valor de fuerza del héroe es menor o igual 5: 80% probabilidad de sumar 1 estaca, 20% de no obtener nada.
      - La condicion es inversa si fuerza es mayor a 5
      - De obtener un item, actualizar el inventario en el gameObject
      - Imprimir en consola si el item fue agregado, o si el cofre no tenia nada.
      
      ¿Como calcular la probabilidad?
      - Generar un número random entre 1 y 10
      - El 80% de probabilidad se considera cierto si el número random es mayor a 2. 
      - El 20% de probabilidad se considera cierto si el número random esta entre 1 y 2 inclusive.
      
        La función obtenerGlobo retorna un game object actualizado (stats e inventario)
    */
}
