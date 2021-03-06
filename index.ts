// En este ejercicio debéis crear una clase "Person" con las propiedades privadas "name" y "age" y la propiedad pública "saySomething". Añadid también el método "myNameIs" para que saque por consola el valor de la propidad "name".
//En su constructor, debéis dar un valor a cada propiedad (sin contar "myNameIs") teniendo claro que sus tipos son cadena de texto, número y función que recibe cadena y no devuelve nada, respectivamente.
// Luego, cread una clase "Developer" que herede de "Person" y que tenga la propiedad pública "bestLanguage". El tipo de la propiedad "bestLanguage" es función que recibe cadena y no devuelve nada.
// En el constructor de "Developer", debéis añadir los parámetros al constructor de la clase padre (super) y setear la propiedad "bestLanguage" sabiendo que es de tipo función que recibe una cadena.
// Cuando acabéis, debéis descomentar las siguientes líneas de código y colocarlas despúes de todo lo que añadáis:

//Se crea la clase Person con sus atributos, constructor y metodos
class Person {
  private name: string;
  private age: number;
  public saySomething: (func: string) => void;

  constructor(nombre: string, edad: number, funcion: (func: string) => void) {
    this.name = nombre;
    this.age = edad;
    this.saySomething = funcion;
  }

  myNameIs(): void {
    console.log(this.name);
  }
}

//se crea la clase Develop que extiende de Person
class Developer extends Person {
  public bestLanguage: (func: string) => void;

  constructor(
    name: string,
    age: number,
    funcion1: (func: string) => void,
    funcion2: (func: string) => void
  ) {
    super(name, age, funcion1);
    this.bestLanguage = funcion2;
  }
}

//Codigo ya proporcionado que crea un Developer y utiliza las diferentes funciones para mostrar por consola las cadenas de texto
const developer = new Developer(
  "pedro",
  35,
  something => console.log(something),
  language => console.log(language + " is the best language")
);

developer.myNameIs();
developer.saySomething("algo");
developer.bestLanguage("Javascript");
