# Primer Parcial - 05/05/2023

### Parte #01

Crear un sitio WEB en el puerto 2222 que contemple los siguientes puntos:

- [ ]  Un menú de proyectos que contenga 5 secciones (”Mobile”, “LandingPage”, “Web App”, “e-Commerce”, “Games”)
    - [ ]  Al hacer clic en una sección debe redireccionarlo a una pagina donde se vean solo los proyectos que pertenecen a esa sección.
    - [ ]  Por cada proyecto se visualizarán los siguientes datos:
        - Nombre del proyecto
        - Descripción
        - Tecnologías
        - Link al repositorio
        - Una imagen del proyecto (preview)
- [ ]  Los datos se deben obtener de una base de datos llamada **“AH20231CP1”** la cual tiene una colección llamada “**Projects”**
- [ ]  La estructura de cada documento es la siguiente:

```json
{
	"_id": ObjectID(),
	"name": "Nombre del proyecto",
	"description": "Descripcion del proyecto",
	"link": "http://miweb.com/proyecto",
	"img": "https://picsum.photos/400/225",
	"technologies": ["PHP", "Vue", "Laravel"]
	"section": "mobile"
}
```

### Parte #02

Crear un API que me permita hacer lo siguiente:

- [ ]  Traer todos los proyectos
    - [ ]  Me debe permitir filtrar por tecnología y sección
- [ ]  Modificar un proyecto
- [ ]  Eliminar un proyecto
- [ ]  Crear un proyecto

### Parte #03

- [ ]  Agregar una nueva entidad llamada “Cliente” que contenga los siguientes datos:
    - Nombre
    - Foto
    - Descripción
- [ ]  Modelar la base de datos para que soporte este nuevo cambio teniendo en cuenta las siguientes aclaraciones:
    - Un cliente puede tener o no proyectos realizados para el.
    - Un proyecto es creado para un cliente en particular.
- [ ]  Agregar una entrada al API para poder crear un cliente
- [ ]  Agregar una entrada al API para poder obtener todos los clientes
- [ ]  Agregar una entrada al API para poder obtener todos los proyectos que pertenecen a un cliente particular.

## Aclaraciones:

- Las secciones son:
    
    
    | Seccion | Slug |
    | --- | --- |
    | Mobile | mobile |
    | LandingPage | landing |
    | Web App | webapp |
    | e-Commerce | ecommerce |
    | Games | game |
- Pueden realizar todas las modificaciones necesarias en la base de datos para modelar los cambios.
- Se deben asegurar que los campos enviados desde el cliente sean los que necesite el sistema.
- Se evaluara:
    - [ ]  Modelado de base de datos
    - [ ]  API (manejo correcto de las 4 reglas basicas)
    - [ ]  División de Responsabilidades (manejo correcto de views, controllers, service, api y route)
    - [ ]  Correcto uso del Driver nativo de MongoDB
    - [ ]  Correcto uso de **ECMAScript** modules
    - [ ]  Correcta creación de paginas dinámicas
    - [ ]  Correcto uso de Express
- Para las imágenes pueden utilizar [https://picsum.photos](https://picsum.photos) que es un generador de imágenes aleatoria.
- No es necesario que envíen la base de datos
- El código debe estar en github (envian solo el link al repositorio) o compartido en google drive (por favor no comprimirlo)
 
