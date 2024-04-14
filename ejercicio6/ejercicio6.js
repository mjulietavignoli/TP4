/*6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas. */

class Libro {
  constructor(isbn, titulo, autor, paginas) {
    this._isbn = isbn;
    this._titulo = titulo;
    this._autor = autor;
    this._paginas = paginas;
  }

  // Getters
  get isbn() {
    return this._isbn;
  }

  get titulo() {
    return this._titulo;
  }

  get autor() {
    return this._autor;
  }

  get paginas() {
    return this._paginas;
  }

  // Setters
  set isbn(nuevoIsbn) {
    this._isbn = nuevoIsbn;
  }

  set titulo(nuevoTitulo) {
    this._titulo = nuevoTitulo;
  }

  set autor(nuevoAutor) {
    this._autor = nuevoAutor;
  }

  set paginas(nuevasPaginas) {
    this._paginas = nuevasPaginas;
  }

  mostrarLibro() {
    console.log(`El libro ${this._titulo} con ISBN ${this._isbn} creado por el autor ${this._autor} tiene ${this._paginas} páginas.`);
  }
}

const libro1 = new Libro("1234567890", "Libro 1", "Autor 1", 100);
const libro2 = new Libro("0987654321", "Libro 2", "Autor 2", 200);

libro1.mostrarLibro();
libro2.mostrarLibro();

if (libro1.paginas < libro2.paginas) {
  console.log(`El libro "${libro1.titulo}" tiene más páginas que "${libro2.titulo}".`);
} else if (libro1.paginas > libro2.paginas) {
  console.log(`El libro "${libro2.titulo}" tiene más páginas que "${libro1.titulo}".`);
} else {
  console.log("Ambos libros tienen el mismo número de páginas.");
}
