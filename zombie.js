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

// Afecta fuerza
function zombie(gameObject) {
    /*
      - Zombie puede ser eliminado si se usa un ECTO-1 en su contra.
      - Se obtiene +5 en fuerza si zombie es eliminado.
      - Si se usa ecto, recuerda actualizar el inventario.
      - Si no se tiene el item, zombie atacara, lo cual disminuira la fuerza en -10
      - Si zombie ataca y la fuerza es igual o menor a 0, restar -2 en todos los atributos restantes
      Imprimir cada accion en la consola:
      - Si zombie ataca. 
      - Si zombie fue eliminado usando ecto-1.
      - Cantidad de estacas restantes
      
       La función retorna un game object actualizado (stats e inventario)
    */
  }
  
  function obtenerEcto(gameObject) {
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