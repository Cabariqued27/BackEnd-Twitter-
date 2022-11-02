# BackEnd-Twitter-
Desarrollen el backend para un clon de Twitter.

La API debe crearse como repositorio en Github y debe ser "entregada" al profesor utilizando el enlace, donde se enviará unicamente el link al repositorio.
El proyecto se desarrolla de manera individual, con fecha de entrega 2 de Noviembre 23:59.
Endpoints a desarrollar:

CRUD de usuarios
CRUD de publicaciones/tweets.
"READ" debe incluir la opción de filtrar según el creador de la publicación.
"UPDATE" solo debe permitir cambiar el cuerpo de la publicacion.

CR-D de seguidores
"CREATE" crea un vinculo seguidor -> seguido
"READ" unicamente retorna los seguidores de un usuario, o los seguidos de un usuario.
"DELETE" borra un vinculo.

-R-- Endpoint de "timeline" de usuario
"READ" retorna el "timeline" de un usuario, es decir, las publicaciones de los usuarios seguidos por un usuario, ordenados por fecha.

CR-D de "likes" 
"READ" retorna las publicaciones "like"-eadas por un usuario.
Toda publicacion retornada en todo otro endpoint debe traer consigo el numero de "likes" de esa publicacion.
