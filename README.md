# Platero's Tale
 > EN: This will be the proyect for PVLI, whose proyect is a Phaser 3 implementation, in which we will use JavaScrypt, HTML5, CSS and JSON files. 
 
 > SP: Este repositorio está dedicado al proyecto de PVLI, cuyo proyecto será una implementación de Phaser 3, en el cual se usarán archivos de tipo JavaScrypt, HTML5, CSS y JSON.
 ___
 #### Proyecto desarrollado por: _Generation Games (GG)_
 ___
 #### IMPORTANTE:
 - En la carpeta **_proyect_pvli__** se encuentran los archivos que componen el videojuego.
 - Contiene su propio _readme_ con información relevante para su uso.
 - En la carpeta **_assets_** se encuentran los archivos que componen el videojuego.
 
 ###### website: [visitar web][WEB]

 ###### GDD: [Game Design Document][GDD] - [Archivo en repositorio][GDD en repo]
 
 ###### pivotal tracker: [visualizar en la web][Pivotal Tracker]

 ###### Arquitectura Antigua: [Diagrama: Platero y Yo (on-line)][Arquitectura antigua] - [Formato PNG][PNG Arquitectura antigua]

 ###### Nueva Arquitectura en proceso: [Diagrama: Platero's Tale (on-line)][Nueva Arquitectura] - [Formato PNG][PNG Nueva Arquitectura]
 ___
 ![Imagen de JRJ con su burrito][logo]
 ___
 
 ##### Webs útiles:
 
 - Curso completo de edición de archivos CSS: https://www.w3schools.com/css/default.asp
 - Manual de uso de archivos JSON: https://www.json.org/json-es.html
 ___
 ___

 #### GDD: Game Design Document / Documento de Diseño del Videojuego
#### **Platero’s Tale**
**Documento de Diseño - Generation Games**
#####Cristian René Castillo de León, Pedro Pablo Cubells Talavera,
#####Pablo Etayo Rodríguez y Óscar Pedregal Borreguero
GenerationGamesUCM@gmail.com

#### **Resumen**
**Géneros**: Aventura, Supervivencia, Puzle,
**Mazmorras** (más o menos).
**Modos**: Un jugador.
**Público objetivo**:
● Edad: Mayores de 12
● Para todos los géneros y regiones
● Idioma: Castellano antiguo
**Plataformas**: Navegador con ratón y teclado
Cantidades:
**Personajes principales**: 2, Platero y JRJ.
Hitos:
Hito 0: 14 de octubre de 2020
Hito 1: 16 de noviembre de 2020
Hito 2: 14 de diciembre de 2020
Hito 3: 18 de enero de 2021

**Logotipo del juego**


