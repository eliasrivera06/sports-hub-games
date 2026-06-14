// ============================================
//  DATA — Palabras y pistas del crucigrama (11 Niveles)
// ============================================

const LEVELS = [
  {
    id: 1,
    name: "Nivel 1: Básico",
    gridConfig: { COLS: 11, ROWS: 10 },
    words: [
      {
        id: 1,
        dir: 'h',
        r: 2,
        c: 1,
        word: 'CORNER',
        clue: 'Saque desde la esquina del campo',
        arrow: '→'
      },
      {
        id: 2,
        dir: 'v',
        r: 1,
        c: 5,
        word: 'DELANTERO',
        clue: 'Jugador que busca anotar goles',
        arrow: '↓'
      },
      {
        id: 3,
        dir: 'h',
        r: 4,
        c: 1,
        word: 'MARCADOR',
        clue: 'Muestra el resultado del partido',
        arrow: '→'
      },
      {
        id: 4,
        dir: 'h',
        r: 5,
        c: 1,
        word: 'BALON',
        clue: 'Objeto esférico con el que se juega',
        arrow: '→'
      },
      {
        id: 5,
        dir: 'h',
        r: 7,
        c: 2,
        word: 'DEFENSA',
        clue: 'Jugador que protege al portero',
        arrow: '→'
      },
      {
        id: 6,
        dir: 'h',
        r: 8,
        c: 3,
        word: 'TIRO',
        clue: 'Disparo directo al arco',
        arrow: '→'
      }
    ]
  },
  {
    id: 2,
    name: "Nivel 2: La Estrategia",
    gridConfig: { COLS: 18, ROWS: 18 },
    words: [
      { id: 1, dir: 'h', r: 6, c: 6, word: 'SANCION', clue: 'Castigo aplicado por cometer una infracción grave', arrow: '→' },
      { id: 2, dir: 'v', r: 5, c: 11, word: 'GOL', clue: 'Anotación que se logra al introducir el balón en el arco', arrow: '↓' },
      { id: 3, dir: 'v', r: 3, c: 7, word: 'ESTADIO', clue: 'Recinto donde se disputan los encuentros de fútbol', arrow: '↓' },
      { id: 4, dir: 'h', r: 8, c: 1, word: 'PENALTI', clue: 'Tiro libre directo desde la marca de los once metros', arrow: '→' },
      { id: 5, dir: 'v', r: 7, c: 4, word: 'TARJETA', clue: 'Cartulina que usa el árbitro para amonestar o expulsar', arrow: '↓' },
      { id: 6, dir: 'h', r: 13, c: 0, word: 'LINEA', clue: 'Delimitación blanca que marca el límite del terreno de juego', arrow: '→' },
      { id: 7, dir: 'h', r: 3, c: 6, word: 'RED', clue: 'Malla que cubre la portería para detener el balón', arrow: '→' },
      { id: 8, dir: 'v', r: 6, c: 9, word: 'CAPITAN', clue: 'Líder del equipo en el terreno de juego', arrow: '↓' },
      { id: 9, dir: 'h', r: 11, c: 9, word: 'ARBITRO', clue: 'Máxima autoridad encargada de impartir justicia', arrow: '→' },
      { id: 10, dir: 'v', r: 8, c: 2, word: 'ENTRENADOR', clue: 'Director técnico que define la estrategia', arrow: '↓' },
      { id: 11, dir: 'v', r: 8, c: 13, word: 'TACTICA', clue: 'Planificación y posicionamiento de los jugadores', arrow: '↓' }
    ]
  },
  {
    id: 3,
    name: "Nivel 3: El Centrocampista",
    gridConfig: { COLS: 18, ROWS: 18 },
    words: [
      { id: 1, dir: 'h', r: 6, c: 6, word: 'CAMPEON', clue: 'Ganador del torneo o copa', arrow: '→' },
      { id: 2, dir: 'v', r: 6, c: 6, word: 'CHILENA', clue: 'Remate acrobático de espalda al arco', arrow: '↓' },
      { id: 3, dir: 'h', r: 10, c: 3, word: 'PASE', clue: 'Entrega del balón a un compañero', arrow: '→' },
      { id: 4, dir: 'v', r: 1, c: 10, word: 'BOTINES', clue: 'Calzado especial con tacos para jugar en césped', arrow: '↓' },
      { id: 5, dir: 'h', r: 8, c: 3, word: 'EQUIPO', clue: 'Grupo de once jugadores que compiten juntos', arrow: '→' },
      { id: 6, dir: 'h', r: 4, c: 9, word: 'LIDER', clue: 'Equipo que va en primer lugar del torneo', arrow: '→' },
      { id: 7, dir: 'v', r: 6, c: 3, word: 'TIEMPO', clue: 'Cada una de las dos partes de un partido', arrow: '↓' },
      { id: 8, dir: 'h', r: 12, c: 6, word: 'AMISTOSO', clue: 'Partido no oficial de preparación', arrow: '→' },
      { id: 9, dir: 'h', r: 2, c: 1, word: 'MEDIOCAMPO', clue: 'Zona del terreno donde se construye el juego', arrow: '→' },
      { id: 10, dir: 'h', r: 1, c: 10, word: 'BANDA', clue: 'Lado lateral del terreno de juego', arrow: '→' },
      { id: 11, dir: 'v', r: 9, c: 11, word: 'ARCO', clue: 'Estructura metálica donde se anotan los goles', arrow: '↓' }
    ]
  },
  {
    id: 4,
    name: "Nivel 4: Torneo de Campeones",
    gridConfig: { COLS: 18, ROWS: 18 },
    words: [
      { id: 1, dir: 'v', r: 6, c: 6, word: 'RELEVO', clue: 'Sustitución o cambio de un jugador por otro', arrow: '↓' },
      { id: 2, dir: 'h', r: 11, c: 1, word: 'PUPILO', clue: 'Jugador dirigido por un entrenador particular', arrow: '→' },
      { id: 3, dir: 'h', r: 9, c: 3, word: 'ATLETA', clue: 'Deportista de alto rendimiento físico', arrow: '→' },
      { id: 4, dir: 'v', r: 9, c: 1, word: 'SOPORTE', clue: 'Estructura o base del planteamiento táctico', arrow: '↓' },
      { id: 5, dir: 'v', r: 11, c: 3, word: 'PUNTO', clue: 'Unidad que se obtiene al empatar un partido', arrow: '↓' },
      { id: 6, dir: 'v', r: 8, c: 8, word: 'CAMPEONATO', clue: 'Competición organizada para determinar el mejor equipo', arrow: '↓' },
      { id: 7, dir: 'h', r: 17, c: 5, word: 'FOTO', clue: 'Imagen capturada del equipo antes de iniciar el partido', arrow: '→' },
      { id: 8, dir: 'h', r: 8, c: 8, word: 'CLUB', clue: 'Institución deportiva o equipo de fútbol', arrow: '→' },
      { id: 9, dir: 'h', r: 13, c: 7, word: 'ZONA', clue: 'Área delimitada del terreno de juego', arrow: '→' },
      { id: 10, dir: 'h', r: 15, c: 6, word: 'AMAGUE', clue: 'Finta o engaño corporal que realiza un jugador', arrow: '→' },
      { id: 11, dir: 'v', r: 3, c: 3, word: 'CAMILLA', clue: 'Camastro para retirar del campo a jugadores lesionados', arrow: '↓' }
    ]
  },
  {
    id: 5,
    name: "Nivel 5: La Copa Mundial",
    gridConfig: { COLS: 18, ROWS: 18 },
    words: [
      { id: 1, dir: 'h', r: 6, c: 6, word: 'PASTO', clue: 'Césped natural o sintético sobre el que se juega', arrow: '→' },
      { id: 2, dir: 'v', r: 6, c: 9, word: 'TRIBUNA', clue: 'Graderías donde se ubican los espectadores', arrow: '↓' },
      { id: 3, dir: 'v', r: 2, c: 7, word: 'MARCA', clue: 'Presión cercana sobre un rival para quitarle el balón', arrow: '↓' },
      { id: 4, dir: 'h', r: 12, c: 5, word: 'SILBATO', clue: 'Instrumento del árbitro para pitar las faltas', arrow: '→' },
      { id: 5, dir: 'h', r: 3, c: 2, word: 'MUNDIALISTA', clue: 'Jugador o equipo que ha participado en una copa del mundo', arrow: '→' },
      { id: 6, dir: 'v', r: 3, c: 12, word: 'ATRAPAR', clue: 'Acción del portero de sugerar el balón con las manos', arrow: '↓' },
      { id: 7, dir: 'v', r: 6, c: 6, word: 'PUNTAPIE', clue: 'Golpe fuerte dado al balón con la punta del pie', arrow: '↓' },
      { id: 8, dir: 'v', r: 1, c: 10, word: 'FISICO', clue: 'Rendimiento y estado corporal de un futbolista', arrow: '↓' },
      { id: 9, dir: 'v', r: 2, c: 2, word: 'AMARILLA', clue: 'Tarjeta de amonestación preventiva', arrow: '↓' },
      { id: 10, dir: 'v', r: 11, c: 11, word: 'VOLANTE', clue: 'Centrocampista con función de distribución o contención', arrow: '↓' },
      { id: 11, dir: 'h', r: 15, c: 9, word: 'HINCHA', clue: 'Seguidor apasionado de un equipo de fútbol', arrow: '→' },
      { id: 12, dir: 'h', r: 17, c: 10, word: 'DEBUT', clue: 'Primer partido oficial de un jugador', arrow: '→' }
    ]
  },
  {
    id: 6,
    name: "Nivel 6: La Clasificación",
    gridConfig: { COLS: 18, ROWS: 18 },
    words: [
      { id: 1, dir: 'v', r: 6, c: 6, word: 'FUERA', clue: 'Cuando el balón traspasa los límites del campo', arrow: '↓' },
      { id: 2, dir: 'h', r: 10, c: 4, word: 'CLASIFICADO', clue: 'Equipo que logra avanzar a la siguiente ronda del torneo', arrow: '→' },
      { id: 3, dir: 'v', r: 10, c: 13, word: 'DORSO', clue: 'Número estampado en la espalda de la camiseta', arrow: '↓' },
      { id: 4, dir: 'v', r: 9, c: 8, word: 'LIGA', clue: 'Torneo regular donde se enfrentan todos contra todos', arrow: '↓' },
      { id: 5, dir: 'h', r: 7, c: 2, word: 'ATAQUE', clue: 'Fase del juego destinada a buscar el gol', arrow: '→' },
      { id: 6, dir: 'h', r: 14, c: 7, word: 'TECNICO', clue: 'Estratega que dirige al equipo desde el banquillo', arrow: '→' },
      { id: 7, dir: 'v', r: 2, c: 2, word: 'PISADA', clue: 'Acción de pisar el balón para eludir al rival', arrow: '↓' },
      { id: 8, dir: 'v', r: 13, c: 11, word: 'FINTA', clue: 'Movimiento engañoso para esquivar a un oponente', arrow: '↓' },
      { id: 9, dir: 'h', r: 16, c: 11, word: 'TORNEO', clue: 'Competición deportiva por eliminatorias o puntos', arrow: '→' },
      { id: 10, dir: 'h', r: 12, c: 3, word: 'CABEZAZO', clue: 'Golpe dado al balón con la frente', arrow: '→' },
      { id: 11, dir: 'v', r: 4, c: 4, word: 'LOCAL', clue: 'Equipo que disputa el partido en su propio estadio', arrow: '↓' },
      { id: 12, dir: 'h', r: 17, c: 6, word: 'JUGADA', clue: 'Acción combinada de juego entre varios futbolistas', arrow: '→' }
    ]
  },
  {
    id: 7,
    name: "Nivel 7: El Espectáculo",
    gridConfig: { COLS: 18, ROWS: 18 },
    words: [
      { id: 1, dir: 'v', r: 6, c: 6, word: 'ATACAR', clue: 'Acción ofensiva colectiva para marcar un gol', arrow: '↓' },
      { id: 2, dir: 'h', r: 9, c: 6, word: 'CESPED', clue: 'Hierba que cubre la superficie del campo de fútbol', arrow: '→' },
      { id: 3, dir: 'v', r: 6, c: 10, word: 'GOLEAR', clue: 'Anotar gran cantidad de goles al equipo contrario', arrow: '↓' },
      { id: 4, dir: 'h', r: 7, c: 3, word: 'CHUTE', clue: 'Disparo fuerte o lanzamiento del balón', arrow: '→' },
      { id: 5, dir: 'v', r: 3, c: 3, word: 'ESPECTACULO', clue: 'Divertimento o show de gran calidad futbolística', arrow: '↓' },
      { id: 6, dir: 'h', r: 11, c: 9, word: 'URUGUAY', clue: 'Primer país ganador de la copa mundial de fútbol', arrow: '→' },
      { id: 7, dir: 'h', r: 3, c: 3, word: 'EMPATE', clue: 'Resultado igualado al término del tiempo reglamentario', arrow: '→' },
      { id: 8, dir: 'v', r: 10, c: 13, word: 'SUPLENTE', clue: 'Jugador que espera en el banquillo para ingresar', arrow: '↓' },
      { id: 9, dir: 'h', r: 16, c: 9, word: 'PELOTA', clue: 'Balón o esférico utilizado en el juego', arrow: '→' },
      { id: 10, dir: 'h', r: 10, c: 0, word: 'CRACK', clue: 'Jugador de extraordinaria habilidad y talento', arrow: '→' },
      { id: 11, dir: 'v', r: 7, c: 0, word: 'CANCHA', clue: 'Terreno de juego donde se disputa el partido', arrow: '↓' },
      { id: 12, dir: 'h', r: 14, c: 12, word: 'PECHO', clue: 'Parte del cuerpo usada para amortiguar balones aéreos', arrow: '→' }
    ]
  },
  {
    id: 8,
    name: "Nivel 8: El Subcampeón",
    gridConfig: { COLS: 17, ROWS: 22 },
    words: [
      { id: 1, dir: 'v', r: 1, c: 8, word: 'ELIMINATORIA', clue: 'Fase de ida y vuelta para clasificar', arrow: '↓' },
      { id: 2, dir: 'h', r: 5, c: 6, word: 'ASISTENCIA', clue: 'Pase preciso que termina en gol', arrow: '→' },
      { id: 3, dir: 'v', r: 3, c: 12, word: 'BANQUILLO', clue: 'Asientos donde esperan los suplentes y el cuerpo técnico', arrow: '↓' },
      { id: 4, dir: 'h', r: 4, c: 6, word: 'GAMBETA', clue: 'Regate rápido para eludir defensores', arrow: '→' },
      { id: 5, dir: 'h', r: 6, c: 10, word: 'ARQUERO', clue: 'Guardameta que defiende la portería', arrow: '→' },
      { id: 6, dir: 'h', r: 12, c: 0, word: 'CANILLERA', clue: 'Protección rígida que se usa bajo las medias', arrow: '→' },
      { id: 7, dir: 'v', r: 12, c: 0, word: 'CENTRO', clue: 'Lanzamiento del balón desde la banda hacia el área', arrow: '↓' },
      { id: 8, dir: 'h', r: 9, c: 7, word: 'VOLEA', clue: 'Remate del balón antes de que toque el suelo', arrow: '→' },
      { id: 9, dir: 'h', r: 8, c: 8, word: 'TRAVESAÑO', clue: 'Larguero horizontal que une los dos postes del arco', arrow: '→' },
      { id: 10, dir: 'v', r: 10, c: 2, word: 'ZANCADILLA', clue: 'Falta cometida tropezando al rival', arrow: '↓' },
      { id: 11, dir: 'v', r: 11, c: 10, word: 'TRIPLETE', clue: 'Tres goles anotados por un jugador en un mismo partido', arrow: '↓' },
      { id: 12, dir: 'h', r: 15, c: 8, word: 'FALTA', clue: 'Infracción cometida al rival sancionada por el árbitro', arrow: '→' },
      { id: 13, dir: 'v', r: 14, c: 8, word: 'OFFSIDE', clue: 'Posición fuera de juego', arrow: '↓' },
      { id: 14, dir: 'v', r: 14, c: 12, word: 'VAR', clue: 'Sistema de videoarbitraje', arrow: '↓' },
      { id: 15, dir: 'h', r: 10, c: 4, word: 'SOMBRERO', clue: 'Gesto técnico de pasar la pelota por encima del rival', arrow: '→' }
    ]
  },
  {
    id: 9,
    name: "Nivel 9: El Guardameta",
    gridConfig: { COLS: 22, ROWS: 12 },
    words: [
      { id: 1, dir: 'v', r: 1, c: 8, word: 'SUDAMERICA', clue: 'Región del mundo cuna de grandes cracks', arrow: '↓' },
      { id: 2, dir: 'h', r: 3, c: 8, word: 'DESCUENTO', clue: 'Tiempo extra añadido por el árbitro al final', arrow: '→' },
      { id: 3, dir: 'h', r: 7, c: 7, word: 'PREPARADOR', clue: 'Encargado del acondicionamiento físico', arrow: '→' },
      { id: 4, dir: 'v', r: 1, c: 14, word: 'PUNTUACION', clue: 'Tabla que muestra las posiciones de los equipos', arrow: '↓' },
      { id: 5, dir: 'h', r: 4, c: 12, word: 'PATEAR', clue: 'Acción de lanzar el balón con el pie', arrow: '→' },
      { id: 6, dir: 'h', r: 5, c: 8, word: 'MEDIAS', clue: 'Prenda que cubre las piernas y sujeta las canilleras', arrow: '→' },
      { id: 7, dir: 'v', r: 4, c: 11, word: 'RIVAL', clue: 'Equipo o jugador contrario', arrow: '↓' },
      { id: 8, dir: 'v', r: 0, c: 16, word: 'TACO', clue: 'Remate o pase lujoso usando el talón', arrow: '↓' },
      { id: 9, dir: 'h', r: 10, c: 7, word: 'PALO', clue: 'Poste vertical o travesaño del arco', arrow: '→' },
      { id: 10, dir: 'h', r: 2, c: 7, word: 'ZURDA', clue: 'Pierna izquierda del futbolista', arrow: '→' },
      { id: 11, dir: 'h', r: 9, c: 5, word: 'PALCO', clue: 'Zona preferencial en el estadio para espectadores VIP', arrow: '→' },
      { id: 12, dir: 'v', r: 2, c: 17, word: 'CORRER', clue: 'Desplazamiento rápido por el campo de juego', arrow: '↓' },
      { id: 13, dir: 'h', r: 6, c: 16, word: 'PENAL', clue: 'Tiro penal desde los doce pasos', arrow: '→' },
      { id: 14, dir: 'v', r: 4, c: 20, word: 'GOLAZO', clue: 'Gol de factura espectacular que emociona a la afición', arrow: '↓' },
      { id: 15, dir: 'h', r: 9, c: 14, word: 'FESTEJO', clue: 'Celebración de los jugadores tras anotar un gol', arrow: '→' }
    ]
  },
  {
    id: 10,
    name: "Nivel 10: La Cantera",
    gridConfig: { COLS: 24, ROWS: 20 },
    words: [
      { id: 1, dir: 'v', r: 1, c: 8, word: 'CONTRAATAQUE', clue: 'Transición ofensiva rápida aprovechando espacios', arrow: '↓' },
      { id: 2, dir: 'h', r: 2, c: 8, word: 'ORGANIZADOR', clue: 'Centrocampista creativo que distribuye el juego', arrow: '→' },
      { id: 3, dir: 'h', r: 4, c: 6, word: 'ESTADISTICA', clue: 'Datos de goles, pases y faltas acumuladas', arrow: '→' },
      { id: 4, dir: 'h', r: 8, c: 6, word: 'PATROCINIO', clue: 'Apoyo económico de marcas comerciales', arrow: '→' },
      { id: 5, dir: 'v', r: 7, c: 14, word: 'DIRECTIVA', clue: 'Grupo de dirigentes que gestionan el club', arrow: '↓' },
      { id: 6, dir: 'h', r: 11, c: 14, word: 'COMPAÑERO', clue: 'Colega del mismo equipo', arrow: '→' },
      { id: 7, dir: 'h', r: 7, c: 14, word: 'DRIBBLING', clue: 'Habilidad de amagar y pasar al defensa', arrow: '→' },
      { id: 8, dir: 'v', r: 11, c: 17, word: 'PRACTICA', clue: 'Sesión de entrenamiento rutinaria', arrow: '↓' },
      { id: 9, dir: 'h', r: 12, c: 16, word: 'PRESION', clue: 'Acoso al rival para forzar un error y recuperar la pelota', arrow: '→' },
      { id: 10, dir: 'h', r: 18, c: 16, word: 'ZAGA', clue: 'Línea defensiva del equipo', arrow: '→' },
      { id: 11, dir: 'h', r: 12, c: 2, word: 'FICHAJE', clue: 'Contratación de un nuevo jugador por el club', arrow: '→' },
      { id: 12, dir: 'h', r: 11, c: 7, word: 'TUTELAR', clue: 'Dirigir o instruir a un jugador joven', arrow: '→' },
      { id: 13, dir: 'h', r: 1, c: 8, word: 'CONVOCADO', clue: 'Jugador llamado a integrar la selección nacional', arrow: '→' },
      { id: 14, dir: 'v', r: 13, c: 19, word: 'PRENSA', clue: 'Periodistas que cubren las incidencias del partido', arrow: '↓' },
      { id: 15, dir: 'h', r: 15, c: 7, word: 'HISTORIA', clue: 'Narración de los momentos gloriosos de un club', arrow: '→' }
    ]
  },
  {
    id: 11,
    name: "Nivel 11: Los Goleadores",
    gridConfig: { COLS: 18, ROWS: 18 },
    words: [
      { id: 1, dir: 'h', r: 6, c: 6, word: 'APOYO', clue: 'Aliento constante de la afición hacia los jugadores', arrow: '→' },
      { id: 2, dir: 'v', r: 2, c: 6, word: 'ENVIAR', clue: 'Lanzar un pase largo o centro al área', arrow: '↓' },
      { id: 3, dir: 'v', r: 6, c: 8, word: 'OVALADO', clue: 'Forma del balón de rugby, a diferencia del de fútbol', arrow: '↓' },
      { id: 4, dir: 'h', r: 12, c: 6, word: 'ORO', clue: 'Metal precioso que adorna las medallas del campeón', arrow: '→' },
      { id: 5, dir: 'v', r: 12, c: 7, word: 'RONDA', clue: 'Fase eliminatoria o etapa de una copa', arrow: '↓' },
      { id: 6, dir: 'h', r: 16, c: 3, word: 'SUELA', clue: 'Parte inferior del botín que tiene contacto directo con el suelo', arrow: '→' },
      { id: 7, dir: 'h', r: 11, c: 8, word: 'DUELO', clue: 'Enfrentamiento individual uno contra uno por el balón', arrow: '→' },
      { id: 8, dir: 'h', r: 9, c: 6, word: 'GOLEADORES', clue: 'Futbolistas que anotan la mayor cantidad de tantos', arrow: '→' },
      { id: 9, dir: 'v', r: 4, c: 12, word: 'ESCUDO', clue: 'Emblema heráldico bordado en la camiseta del club', arrow: '↓' },
      { id: 10, dir: 'h', r: 3, c: 4, word: 'GANAR', clue: 'Obtener la victoria al final de los noventa minutos', arrow: '→' },
      { id: 11, dir: 'v', r: 11, c: 11, word: 'LIMITAR', clue: 'Restringir el paso de los delanteros adversarios', arrow: '↓' }
    ]
  },
  {
    id: 12,
    name: "Nivel 12: Los Consagrados",
    gridConfig: { COLS: 25, ROWS: 25 },
    words: [
      { id: 1, dir: 'v', r: 8, c: 8, word: 'GUANTES', clue: 'Accesorio que cubre las manos del arquero', arrow: '↓' },
      { id: 2, dir: 'h', r: 11, c: 3, word: 'PICHANGA', clue: 'Partido informal y amistoso entre amigos', arrow: '→' },
      { id: 3, dir: 'v', r: 7, c: 10, word: 'INFLADOR', clue: 'Herramienta para llenar de aire los balones', arrow: '↓' },
      { id: 4, dir: 'h', r: 14, c: 10, word: 'RABONA', clue: 'Remate cruzando una pierna por detras de la otra', arrow: '→' },
      { id: 5, dir: 'v', r: 11, c: 13, word: 'AUTOGOL', clue: 'Anotacion involuntaria en la propia porteria', arrow: '↓' },
      { id: 6, dir: 'v', r: 9, c: 4, word: 'FAIRPLAY', clue: 'Juego limpio y conducta deportiva ejemplar', arrow: '↓' },
      { id: 7, dir: 'v', r: 12, c: 15, word: 'BRAZALETE', clue: 'Cinta que lleva el capitan en el brazo', arrow: '↓' },
      { id: 8, dir: 'v', r: 10, c: 6, word: 'SHORT', clue: 'Pantalon corto del uniforme de futbol', arrow: '↓' },
      { id: 9, dir: 'h', r: 7, c: 9, word: 'BICICLETA', clue: 'Movimiento de piernas sobre el balon para enganar', arrow: '→' },
      { id: 10, dir: 'h', r: 12, c: 15, word: 'BARRIDA', clue: 'Deslizamiento sobre el cesped para quitar el balon', arrow: '→' },
      { id: 11, dir: 'h', r: 19, c: 9, word: 'CAMISETA', clue: 'Prenda de vestir oficial del equipo', arrow: '→' },
      { id: 12, dir: 'v', r: 1, c: 15, word: 'DESPEJE', clue: 'Alejar el balon de la zona de peligro', arrow: '↓' },
      { id: 13, dir: 'v', r: 11, c: 18, word: 'CRONOMETRO', clue: 'Instrumento para medir el tiempo de juego', arrow: '↓' },
      { id: 14, dir: 'h', r: 4, c: 15, word: 'PARABOLA', clue: 'Efecto curvo que describe el balon en el aire', arrow: '→' },
      { id: 15, dir: 'h', r: 20, c: 17, word: 'CONOS', clue: 'Objetos plasticos para entrenar', arrow: '→' },
      { id: 16, dir: 'v', r: 16, c: 11, word: 'CHIMPUNES', clue: 'Calzado deportivo con tacos', arrow: '↓' },
      { id: 17, dir: 'h', r: 23, c: 6, word: 'ARIETE', clue: 'Delantero centro goleador y de choque', arrow: '→' },
      { id: 18, dir: 'v', r: 1, c: 22, word: 'ZAPATAZO', clue: 'Disparo potente al arco desde larga distancia', arrow: '↓' },
      { id: 19, dir: 'v', r: 2, c: 12, word: 'ANTICIPO', clue: 'Adelantarse al rival para recibir la pelota', arrow: '↓' },
      { id: 20, dir: 'v', r: 11, c: 21, word: 'PARED', clue: 'Devolucion rapida del balon entre dos companeros', arrow: '↓' }
    ]
  },
  {
    id: 13,
    name: "Nivel 13: La Logistica",
    gridConfig: { COLS: 25, ROWS: 25 },
    words: [
      { id: 1, dir: 'v', r: 8, c: 8, word: 'ASISTENTE', clue: 'Arbitro auxiliar que corre por la banda', arrow: '↓' },
      { id: 2, dir: 'h', r: 8, c: 3, word: 'BUTACAS', clue: 'Asientos individuales en las tribunas', arrow: '→' },
      { id: 3, dir: 'h', r: 16, c: 5, word: 'KINESIOLOGO', clue: 'Fisioterapeuta que trata las lesiones', arrow: '→' },
      { id: 4, dir: 'v', r: 11, c: 12, word: 'PANTALLA', clue: 'Monitor gigante que muestra repeticiones en el estadio', arrow: '↓' },
      { id: 5, dir: 'v', r: 2, c: 5, word: 'REFLECTORES', clue: 'Torres de iluminacion para partidos nocturnos', arrow: '↓' },
      { id: 6, dir: 'h', r: 6, c: 2, word: 'TUNEL', clue: 'Pasillo por donde salen los equipos a la cancha', arrow: '→' },
      { id: 7, dir: 'h', r: 3, c: 2, word: 'BOLETO', clue: 'Ticket de ingreso para presenciar el encuentro', arrow: '→' },
      { id: 8, dir: 'h', r: 11, c: 2, word: 'MUSEO', clue: 'Sala de exhibicion de copas y trofeos del club', arrow: '→' },
      { id: 9, dir: 'h', r: 12, c: 12, word: 'AFORO', clue: 'Capacidad maxima de espectadores permitida', arrow: '→' },
      { id: 10, dir: 'v', r: 15, c: 6, word: 'FINALISTA', clue: 'Equipo que logra disputar el partido definitivo', arrow: '↓' },
      { id: 11, dir: 'v', r: 11, c: 16, word: 'BOMBO', clue: 'Instrumento de percusion clasico de la hinchada', arrow: '↓' },
      { id: 12, dir: 'h', r: 23, c: 0, word: 'REPECHAJE', clue: 'Fase de repesca para clasificar al torneo', arrow: '→' },
      { id: 13, dir: 'h', r: 18, c: 11, word: 'CAMERINO', clue: 'Vestuario donde se cambian los jugadores', arrow: '→' },
      { id: 14, dir: 'h', r: 18, c: 1, word: 'CENTRAL', clue: 'Defensa que juega en el eje de la zaga', arrow: '→' },
      { id: 15, dir: 'v', r: 6, c: 14, word: 'UTILERO', clue: 'Persona que cuida el uniforme y balones del club', arrow: '↓' },
      { id: 16, dir: 'v', r: 13, c: 3, word: 'OREJONA', clue: 'Nombre popular de la copa de la Champions League', arrow: '↓' },
      { id: 17, dir: 'h', r: 14, c: 16, word: 'BANDERIN', clue: 'Objeto de esquina o que lleva el juez asistente', arrow: '→' },
      { id: 18, dir: 'v', r: 9, c: 20, word: 'BOLETERIA', clue: 'Lugar donde se compran las entradas al estadio', arrow: '↓' },
      { id: 19, dir: 'v', r: 4, c: 23, word: 'REPRESENTANTE', clue: 'Agente que maneja los contratos del jugador', arrow: '↓' },
      { id: 20, dir: 'h', r: 21, c: 4, word: 'RESERVAS', clue: 'Equipo filial o banco de suplentes', arrow: '→' }
    ]
  },
  {
    id: 14,
    name: "Nivel 14: Las Copas",
    gridConfig: { COLS: 25, ROWS: 25 },
    words: [
      { id: 1, dir: 'h', r: 8, c: 8, word: 'CLASICO', clue: 'Enfrentamiento tradicional entre maximos rivales', arrow: '→' },
      { id: 2, dir: 'v', r: 4, c: 12, word: 'DERBI', clue: 'Partido clasico entre equipos de la misma ciudad', arrow: '↓' },
      { id: 3, dir: 'h', r: 6, c: 9, word: 'CUARTOS', clue: 'Ronda de ocho equipos en una copa', arrow: '→' },
      { id: 4, dir: 'v', r: 7, c: 8, word: 'OCTAVOS', clue: 'Ronda de dieciseis equipos en una copa', arrow: '↓' },
      { id: 5, dir: 'h', r: 10, c: 2, word: 'LEYENDA', clue: 'Jugador historico recordado por siempre', arrow: '→' },
      { id: 6, dir: 'v', r: 8, c: 13, word: 'CHAMPIONS', clue: 'Prestigioso torneo de clubes campeones de Europa', arrow: '↓' },
      { id: 7, dir: 'h', r: 12, c: 3, word: 'EUROCOPA', clue: 'Torneo europeo de selecciones nacionales', arrow: '→' },
      { id: 8, dir: 'h', r: 10, c: 10, word: 'FIFA', clue: 'Maximo organismo rector del futbol mundial', arrow: '→' },
      { id: 9, dir: 'v', r: 12, c: 4, word: 'UEFA', clue: 'Union de asociaciones europeas de futbol', arrow: '↓' },
      { id: 10, dir: 'h', r: 16, c: 8, word: 'PROMESA', clue: 'Jugador joven con proyeccion de estrella', arrow: '→' },
      { id: 11, dir: 'v', r: 2, c: 2, word: 'SEMIFINAL', clue: 'Fase previa que define a los finalistas', arrow: '↓' },
      { id: 12, dir: 'h', r: 2, c: 2, word: 'SUDAMERICANA', clue: 'Copa continental secundaria de Conmebol', arrow: '→' },
      { id: 13, dir: 'h', r: 4, c: 12, word: 'DESTREZA', clue: 'Agilidad y excelente control de la pelota', arrow: '→' },
      { id: 14, dir: 'v', r: 0, c: 17, word: 'CONMEBOL', clue: 'Confederacion sudamericana de futbol', arrow: '↓' },
      { id: 15, dir: 'v', r: 16, c: 9, word: 'REGATEAR', clue: 'Esquivar a los defensores mediante amagos', arrow: '↓' },
      { id: 16, dir: 'h', r: 22, c: 2, word: 'PRORROGA', clue: 'Tiempo extra en caso de persistir el empate', arrow: '→' },
      { id: 17, dir: 'h', r: 13, c: 12, word: 'LIBERTADORES', clue: 'Copa continental maxima de Conmebol', arrow: '→' },
      { id: 18, dir: 'v', r: 1, c: 5, word: 'TANDA', clue: 'Serie de lanzamientos de penales', arrow: '↓' },
      { id: 19, dir: 'v', r: 9, c: 18, word: 'GARRA', clue: 'Espiritu de lucha y entrega en el campo', arrow: '↓' },
      { id: 20, dir: 'h', r: 20, c: 4, word: 'TALENTO', clue: 'Habilidad y calidad innata de un futbolista', arrow: '→' }
    ]
  },
  {
    id: 15,
    name: "Nivel 15: La Directiva",
    gridConfig: { COLS: 25, ROWS: 25 },
    words: [
      { id: 1, dir: 'h', r: 8, c: 8, word: 'LIDERAZGO', clue: 'Capacidad de guiar y motivar al grupo', arrow: '→' },
      { id: 2, dir: 'v', r: 0, c: 9, word: 'CALENTAMIENTO', clue: 'Ejercicios previos antes de ingresar al partido', arrow: '↓' },
      { id: 3, dir: 'v', r: 4, c: 13, word: 'DESMARQUE', clue: 'Liberarse de la marca del defensa para recibir', arrow: '↓' },
      { id: 4, dir: 'v', r: 4, c: 11, word: 'PROYECCION', clue: 'Subida ofensiva de los defensas laterales', arrow: '↓' },
      { id: 5, dir: 'h', r: 1, c: 4, word: 'CHARLA', clue: 'Instrucciones finales del tecnico en el camerino', arrow: '→' },
      { id: 6, dir: 'h', r: 4, c: 3, word: 'PRESIÓN', clue: 'Acosar al rival para forzar su error', arrow: '→' },
      { id: 7, dir: 'v', r: 3, c: 4, word: 'PRESIDENTE', clue: 'Maxima autoridad administrativa del club', arrow: '↓' },
      { id: 8, dir: 'v', r: 5, c: 16, word: 'PALOMITA', clue: 'Remate de cabeza lanzandose al suelo', arrow: '↓' },
      { id: 9, dir: 'h', r: 9, c: 16, word: 'MEDICO', clue: 'Profesional de salud del cuerpo tecnico', arrow: '→' },
      { id: 10, dir: 'h', r: 7, c: 1, word: 'SOCIO', clue: 'Aficionado que aporta economicamente al club', arrow: '→' },
      { id: 11, dir: 'h', r: 12, c: 0, word: 'REFUERZO', clue: 'Fichaje de calidad para mejorar el equipo', arrow: '→' },
      { id: 12, dir: 'h', r: 12, c: 15, word: 'MASAJISTA', clue: 'Encargado de la relajacion muscular de jugadores', arrow: '→' },
      { id: 13, dir: 'h', r: 5, c: 16, word: 'PLANTEL', clue: 'Nomina completa de futbolistas del club', arrow: '→' },
      { id: 14, dir: 'v', r: 12, c: 18, word: 'ABONO', clue: 'Pase de temporada completa para ver los partidos', arrow: '↓' },
      { id: 15, dir: 'h', r: 15, c: 16, word: 'PINCHADA', clue: 'Elevar la pelota con suavidad sobre el portero', arrow: '→' },
      { id: 16, dir: 'v', r: 15, c: 22, word: 'DERECHAZO', clue: 'Disparo potente ejecutado con la pierna derecha', arrow: '↓' },
      { id: 17, dir: 'v', r: 11, c: 7, word: 'CONCENTRACION', clue: 'Reunion del equipo previa a un partido clave', arrow: '↓' },
      { id: 18, dir: 'h', r: 9, c: 2, word: 'TIENDA', clue: 'Establecimiento oficial de venta de articulos del club', arrow: '→' },
      { id: 19, dir: 'h', r: 15, c: 4, word: 'VETERANO', clue: 'Futbolista con gran experiencia y trayectoria', arrow: '→' },
      { id: 20, dir: 'h', r: 22, c: 17, word: 'ZURDAZO', clue: 'Disparo potente ejecutado con la pierna izquierda', arrow: '→' }
    ]
  },
  {
    id: 16,
    name: "Nivel 16: La Leyenda",
    gridConfig: { COLS: 25, ROWS: 25 },
    words: [
      { id: 1, dir: 'v', r: 8, c: 8, word: 'CANTERANO', clue: 'Jugador formado en las divisiones menores del club', arrow: '↓' },
      { id: 2, dir: 'h', r: 11, c: 2, word: 'FAVORITO', clue: 'Equipo con mas probabilidades de llevarse la victoria', arrow: '→' },
      { id: 3, dir: 'h', r: 8, c: 0, word: 'AMONESTACION', clue: 'Advertencia del arbitro con tarjeta amarilla', arrow: '→' },
      { id: 4, dir: 'v', r: 5, c: 7, word: 'ZAGA', clue: 'Linea defensiva del equipo', arrow: '↓' },
      { id: 5, dir: 'h', r: 16, c: 0, word: 'CONVOCATORIA', clue: 'Lista de jugadores citados para el encuentro', arrow: '→' },
      { id: 6, dir: 'h', r: 14, c: 5, word: 'ORGANIZADOR', clue: 'Mediocampista que distribuye y crea el juego', arrow: '→' },
      { id: 7, dir: 'v', r: 15, c: 2, word: 'INVICTO', clue: 'Equipo que no conoce la derrota en el torneo', arrow: '↓' },
      { id: 8, dir: 'v', r: 3, c: 0, word: 'DEBUTANTE', clue: 'Jugador que hace su estreno oficial', arrow: '↓' },
      { id: 9, dir: 'v', r: 5, c: 14, word: 'TRANSMISION', clue: 'Emision por television o radio del partido', arrow: '↓' },
      { id: 10, dir: 'h', r: 6, c: 13, word: 'TRIPLETE', clue: 'Tres goles anotados por un mismo jugador', arrow: '→' },
      { id: 11, dir: 'h', r: 9, c: 13, word: 'ESTRATEGIA', clue: 'Plan planteado por el tecnico para ganar', arrow: '→' },
      { id: 12, dir: 'v', r: 5, c: 10, word: 'REBOTE', clue: 'Desvio del balon tras chocar con un poste o rival', arrow: '↓' },
      { id: 13, dir: 'v', r: 0, c: 3, word: 'EXPULSION', clue: 'Tarjeta roja directa o acumulada', arrow: '↓' },
      { id: 14, dir: 'v', r: 2, c: 22, word: 'CAMPEONATO', clue: 'Competicion oficial que corona al mejor', arrow: '↓' },
      { id: 15, dir: 'h', r: 3, c: 2, word: 'SUDORACION', clue: 'Transpiracion por el esfuerzo fisico del juego', arrow: '→' },
      { id: 16, dir: 'h', r: 21, c: 1, word: 'COMENTARISTA', clue: 'Analista de futbol que narra o comenta los partidos', arrow: '→' },
      { id: 17, dir: 'v', r: 0, c: 20, word: 'FICHAJE', clue: 'Contratacion de un nuevo integrante para el equipo', arrow: '↓' },
      { id: 18, dir: 'v', r: 17, c: 12, word: 'GOLEADA', clue: 'Victoria contundente por gran cantidad de goles', arrow: '↓' },
      { id: 19, dir: 'h', r: 23, c: 4, word: 'SUPLENCIA', clue: 'Rol de esperar en el banco de alternativas', arrow: '→' },
      { id: 20, dir: 'v', r: 8, c: 17, word: 'MARCADOR', clue: 'Puntaje que refleja el resultado del partido', arrow: '↓' }
    ]
  }
];

// Compatibilidad con código anterior o externo
const WORDS = LEVELS[0].words;
const GRID_CONFIG = LEVELS[0].gridConfig;