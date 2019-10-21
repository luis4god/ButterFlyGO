Butterfly Go
Es una app que nos permite identificar especies, recolectar datos, generar conciencia con juegos, crear un mapeo ambiental, muestrea el estado ambiental. Las mariposas son bioindicadoras si hay es por las especies autóctonas de plantas que necesitan.
BanaNASA

Butterfly Go, es una aplicación que nos permite recolectar datos poblacionales de mariposas a través de una foto. La propuesta es que sea educativa, interactiva y colaborativa.

Nos basamos en la premisa de las mariposas (lepidópteros) son indicadores ecológicos de la diversidad y salubridad de los ecosistemas en que habitan. Las mariposas en general siguen un rol ecológico como polinizadoras y además son alimentos de otras especies en la red trófica. Sabemos de la importancia de la polinización a nivel mundial como servicio ecosistemico.

Beneficios de la APP

    Crear un mapa ambiental colaborativo de avistamientos de especies de mariposas
    Favorecer el aumento de la población de mariposas, a través de premios e insignias si suben una foto demostrando que han plantado especies autóctonas y hospederas de Mariposas
    Favorecer el aumento de la diversidad de especies de Mariposas y corredores biológicos
    Aprender jugando

Datos viables de recolección:

    lugar de avistamiento (Mapa colaborativo ambiental)
    especies
    estadística ambiental poblacional cantidad de especies avistada por mes, año, crecimiento y decrecimiento.
    diagnóstico del estado ambiental
    diversidad y abundancia
    migraciones

Bibliografía:

Varga, Andrés. E.2000 Mariposas Argentinas. Guía práctica e ilustrada para la identificación de Mariposas diurnas y nocturnas de la Provincia de Buenos Aires.

Tecnologías

Utilizó IBMCloud con la Plataforma WATSON para formar un CLASIFICADOR de imagenes; recolectamos un DATASET de mariposas autóctonas de nuestra región, separamos por España y alimentamos al VisionRecognition de WATSON con las 19 clases de mariposas con un total de 296 fotos; luego de entrenar el clasificador WATSON podría reconocer que especie mariposa es la que se le mostraba.

Las tecnologías FRONTEND son aplicaciones simples, una pequeña página HTML con un javascript que incluye la cámara del dispositivo y con un solo TAP la foto de la Mariposa es enviada a una aplicación de BACKEND donde consulta la PLATAFORMA WATSON de IBM devolviendo que la especie fué fotografiada .

ButterFly GO, tiene el potencial de un recorrido de la Gamefiction, recopilación de datos sobre este importante indicador ecológico en el Mundo entero.

Y recuerden ... con ButterFly GO ... "El Aleteo de una Mariposa, se puede sentir al Otro lado del Mundo"

Deploy APP in PROD

https://butterflygo.herokuapp.com/

Repositorio de Codigo Fuente

https://github.com/luis4god/ButterFlyGO
NASA Logo