**Descripción**
Juego de Aventura 2D con vista cenital centrada en el protagonista. Es un videojuego con
movimiento de 8 direcciones situado en Moguer, el pueblo natal del autor Juan Ramón
Jiménez.
El protagonista es un hombre solitario conocido por los niños del pueblo como ‘El loco’ y es
el dueño de un burro llamado Platero, el único en quien confía y con quien más amistad
tiene. Durante el juego, se dedicará a buscar a Platero por todo el pueblo mientras esquiva
a los habitantes de Moguer.
El jugador podrá seleccionar un único modo de juego, el modo historia, en el que avanzará
por los distintos episodios de la novela buscando a Platero en cada nivel. Cuenta con una
serie de objetos y habilidades que le ayudarán a lo largo de los niveles, como el poder
inspeccionar sobre pistas de Platero, una radio para evadir enemigos o una linterna para
iluminar zonas oscuras.
El jugador superará el nivel encontrando a Platero y perderá al llegar su barra de autoestima
a 0, el equivalente a perder la vida. Cuando haya esperanzas de encontrar a su amigo,
recupera fuerzas y le sube la autoestima.
**Versiones del documento**
**1.0 Preproducción** - 20/10/2020
**1.1 Hito 01** - 23/11/2020
### **Índice**
**I. Aspectos generales**
• Vista general
• Relato del primer nivel
**II. Menús y modos de juego**
• Configuración
• Interfaz y control
o Interfaz
o Controles
**III. Jugabilidad**
• Mecánicas
• Dinámicas
• Estética
**IV. Contenidos**
• Historia
• Niveles
• Personajes
• Objetos y enemigos
**V. Referencias**
1. **Aspectos generales**
1.2** Relato del primer nivel**
Al acceder al nivel 1, el jugador aparecerá en la calle del pueblo frente a su casa en una de
las esquinas del mapa. El jugador empezará con algo de dinero y con una tienda al lado de
la salida, donde podrá comprar baterías para la radio. Tendrá que recorrer el laberinto
sorteando a los vecinos y recogiendo pistas para encontrar a Platero. Además tendrá que
buscar llaves para poder abrir puertas y acceder a nuevos caminos.
2. **Menús y modos de juego**
2.1 **Configuración**
Al iniciar el juego, se mostrará al personaje protagonista en su casa, este entorno hace de
menú de inicio. El jugador podrá desplazarse y atravesar las puertas de la habitación para
acceder a los siguientes submenús: opciones, controles, selección de nivel y créditos.
Todos son habitaciones de la casa con la información correspondiente.
2.2 **Interfaz y control**
2.2.1. **Interfaz**
**MENÚ PRINCIPAL:**
- Opciones: ajuste de sonido.
- Controles: muestreo de los controles que se van a usar.
- Selección de nivel: acceso a cualquiera de los 3 niveles.
- Créditos: muestreo de los colaboradores y recursos extras usados.
**DENTRO DEL JUEGO:**
- Pausa: opciones o reanudar.
- Inventario: menú para ver los objetos.
- Habilidades: inspección, radio y linterna. (ON/OFF y tiempo hasta bloqueo)
**2.2.2. Control**
- Movimiento con teclas “WASD” y combinaciones de dos teclas para las
diagonales.
- Ratón: interacción con inventario (y recogida de objetos).
- Inspección, radio y linterna: activar mediante ratón o con tecla directa.
**3. Jugabilidad**
**3.1.Mecánicas**
- Movimiento, 8 direcciones.
- Autoestima, como barra de vida.
- Inspección, aumento de visión o resalta colores de cosas Plateriñas.
- Linterna, ilumina la zona cuando hay poca luz (para cuevas, callejones o niveles
nocturnos ?) y su batería disminuye con el tiempo mientras está encendida.
- Radio del protagonista, será una forma de evitar a los vecinos, escuchando la radio
será inmune a la bajada de autoestima de los vecinos. La batería disminuye con el
tiempo mientras está encendida.
- Radio del pueblo, tendrá un área que la rodea y si el jugador entra en contacto con
dicha área aparecerán diálogos informando sobre Platero o acontecimientos trágicos
del momento.
- Objetos Plateriños, suben la autoestima y son objetos con color que destacarán en
el mundo.
- Objetos No Plateriños, bajan la autoestima y también son coloridos, la diferencia es
que el jugador puede con la Inspección saber si un objeto es Plateriño o no.
- Baterías, no afectan al autoestima. Sirven para recargar la radio o la linterna, y
aumentar así su tiempo de uso restante.
- Vecinos, dan pistas al jugador o bajan la autoestima con sus críticas.

3.2. **Dinámicas**
El transcurso de un nivel típico en nuestro juego será la exploración del mapa, con recogida
e investigación de pistas, puede ser recolectando objetos o escuchando rumores de la radio
o vecinos, para lograr alcanzar su objetivo sin morir en el intento, deberá esquivar todo
aquello que le pueda afectar a la autoestima.
El jugador puede optar por escuchar a sus vecinos en busca de pistas sobre el paradero de
Platero, o bien, esquivarlos optando por una ruta más larga y sinuosa. El problema es que
los vecinos no sólo hablarán sobre cosas de interés sino que pueden dañar su autoestima
ya que no se llevan bien con el jugador.

3.3. **Estética**
Será un juego en blanco y negro exceptuando los objetos relacionados con Platero
(haciendo especial incapie en el cambio de colores, como al usar la habilidad inspección).
Los niveles están basados en diferentes capítulos del libro. Habrá gags e easter eggs como
otros autores de la época, noticias o imágenes relacionadas con los acontecimientos del
momento.
El mapa estará construido con lugares que aparecen en la novela, como el pueblo de
Moguer, la ciudad, granjas, campo, ríos, montañas, cuevas, etc.

4. **Contenidos**
4.1. **Historia**
Juan Ramón Jiménez es un escritor que vive en el pueblo de Moguer, Huelva, y su mejor
amigo es su burro Platero. Todos los días sale en su búsqueda para que le alegre el día,
pero no siempre lo encuentra con facilidad, en ocasiones tiene que recorrer todo el pueblo
para encontrarle.

4.2. **Niveles**
El juego consta de tres niveles, cada uno de ellos representa una zona del pueblo o sus
alrededores en forma de laberinto.
El primer nivel comienza en la casa del protagonista, y representa una de las zonas
concurridas del pueblo. Las “paredes” del laberinto son las propias casas de los vecinos y
vallas que restringen terrenos del pueblo.

4.3.** Personajes**
- Juan Ramón Jiménez: el personaje jugable. Es controlado por el jugador para lograr
superar los niveles.
- Platero: fiel compañero de Juan Ramón Jiménez. Espera quieto en un lugar del
mapa y hay que encontrarlo para avanzar al siguiente nivel.
- Vendedores: están situados al comienzo de cada nivel. Su función es vender objetos
útiles al jugador a cambio de dinero.
- Vecinos: son los enemigos dentro del juego. Para representar sus burlas y sus
comentarios críticos, hacen bajar el autoestima del protagonista cuando le entra en
su áng

4.4.** Objetos y enemigos**
- Objetos Plateriños
- Fotografías
- Herraduras
- Riendas
- Periódicos con noticias sobre un burro suelto
- Objetos No Plateriños
- Periódicos con noticias trágicas de la época
- Radio dramática
- Objetos no dañinos, útiles
- Radio del protagonista
- Linterna
- Baterías, utilizadas para recargar tanto la radio como la linterna
- Monedas, sirven para comprar baterías, esparcidas por el mapa
- Objetos para vender

5. **Referencias**
- Platero y Yo.
- Zelda: A Link to the Past.
- Maze Runner.
- Gauntlet.

[logo]: assets/images/adaptacion.png "Platero's Tale"
[WEB]: https://acedpol.github.io/Proyecto_PVLI_/index.html "Web del Proyecto"
[GDD]: http://acedpol.github.io/Proyecto_PVLI_/assets/documents/GDD/Plateros_Tale_GDD_v1.1.pdf "Enlace a la web (versión html)"
[GDD en repo]: https://github.com/Acedpol/Proyecto_PVLI_/blob/master/assets/documents/GDD/Plateros_Tale_GDD_v1.1.pdf "Link a la ubicación en el repositorio"
[Pivotal Tracker]: https://www.pivotaltracker.com/n/projects/2474691 "Herramienta de gestión del Proyecto"
[Arquitectura antigua]: https://viewer.diagrams.net/?highlight=0000ff&edit=_blank&layers=1&nav=1&title=Arquitectura%20Platero%20y%20Yo#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1B3NTcCrNRc7D7IHi2svY9JxskboJyzo2%26export%3Ddownload "Visualizador web"
[Nueva Arquitectura]: https://viewer.diagrams.net/?highlight=0000ff&edit=_blank&layers=1&nav=1&title=ArquitecturaPlaterosTale.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1fdzaqrhfvPPrEq2kRV5FCk7kSp_H8JpD%26export%3Ddownload "Visualizador web"
[PNG Arquitectura antigua]: https://github.com/Acedpol/Proyecto_PVLI_/blob/master/assets/documents/Arquitectura%20-%20UML/Arquitectura%20Platero%20y%20Yo.png
[PNG Nueva Arquitectura]: https://github.com/Acedpol/Proyecto_PVLI_/blob/master/assets/documents/Arquitectura%20-%20UML/ArquitecturaPlaterosTale_1.1.png

