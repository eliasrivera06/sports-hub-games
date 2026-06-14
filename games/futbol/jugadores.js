// Base de datos de jugadores locales para validación y autocompletado
const JUGADORES = [
    {
        "id": 1,
        "nombre": "Lionel Messi",
        "nacionalidad": "Argentina",
        "clubes": [
            "PSG",
            "Barcelona",
            "Inter Miami"
        ]
    },
    {
        "id": 2,
        "nombre": "Angel Di Maria",
        "nacionalidad": "Argentina",
        "clubes": [
            "PSG",
            "Juventus",
            "Rosario Central",
            "Real Madrid",
            "Benfica",
            "Manchester United"
        ]
    },
    {
        "id": 3,
        "nombre": "Gonzalo Higuain",
        "nacionalidad": "Argentina",
        "clubes": [
            "River Plate",
            "AC Milan",
            "Juventus",
            "Chelsea",
            "Inter Miami",
            "Real Madrid",
            "Napoli"
        ]
    },
    {
        "id": 4,
        "nombre": "Sergio Aguero",
        "nacionalidad": "Argentina",
        "clubes": [
            "Barcelona",
            "Manchester City",
            "Atletico Madrid",
            "Independiente"
        ]
    },
    {
        "id": 5,
        "nombre": "Javier Mascherano",
        "nacionalidad": "Argentina",
        "clubes": [
            "River Plate",
            "Barcelona",
            "Corinthians",
            "Liverpool",
            "West Ham",
            "Estudiantes"
        ]
    },
    {
        "id": 6,
        "nombre": "Paulo Dybala",
        "nacionalidad": "Argentina",
        "clubes": [
            "Juventus",
            "Palermo",
            "Instituto",
            "AS Roma"
        ]
    },
    {
        "id": 7,
        "nombre": "Lautaro Martinez",
        "nacionalidad": "Argentina",
        "clubes": [
            "Racing Club",
            "Inter Milan"
        ]
    },
    {
        "id": 8,
        "nombre": "Julian Alvarez",
        "nacionalidad": "Argentina",
        "clubes": [
            "Manchester City",
            "Atletico Madrid",
            "River Plate"
        ]
    },
    {
        "id": 9,
        "nombre": "Enzo Fernandez",
        "nacionalidad": "Argentina",
        "clubes": [
            "Defensa y Justicia",
            "River Plate",
            "Chelsea",
            "Benfica"
        ]
    },
    {
        "id": 10,
        "nombre": "Alexis Mac Allister",
        "nacionalidad": "Argentina",
        "clubes": [
            "Brighton",
            "Liverpool",
            "Argentinos Juniors",
            "Boca Juniors"
        ]
    },
    {
        "id": 11,
        "nombre": "Rodrigo De Paul",
        "nacionalidad": "Argentina",
        "clubes": [
            "Racing Club",
            "Udinese",
            "Atletico Madrid",
            "Valencia"
        ]
    },
    {
        "id": 12,
        "nombre": "Cristian Romero",
        "nacionalidad": "Argentina",
        "clubes": [
            "Belgrano",
            "Juventus",
            "Tottenham",
            "Atalanta",
            "Genoa"
        ]
    },
    {
        "id": 13,
        "nombre": "Lisandro Martinez",
        "nacionalidad": "Argentina",
        "clubes": [
            "Defensa y Justicia",
            "Ajax",
            "Newell's Old Boys",
            "Manchester United"
        ]
    },
    {
        "id": 14,
        "nombre": "Emiliano Martinez",
        "nacionalidad": "Argentina",
        "clubes": [
            "Wolves",
            "Arsenal",
            "Getafe",
            "Sheffield Wednesday",
            "Rotherham United",
            "Independiente",
            "Aston Villa",
            "Reading"
        ]
    },
    {
        "id": 15,
        "nombre": "Nicolas Otamendi",
        "nacionalidad": "Argentina",
        "clubes": [
            "Atletico Mineiro",
            "Porto",
            "Velez Sarsfield",
            "Manchester City",
            "Benfica",
            "Valencia"
        ]
    },
    {
        "id": 16,
        "nombre": "Marcos Acuña",
        "nacionalidad": "Argentina",
        "clubes": [
            "Sporting CP",
            "Ferro Carril Oeste",
            "River Plate",
            "Sevilla",
            "Racing Club"
        ]
    },
    {
        "id": 17,
        "nombre": "Leandro Paredes",
        "nacionalidad": "Argentina",
        "clubes": [
            "PSG",
            "Juventus",
            "Boca Juniors",
            "AS Roma",
            "Empoli",
            "Zenit",
            "Chievo"
        ]
    },
    {
        "id": 18,
        "nombre": "Giovani Lo Celso",
        "nacionalidad": "Argentina",
        "clubes": [
            "PSG",
            "Tottenham",
            "Villarreal",
            "Real Betis",
            "Rosario Central"
        ]
    },
    {
        "id": 19,
        "nombre": "Mauro Icardi",
        "nacionalidad": "Argentina",
        "clubes": [
            "Sampdoria",
            "Galatasaray",
            "Inter Milan",
            "PSG"
        ]
    },
    {
        "id": 20,
        "nombre": "Hernan Crespo",
        "nacionalidad": "Argentina",
        "clubes": [
            "Inter Milan",
            "River Plate",
            "Parma",
            "AC Milan",
            "Lazio",
            "Chelsea",
            "Genoa"
        ]
    },
    {
        "id": 21,
        "nombre": "Javier Zanetti",
        "nacionalidad": "Argentina",
        "clubes": [
            "Inter Milan",
            "Talleres",
            "Banfield"
        ]
    },
    {
        "id": 22,
        "nombre": "Juan Sebastian Veron",
        "nacionalidad": "Argentina",
        "clubes": [
            "Inter Milan",
            "Parma",
            "Sampdoria",
            "Lazio",
            "Chelsea",
            "Estudiantes",
            "Boca Juniors",
            "Manchester United"
        ]
    },
    {
        "id": 23,
        "nombre": "Gabriel Batistuta",
        "nacionalidad": "Argentina",
        "clubes": [
            "Inter Milan",
            "Newell's Old Boys",
            "River Plate",
            "AS Roma",
            "Boca Juniors",
            "Fiorentina"
        ]
    },
    {
        "id": 24,
        "nombre": "Carlos Tevez",
        "nacionalidad": "Argentina",
        "clubes": [
            "Shanghai Shenhua",
            "Juventus",
            "Corinthians",
            "West Ham",
            "Boca Juniors",
            "Manchester City",
            "Manchester United"
        ]
    },
    {
        "id": 25,
        "nombre": "Javier Saviola",
        "nacionalidad": "Argentina",
        "clubes": [
            "River Plate",
            "Barcelona",
            "Sevilla",
            "Malaga",
            "Monaco",
            "Olympiacos",
            "Real Madrid",
            "Benfica",
            "Verona"
        ]
    },
    {
        "id": 26,
        "nombre": "Ezequiel Lavezzi",
        "nacionalidad": "Argentina",
        "clubes": [
            "San Lorenzo",
            "Napoli",
            "Estudiantes",
            "PSG"
        ]
    },
    {
        "id": 27,
        "nombre": "Diego Maradona",
        "nacionalidad": "Argentina",
        "clubes": [
            "Argentinos Juniors",
            "Newell's Old Boys",
            "Barcelona",
            "Sevilla",
            "Boca Juniors",
            "Napoli"
        ]
    },
    {
        "id": 28,
        "nombre": "Juan Roman Riquelme",
        "nacionalidad": "Argentina",
        "clubes": [
            "Villarreal",
            "Argentinos Juniors",
            "Barcelona",
            "Boca Juniors"
        ]
    },
    {
        "id": 29,
        "nombre": "Esteban Cambiasso",
        "nacionalidad": "Argentina",
        "clubes": [
            "Inter Milan",
            "River Plate",
            "Leicester City",
            "Olympiacos",
            "Independiente",
            "Real Madrid"
        ]
    },
    {
        "id": 30,
        "nombre": "Walter Samuel",
        "nacionalidad": "Argentina",
        "clubes": [
            "Inter Milan",
            "Newell's Old Boys",
            "Basel",
            "AS Roma",
            "Boca Juniors",
            "Real Madrid"
        ]
    },
    {
        "id": 31,
        "nombre": "Alejandro Garnacho",
        "nacionalidad": "Argentina",
        "clubes": [
            "Manchester United"
        ]
    },
    {
        "id": 32,
        "nombre": "Marcos Rojo",
        "nacionalidad": "Argentina",
        "clubes": [
            "Sporting CP",
            "Boca Juniors",
            "Spartak Moscow",
            "Estudiantes",
            "Manchester United"
        ]
    },
    {
        "id": 33,
        "nombre": "Gabriel Heinze",
        "nacionalidad": "Argentina",
        "clubes": [
            "Sporting CP",
            "PSG",
            "Newell's Old Boys",
            "AS Roma",
            "Real Madrid",
            "Valladolid",
            "Manchester United",
            "Marseille"
        ]
    },
    {
        "id": 34,
        "nombre": "Claudio Caniggia",
        "nacionalidad": "Argentina",
        "clubes": [
            "River Plate",
            "Rangers",
            "AS Roma",
            "Atalanta",
            "Boca Juniors",
            "Dundee",
            "Benfica",
            "Verona"
        ]
    },
    {
        "id": 35,
        "nombre": "Neymar Jr",
        "nacionalidad": "Brasil",
        "clubes": [
            "Al Hilal",
            "PSG",
            "Barcelona",
            "Santos"
        ]
    },
    {
        "id": 36,
        "nombre": "Vinicius Junior",
        "nacionalidad": "Brasil",
        "clubes": [
            "Real Madrid",
            "Flamengo"
        ]
    },
    {
        "id": 37,
        "nombre": "Rodrygo Goes",
        "nacionalidad": "Brasil",
        "clubes": [
            "Real Madrid",
            "Santos"
        ]
    },
    {
        "id": 38,
        "nombre": "Casemiro",
        "nacionalidad": "Brasil",
        "clubes": [
            "Porto",
            "Real Madrid",
            "Sao Paulo",
            "Manchester United"
        ]
    },
    {
        "id": 39,
        "nombre": "Thiago Silva",
        "nacionalidad": "Brasil",
        "clubes": [
            "PSG",
            "AC Milan",
            "Chelsea",
            "Fluminense",
            "Juventude"
        ]
    },
    {
        "id": 40,
        "nombre": "Marquinhos",
        "nacionalidad": "Brasil",
        "clubes": [
            "AS Roma",
            "PSG",
            "Corinthians"
        ]
    },
    {
        "id": 41,
        "nombre": "Alisson Becker",
        "nacionalidad": "Brasil",
        "clubes": [
            "Liverpool",
            "AS Roma",
            "Internacional"
        ]
    },
    {
        "id": 42,
        "nombre": "Ederson Moraes",
        "nacionalidad": "Brasil",
        "clubes": [
            "Manchester City",
            "Rio Ave",
            "Benfica"
        ]
    },
    {
        "id": 43,
        "nombre": "Gabriel Jesus",
        "nacionalidad": "Brasil",
        "clubes": [
            "Palmeiras",
            "Manchester City",
            "Arsenal"
        ]
    },
    {
        "id": 44,
        "nombre": "Philippe Coutinho",
        "nacionalidad": "Brasil",
        "clubes": [
            "Espanyol",
            "Inter Milan",
            "Barcelona",
            "Al-Duhail",
            "Liverpool",
            "Bayern Munich",
            "Aston Villa",
            "Vasco da Gama"
        ]
    },
    {
        "id": 45,
        "nombre": "Roberto Firmino",
        "nacionalidad": "Brasil",
        "clubes": [
            "Figueirense",
            "Liverpool",
            "Al Ahli",
            "Hoffenheim"
        ]
    },
    {
        "id": 46,
        "nombre": "Richarlison",
        "nacionalidad": "Brasil",
        "clubes": [
            "Everton",
            "Tottenham",
            "Fluminense",
            "Watford",
            "America Mineiro"
        ]
    },
    {
        "id": 47,
        "nombre": "Raphinha",
        "nacionalidad": "Brasil",
        "clubes": [
            "Sporting CP",
            "Leeds United",
            "Rennes",
            "Barcelona"
        ]
    },
    {
        "id": 48,
        "nombre": "David Luiz",
        "nacionalidad": "Brasil",
        "clubes": [
            "PSG",
            "Arsenal",
            "Vitoria",
            "Chelsea",
            "Flamengo",
            "Benfica"
        ]
    },
    {
        "id": 49,
        "nombre": "Oscar Emboaba",
        "nacionalidad": "Brasil",
        "clubes": [
            "Shanghai Port",
            "Sao Paulo",
            "Chelsea",
            "Internacional"
        ]
    },
    {
        "id": 50,
        "nombre": "Willian Borges",
        "nacionalidad": "Brasil",
        "clubes": [
            "Arsenal",
            "Corinthians",
            "Chelsea",
            "Shakhtar Donetsk",
            "Anzhi Makhachkala",
            "Fulham"
        ]
    },
    {
        "id": 51,
        "nombre": "Fernandinho Rosa",
        "nacionalidad": "Brasil",
        "clubes": [
            "Shakhtar Donetsk",
            "Manchester City",
            "Athletico Paranaense"
        ]
    },
    {
        "id": 52,
        "nombre": "Fabinho Tavares",
        "nacionalidad": "Brasil",
        "clubes": [
            "Al Ittihad",
            "Fluminense",
            "Liverpool",
            "Monaco",
            "Rio Ave",
            "Real Madrid"
        ]
    },
    {
        "id": 53,
        "nombre": "Bruno Guimaraes",
        "nacionalidad": "Brasil",
        "clubes": [
            "Lyon",
            "Audax",
            "Newcastle",
            "Athletico Paranaense"
        ]
    },
    {
        "id": 54,
        "nombre": "Lucas Paqueta",
        "nacionalidad": "Brasil",
        "clubes": [
            "AC Milan",
            "Lyon",
            "Flamengo",
            "West Ham"
        ]
    },
    {
        "id": 55,
        "nombre": "Gabriel Martinelli",
        "nacionalidad": "Brasil",
        "clubes": [
            "Ituano",
            "Arsenal"
        ]
    },
    {
        "id": 56,
        "nombre": "Eder Militao",
        "nacionalidad": "Brasil",
        "clubes": [
            "Porto",
            "Real Madrid",
            "Sao Paulo"
        ]
    },
    {
        "id": 57,
        "nombre": "Alex Sandro",
        "nacionalidad": "Brasil",
        "clubes": [
            "Porto",
            "Atletico Paranaense",
            "Juventus",
            "Santos"
        ]
    },
    {
        "id": 58,
        "nombre": "Gleison Bremer",
        "nacionalidad": "Brasil",
        "clubes": [
            "Torino",
            "Juventus",
            "Atletico Mineiro"
        ]
    },
    {
        "id": 59,
        "nombre": "Douglas Costa",
        "nacionalidad": "Brasil",
        "clubes": [
            "Juventus",
            "LA Galaxy",
            "Gremio",
            "Fluminense",
            "Shakhtar Donetsk",
            "Bayern Munich"
        ]
    },
    {
        "id": 60,
        "nombre": "Arthur Melo",
        "nacionalidad": "Brasil",
        "clubes": [
            "Barcelona",
            "Juventus",
            "Gremio",
            "Liverpool",
            "Fiorentina"
        ]
    },
    {
        "id": 61,
        "nombre": "Malcom Silva",
        "nacionalidad": "Brasil",
        "clubes": [
            "Al Hilal",
            "Barcelona",
            "Bordeaux",
            "Corinthians",
            "Zenit"
        ]
    },
    {
        "id": 62,
        "nombre": "Fred Rodrigues",
        "nacionalidad": "Brasil",
        "clubes": [
            "Fenerbahce",
            "Shakhtar Donetsk",
            "Manchester United",
            "Internacional"
        ]
    },
    {
        "id": 63,
        "nombre": "Alexandre Pato",
        "nacionalidad": "Brasil",
        "clubes": [
            "AC Milan",
            "Sao Paulo",
            "Corinthians",
            "Chelsea",
            "Villarreal",
            "Tianjin Quanjian",
            "Orlando City",
            "Internacional"
        ]
    },
    {
        "id": 64,
        "nombre": "Hulk Paraiba",
        "nacionalidad": "Brasil",
        "clubes": [
            "Vitoria",
            "Kawasaki Frontale",
            "Atletico Mineiro",
            "Shanghai SIPG",
            "Zenit",
            "Porto",
            "Tokyo Verdy"
        ]
    },
    {
        "id": 65,
        "nombre": "Ronaldinho Gaúcho",
        "nacionalidad": "Brasil",
        "clubes": [
            "PSG",
            "Barcelona",
            "AC Milan",
            "Querétaro",
            "Atletico Mineiro",
            "Gremio",
            "Fluminense",
            "Flamengo"
        ]
    },
    {
        "id": 66,
        "nombre": "Ronaldo Nazario",
        "nacionalidad": "Brasil",
        "clubes": [
            "Inter Milan",
            "Barcelona",
            "AC Milan",
            "Corinthians",
            "Cruzeiro",
            "Real Madrid",
            "PSV"
        ]
    },
    {
        "id": 67,
        "nombre": "Kaka",
        "nacionalidad": "Brasil",
        "clubes": [
            "Real Madrid",
            "AC Milan",
            "Orlando City",
            "Sao Paulo"
        ]
    },
    {
        "id": 68,
        "nombre": "Rivaldo",
        "nacionalidad": "Brasil",
        "clubes": [
            "Barcelona",
            "Mogi Mirim",
            "AC Milan",
            "Corinthians",
            "AEK Athens",
            "Santa Cruz",
            "Olympiacos",
            "Deportivo La Coruña",
            "Cruzeiro",
            "Palmeiras"
        ]
    },
    {
        "id": 69,
        "nombre": "Romario Faria",
        "nacionalidad": "Brasil",
        "clubes": [
            "PSV",
            "Barcelona",
            "Fluminense",
            "Al Sadd",
            "Vasco da Gama",
            "Flamengo",
            "Valencia"
        ]
    },
    {
        "id": 70,
        "nombre": "Cafu",
        "nacionalidad": "Brasil",
        "clubes": [
            "AC Milan",
            "Sao Paulo",
            "AS Roma",
            "Real Zaragoza",
            "Palmeiras",
            "Juventude"
        ]
    },
    {
        "id": 71,
        "nombre": "Roberto Carlos",
        "nacionalidad": "Brasil",
        "clubes": [
            "Real Madrid",
            "Fenerbahce",
            "Inter Milan",
            "Corinthians",
            "Uniao Sao Joao",
            "Anzhi Makhachkala",
            "Palmeiras"
        ]
    },
    {
        "id": 72,
        "nombre": "Dani Alves",
        "nacionalidad": "Brasil",
        "clubes": [
            "PSG",
            "Pumas UNAM",
            "Barcelona",
            "Juventus",
            "Sevilla",
            "Sao Paulo",
            "Bahia"
        ]
    },
    {
        "id": 73,
        "nombre": "Marcelo Vieira",
        "nacionalidad": "Brasil",
        "clubes": [
            "Fluminense",
            "Real Madrid",
            "Olympiacos"
        ]
    },
    {
        "id": 74,
        "nombre": "Julio Cesar",
        "nacionalidad": "Brasil",
        "clubes": [
            "Inter Milan",
            "QPR",
            "Toronto FC",
            "Benfica",
            "Flamengo",
            "Chievo"
        ]
    },
    {
        "id": 75,
        "nombre": "Adriano Imperador",
        "nacionalidad": "Brasil",
        "clubes": [
            "Inter Milan",
            "Parma",
            "Sao Paulo",
            "Corinthians",
            "AS Roma",
            "Fiorentina",
            "Flamengo"
        ]
    },
    {
        "id": 76,
        "nombre": "Dida",
        "nacionalidad": "Brasil",
        "clubes": [
            "Vitoria",
            "Lugano",
            "AC Milan",
            "Portuguesa",
            "Corinthians",
            "Gremio",
            "Cruzeiro",
            "Internacional"
        ]
    },
    {
        "id": 77,
        "nombre": "Robinho",
        "nacionalidad": "Brasil",
        "clubes": [
            "Santos",
            "AC Milan",
            "Atletico Mineiro",
            "Guangzhou Evergrande",
            "Real Madrid",
            "Manchester City",
            "Sivasspor",
            "Basaksehir"
        ]
    },
    {
        "id": 78,
        "nombre": "Lucas Moura",
        "nacionalidad": "Brasil",
        "clubes": [
            "PSG",
            "Tottenham",
            "Sao Paulo"
        ]
    },
    {
        "id": 79,
        "nombre": "Felipe Anderson",
        "nacionalidad": "Brasil",
        "clubes": [
            "Santos",
            "Lazio",
            "West Ham",
            "Porto",
            "Palmeiras"
        ]
    },
    {
        "id": 80,
        "nombre": "Kylian Mbappe",
        "nacionalidad": "Francia",
        "clubes": [
            "Real Madrid",
            "PSG",
            "Monaco"
        ]
    },
    {
        "id": 81,
        "nombre": "Karim Benzema",
        "nacionalidad": "Francia",
        "clubes": [
            "Al Ittihad",
            "Real Madrid",
            "Lyon"
        ]
    },
    {
        "id": 82,
        "nombre": "Antoine Griezmann",
        "nacionalidad": "Francia",
        "clubes": [
            "Real Sociedad",
            "Atletico Madrid",
            "Barcelona"
        ]
    },
    {
        "id": 83,
        "nombre": "Raphael Varane",
        "nacionalidad": "Francia",
        "clubes": [
            "Como",
            "Real Madrid",
            "Manchester United",
            "Lens"
        ]
    },
    {
        "id": 84,
        "nombre": "N'Golo Kante",
        "nacionalidad": "Francia",
        "clubes": [
            "Al Ittihad",
            "Chelsea",
            "Leicester City",
            "Boulogne",
            "Caen"
        ]
    },
    {
        "id": 85,
        "nombre": "Paul Pogba",
        "nacionalidad": "Francia",
        "clubes": [
            "Juventus",
            "Manchester United"
        ]
    },
    {
        "id": 86,
        "nombre": "Hugo Lloris",
        "nacionalidad": "Francia",
        "clubes": [
            "Lyon",
            "Nice",
            "Tottenham",
            "LAFC"
        ]
    },
    {
        "id": 87,
        "nombre": "Olivier Giroud",
        "nacionalidad": "Francia",
        "clubes": [
            "Tours",
            "LAFC",
            "Grenoble",
            "Arsenal",
            "AC Milan",
            "Chelsea",
            "Montpellier"
        ]
    },
    {
        "id": 88,
        "nombre": "Ousmane Dembele",
        "nacionalidad": "Francia",
        "clubes": [
            "PSG",
            "Barcelona",
            "Rennes",
            "Borussia Dortmund"
        ]
    },
    {
        "id": 89,
        "nombre": "Kingsley Coman",
        "nacionalidad": "Francia",
        "clubes": [
            "Juventus",
            "PSG",
            "Bayern Munich"
        ]
    },
    {
        "id": 90,
        "nombre": "Adrien Rabiot",
        "nacionalidad": "Francia",
        "clubes": [
            "Juventus",
            "PSG",
            "Toulouse",
            "Marseille"
        ]
    },
    {
        "id": 91,
        "nombre": "Lucas Hernandez",
        "nacionalidad": "Francia",
        "clubes": [
            "PSG",
            "Atletico Madrid",
            "Bayern Munich"
        ]
    },
    {
        "id": 92,
        "nombre": "Theo Hernandez",
        "nacionalidad": "Francia",
        "clubes": [
            "Real Sociedad",
            "AC Milan",
            "Alaves",
            "Atletico Madrid",
            "Real Madrid"
        ]
    },
    {
        "id": 93,
        "nombre": "Benjamin Pavard",
        "nacionalidad": "Francia",
        "clubes": [
            "Stuttgart",
            "Lille",
            "Inter Milan",
            "Bayern Munich"
        ]
    },
    {
        "id": 94,
        "nombre": "Jules Kounde",
        "nacionalidad": "Francia",
        "clubes": [
            "Bordeaux",
            "Sevilla",
            "Barcelona"
        ]
    },
    {
        "id": 95,
        "nombre": "Aurelien Tchouameni",
        "nacionalidad": "Francia",
        "clubes": [
            "Real Madrid",
            "Bordeaux",
            "Monaco"
        ]
    },
    {
        "id": 96,
        "nombre": "Eduardo Camavinga",
        "nacionalidad": "Francia",
        "clubes": [
            "Real Madrid",
            "Rennes"
        ]
    },
    {
        "id": 97,
        "nombre": "Dayot Upamecano",
        "nacionalidad": "Francia",
        "clubes": [
            "Salzburg",
            "Leipzig",
            "Valenciennes",
            "Bayern Munich"
        ]
    },
    {
        "id": 98,
        "nombre": "William Saliba",
        "nacionalidad": "Francia",
        "clubes": [
            "Saint-Etienne",
            "Marseille",
            "Nice",
            "Arsenal"
        ]
    },
    {
        "id": 99,
        "nombre": "Ibrahima Konate",
        "nacionalidad": "Francia",
        "clubes": [
            "Liverpool",
            "Sochaux",
            "Leipzig"
        ]
    },
    {
        "id": 100,
        "nombre": "Ferland Mendy",
        "nacionalidad": "Francia",
        "clubes": [
            "Le Havre",
            "Real Madrid",
            "Lyon"
        ]
    },
    {
        "id": 101,
        "nombre": "Mike Maignan",
        "nacionalidad": "Francia",
        "clubes": [
            "AC Milan",
            "Lille"
        ]
    },
    {
        "id": 102,
        "nombre": "Christopher Nkunku",
        "nacionalidad": "Francia",
        "clubes": [
            "PSG",
            "Leipzig",
            "Chelsea"
        ]
    },
    {
        "id": 103,
        "nombre": "Marcus Thuram",
        "nacionalidad": "Francia",
        "clubes": [
            "Borussia Mönchengladbach",
            "Sochaux",
            "Inter Milan",
            "Guingamp"
        ]
    },
    {
        "id": 104,
        "nombre": "Alexandre Lacazette",
        "nacionalidad": "Francia",
        "clubes": [
            "Lyon",
            "Arsenal"
        ]
    },
    {
        "id": 105,
        "nombre": "Anthony Martial",
        "nacionalidad": "Francia",
        "clubes": [
            "Lyon",
            "Sevilla",
            "AEK Athens",
            "Monaco",
            "Manchester United"
        ]
    },
    {
        "id": 106,
        "nombre": "Nabil Fekir",
        "nacionalidad": "Francia",
        "clubes": [
            "Al Jazira",
            "Lyon",
            "Real Betis"
        ]
    },
    {
        "id": 107,
        "nombre": "Thomas Lemar",
        "nacionalidad": "Francia",
        "clubes": [
            "Monaco",
            "Atletico Madrid",
            "Caen"
        ]
    },
    {
        "id": 108,
        "nombre": "Blaise Matuidi",
        "nacionalidad": "Francia",
        "clubes": [
            "PSG",
            "Troyes",
            "Juventus",
            "Saint-Etienne",
            "Inter Miami"
        ]
    },
    {
        "id": 109,
        "nombre": "Eric Abidal",
        "nacionalidad": "Francia",
        "clubes": [
            "Barcelona",
            "Lyon",
            "Monaco",
            "Olympiacos",
            "Lille"
        ]
    },
    {
        "id": 110,
        "nombre": "Patrice Evra",
        "nacionalidad": "Francia",
        "clubes": [
            "Monza",
            "Juventus",
            "Nice",
            "West Ham",
            "Monaco",
            "Marseille",
            "Manchester United"
        ]
    },
    {
        "id": 111,
        "nombre": "Samir Nasri",
        "nacionalidad": "Francia",
        "clubes": [
            "Arsenal",
            "Antalyaspor",
            "Sevilla",
            "West Ham",
            "Marseille",
            "Manchester City",
            "Anderlecht"
        ]
    },
    {
        "id": 112,
        "nombre": "Franck Ribery",
        "nacionalidad": "Francia",
        "clubes": [
            "Metz",
            "Salernitana",
            "Brest",
            "Galatasaray",
            "Bayern Munich",
            "Fiorentina",
            "Marseille"
        ]
    },
    {
        "id": 113,
        "nombre": "Thierry Henry",
        "nacionalidad": "Francia",
        "clubes": [
            "Arsenal",
            "Barcelona",
            "Juventus",
            "New York Red Bulls",
            "Monaco"
        ]
    },
    {
        "id": 114,
        "nombre": "Robert Pires",
        "nacionalidad": "Francia",
        "clubes": [
            "Metz",
            "Arsenal",
            "Villarreal",
            "Aston Villa",
            "Marseille"
        ]
    },
    {
        "id": 115,
        "nombre": "Patrick Vieira",
        "nacionalidad": "Francia",
        "clubes": [
            "Inter Milan",
            "Cannes",
            "Arsenal",
            "AC Milan",
            "Juventus",
            "Manchester City"
        ]
    },
    {
        "id": 116,
        "nombre": "David Trezeguet",
        "nacionalidad": "Francia",
        "clubes": [
            "River Plate",
            "Newell's Old Boys",
            "Juventus",
            "Hercules",
            "Monaco",
            "Platense"
        ]
    },
    {
        "id": 117,
        "nombre": "Nicolas Anelka",
        "nacionalidad": "Francia",
        "clubes": [
            "Fenerbahce",
            "PSG",
            "Arsenal",
            "Juventus",
            "Chelsea",
            "Liverpool",
            "West Brom",
            "Bolton",
            "Real Madrid",
            "Manchester City"
        ]
    },
    {
        "id": 118,
        "nombre": "Laurent Blanc",
        "nacionalidad": "Francia",
        "clubes": [
            "Auxerre",
            "Inter Milan",
            "Barcelona",
            "Saint-Etienne",
            "Manchester United",
            "Montpellier",
            "Nimes",
            "Marseille",
            "Napoli"
        ]
    },
    {
        "id": 119,
        "nombre": "Didier Deschamps",
        "nacionalidad": "Francia",
        "clubes": [
            "Nantes",
            "Juventus",
            "Bordeaux",
            "Chelsea",
            "Marseille",
            "Valencia"
        ]
    },
    {
        "id": 120,
        "nombre": "Lilian Thuram",
        "nacionalidad": "Francia",
        "clubes": [
            "Juventus",
            "Monaco",
            "Parma",
            "Barcelona"
        ]
    },
    {
        "id": 121,
        "nombre": "Marcel Desailly",
        "nacionalidad": "Francia",
        "clubes": [
            "Nantes",
            "Marseille",
            "Chelsea",
            "AC Milan"
        ]
    },
    {
        "id": 122,
        "nombre": "Bixente Lizarazu",
        "nacionalidad": "Francia",
        "clubes": [
            "Athletic Bilbao",
            "Bordeaux",
            "Bayern Munich",
            "Marseille"
        ]
    },
    {
        "id": 123,
        "nombre": "Zinedine Zidane",
        "nacionalidad": "Francia",
        "clubes": [
            "Real Madrid",
            "Bordeaux",
            "Cannes",
            "Juventus"
        ]
    },
    {
        "id": 124,
        "nombre": "Michel Platini",
        "nacionalidad": "Francia",
        "clubes": [
            "Nancy",
            "Juventus",
            "Saint-Etienne"
        ]
    },
    {
        "id": 125,
        "nombre": "Alphonse Areola",
        "nacionalidad": "Francia",
        "clubes": [
            "PSG",
            "Villarreal",
            "Bastia",
            "West Ham",
            "Lens",
            "Fulham",
            "Real Madrid"
        ]
    },
    {
        "id": 126,
        "nombre": "Samuel Umtiti",
        "nacionalidad": "Francia",
        "clubes": [
            "Lyon",
            "Lille",
            "Lecce",
            "Barcelona"
        ]
    },
    {
        "id": 127,
        "nombre": "Clement Lenglet",
        "nacionalidad": "Francia",
        "clubes": [
            "Nancy",
            "Barcelona",
            "Sevilla",
            "Tottenham",
            "Atletico Madrid",
            "Aston Villa"
        ]
    },
    {
        "id": 128,
        "nombre": "Corentin Tolisso",
        "nacionalidad": "Francia",
        "clubes": [
            "Lyon",
            "Bayern Munich"
        ]
    },
    {
        "id": 129,
        "nombre": "Lucas Digne",
        "nacionalidad": "Francia",
        "clubes": [
            "Everton",
            "PSG",
            "Barcelona",
            "AS Roma",
            "Aston Villa",
            "Lille"
        ]
    },
    {
        "id": 130,
        "nombre": "Wissam Ben Yedder",
        "nacionalidad": "Francia",
        "clubes": [
            "Toulouse",
            "Sevilla",
            "Monaco"
        ]
    },
    {
        "id": 131,
        "nombre": "Andres Iniesta",
        "nacionalidad": "España",
        "clubes": [
            "Vissel Kobe",
            "Barcelona",
            "Emirates Club"
        ]
    },
    {
        "id": 132,
        "nombre": "Xavi Hernandez",
        "nacionalidad": "España",
        "clubes": [
            "Al Sadd",
            "Barcelona"
        ]
    },
    {
        "id": 133,
        "nombre": "Sergio Busquets",
        "nacionalidad": "España",
        "clubes": [
            "Barcelona",
            "Inter Miami"
        ]
    },
    {
        "id": 134,
        "nombre": "Gerard Pique",
        "nacionalidad": "España",
        "clubes": [
            "Zaragoza",
            "Barcelona",
            "Manchester United"
        ]
    },
    {
        "id": 135,
        "nombre": "Sergio Ramos",
        "nacionalidad": "España",
        "clubes": [
            "Real Madrid",
            "PSG",
            "Sevilla"
        ]
    },
    {
        "id": 136,
        "nombre": "Iker Casillas",
        "nacionalidad": "España",
        "clubes": [
            "Porto",
            "Real Madrid"
        ]
    },
    {
        "id": 137,
        "nombre": "David Silva",
        "nacionalidad": "España",
        "clubes": [
            "Valencia",
            "Real Sociedad",
            "Celta Vigo",
            "Manchester City",
            "Eibar"
        ]
    },
    {
        "id": 138,
        "nombre": "Juan Mata",
        "nacionalidad": "España",
        "clubes": [
            "Galatasaray",
            "Vissel Kobe",
            "Chelsea",
            "Manchester United",
            "Valencia"
        ]
    },
    {
        "id": 139,
        "nombre": "Cesc Fabregas",
        "nacionalidad": "España",
        "clubes": [
            "Arsenal",
            "Barcelona",
            "Como",
            "Chelsea",
            "Monaco"
        ]
    },
    {
        "id": 140,
        "nombre": "Fernando Torres",
        "nacionalidad": "España",
        "clubes": [
            "AC Milan",
            "Chelsea",
            "Sagan Tosu",
            "Liverpool",
            "Atletico Madrid"
        ]
    },
    {
        "id": 141,
        "nombre": "David Villa",
        "nacionalidad": "España",
        "clubes": [
            "Sporting Gijon",
            "Zaragoza",
            "New York City",
            "Barcelona",
            "Vissel Kobe",
            "Atletico Madrid",
            "Valencia"
        ]
    },
    {
        "id": 142,
        "nombre": "Raul Gonzalez",
        "nacionalidad": "España",
        "clubes": [
            "Schalke 04",
            "Real Madrid",
            "Al Sadd",
            "New York Cosmos"
        ]
    },
    {
        "id": 143,
        "nombre": "Rodri Hernandez",
        "nacionalidad": "España",
        "clubes": [
            "Manchester City",
            "Atletico Madrid",
            "Villarreal"
        ]
    },
    {
        "id": 144,
        "nombre": "Dani Carvajal",
        "nacionalidad": "España",
        "clubes": [
            "Real Madrid",
            "Bayer Leverkusen"
        ]
    },
    {
        "id": 145,
        "nombre": "Jordi Alba",
        "nacionalidad": "España",
        "clubes": [
            "Inter Miami",
            "Gimnastic",
            "Barcelona",
            "Valencia"
        ]
    },
    {
        "id": 146,
        "nombre": "Cesar Azpilicueta",
        "nacionalidad": "España",
        "clubes": [
            "Marseille",
            "Osasuna",
            "Atletico Madrid",
            "Chelsea"
        ]
    },
    {
        "id": 147,
        "nombre": "Marcos Alonso",
        "nacionalidad": "España",
        "clubes": [
            "Sunderland",
            "Barcelona",
            "Chelsea",
            "Bolton",
            "Fiorentina",
            "Celta Vigo",
            "Real Madrid"
        ]
    },
    {
        "id": 148,
        "nombre": "Aymeric Laporte",
        "nacionalidad": "España",
        "clubes": [
            "Athletic Bilbao",
            "Al Nassr",
            "Manchester City"
        ]
    },
    {
        "id": 149,
        "nombre": "Robin Le Normand",
        "nacionalidad": "España",
        "clubes": [
            "Brest",
            "Real Sociedad",
            "Atletico Madrid"
        ]
    },
    {
        "id": 150,
        "nombre": "Alvaro Morata",
        "nacionalidad": "España",
        "clubes": [
            "Juventus",
            "AC Milan",
            "Chelsea",
            "Atletico Madrid",
            "Real Madrid"
        ]
    },
    {
        "id": 151,
        "nombre": "Iago Aspas",
        "nacionalidad": "España",
        "clubes": [
            "Liverpool",
            "Sevilla",
            "Celta Vigo"
        ]
    },
    {
        "id": 152,
        "nombre": "Thiago Alcantara",
        "nacionalidad": "España",
        "clubes": [
            "Liverpool",
            "Bayern Munich",
            "Barcelona"
        ]
    },
    {
        "id": 153,
        "nombre": "Koke Resurreccion",
        "nacionalidad": "España",
        "clubes": [
            "Atletico Madrid"
        ]
    },
    {
        "id": 154,
        "nombre": "Saul Ñiguez",
        "nacionalidad": "España",
        "clubes": [
            "Rayo Vallecano",
            "Atletico Madrid",
            "Chelsea",
            "Sevilla"
        ]
    },
    {
        "id": 155,
        "nombre": "Marcos Llorente",
        "nacionalidad": "España",
        "clubes": [
            "Real Madrid",
            "Alaves",
            "Atletico Madrid"
        ]
    },
    {
        "id": 156,
        "nombre": "Marco Asensio",
        "nacionalidad": "España",
        "clubes": [
            "Espanyol",
            "Real Madrid",
            "PSG",
            "Mallorca"
        ]
    },
    {
        "id": 157,
        "nombre": "Dani Olmo",
        "nacionalidad": "España",
        "clubes": [
            "Dinamo Zagreb",
            "Barcelona",
            "RB Leipzig"
        ]
    },
    {
        "id": 158,
        "nombre": "Marc Cucurella",
        "nacionalidad": "España",
        "clubes": [
            "Barcelona",
            "Chelsea",
            "Getafe",
            "Brighton",
            "Eibar"
        ]
    },
    {
        "id": 159,
        "nombre": "Mikel Oyarzabal",
        "nacionalidad": "España",
        "clubes": [
            "Real Sociedad"
        ]
    },
    {
        "id": 160,
        "nombre": "Alejandro Grimaldo",
        "nacionalidad": "España",
        "clubes": [
            "Bayer Leverkusen",
            "Benfica",
            "Barcelona"
        ]
    },
    {
        "id": 161,
        "nombre": "Nico Williams",
        "nacionalidad": "España",
        "clubes": [
            "Athletic Bilbao"
        ]
    },
    {
        "id": 162,
        "nombre": "Lamine Yamal",
        "nacionalidad": "España",
        "clubes": [
            "Barcelona"
        ]
    },
    {
        "id": 163,
        "nombre": "Pedri Gonzalez",
        "nacionalidad": "España",
        "clubes": [
            "Las Palmas",
            "Barcelona"
        ]
    },
    {
        "id": 164,
        "nombre": "Gavi Paez",
        "nacionalidad": "España",
        "clubes": [
            "Barcelona"
        ]
    },
    {
        "id": 165,
        "nombre": "Pau Torres",
        "nacionalidad": "España",
        "clubes": [
            "Aston Villa",
            "Malaga",
            "Villarreal"
        ]
    },
    {
        "id": 166,
        "nombre": "David de Gea",
        "nacionalidad": "España",
        "clubes": [
            "Fiorentina",
            "Atletico Madrid",
            "Manchester United"
        ]
    },
    {
        "id": 167,
        "nombre": "Kepa Arrizabalaga",
        "nacionalidad": "España",
        "clubes": [
            "Athletic Bilbao",
            "Real Madrid",
            "Chelsea"
        ]
    },
    {
        "id": 168,
        "nombre": "Unai Simon",
        "nacionalidad": "España",
        "clubes": [
            "Athletic Bilbao"
        ]
    },
    {
        "id": 169,
        "nombre": "Carles Puyol",
        "nacionalidad": "España",
        "clubes": [
            "Barcelona"
        ]
    },
    {
        "id": 170,
        "nombre": "Xabi Alonso",
        "nacionalidad": "España",
        "clubes": [
            "Real Sociedad",
            "Liverpool",
            "Bayern Munich",
            "Real Madrid",
            "Eibar"
        ]
    },
    {
        "id": 171,
        "nombre": "Victor Valdes",
        "nacionalidad": "España",
        "clubes": [
            "Manchester United",
            "Middlesbrough",
            "Standard Liege",
            "Barcelona"
        ]
    },
    {
        "id": 172,
        "nombre": "Jose Maria Guti",
        "nacionalidad": "España",
        "clubes": [
            "Real Madrid",
            "Besiktas"
        ]
    },
    {
        "id": 173,
        "nombre": "Michel Salgado",
        "nacionalidad": "España",
        "clubes": [
            "Blackburn Rovers",
            "Real Madrid",
            "Celta Vigo"
        ]
    },
    {
        "id": 174,
        "nombre": "Santi Cazorla",
        "nacionalidad": "España",
        "clubes": [
            "Arsenal",
            "Recreativo Huelva",
            "Villarreal",
            "Malaga",
            "Al Sadd",
            "Real Oviedo"
        ]
    },
    {
        "id": 175,
        "nombre": "Gerard Moreno",
        "nacionalidad": "España",
        "clubes": [
            "Espanyol",
            "Villarreal",
            "Mallorca"
        ]
    },
    {
        "id": 176,
        "nombre": "Pedro Rodriguez",
        "nacionalidad": "España",
        "clubes": [
            "AS Roma",
            "Lazio",
            "Chelsea",
            "Barcelona"
        ]
    },
    {
        "id": 177,
        "nombre": "Jesus Navas",
        "nacionalidad": "España",
        "clubes": [
            "Manchester City",
            "Sevilla"
        ]
    },
    {
        "id": 178,
        "nombre": "Pepe Reina",
        "nacionalidad": "España",
        "clubes": [
            "Barcelona",
            "AC Milan",
            "Lazio",
            "Villarreal",
            "Liverpool",
            "Bayern Munich",
            "Aston Villa",
            "Napoli"
        ]
    },
    {
        "id": 179,
        "nombre": "Inaki Williams",
        "nacionalidad": "España",
        "clubes": [
            "Athletic Bilbao"
        ]
    },
    {
        "id": 180,
        "nombre": "Cristiano Ronaldo",
        "nacionalidad": "Portugal",
        "clubes": [
            "Sporting CP",
            "Al Nassr",
            "Juventus",
            "Real Madrid",
            "Manchester United"
        ]
    },
    {
        "id": 181,
        "nombre": "Luis Figo",
        "nacionalidad": "Portugal",
        "clubes": [
            "Sporting CP",
            "Real Madrid",
            "Inter Milan",
            "Barcelona"
        ]
    },
    {
        "id": 182,
        "nombre": "Rui Costa",
        "nacionalidad": "Portugal",
        "clubes": [
            "Fiorentina",
            "Benfica",
            "AC Milan"
        ]
    },
    {
        "id": 183,
        "nombre": "Deco",
        "nacionalidad": "Portugal",
        "clubes": [
            "Barcelona",
            "Porto",
            "Chelsea",
            "Fluminense",
            "Alverca",
            "Salgueiros"
        ]
    },
    {
        "id": 184,
        "nombre": "Joao Moutinho",
        "nacionalidad": "Portugal",
        "clubes": [
            "Sporting CP",
            "Wolves",
            "Monaco",
            "Porto",
            "Braga"
        ]
    },
    {
        "id": 185,
        "nombre": "Pepe Kepler",
        "nacionalidad": "Portugal",
        "clubes": [
            "Porto",
            "Real Madrid",
            "Besiktas",
            "Maritimo"
        ]
    },
    {
        "id": 186,
        "nombre": "Bruno Fernandes",
        "nacionalidad": "Portugal",
        "clubes": [
            "Sporting CP",
            "Novara",
            "Sampdoria",
            "Udinese",
            "Manchester United"
        ]
    },
    {
        "id": 187,
        "nombre": "Bernardo Silva",
        "nacionalidad": "Portugal",
        "clubes": [
            "Manchester City",
            "Monaco",
            "Benfica"
        ]
    },
    {
        "id": 188,
        "nombre": "Ruben Dias",
        "nacionalidad": "Portugal",
        "clubes": [
            "Manchester City",
            "Benfica"
        ]
    },
    {
        "id": 189,
        "nombre": "Joao Cancelo",
        "nacionalidad": "Portugal",
        "clubes": [
            "Inter Milan",
            "Al Hilal",
            "Barcelona",
            "Juventus",
            "Bayern Munich",
            "Manchester City",
            "Benfica",
            "Valencia"
        ]
    },
    {
        "id": 190,
        "nombre": "Joao Felix",
        "nacionalidad": "Portugal",
        "clubes": [
            "Barcelona",
            "Atletico Madrid",
            "Benfica",
            "Chelsea"
        ]
    },
    {
        "id": 191,
        "nombre": "Diogo Jota",
        "nacionalidad": "Portugal",
        "clubes": [
            "Wolves",
            "Pacos de Ferreira",
            "Liverpool",
            "Atletico Madrid",
            "Porto"
        ]
    },
    {
        "id": 192,
        "nombre": "Rafael Leao",
        "nacionalidad": "Portugal",
        "clubes": [
            "Sporting CP",
            "AC Milan",
            "Lille"
        ]
    },
    {
        "id": 193,
        "nombre": "Gonçalo Ramos",
        "nacionalidad": "Portugal",
        "clubes": [
            "PSG",
            "Benfica"
        ]
    },
    {
        "id": 194,
        "nombre": "Vitinha Ferreira",
        "nacionalidad": "Portugal",
        "clubes": [
            "Porto",
            "PSG",
            "Wolves"
        ]
    },
    {
        "id": 195,
        "nombre": "Ruben Neves",
        "nacionalidad": "Portugal",
        "clubes": [
            "Porto",
            "Al Hilal",
            "Wolves"
        ]
    },
    {
        "id": 196,
        "nombre": "Otavio Monteiro",
        "nacionalidad": "Portugal",
        "clubes": [
            "Porto",
            "Al Nassr",
            "Internacional"
        ]
    },
    {
        "id": 197,
        "nombre": "Nani Cunha",
        "nacionalidad": "Portugal",
        "clubes": [
            "Sporting CP",
            "Fenerbahce",
            "Adana Demirspor",
            "Lazio",
            "Venezia",
            "Orlando City",
            "Manchester United",
            "Valencia"
        ]
    },
    {
        "id": 198,
        "nombre": "Ricardo Quaresma",
        "nacionalidad": "Portugal",
        "clubes": [
            "Sporting CP",
            "Kasimpasa",
            "Inter Milan",
            "Al Ahli",
            "Barcelona",
            "Chelsea",
            "Porto",
            "Besiktas",
            "Vitoria Guimaraes"
        ]
    },
    {
        "id": 199,
        "nombre": "Paulo Futre",
        "nacionalidad": "Portugal",
        "clubes": [
            "Sporting CP",
            "AC Milan",
            "West Ham",
            "Atletico Madrid",
            "Porto",
            "Marseille",
            "Benfica"
        ]
    },
    {
        "id": 200,
        "nombre": "Ricardo Carvalho",
        "nacionalidad": "Portugal",
        "clubes": [
            "Chelsea",
            "Shanghai SIPG",
            "Monaco",
            "Porto",
            "Real Madrid"
        ]
    },
    {
        "id": 201,
        "nombre": "Fabio Coentrao",
        "nacionalidad": "Portugal",
        "clubes": [
            "Zaragoza",
            "Sporting CP",
            "Monaco",
            "Rio Ave",
            "Real Madrid",
            "Benfica"
        ]
    },
    {
        "id": 202,
        "nombre": "Joao Palhinha",
        "nacionalidad": "Portugal",
        "clubes": [
            "Sporting CP",
            "Moreirense",
            "Bayern Munich",
            "Belenenses",
            "Fulham",
            "Braga"
        ]
    },
    {
        "id": 203,
        "nombre": "Matheus Nunes",
        "nacionalidad": "Portugal",
        "clubes": [
            "Sporting CP",
            "Wolves",
            "Estoril",
            "Manchester City",
            "Ericeirense"
        ]
    },
    {
        "id": 204,
        "nombre": "Nelson Semedo",
        "nacionalidad": "Portugal",
        "clubes": [
            "Wolves",
            "Benfica",
            "Barcelona"
        ]
    },
    {
        "id": 205,
        "nombre": "Diogo Dalot",
        "nacionalidad": "Portugal",
        "clubes": [
            "Porto",
            "AC Milan",
            "Manchester United"
        ]
    },
    {
        "id": 206,
        "nombre": "Raphael Guerreiro",
        "nacionalidad": "Portugal",
        "clubes": [
            "Borussia Dortmund",
            "Bayern Munich",
            "Lorient",
            "Caen"
        ]
    },
    {
        "id": 207,
        "nombre": "Danilo Pereira",
        "nacionalidad": "Portugal",
        "clubes": [
            "PSG",
            "Al Ittihad",
            "Parma",
            "Maritimo",
            "Roda JC",
            "Porto",
            "Aris"
        ]
    },
    {
        "id": 208,
        "nombre": "Rui Patricio",
        "nacionalidad": "Portugal",
        "clubes": [
            "Atalanta",
            "Sporting CP",
            "AS Roma",
            "Wolves"
        ]
    },
    {
        "id": 209,
        "nombre": "Jose Sa",
        "nacionalidad": "Portugal",
        "clubes": [
            "Porto",
            "Wolves",
            "Olympiacos",
            "Maritimo"
        ]
    },
    {
        "id": 210,
        "nombre": "Jose Fonte",
        "nacionalidad": "Portugal",
        "clubes": [
            "Southampton",
            "Setubal",
            "Dalian Yifang",
            "Crystal Palace",
            "West Ham",
            "Braga",
            "Lille",
            "Benfica"
        ]
    },
    {
        "id": 211,
        "nombre": "Andre Silva",
        "nacionalidad": "Portugal",
        "clubes": [
            "Real Sociedad",
            "AC Milan",
            "Sevilla",
            "RB Leipzig",
            "Eintracht Frankfurt",
            "Porto"
        ]
    },
    {
        "id": 212,
        "nombre": "Thomas Müller",
        "nacionalidad": "Alemania",
        "clubes": [
            "Bayern Munich"
        ]
    },
    {
        "id": 213,
        "nombre": "Toni Kroos",
        "nacionalidad": "Alemania",
        "clubes": [
            "Real Madrid",
            "Bayer Leverkusen",
            "Bayern Munich"
        ]
    },
    {
        "id": 214,
        "nombre": "Manuel Neuer",
        "nacionalidad": "Alemania",
        "clubes": [
            "Schalke 04",
            "Bayern Munich"
        ]
    },
    {
        "id": 215,
        "nombre": "Ilkay Gündogan",
        "nacionalidad": "Alemania",
        "clubes": [
            "Nuremberg",
            "Barcelona",
            "Borussia Dortmund",
            "Manchester City"
        ]
    },
    {
        "id": 216,
        "nombre": "Kai Havertz",
        "nacionalidad": "Alemania",
        "clubes": [
            "Bayer Leverkusen",
            "Arsenal",
            "Chelsea"
        ]
    },
    {
        "id": 217,
        "nombre": "Jamal Musiala",
        "nacionalidad": "Alemania",
        "clubes": [
            "Bayern Munich"
        ]
    },
    {
        "id": 218,
        "nombre": "Florian Wirtz",
        "nacionalidad": "Alemania",
        "clubes": [
            "Bayer Leverkusen"
        ]
    },
    {
        "id": 219,
        "nombre": "Joshua Kimmich",
        "nacionalidad": "Alemania",
        "clubes": [
            "Bayern Munich",
            "RB Leipzig"
        ]
    },
    {
        "id": 220,
        "nombre": "Leon Goretzka",
        "nacionalidad": "Alemania",
        "clubes": [
            "Schalke 04",
            "Bayern Munich"
        ]
    },
    {
        "id": 221,
        "nombre": "Leroy Sane",
        "nacionalidad": "Alemania",
        "clubes": [
            "Schalke 04",
            "Manchester City",
            "Bayern Munich"
        ]
    },
    {
        "id": 222,
        "nombre": "Serge Gnabry",
        "nacionalidad": "Alemania",
        "clubes": [
            "Arsenal",
            "West Brom",
            "Bayern Munich",
            "Hoffenheim",
            "Werder Bremen"
        ]
    },
    {
        "id": 223,
        "nombre": "Antonio Rüdiger",
        "nacionalidad": "Alemania",
        "clubes": [
            "Stuttgart",
            "AS Roma",
            "Chelsea",
            "Real Madrid"
        ]
    },
    {
        "id": 224,
        "nombre": "Mats Hummels",
        "nacionalidad": "Alemania",
        "clubes": [
            "AS Roma",
            "Bayern Munich",
            "Borussia Dortmund"
        ]
    },
    {
        "id": 225,
        "nombre": "Niklas Süle",
        "nacionalidad": "Alemania",
        "clubes": [
            "Bayern Munich",
            "Hoffenheim",
            "Borussia Dortmund"
        ]
    },
    {
        "id": 226,
        "nombre": "Bastian Schweinsteiger",
        "nacionalidad": "Alemania",
        "clubes": [
            "Chicago Fire",
            "Manchester United",
            "Bayern Munich"
        ]
    },
    {
        "id": 227,
        "nombre": "Philipp Lahm",
        "nacionalidad": "Alemania",
        "clubes": [
            "Stuttgart",
            "Bayern Munich"
        ]
    },
    {
        "id": 228,
        "nombre": "Miroslav Klose",
        "nacionalidad": "Alemania",
        "clubes": [
            "Werder Bremen",
            "Lazio",
            "Bayern Munich",
            "Kaiserslautern"
        ]
    },
    {
        "id": 229,
        "nombre": "Lukas Podolski",
        "nacionalidad": "Alemania",
        "clubes": [
            "Inter Milan",
            "Arsenal",
            "Galatasaray",
            "Vissel Kobe",
            "Cologne",
            "Bayern Munich"
        ]
    },
    {
        "id": 230,
        "nombre": "Mesut Özil",
        "nacionalidad": "Alemania",
        "clubes": [
            "Fenerbahce",
            "Arsenal",
            "Schalke 04",
            "Real Madrid",
            "Werder Bremen",
            "Basaksehir"
        ]
    },
    {
        "id": 231,
        "nombre": "Sami Khedira",
        "nacionalidad": "Alemania",
        "clubes": [
            "Stuttgart",
            "Real Madrid",
            "Hertha BSC",
            "Juventus"
        ]
    },
    {
        "id": 232,
        "nombre": "Mario Götze",
        "nacionalidad": "Alemania",
        "clubes": [
            "Eintracht Frankfurt",
            "PSV",
            "Bayern Munich",
            "Borussia Dortmund"
        ]
    },
    {
        "id": 233,
        "nombre": "Marc-Andre ter Stegen",
        "nacionalidad": "Alemania",
        "clubes": [
            "Borussia Mönchengladbach",
            "Barcelona"
        ]
    },
    {
        "id": 234,
        "nombre": "Julian Brandt",
        "nacionalidad": "Alemania",
        "clubes": [
            "Bayer Leverkusen",
            "Wolfsburg",
            "Borussia Dortmund"
        ]
    },
    {
        "id": 235,
        "nombre": "Nico Schlotterbeck",
        "nacionalidad": "Alemania",
        "clubes": [
            "Freiburg",
            "Union Berlin",
            "Borussia Dortmund"
        ]
    },
    {
        "id": 236,
        "nombre": "Emre Can",
        "nacionalidad": "Alemania",
        "clubes": [
            "Juventus",
            "Liverpool",
            "Bayer Leverkusen",
            "Borussia Dortmund",
            "Bayern Munich"
        ]
    },
    {
        "id": 237,
        "nombre": "Timo Werner",
        "nacionalidad": "Alemania",
        "clubes": [
            "Stuttgart",
            "Tottenham",
            "Chelsea",
            "RB Leipzig"
        ]
    },
    {
        "id": 238,
        "nombre": "Marco Reus",
        "nacionalidad": "Alemania",
        "clubes": [
            "Borussia Mönchengladbach",
            "LA Galaxy",
            "Borussia Dortmund"
        ]
    },
    {
        "id": 239,
        "nombre": "Michael Ballack",
        "nacionalidad": "Alemania",
        "clubes": [
            "Bayer Leverkusen",
            "Chelsea",
            "Bayern Munich",
            "Kaiserslautern"
        ]
    },
    {
        "id": 240,
        "nombre": "Jerome Boateng",
        "nacionalidad": "Alemania",
        "clubes": [
            "Salernitana",
            "Hertha BSC",
            "Lyon",
            "Bayern Munich",
            "Manchester City",
            "Hamburg"
        ]
    },
    {
        "id": 241,
        "nombre": "David Raum",
        "nacionalidad": "Alemania",
        "clubes": [
            "RB Leipzig",
            "Hoffenheim",
            "Greuther Fürth"
        ]
    },
    {
        "id": 242,
        "nombre": "Harry Kane",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Tottenham",
            "Leicester City",
            "Millwall",
            "Bayern Munich",
            "Leyton Orient",
            "Norwich City"
        ]
    },
    {
        "id": 243,
        "nombre": "Jude Bellingham",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Real Madrid",
            "Borussia Dortmund",
            "Birmingham City"
        ]
    },
    {
        "id": 244,
        "nombre": "Raheem Sterling",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Liverpool",
            "Manchester City",
            "Arsenal",
            "Chelsea"
        ]
    },
    {
        "id": 245,
        "nombre": "Bukayo Saka",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Arsenal"
        ]
    },
    {
        "id": 246,
        "nombre": "Phil Foden",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Manchester City"
        ]
    },
    {
        "id": 247,
        "nombre": "Declan Rice",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "West Ham",
            "Arsenal"
        ]
    },
    {
        "id": 248,
        "nombre": "Jack Grealish",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Aston Villa",
            "Manchester City"
        ]
    },
    {
        "id": 249,
        "nombre": "Marcus Rashford",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Manchester United"
        ]
    },
    {
        "id": 250,
        "nombre": "Mason Mount",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Vitesse",
            "Chelsea",
            "Manchester United",
            "Derby County"
        ]
    },
    {
        "id": 251,
        "nombre": "Jordan Henderson",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Sunderland",
            "Coventry City",
            "Ajax",
            "Liverpool",
            "Al Ettifaq"
        ]
    },
    {
        "id": 252,
        "nombre": "Kyle Walker",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Sheffield United",
            "Manchester City",
            "Tottenham",
            "Aston Villa"
        ]
    },
    {
        "id": 253,
        "nombre": "John Stones",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Everton",
            "Manchester City",
            "Barnsley"
        ]
    },
    {
        "id": 254,
        "nombre": "Harry Maguire",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Sheffield United",
            "Hull City",
            "Leicester City",
            "Wigan",
            "Manchester United"
        ]
    },
    {
        "id": 255,
        "nombre": "Kieran Trippier",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Newcastle",
            "Atletico Madrid",
            "Tottenham",
            "Burnley"
        ]
    },
    {
        "id": 256,
        "nombre": "Trent Alexander-Arnold",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Liverpool"
        ]
    },
    {
        "id": 257,
        "nombre": "Luke Shaw",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Southampton",
            "Manchester United"
        ]
    },
    {
        "id": 258,
        "nombre": "Reece James",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Chelsea",
            "Wigan"
        ]
    },
    {
        "id": 259,
        "nombre": "Ben Chilwell",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Huddersfield Town",
            "Chelsea",
            "Leicester City"
        ]
    },
    {
        "id": 260,
        "nombre": "Jadon Sancho",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Manchester United",
            "Chelsea",
            "Borussia Dortmund"
        ]
    },
    {
        "id": 261,
        "nombre": "Wayne Rooney",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Everton",
            "DC United",
            "Manchester United",
            "Derby County"
        ]
    },
    {
        "id": 262,
        "nombre": "Steven Gerrard",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Liverpool",
            "LA Galaxy"
        ]
    },
    {
        "id": 263,
        "nombre": "Frank Lampard",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "New York City",
            "West Ham",
            "Chelsea",
            "Manchester City"
        ]
    },
    {
        "id": 264,
        "nombre": "David Beckham",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "PSG",
            "AC Milan",
            "LA Galaxy",
            "Real Madrid",
            "Manchester United"
        ]
    },
    {
        "id": 265,
        "nombre": "Paul Scholes",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Manchester United"
        ]
    },
    {
        "id": 266,
        "nombre": "Rio Ferdinand",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Leeds United",
            "West Ham",
            "QPR",
            "Manchester United"
        ]
    },
    {
        "id": 267,
        "nombre": "John Terry",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Aston Villa",
            "Chelsea",
            "Nottingham Forest"
        ]
    },
    {
        "id": 268,
        "nombre": "Ashley Cole",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Arsenal",
            "LA Galaxy",
            "Chelsea",
            "AS Roma",
            "Derby County"
        ]
    },
    {
        "id": 269,
        "nombre": "Gary Neville",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Manchester United"
        ]
    },
    {
        "id": 270,
        "nombre": "Jamie Carragher",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Liverpool"
        ]
    },
    {
        "id": 271,
        "nombre": "Michael Owen",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Liverpool",
            "Real Madrid",
            "Newcastle",
            "Manchester United",
            "Stoke City"
        ]
    },
    {
        "id": 272,
        "nombre": "Alan Shearer",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Blackburn Rovers",
            "Southampton",
            "Newcastle"
        ]
    },
    {
        "id": 273,
        "nombre": "Leonardo Bonucci",
        "nacionalidad": "Italia",
        "clubes": [
            "Union Berlin",
            "Fenerbahce",
            "Inter Milan",
            "Juventus",
            "AC Milan",
            "Bari"
        ]
    },
    {
        "id": 274,
        "nombre": "Giorgio Chiellini",
        "nacionalidad": "Italia",
        "clubes": [
            "Fiorentina",
            "Livorno",
            "Juventus",
            "LAFC"
        ]
    },
    {
        "id": 275,
        "nombre": "Marco Verratti",
        "nacionalidad": "Italia",
        "clubes": [
            "PSG",
            "Pescara",
            "Al Arabi"
        ]
    },
    {
        "id": 276,
        "nombre": "Jorginho Frello",
        "nacionalidad": "Italia",
        "clubes": [
            "Arsenal",
            "Chelsea",
            "Napoli",
            "Verona"
        ]
    },
    {
        "id": 277,
        "nombre": "Gianluigi Buffon",
        "nacionalidad": "Italia",
        "clubes": [
            "Juventus",
            "PSG",
            "Parma"
        ]
    },
    {
        "id": 278,
        "nombre": "Gianluigi Donnarumma",
        "nacionalidad": "Italia",
        "clubes": [
            "AC Milan",
            "PSG"
        ]
    },
    {
        "id": 279,
        "nombre": "Ciro Immobile",
        "nacionalidad": "Italia",
        "clubes": [
            "Torino",
            "Juventus",
            "Sevilla",
            "Lazio",
            "Borussia Dortmund",
            "Genoa",
            "Besiktas"
        ]
    },
    {
        "id": 280,
        "nombre": "Lorenzo Insigne",
        "nacionalidad": "Italia",
        "clubes": [
            "Pescara",
            "Napoli",
            "Toronto FC"
        ]
    },
    {
        "id": 281,
        "nombre": "Federico Chiesa",
        "nacionalidad": "Italia",
        "clubes": [
            "Liverpool",
            "Fiorentina",
            "Juventus"
        ]
    },
    {
        "id": 282,
        "nombre": "Nicolo Barella",
        "nacionalidad": "Italia",
        "clubes": [
            "Cagliari",
            "Inter Milan"
        ]
    },
    {
        "id": 283,
        "nombre": "Alessandro Bastoni",
        "nacionalidad": "Italia",
        "clubes": [
            "Inter Milan",
            "Atalanta",
            "Parma"
        ]
    },
    {
        "id": 284,
        "nombre": "Andrea Pirlo",
        "nacionalidad": "Italia",
        "clubes": [
            "Inter Milan",
            "New York City",
            "AC Milan",
            "Juventus",
            "Brescia"
        ]
    },
    {
        "id": 285,
        "nombre": "Francesco Totti",
        "nacionalidad": "Italia",
        "clubes": [
            "AS Roma"
        ]
    },
    {
        "id": 286,
        "nombre": "Alessandro Del Piero",
        "nacionalidad": "Italia",
        "clubes": [
            "Sydney FC",
            "Juventus",
            "Delhi Dynamos",
            "Padova"
        ]
    },
    {
        "id": 287,
        "nombre": "Roberto Baggio",
        "nacionalidad": "Italia",
        "clubes": [
            "Inter Milan",
            "Juventus",
            "AC Milan",
            "Brescia",
            "Fiorentina",
            "Bologna"
        ]
    },
    {
        "id": 288,
        "nombre": "Fabio Cannavaro",
        "nacionalidad": "Italia",
        "clubes": [
            "Inter Milan",
            "Parma",
            "Al Ahli",
            "Juventus",
            "Real Madrid",
            "Napoli"
        ]
    },
    {
        "id": 289,
        "nombre": "Paolo Maldini",
        "nacionalidad": "Italia",
        "clubes": [
            "AC Milan"
        ]
    },
    {
        "id": 290,
        "nombre": "Gennaro Gattuso",
        "nacionalidad": "Italia",
        "clubes": [
            "Sion",
            "Perugia",
            "Rangers",
            "AC Milan"
        ]
    },
    {
        "id": 291,
        "nombre": "Mario Balotelli",
        "nacionalidad": "Italia",
        "clubes": [
            "Sion",
            "Inter Milan",
            "Adana Demirspor",
            "Genoa",
            "Monza",
            "AC Milan",
            "Nice",
            "Brescia",
            "Liverpool",
            "Marseille",
            "Manchester City"
        ]
    },
    {
        "id": 292,
        "nombre": "Domenico Berardi",
        "nacionalidad": "Italia",
        "clubes": [
            "Sassuolo"
        ]
    },
    {
        "id": 293,
        "nombre": "Matteo Darmian",
        "nacionalidad": "Italia",
        "clubes": [
            "Inter Milan",
            "Parma",
            "Torino",
            "AC Milan",
            "Manchester United"
        ]
    },
    {
        "id": 294,
        "nombre": "Stephan El Shaarawy",
        "nacionalidad": "Italia",
        "clubes": [
            "Shanghai Shenhua",
            "AC Milan",
            "Padova",
            "AS Roma",
            "Monaco",
            "Genoa"
        ]
    },
    {
        "id": 295,
        "nombre": "Virgil van Dijk",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Liverpool",
            "Southampton",
            "Groningen",
            "Celtic"
        ]
    },
    {
        "id": 296,
        "nombre": "Matthijs de Ligt",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Ajax",
            "Manchester United",
            "Bayern Munich",
            "Juventus"
        ]
    },
    {
        "id": 297,
        "nombre": "Frenkie de Jong",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Ajax",
            "Willem II",
            "Barcelona"
        ]
    },
    {
        "id": 298,
        "nombre": "Memphis Depay",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Barcelona",
            "Lyon",
            "Corinthians",
            "Atletico Madrid",
            "PSV",
            "Manchester United"
        ]
    },
    {
        "id": 299,
        "nombre": "Georginio Wijnaldum",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "PSG",
            "Liverpool",
            "AS Roma",
            "Al Ettifaq",
            "PSV",
            "Newcastle",
            "Feyenoord"
        ]
    },
    {
        "id": 300,
        "nombre": "Daley Blind",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Girona",
            "Ajax",
            "Bayern Munich",
            "Manchester United"
        ]
    },
    {
        "id": 301,
        "nombre": "Robin van Persie",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Fenerbahce",
            "Arsenal",
            "Manchester United",
            "Feyenoord"
        ]
    },
    {
        "id": 302,
        "nombre": "Arjen Robben",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Chelsea",
            "Groningen",
            "Bayern Munich",
            "Real Madrid",
            "PSV"
        ]
    },
    {
        "id": 303,
        "nombre": "Wesley Sneijder",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Inter Milan",
            "Ajax",
            "Galatasaray",
            "Nice",
            "Real Madrid"
        ]
    },
    {
        "id": 304,
        "nombre": "Ruud van Nistelrooy",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Heerenveen",
            "Manchester United",
            "Malaga",
            "Real Madrid",
            "PSV",
            "Hamburg"
        ]
    },
    {
        "id": 305,
        "nombre": "Edwin van der Sar",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Fulham",
            "Ajax",
            "Manchester United",
            "Juventus"
        ]
    },
    {
        "id": 306,
        "nombre": "Clarence Seedorf",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Inter Milan",
            "Sampdoria",
            "Ajax",
            "AC Milan",
            "Botafogo",
            "Real Madrid"
        ]
    },
    {
        "id": 307,
        "nombre": "Patrick Kluivert",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Barcelona",
            "Ajax",
            "AC Milan",
            "Lille",
            "PSV",
            "Newcastle",
            "Valencia"
        ]
    },
    {
        "id": 308,
        "nombre": "Edgar Davids",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Inter Milan",
            "Barcelona",
            "Ajax",
            "AC Milan",
            "Juventus",
            "Tottenham"
        ]
    },
    {
        "id": 309,
        "nombre": "Mark van Bommel",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Barcelona",
            "AC Milan",
            "Fortuna Sittard",
            "Bayern Munich",
            "PSV"
        ]
    },
    {
        "id": 310,
        "nombre": "Rafael van der Vaart",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Ajax",
            "Tottenham",
            "Real Betis",
            "Real Madrid",
            "Hamburg"
        ]
    },
    {
        "id": 311,
        "nombre": "Nathan Ake",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Manchester City",
            "Bournemouth",
            "Chelsea"
        ]
    },
    {
        "id": 312,
        "nombre": "Cody Gakpo",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Liverpool",
            "PSV"
        ]
    },
    {
        "id": 313,
        "nombre": "Denzel Dumfries",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Heerenveen",
            "Inter Milan",
            "PSV",
            "Sparta Rotterdam"
        ]
    },
    {
        "id": 314,
        "nombre": "Xavi Simons",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "PSG",
            "PSV",
            "RB Leipzig"
        ]
    },
    {
        "id": 315,
        "nombre": "Ronald Koeman",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Barcelona",
            "Ajax",
            "Groningen",
            "PSV",
            "Feyenoord"
        ]
    },
    {
        "id": 316,
        "nombre": "Dennis Bergkamp",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Ajax",
            "Inter Milan",
            "Arsenal"
        ]
    },
    {
        "id": 317,
        "nombre": "Ruud Gullit",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Sampdoria",
            "AC Milan",
            "Chelsea",
            "PSV",
            "Feyenoord"
        ]
    },
    {
        "id": 318,
        "nombre": "Johan Cruyff",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Ajax",
            "Levante",
            "Barcelona",
            "Feyenoord"
        ]
    },
    {
        "id": 319,
        "nombre": "Luis Suarez",
        "nacionalidad": "Uruguay",
        "clubes": [
            "Barcelona",
            "Ajax",
            "Inter Miami",
            "Nacional",
            "Gremio",
            "Liverpool",
            "Groningen",
            "Atletico Madrid"
        ]
    },
    {
        "id": 320,
        "nombre": "Edinson Cavani",
        "nacionalidad": "Uruguay",
        "clubes": [
            "PSG",
            "Palermo",
            "Danubio",
            "Boca Juniors",
            "Napoli",
            "Manchester United",
            "Valencia"
        ]
    },
    {
        "id": 321,
        "nombre": "Diego Forlan",
        "nacionalidad": "Uruguay",
        "clubes": [
            "Inter Milan",
            "Peñarol",
            "Villarreal",
            "Atletico Madrid",
            "Independiente",
            "Manchester United",
            "Internacional"
        ]
    },
    {
        "id": 322,
        "nombre": "Federico Valverde",
        "nacionalidad": "Uruguay",
        "clubes": [
            "Deportivo La Coruña",
            "Real Madrid",
            "Peñarol"
        ]
    },
    {
        "id": 323,
        "nombre": "Darwin Nuñez",
        "nacionalidad": "Uruguay",
        "clubes": [
            "Liverpool",
            "Peñarol",
            "Benfica",
            "Almeria"
        ]
    },
    {
        "id": 324,
        "nombre": "Ronald Araujo",
        "nacionalidad": "Uruguay",
        "clubes": [
            "Boston River",
            "Barcelona"
        ]
    },
    {
        "id": 325,
        "nombre": "Jose Maria Gimenez",
        "nacionalidad": "Uruguay",
        "clubes": [
            "Danubio",
            "Atletico Madrid"
        ]
    },
    {
        "id": 326,
        "nombre": "Diego Godin",
        "nacionalidad": "Uruguay",
        "clubes": [
            "Cerro",
            "Inter Milan",
            "Villarreal",
            "Nacional",
            "Cagliari",
            "Atletico Mineiro",
            "Atletico Madrid",
            "Velez Sarsfield"
        ]
    },
    {
        "id": 327,
        "nombre": "Rodrigo Bentancur",
        "nacionalidad": "Uruguay",
        "clubes": [
            "Juventus",
            "Tottenham",
            "Boca Juniors"
        ]
    },
    {
        "id": 328,
        "nombre": "Lucas Torreira",
        "nacionalidad": "Uruguay",
        "clubes": [
            "Arsenal",
            "Pescara",
            "Sampdoria",
            "Galatasaray",
            "Atletico Madrid",
            "Fiorentina"
        ]
    },
    {
        "id": 329,
        "nombre": "Manuel Ugarte",
        "nacionalidad": "Uruguay",
        "clubes": [
            "Sporting CP",
            "Famalicão",
            "PSG",
            "Fenix",
            "Manchester United"
        ]
    },
    {
        "id": 330,
        "nombre": "James Rodriguez",
        "nacionalidad": "Colombia",
        "clubes": [
            "Everton",
            "Envigado",
            "Sao Paulo",
            "Rayo Vallecano",
            "Monaco",
            "Olympiacos",
            "Bayern Munich",
            "Porto",
            "Real Madrid",
            "Al Rayyan",
            "Banfield"
        ]
    },
    {
        "id": 331,
        "nombre": "Radamel Falcao",
        "nacionalidad": "Colombia",
        "clubes": [
            "River Plate",
            "Galatasaray",
            "Chelsea",
            "Rayo Vallecano",
            "Atletico Madrid",
            "Monaco",
            "Porto",
            "Manchester United"
        ]
    },
    {
        "id": 332,
        "nombre": "Luis Diaz",
        "nacionalidad": "Colombia",
        "clubes": [
            "Porto",
            "Liverpool",
            "Junior"
        ]
    },
    {
        "id": 333,
        "nombre": "Juan Guillermo Cuadrado",
        "nacionalidad": "Colombia",
        "clubes": [
            "Inter Milan",
            "Juventus",
            "Chelsea",
            "Udinese",
            "Independiente Medellin",
            "Fiorentina",
            "Lecce"
        ]
    },
    {
        "id": 334,
        "nombre": "Duvan Zapata",
        "nacionalidad": "Colombia",
        "clubes": [
            "Sampdoria",
            "Torino",
            "Udinese",
            "America de Cali",
            "Estudiantes",
            "Atalanta",
            "Napoli"
        ]
    },
    {
        "id": 335,
        "nombre": "Luis Muriel",
        "nacionalidad": "Colombia",
        "clubes": [
            "Deportivo Cali",
            "Sampdoria",
            "Sevilla",
            "Granada",
            "Udinese",
            "Atalanta",
            "Fiorentina",
            "Orlando City",
            "Lecce"
        ]
    },
    {
        "id": 336,
        "nombre": "Davinson Sanchez",
        "nacionalidad": "Colombia",
        "clubes": [
            "Atletico Nacional",
            "Ajax",
            "Galatasaray",
            "Tottenham"
        ]
    },
    {
        "id": 337,
        "nombre": "Yerry Mina",
        "nacionalidad": "Colombia",
        "clubes": [
            "Everton",
            "Barcelona",
            "Deportivo Pasto",
            "Cagliari",
            "Fiorentina",
            "Santa Fe",
            "Palmeiras"
        ]
    },
    {
        "id": 338,
        "nombre": "Jefferson Lerma",
        "nacionalidad": "Colombia",
        "clubes": [
            "Crystal Palace",
            "Bournemouth",
            "Levante",
            "Atletico Huila"
        ]
    },
    {
        "id": 339,
        "nombre": "David Ospina",
        "nacionalidad": "Colombia",
        "clubes": [
            "Arsenal",
            "Al Nassr",
            "Nice",
            "Atletico Nacional",
            "Napoli"
        ]
    },
    {
        "id": 340,
        "nombre": "Kevin De Bruyne",
        "nacionalidad": "Bélgica",
        "clubes": [
            "Genk",
            "Chelsea",
            "Wolfsburg",
            "Manchester City",
            "Werder Bremen"
        ]
    },
    {
        "id": 341,
        "nombre": "Eden Hazard",
        "nacionalidad": "Bélgica",
        "clubes": [
            "Real Madrid",
            "Lille",
            "Chelsea"
        ]
    },
    {
        "id": 342,
        "nombre": "Romelu Lukaku",
        "nacionalidad": "Bélgica",
        "clubes": [
            "Everton",
            "Inter Milan",
            "Chelsea",
            "Anderlecht",
            "AS Roma",
            "West Brom",
            "Napoli",
            "Manchester United"
        ]
    },
    {
        "id": 343,
        "nombre": "Dries Mertens",
        "nacionalidad": "Bélgica",
        "clubes": [
            "Napoli",
            "Galatasaray",
            "PSV",
            "Utrecht"
        ]
    },
    {
        "id": 344,
        "nombre": "Yannick Carrasco",
        "nacionalidad": "Bélgica",
        "clubes": [
            "Al Shabab",
            "Dalian Professional",
            "Monaco",
            "Atletico Madrid"
        ]
    },
    {
        "id": 345,
        "nombre": "Toby Alderweireld",
        "nacionalidad": "Bélgica",
        "clubes": [
            "Southampton",
            "Ajax",
            "Al-Duhail",
            "Tottenham",
            "Antwerp",
            "Atletico Madrid"
        ]
    },
    {
        "id": 346,
        "nombre": "Jan Vertonghen",
        "nacionalidad": "Bélgica",
        "clubes": [
            "Ajax",
            "Tottenham",
            "Anderlecht",
            "Benfica"
        ]
    },
    {
        "id": 347,
        "nombre": "Vincent Kompany",
        "nacionalidad": "Bélgica",
        "clubes": [
            "Hamburg",
            "Manchester City",
            "Anderlecht"
        ]
    },
    {
        "id": 348,
        "nombre": "Axel Witsel",
        "nacionalidad": "Bélgica",
        "clubes": [
            "Tianjin Quanjian",
            "Atletico Madrid",
            "Standard Liege",
            "Borussia Dortmund",
            "Zenit",
            "Benfica"
        ]
    },
    {
        "id": 349,
        "nombre": "Thomas Meunier",
        "nacionalidad": "Bélgica",
        "clubes": [
            "Trabzonspor",
            "PSG",
            "Borussia Dortmund",
            "Lille",
            "Club Brugge"
        ]
    },
    {
        "id": 350,
        "nombre": "Youri Tielemans",
        "nacionalidad": "Bélgica",
        "clubes": [
            "Leicester City",
            "Monaco",
            "Anderlecht",
            "Aston Villa"
        ]
    },
    {
        "id": 351,
        "nombre": "Alexis Sanchez",
        "nacionalidad": "Chile",
        "clubes": [
            "Inter Milan",
            "River Plate",
            "Barcelona",
            "Arsenal",
            "Colo-Colo",
            "Cobreloa",
            "Udinese",
            "Marseille",
            "Manchester United"
        ]
    },
    {
        "id": 352,
        "nombre": "Arturo Vidal",
        "nacionalidad": "Chile",
        "clubes": [
            "Inter Milan",
            "Barcelona",
            "Colo-Colo",
            "Juventus",
            "Bayer Leverkusen",
            "Bayern Munich",
            "Flamengo",
            "Athletico Paranaense"
        ]
    },
    {
        "id": 353,
        "nombre": "Claudio Bravo",
        "nacionalidad": "Chile",
        "clubes": [
            "Barcelona",
            "Real Sociedad",
            "Colo-Colo",
            "Real Betis",
            "Manchester City"
        ]
    },
    {
        "id": 354,
        "nombre": "Gary Medel",
        "nacionalidad": "Chile",
        "clubes": [
            "Inter Milan",
            "Sevilla",
            "Bologna",
            "Universidad Catolica",
            "Vasco da Gama",
            "Boca Juniors",
            "Besiktas",
            "Cardiff City"
        ]
    },
    {
        "id": 355,
        "nombre": "Eduardo Vargas",
        "nacionalidad": "Chile",
        "clubes": [
            "Universidad de Chile",
            "QPR",
            "Tigres UANL",
            "Atletico Mineiro",
            "Gremio",
            "Cobreloa",
            "Hoffenheim",
            "Napoli",
            "Valencia"
        ]
    },
    {
        "id": 356,
        "nombre": "Mauricio Isla",
        "nacionalidad": "Chile",
        "clubes": [
            "Fenerbahce",
            "QPR",
            "Colo-Colo",
            "Juventus",
            "Universidad Catolica",
            "Cagliari",
            "Udinese",
            "Independiente",
            "Marseille",
            "Flamengo"
        ]
    },
    {
        "id": 357,
        "nombre": "Charles Aranguiz",
        "nacionalidad": "Chile",
        "clubes": [
            "Universidad de Chile",
            "Colo-Colo",
            "Cobreloa",
            "Bayer Leverkusen",
            "Internacional"
        ]
    },
    {
        "id": 358,
        "nombre": "Marcelo Salas",
        "nacionalidad": "Chile",
        "clubes": [
            "Juventus",
            "Lazio",
            "Universidad de Chile",
            "River Plate"
        ]
    },
    {
        "id": 359,
        "nombre": "Ivan Zamorano",
        "nacionalidad": "Chile",
        "clubes": [
            "St. Gallen",
            "Inter Milan",
            "Colo-Colo",
            "Club America",
            "Sevilla",
            "Cobresal",
            "Real Madrid"
        ]
    },
    {
        "id": 360,
        "nombre": "Luka Modric",
        "nacionalidad": "Croacia",
        "clubes": [
            "Real Madrid",
            "Dinamo Zagreb",
            "Tottenham"
        ]
    },
    {
        "id": 361,
        "nombre": "Ivan Rakitic",
        "nacionalidad": "Croacia",
        "clubes": [
            "Barcelona",
            "Schalke 04",
            "Al Shabab",
            "Hajduk Split",
            "Basel",
            "Sevilla"
        ]
    },
    {
        "id": 362,
        "nombre": "Ivan Perisic",
        "nacionalidad": "Croacia",
        "clubes": [
            "Inter Milan",
            "Hajduk Split",
            "Tottenham",
            "Wolfsburg",
            "Bayern Munich",
            "Borussia Dortmund",
            "PSV",
            "Club Brugge"
        ]
    },
    {
        "id": 363,
        "nombre": "Mateo Kovacic",
        "nacionalidad": "Croacia",
        "clubes": [
            "Dinamo Zagreb",
            "Inter Milan",
            "Chelsea",
            "Real Madrid",
            "Manchester City"
        ]
    },
    {
        "id": 364,
        "nombre": "Marcelo Brozovic",
        "nacionalidad": "Croacia",
        "clubes": [
            "Hrvatski Dragovoljac",
            "Inter Milan",
            "Dinamo Zagreb",
            "Al Nassr",
            "Lokomotiva"
        ]
    },
    {
        "id": 365,
        "nombre": "Mario Mandzukic",
        "nacionalidad": "Croacia",
        "clubes": [
            "Dinamo Zagreb",
            "Juventus",
            "AC Milan",
            "Al-Duhail",
            "Wolfsburg",
            "Atletico Madrid",
            "Bayern Munich"
        ]
    },
    {
        "id": 366,
        "nombre": "Dejan Lovren",
        "nacionalidad": "Croacia",
        "clubes": [
            "Southampton",
            "Dinamo Zagreb",
            "PAOK",
            "Lyon",
            "Liverpool",
            "Zenit"
        ]
    },
    {
        "id": 367,
        "nombre": "Joško Gvardiol",
        "nacionalidad": "Croacia",
        "clubes": [
            "Dinamo Zagreb",
            "RB Leipzig",
            "Manchester City"
        ]
    },
    {
        "id": 368,
        "nombre": "Andrej Kramaric",
        "nacionalidad": "Croacia",
        "clubes": [
            "Rijeka",
            "Hoffenheim",
            "Dinamo Zagreb",
            "Leicester City"
        ]
    },
    {
        "id": 369,
        "nombre": "Ante Rebic",
        "nacionalidad": "Croacia",
        "clubes": [
            "AC Milan",
            "Split",
            "RB Leipzig",
            "Eintracht Frankfurt",
            "Fiorentina",
            "Besiktas",
            "Verona"
        ]
    },
    {
        "id": 370,
        "nombre": "Achraf Hakimi",
        "nacionalidad": "Marruecos",
        "clubes": [
            "Real Madrid",
            "Inter Milan",
            "Borussia Dortmund",
            "PSG"
        ]
    },
    {
        "id": 371,
        "nombre": "Yassine Bounou",
        "nacionalidad": "Marruecos",
        "clubes": [
            "Zaragoza",
            "Wydad Casablanca",
            "Al Hilal",
            "Sevilla",
            "Girona",
            "Atletico Madrid"
        ]
    },
    {
        "id": 372,
        "nombre": "Hakim Ziyech",
        "nacionalidad": "Marruecos",
        "clubes": [
            "Heerenveen",
            "Galatasaray",
            "Ajax",
            "Chelsea",
            "Twente"
        ]
    },
    {
        "id": 373,
        "nombre": "Sofyan Amrabat",
        "nacionalidad": "Marruecos",
        "clubes": [
            "Fenerbahce",
            "Utrecht",
            "Fiorentina",
            "Feyenoord",
            "Club Brugge",
            "Manchester United",
            "Verona"
        ]
    },
    {
        "id": 374,
        "nombre": "Youssef En-Nesyri",
        "nacionalidad": "Marruecos",
        "clubes": [
            "Fenerbahce",
            "Malaga",
            "Sevilla",
            "Leganes"
        ]
    },
    {
        "id": 375,
        "nombre": "Noussair Mazraoui",
        "nacionalidad": "Marruecos",
        "clubes": [
            "Ajax",
            "Manchester United",
            "Bayern Munich"
        ]
    },
    {
        "id": 376,
        "nombre": "Brahim Diaz",
        "nacionalidad": "Marruecos",
        "clubes": [
            "Real Madrid",
            "Manchester City",
            "AC Milan"
        ]
    },
    {
        "id": 377,
        "nombre": "Nayef Aguerd",
        "nacionalidad": "Marruecos",
        "clubes": [
            "Real Sociedad",
            "Rennes",
            "Dijon",
            "West Ham",
            "FUS Rabat"
        ]
    },
    {
        "id": 378,
        "nombre": "Amine Harit",
        "nacionalidad": "Marruecos",
        "clubes": [
            "Nantes",
            "Marseille",
            "Schalke 04"
        ]
    },
    {
        "id": 379,
        "nombre": "Sadio Mane",
        "nacionalidad": "Senegal",
        "clubes": [
            "Metz",
            "Southampton",
            "Salzburg",
            "Al Nassr",
            "Liverpool",
            "Bayern Munich"
        ]
    },
    {
        "id": 380,
        "nombre": "Kalidou Koulibaly",
        "nacionalidad": "Senegal",
        "clubes": [
            "Genk",
            "Metz",
            "Al Hilal",
            "Chelsea",
            "Napoli"
        ]
    },
    {
        "id": 381,
        "nombre": "Edouard Mendy",
        "nacionalidad": "Senegal",
        "clubes": [
            "Reims",
            "Al Ahli",
            "Cherbourg",
            "Rennes",
            "Chelsea"
        ]
    },
    {
        "id": 382,
        "nombre": "Nicolas Jackson",
        "nacionalidad": "Senegal",
        "clubes": [
            "Casa Sports",
            "Chelsea",
            "Villarreal"
        ]
    },
    {
        "id": 383,
        "nombre": "Idrissa Gueye",
        "nacionalidad": "Senegal",
        "clubes": [
            "Aston Villa",
            "Everton",
            "Lille",
            "PSG"
        ]
    },
    {
        "id": 384,
        "nombre": "Ismaila Sarr",
        "nacionalidad": "Senegal",
        "clubes": [
            "Metz",
            "Crystal Palace",
            "Rennes",
            "Watford",
            "Marseille"
        ]
    },
    {
        "id": 385,
        "nombre": "Abdou Diallo",
        "nacionalidad": "Senegal",
        "clubes": [
            "Al-Arabi",
            "PSG",
            "Zulte Waregem",
            "RB Leipzig",
            "Monaco",
            "Borussia Dortmund",
            "Mainz 05"
        ]
    },
    {
        "id": 386,
        "nombre": "Boulaye Dia",
        "nacionalidad": "Senegal",
        "clubes": [
            "Reims",
            "Salernitana",
            "Lazio",
            "Villarreal"
        ]
    },
    {
        "id": 387,
        "nombre": "Javier Hernandez",
        "nacionalidad": "México",
        "clubes": [
            "LA Galaxy",
            "Sevilla",
            "Bayer Leverkusen",
            "West Ham",
            "Guadalajara",
            "Real Madrid",
            "Manchester United"
        ]
    },
    {
        "id": 388,
        "nombre": "Raul Jimenez",
        "nacionalidad": "México",
        "clubes": [
            "America",
            "Wolves",
            "Atletico Madrid",
            "Fulham",
            "Benfica"
        ]
    },
    {
        "id": 389,
        "nombre": "Hirving Lozano",
        "nacionalidad": "México",
        "clubes": [
            "PSV",
            "San Diego FC",
            "Napoli",
            "Pachuca"
        ]
    },
    {
        "id": 390,
        "nombre": "Guillermo Ochoa",
        "nacionalidad": "México",
        "clubes": [
            "America",
            "Salernitana",
            "Ajaccio",
            "Granada",
            "Malaga",
            "Standard Liege"
        ]
    },
    {
        "id": 391,
        "nombre": "Andres Guardado",
        "nacionalidad": "México",
        "clubes": [
            "Atlas",
            "Leon",
            "Bayer Leverkusen",
            "Real Betis",
            "Deportivo La Coruña",
            "PSV",
            "Valencia"
        ]
    },
    {
        "id": 392,
        "nombre": "Hugo Sanchez",
        "nacionalidad": "México",
        "clubes": [
            "UNAM",
            "America",
            "San Diego Sockers",
            "Rayo Vallecano",
            "Atletico Madrid",
            "Real Madrid"
        ]
    },
    {
        "id": 393,
        "nombre": "Rafael Marquez",
        "nacionalidad": "México",
        "clubes": [
            "Barcelona",
            "Atlas",
            "Leon",
            "Hellas Verona",
            "New York Red Bulls",
            "Monaco"
        ]
    },
    {
        "id": 394,
        "nombre": "Edson Alvarez",
        "nacionalidad": "México",
        "clubes": [
            "America",
            "Ajax",
            "West Ham"
        ]
    },
    {
        "id": 395,
        "nombre": "Santiago Gimenez",
        "nacionalidad": "México",
        "clubes": [
            "Cruz Azul",
            "Feyenoord"
        ]
    },
    {
        "id": 396,
        "nombre": "Jesus Corona",
        "nacionalidad": "México",
        "clubes": [
            "Porto",
            "Twente",
            "Sevilla",
            "Monterrey"
        ]
    },
    {
        "id": 397,
        "nombre": "Robert Lewandowski",
        "nacionalidad": "Polonia",
        "clubes": [
            "Barcelona",
            "Bayern Munich",
            "Borussia Dortmund",
            "Lech Poznan"
        ]
    },
    {
        "id": 398,
        "nombre": "Erling Haaland",
        "nacionalidad": "Noruega",
        "clubes": [
            "Bryne",
            "Salzburg",
            "Molde",
            "Borussia Dortmund",
            "Manchester City"
        ]
    },
    {
        "id": 399,
        "nombre": "Mohamed Salah",
        "nacionalidad": "Egipto",
        "clubes": [
            "Basel",
            "Chelsea",
            "AS Roma",
            "Liverpool",
            "El Mokawloon",
            "Fiorentina"
        ]
    },
    {
        "id": 400,
        "nombre": "Zlatan Ibrahimovic",
        "nacionalidad": "Suecia",
        "clubes": [
            "Inter Milan",
            "PSG",
            "Barcelona",
            "Malmö",
            "Ajax",
            "Juventus",
            "AC Milan",
            "LA Galaxy",
            "Manchester United"
        ]
    },
    {
        "id": 401,
        "nombre": "Keylor Navas",
        "nacionalidad": "Costa Rica",
        "clubes": [
            "PSG",
            "Levante",
            "Saprissa",
            "Nottingham Forest",
            "Real Madrid",
            "Albacete"
        ]
    },
    {
        "id": 402,
        "nombre": "Jan Oblak",
        "nacionalidad": "Eslovenia",
        "clubes": [
            "Olimpija Ljubljana",
            "Atletico Madrid",
            "Benfica"
        ]
    },
    {
        "id": 403,
        "nombre": "Andre Onana",
        "nacionalidad": "Camerún",
        "clubes": [
            "Ajax",
            "Inter Milan",
            "Manchester United"
        ]
    },
    {
        "id": 404,
        "nombre": "Yann Sommer",
        "nacionalidad": "Suiza",
        "clubes": [
            "Borussia Mönchengladbach",
            "Inter Milan",
            "Basel",
            "Bayern Munich"
        ]
    },
    {
        "id": 405,
        "nombre": "Wojciech Szczesny",
        "nacionalidad": "Polonia",
        "clubes": [
            "Brentford",
            "Arsenal",
            "Barcelona",
            "Juventus",
            "AS Roma"
        ]
    },
    {
        "id": 406,
        "nombre": "Kasper Schmeichel",
        "nacionalidad": "Dinamarca",
        "clubes": [
            "Leeds United",
            "Nice",
            "Leicester City",
            "Celtic",
            "Manchester City",
            "Anderlecht"
        ]
    },
    {
        "id": 407,
        "nombre": "Son Heung-min",
        "nacionalidad": "Corea del Sur",
        "clubes": [
            "Bayer Leverkusen",
            "Tottenham",
            "Hamburg"
        ]
    },
    {
        "id": 408,
        "nombre": "Victor Osimhen",
        "nacionalidad": "Nigeria",
        "clubes": [
            "Galatasaray",
            "Charleroi",
            "Wolfsburg",
            "Lille",
            "Napoli"
        ]
    },
    {
        "id": 409,
        "nombre": "Alphonso Davies",
        "nacionalidad": "Canadá",
        "clubes": [
            "Vancouver Whitecaps",
            "Bayern Munich"
        ]
    },
    {
        "id": 410,
        "nombre": "Christian Pulisic",
        "nacionalidad": "Estados Unidos",
        "clubes": [
            "AC Milan",
            "Chelsea",
            "Borussia Dortmund"
        ]
    },
    {
        "id": 411,
        "nombre": "Weston McKennie",
        "nacionalidad": "Estados Unidos",
        "clubes": [
            "Schalke 04",
            "Juventus",
            "Leeds United"
        ]
    },
    {
        "id": 412,
        "nombre": "Piero Hincapie",
        "nacionalidad": "Ecuador",
        "clubes": [
            "Independiente del Valle",
            "Bayer Leverkusen",
            "Talleres"
        ]
    },
    {
        "id": 413,
        "nombre": "Moises Caicedo",
        "nacionalidad": "Ecuador",
        "clubes": [
            "Independiente del Valle",
            "Beerschot",
            "Chelsea",
            "Brighton"
        ]
    },
    {
        "id": 414,
        "nombre": "Luis Sinisterra",
        "nacionalidad": "Colombia",
        "clubes": [
            "Leeds United",
            "Bournemouth",
            "Once Caldas",
            "Feyenoord"
        ]
    },
    {
        "id": 415,
        "nombre": "Pierre-Emerick Aubameyang",
        "nacionalidad": "Gabón",
        "clubes": [
            "Arsenal",
            "Barcelona",
            "Saint-Etienne",
            "AC Milan",
            "Chelsea",
            "Al Qadsiah",
            "Dijon",
            "Monaco",
            "Borussia Dortmund",
            "Marseille",
            "Lille"
        ]
    },
    {
        "id": 416,
        "nombre": "Henrikh Mkhitaryan",
        "nacionalidad": "Armenia",
        "clubes": [
            "Inter Milan",
            "Metalurh Donetsk",
            "Arsenal",
            "Pyunik",
            "Shakhtar Donetsk",
            "AS Roma",
            "Borussia Dortmund",
            "Manchester United"
        ]
    },
    {
        "id": 417,
        "nombre": "Nacho Fernandez",
        "nacionalidad": "España",
        "clubes": [
            "Real Madrid",
            "Al Qadsiah"
        ]
    },
    {
        "id": 418,
        "nombre": "Lucas Vazquez",
        "nacionalidad": "España",
        "clubes": [
            "Espanyol",
            "Real Madrid"
        ]
    },
    {
        "id": 419,
        "nombre": "Joselu Mato",
        "nacionalidad": "España",
        "clubes": [
            "Espanyol",
            "Alaves",
            "Deportivo",
            "Celta Vigo",
            "Real Madrid",
            "Al Gharafa",
            "Newcastle"
        ]
    },
    {
        "id": 420,
        "nombre": "Martin Zubimendi",
        "nacionalidad": "España",
        "clubes": [
            "Real Sociedad"
        ]
    },
    {
        "id": 421,
        "nombre": "Mikel Merino",
        "nacionalidad": "España",
        "clubes": [
            "Arsenal",
            "Real Sociedad",
            "Dortmund",
            "Osasuna",
            "Newcastle"
        ]
    },
    {
        "id": 422,
        "nombre": "Fabian Ruiz",
        "nacionalidad": "España",
        "clubes": [
            "Elche",
            "PSG",
            "Real Betis",
            "Napoli"
        ]
    },
    {
        "id": 423,
        "nombre": "Ferran Torres",
        "nacionalidad": "España",
        "clubes": [
            "Manchester City",
            "Barcelona",
            "Valencia"
        ]
    },
    {
        "id": 424,
        "nombre": "Eric Garcia",
        "nacionalidad": "España",
        "clubes": [
            "Girona",
            "Manchester City",
            "Barcelona"
        ]
    },
    {
        "id": 425,
        "nombre": "Ansu Fati",
        "nacionalidad": "España",
        "clubes": [
            "Brighton",
            "Barcelona"
        ]
    },
    {
        "id": 426,
        "nombre": "Bryan Zaragoza",
        "nacionalidad": "España",
        "clubes": [
            "Granada",
            "Osasuna",
            "Bayern Munich"
        ]
    },
    {
        "id": 427,
        "nombre": "Pau Cubarsi",
        "nacionalidad": "España",
        "clubes": [
            "Barcelona"
        ]
    },
    {
        "id": 428,
        "nombre": "Alejandro Balde",
        "nacionalidad": "España",
        "clubes": [
            "Barcelona"
        ]
    },
    {
        "id": 429,
        "nombre": "Inigo Martinez",
        "nacionalidad": "España",
        "clubes": [
            "Real Sociedad",
            "Barcelona",
            "Athletic Bilbao"
        ]
    },
    {
        "id": 430,
        "nombre": "Oriol Romeu",
        "nacionalidad": "España",
        "clubes": [
            "Southampton",
            "Barcelona",
            "Chelsea",
            "Girona",
            "Stuttgart",
            "Valencia"
        ]
    },
    {
        "id": 431,
        "nombre": "Sergio Reguilon",
        "nacionalidad": "España",
        "clubes": [
            "Brentford",
            "Sevilla",
            "Tottenham",
            "Atletico Madrid",
            "Real Madrid",
            "Manchester United"
        ]
    },
    {
        "id": 432,
        "nombre": "Borja Iglesias",
        "nacionalidad": "España",
        "clubes": [
            "Zaragoza",
            "Espanyol",
            "Bayer Leverkusen",
            "Real Betis",
            "Celta Vigo"
        ]
    },
    {
        "id": 433,
        "nombre": "Marc Bartra",
        "nacionalidad": "España",
        "clubes": [
            "Trabzonspor",
            "Real Betis",
            "Barcelona",
            "Borussia Dortmund"
        ]
    },
    {
        "id": 434,
        "nombre": "Paco Alcacer",
        "nacionalidad": "España",
        "clubes": [
            "Barcelona",
            "Sharjah",
            "Getafe",
            "Villarreal",
            "Borussia Dortmund",
            "Valencia"
        ]
    },
    {
        "id": 435,
        "nombre": "Adama Traore",
        "nacionalidad": "España",
        "clubes": [
            "Fulham",
            "Wolves",
            "Middlesbrough",
            "Barcelona",
            "Aston Villa"
        ]
    },
    {
        "id": 436,
        "nombre": "Gerard Deulofeu",
        "nacionalidad": "España",
        "clubes": [
            "Everton",
            "Barcelona",
            "AC Milan",
            "Sevilla",
            "Udinese",
            "Watford"
        ]
    },
    {
        "id": 437,
        "nombre": "Suso Fernandez",
        "nacionalidad": "España",
        "clubes": [
            "Almeria",
            "AC Milan",
            "Sevilla",
            "Liverpool",
            "Genoa"
        ]
    },
    {
        "id": 438,
        "nombre": "Denis Suarez",
        "nacionalidad": "España",
        "clubes": [
            "Espanyol",
            "Arsenal",
            "Barcelona",
            "Sevilla",
            "Villarreal",
            "Celta Vigo"
        ]
    },
    {
        "id": 439,
        "nombre": "Juan Bernat",
        "nacionalidad": "España",
        "clubes": [
            "PSG",
            "Villarreal",
            "Bayern Munich",
            "Benfica",
            "Valencia"
        ]
    },
    {
        "id": 440,
        "nombre": "Carlos Soler",
        "nacionalidad": "España",
        "clubes": [
            "PSG",
            "West Ham",
            "Valencia"
        ]
    },
    {
        "id": 441,
        "nombre": "Yeremy Pino",
        "nacionalidad": "España",
        "clubes": [
            "Villarreal"
        ]
    },
    {
        "id": 442,
        "nombre": "Nacho Monreal",
        "nacionalidad": "España",
        "clubes": [
            "Real Sociedad",
            "Malaga",
            "Osasuna",
            "Arsenal"
        ]
    },
    {
        "id": 443,
        "nombre": "Raul Albiol",
        "nacionalidad": "España",
        "clubes": [
            "Getafe",
            "Villarreal",
            "Real Madrid",
            "Napoli",
            "Valencia"
        ]
    },
    {
        "id": 444,
        "nombre": "Alvaro Negredo",
        "nacionalidad": "España",
        "clubes": [
            "Middlesbrough",
            "Almeria",
            "Besiktas",
            "Sevilla",
            "Cadiz",
            "Manchester City",
            "Valencia"
        ]
    },
    {
        "id": 445,
        "nombre": "Roberto Soldado",
        "nacionalidad": "España",
        "clubes": [
            "Fenerbahce",
            "Levante",
            "Tottenham",
            "Getafe",
            "Villarreal",
            "Granada",
            "Real Madrid",
            "Osasuna",
            "Valencia"
        ]
    },
    {
        "id": 446,
        "nombre": "Fernando Llorente",
        "nacionalidad": "España",
        "clubes": [
            "Athletic Bilbao",
            "Juventus",
            "Sevilla",
            "Tottenham",
            "Udinese",
            "Swansea City",
            "Napoli"
        ]
    },
    {
        "id": 447,
        "nombre": "Bojan Krkic",
        "nacionalidad": "España",
        "clubes": [
            "Barcelona",
            "Ajax",
            "Alaves",
            "Milan",
            "Vissel Kobe",
            "AS Roma",
            "Montreal Impact",
            "Mainz 05",
            "Stoke City"
        ]
    },
    {
        "id": 448,
        "nombre": "Iker Muniain",
        "nacionalidad": "España",
        "clubes": [
            "Athletic Bilbao",
            "San Lorenzo"
        ]
    },
    {
        "id": 449,
        "nombre": "Ander Herrera",
        "nacionalidad": "España",
        "clubes": [
            "Zaragoza",
            "Manchester United",
            "Athletic Bilbao",
            "PSG"
        ]
    },
    {
        "id": 450,
        "nombre": "Conor Gallagher",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Swansea",
            "Crystal Palace",
            "Chelsea",
            "West Brom",
            "Atletico Madrid",
            "Charlton"
        ]
    },
    {
        "id": 451,
        "nombre": "Anthony Gordon",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Everton",
            "Preston",
            "Newcastle"
        ]
    },
    {
        "id": 452,
        "nombre": "Ollie Watkins",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Aston Villa",
            "Brentford",
            "Exeter City"
        ]
    },
    {
        "id": 453,
        "nombre": "Ivan Toney",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Brentford",
            "Al Ahli",
            "Peterborough",
            "Northampton",
            "Newcastle"
        ]
    },
    {
        "id": 454,
        "nombre": "Jarrod Bowen",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Hull City",
            "West Ham",
            "Hereford"
        ]
    },
    {
        "id": 455,
        "nombre": "James Maddison",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Coventry",
            "Tottenham",
            "Leicester City",
            "Aberdeen",
            "Norwich"
        ]
    },
    {
        "id": 456,
        "nombre": "Danny Welbeck",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Sunderland",
            "Arsenal",
            "Brighton",
            "Watford",
            "Preston",
            "Manchester United"
        ]
    },
    {
        "id": 457,
        "nombre": "Jesse Lingard",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "FC Seoul",
            "Birmingham",
            "Leicester City",
            "Brighton",
            "West Ham",
            "Nottingham Forest",
            "Manchester United",
            "Derby County"
        ]
    },
    {
        "id": 458,
        "nombre": "Kalvin Phillips",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Ipswich Town",
            "Leeds United",
            "West Ham",
            "Manchester City"
        ]
    },
    {
        "id": 459,
        "nombre": "Ashley Young",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Everton",
            "Inter Milan",
            "Watford",
            "Aston Villa",
            "Manchester United"
        ]
    },
    {
        "id": 460,
        "nombre": "Theo Walcott",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Everton",
            "Southampton",
            "Arsenal"
        ]
    },
    {
        "id": 461,
        "nombre": "Aaron Lennon",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Everton",
            "Leeds United",
            "Tottenham",
            "Burnley",
            "Kayserispor"
        ]
    },
    {
        "id": 462,
        "nombre": "Jermain Defoe",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Sunderland",
            "Toronto FC",
            "Tottenham",
            "Rangers",
            "Portsmouth",
            "West Ham",
            "Bournemouth"
        ]
    },
    {
        "id": 463,
        "nombre": "Peter Crouch",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Southampton",
            "QPR",
            "Tottenham",
            "Portsmouth",
            "Liverpool",
            "Burnley",
            "Aston Villa",
            "Norwich",
            "Stoke City"
        ]
    },
    {
        "id": 464,
        "nombre": "Joe Hart",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Birmingham",
            "Torino",
            "Tottenham",
            "Celtic",
            "West Ham",
            "Burnley",
            "Shrewsbury",
            "Manchester City"
        ]
    },
    {
        "id": 465,
        "nombre": "James Milner",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Leeds United",
            "Brighton",
            "Liverpool",
            "Manchester City",
            "Aston Villa",
            "Swindon",
            "Newcastle"
        ]
    },
    {
        "id": 466,
        "nombre": "Guglielmo Vicario",
        "nacionalidad": "Italia",
        "clubes": [
            "Empoli",
            "Venezia",
            "Tottenham"
        ]
    },
    {
        "id": 467,
        "nombre": "Bryan Cristante",
        "nacionalidad": "Italia",
        "clubes": [
            "Palermo",
            "Pescara",
            "AC Milan",
            "AS Roma",
            "Atalanta",
            "Benfica"
        ]
    },
    {
        "id": 468,
        "nombre": "Lorenzo Pellegrini",
        "nacionalidad": "Italia",
        "clubes": [
            "AS Roma",
            "Sassuolo"
        ]
    },
    {
        "id": 469,
        "nombre": "Davide Frattesi",
        "nacionalidad": "Italia",
        "clubes": [
            "Inter Milan",
            "Monza",
            "Ascoli",
            "Empoli",
            "Sassuolo"
        ]
    },
    {
        "id": 470,
        "nombre": "Mateo Retegui",
        "nacionalidad": "Italia",
        "clubes": [
            "Boca Juniors",
            "Talleres",
            "Atalanta",
            "Tigre",
            "Estudiantes",
            "Genoa"
        ]
    },
    {
        "id": 471,
        "nombre": "Giacomo Raspadori",
        "nacionalidad": "Italia",
        "clubes": [
            "Sassuolo",
            "Napoli"
        ]
    },
    {
        "id": 472,
        "nombre": "Destiny Udogie",
        "nacionalidad": "Italia",
        "clubes": [
            "Udinese",
            "Tottenham",
            "Verona"
        ]
    },
    {
        "id": 473,
        "nombre": "Moise Kean",
        "nacionalidad": "Italia",
        "clubes": [
            "Everton",
            "PSG",
            "Juventus",
            "Fiorentina",
            "Verona"
        ]
    },
    {
        "id": 474,
        "nombre": "Gianluca Scamacca",
        "nacionalidad": "Italia",
        "clubes": [
            "Genoa",
            "West Ham",
            "Atalanta",
            "Sassuolo"
        ]
    },
    {
        "id": 475,
        "nombre": "Manuel Locatelli",
        "nacionalidad": "Italia",
        "clubes": [
            "AC Milan",
            "Sassuolo",
            "Juventus"
        ]
    },
    {
        "id": 476,
        "nombre": "Leonardo Spinazzola",
        "nacionalidad": "Italia",
        "clubes": [
            "Juventus",
            "AS Roma",
            "Siena",
            "Atalanta",
            "Empoli",
            "Napoli"
        ]
    },
    {
        "id": 477,
        "nombre": "Andrea Belotti",
        "nacionalidad": "Italia",
        "clubes": [
            "Albinoleffe",
            "Palermo",
            "Como",
            "Torino",
            "AS Roma",
            "Fiorentina"
        ]
    },
    {
        "id": 478,
        "nombre": "Daniele De Rossi",
        "nacionalidad": "Italia",
        "clubes": [
            "AS Roma",
            "Boca Juniors"
        ]
    },
    {
        "id": 479,
        "nombre": "Claudio Marchisio",
        "nacionalidad": "Italia",
        "clubes": [
            "Juventus",
            "Empoli",
            "Zenit"
        ]
    },
    {
        "id": 480,
        "nombre": "Antonio Cassano",
        "nacionalidad": "Italia",
        "clubes": [
            "Inter Milan",
            "Parma",
            "Sampdoria",
            "AC Milan",
            "AS Roma",
            "Real Madrid",
            "Bari"
        ]
    },
    {
        "id": 481,
        "nombre": "Christian Vieri",
        "nacionalidad": "Italia",
        "clubes": [
            "Inter Milan",
            "Ravenna",
            "Torino",
            "Juventus",
            "AC Milan",
            "Lazio",
            "Venezia",
            "Atalanta",
            "Atletico Madrid",
            "Monaco",
            "Pisa",
            "Fiorentina"
        ]
    },
    {
        "id": 482,
        "nombre": "Jonathan Clauss",
        "nacionalidad": "Francia",
        "clubes": [
            "Marseille",
            "Nice",
            "Bielefeld",
            "Lens"
        ]
    },
    {
        "id": 483,
        "nombre": "Youssouf Fofana",
        "nacionalidad": "Francia",
        "clubes": [
            "AC Milan",
            "Monaco",
            "Strasbourg"
        ]
    },
    {
        "id": 484,
        "nombre": "Bradley Barcola",
        "nacionalidad": "Francia",
        "clubes": [
            "Lyon",
            "PSG"
        ]
    },
    {
        "id": 485,
        "nombre": "Randal Kolo Muani",
        "nacionalidad": "Francia",
        "clubes": [
            "Nantes",
            "Eintracht Frankfurt",
            "PSG"
        ]
    },
    {
        "id": 486,
        "nombre": "Moussa Diaby",
        "nacionalidad": "Francia",
        "clubes": [
            "PSG",
            "Al Ittihad",
            "Crotone",
            "Bayer Leverkusen",
            "Aston Villa"
        ]
    },
    {
        "id": 487,
        "nombre": "Michael Olise",
        "nacionalidad": "Francia",
        "clubes": [
            "Crystal Palace",
            "Bayern Munich",
            "Reading"
        ]
    },
    {
        "id": 488,
        "nombre": "Jean-Clair Todibo",
        "nacionalidad": "Francia",
        "clubes": [
            "Barcelona",
            "Schalke 04",
            "Nice",
            "West Ham",
            "Toulouse",
            "Benfica"
        ]
    },
    {
        "id": 489,
        "nombre": "Jonathan Tah",
        "nacionalidad": "Alemania",
        "clubes": [
            "Bayer Leverkusen",
            "Fortuna Düsseldorf",
            "Hamburg",
            "Dortmund"
        ]
    },
    {
        "id": 490,
        "nombre": "Robert Andrich",
        "nacionalidad": "Alemania",
        "clubes": [
            "Union Berlin",
            "Bayer Leverkusen",
            "Heidenheim"
        ]
    },
    {
        "id": 491,
        "nombre": "Pascal Gross",
        "nacionalidad": "Alemania",
        "clubes": [
            "Brighton",
            "Ingolstadt",
            "Karlsruher",
            "Borussia Dortmund"
        ]
    },
    {
        "id": 492,
        "nombre": "Deniz Undav",
        "nacionalidad": "Alemania",
        "clubes": [
            "Meppen",
            "Union SG",
            "Brighton",
            "Stuttgart"
        ]
    },
    {
        "id": 493,
        "nombre": "Niclas Füllkrug",
        "nacionalidad": "Alemania",
        "clubes": [
            "Nuremberg",
            "Hannover 96",
            "West Ham",
            "Borussia Dortmund",
            "Werder Bremen",
            "Greuther Fürth"
        ]
    },
    {
        "id": 494,
        "nombre": "Jonas Hofmann",
        "nacionalidad": "Alemania",
        "clubes": [
            "Borussia Mönchengladbach",
            "Bayer Leverkusen",
            "Mainz 05",
            "Dortmund"
        ]
    },
    {
        "id": 495,
        "nombre": "Robin Gosens",
        "nacionalidad": "Alemania",
        "clubes": [
            "Union Berlin",
            "Inter Milan",
            "Heracles Almelo",
            "Atalanta",
            "Fiorentina"
        ]
    },
    {
        "id": 496,
        "nombre": "Julian Draxler",
        "nacionalidad": "Alemania",
        "clubes": [
            "PSG",
            "Al Ahli",
            "Schalke 04",
            "Wolfsburg",
            "Benfica"
        ]
    },
    {
        "id": 497,
        "nombre": "Shkodran Mustafi",
        "nacionalidad": "Alemania",
        "clubes": [
            "Everton",
            "Arsenal",
            "Levante",
            "Sampdoria",
            "Schalke 04",
            "Valencia"
        ]
    },
    {
        "id": 498,
        "nombre": "Jens Lehmann",
        "nacionalidad": "Alemania",
        "clubes": [
            "Arsenal",
            "Schalke 04",
            "Milan",
            "Borussia Dortmund",
            "Stuttgart"
        ]
    },
    {
        "id": 499,
        "nombre": "Diogo Costa",
        "nacionalidad": "Portugal",
        "clubes": [
            "Porto"
        ]
    },
    {
        "id": 500,
        "nombre": "Nuno Mendes",
        "nacionalidad": "Portugal",
        "clubes": [
            "Sporting CP",
            "PSG"
        ]
    },
    {
        "id": 501,
        "nombre": "Joao Neves",
        "nacionalidad": "Portugal",
        "clubes": [
            "PSG",
            "Benfica"
        ]
    },
    {
        "id": 502,
        "nombre": "Francisco Conceicao",
        "nacionalidad": "Portugal",
        "clubes": [
            "Porto",
            "Ajax",
            "Juventus"
        ]
    },
    {
        "id": 503,
        "nombre": "Pedro Neto",
        "nacionalidad": "Portugal",
        "clubes": [
            "Braga",
            "Wolves",
            "Lazio",
            "Chelsea"
        ]
    },
    {
        "id": 504,
        "nombre": "Joao Mario",
        "nacionalidad": "Portugal",
        "clubes": [
            "Sporting CP",
            "Inter Milan",
            "Lokomotiv Moscow",
            "West Ham",
            "Besiktas",
            "Benfica"
        ]
    },
    {
        "id": 505,
        "nombre": "Gonçalo Guedes",
        "nacionalidad": "Portugal",
        "clubes": [
            "PSG",
            "Wolves",
            "Villarreal",
            "Benfica",
            "Valencia"
        ]
    },
    {
        "id": 506,
        "nombre": "Daniel Podence",
        "nacionalidad": "Portugal",
        "clubes": [
            "Sporting CP",
            "Wolves",
            "Moreirense",
            "Al Shabab",
            "Olympiacos"
        ]
    },
    {
        "id": 507,
        "nombre": "Tiago Mendes",
        "nacionalidad": "Portugal",
        "clubes": [
            "Juventus",
            "Lyon",
            "Chelsea",
            "Atletico Madrid",
            "Braga",
            "Benfica"
        ]
    },
    {
        "id": 508,
        "nombre": "Maniche Ribeiro",
        "nacionalidad": "Portugal",
        "clubes": [
            "Sporting CP",
            "Inter Milan",
            "Porto",
            "Chelsea",
            "Atletico Madrid",
            "Dynamo Moscow",
            "Alverca",
            "Benfica"
        ]
    },
    {
        "id": 509,
        "nombre": "Simao Sabrosa",
        "nacionalidad": "Portugal",
        "clubes": [
            "Espanyol",
            "Sporting CP",
            "Barcelona",
            "Atletico Madrid",
            "Besiktas",
            "Benfica"
        ]
    },
    {
        "id": 510,
        "nombre": "Douglas Luiz",
        "nacionalidad": "Brasil",
        "clubes": [
            "Aston Villa",
            "Girona",
            "Juventus",
            "Vasco da Gama"
        ]
    },
    {
        "id": 511,
        "nombre": "Joao Gomes",
        "nacionalidad": "Brasil",
        "clubes": [
            "Wolves",
            "Flamengo"
        ]
    },
    {
        "id": 512,
        "nombre": "Andreas Pereira",
        "nacionalidad": "Brasil",
        "clubes": [
            "Lazio",
            "Granada",
            "Fulham",
            "Flamengo",
            "Manchester United",
            "Valencia"
        ]
    },
    {
        "id": 513,
        "nombre": "Savio Moreira",
        "nacionalidad": "Brasil",
        "clubes": [
            "Troyes",
            "Atletico Mineiro",
            "Girona",
            "Manchester City",
            "PSV"
        ]
    },
    {
        "id": 514,
        "nombre": "Endrick Felipe",
        "nacionalidad": "Brasil",
        "clubes": [
            "Real Madrid",
            "Palmeiras"
        ]
    },
    {
        "id": 515,
        "nombre": "Joelinton Cassio",
        "nacionalidad": "Brasil",
        "clubes": [
            "Sport Recife",
            "Hoffenheim",
            "Newcastle",
            "Rapid Wien"
        ]
    },
    {
        "id": 516,
        "nombre": "Alex Telles",
        "nacionalidad": "Brasil",
        "clubes": [
            "Inter Milan",
            "Galatasaray",
            "Al Nassr",
            "Sevilla",
            "Gremio",
            "Botafogo",
            "Porto",
            "Juventude",
            "Manchester United"
        ]
    },
    {
        "id": 517,
        "nombre": "Neto Murara",
        "nacionalidad": "Brasil",
        "clubes": [
            "Arsenal",
            "Barcelona",
            "Juventus",
            "Athletico Paranaense",
            "Fiorentina",
            "Bournemouth",
            "Valencia"
        ]
    },
    {
        "id": 518,
        "nombre": "Ramires Santos",
        "nacionalidad": "Brasil",
        "clubes": [
            "Palmeiras",
            "Chelsea",
            "Jiangsu Suning",
            "Cruzeiro",
            "Benfica"
        ]
    },
    {
        "id": 519,
        "nombre": "Lucas Leiva",
        "nacionalidad": "Brasil",
        "clubes": [
            "Liverpool",
            "Lazio",
            "Gremio"
        ]
    },
    {
        "id": 520,
        "nombre": "Luis Fabiano",
        "nacionalidad": "Brasil",
        "clubes": [
            "Sevilla",
            "Sao Paulo",
            "Rennes",
            "Ponte Preta",
            "Porto",
            "Vasco da Gama"
        ]
    },
    {
        "id": 521,
        "nombre": "Geronimo Rulli",
        "nacionalidad": "Argentina",
        "clubes": [
            "Real Sociedad",
            "Ajax",
            "Villarreal",
            "Montpellier",
            "Estudiantes",
            "Marseille"
        ]
    },
    {
        "id": 522,
        "nombre": "German Pezzella",
        "nacionalidad": "Argentina",
        "clubes": [
            "Real Betis",
            "Fiorentina",
            "River Plate"
        ]
    },
    {
        "id": 523,
        "nombre": "Gonzalo Montiel",
        "nacionalidad": "Argentina",
        "clubes": [
            "Sevilla",
            "River Plate",
            "Nottingham Forest"
        ]
    },
    {
        "id": 524,
        "nombre": "Valentin Barco",
        "nacionalidad": "Argentina",
        "clubes": [
            "Brighton",
            "Sevilla",
            "Boca Juniors"
        ]
    },
    {
        "id": 525,
        "nombre": "Exequiel Palacios",
        "nacionalidad": "Argentina",
        "clubes": [
            "Bayer Leverkusen",
            "River Plate"
        ]
    },
    {
        "id": 526,
        "nombre": "Guido Rodriguez",
        "nacionalidad": "Argentina",
        "clubes": [
            "River Plate",
            "Defensa y Justicia",
            "Club America",
            "Tijuana",
            "West Ham",
            "Real Betis"
        ]
    },
    {
        "id": 527,
        "nombre": "Valentin Carboni",
        "nacionalidad": "Argentina",
        "clubes": [
            "Monza",
            "Marseille",
            "Inter Milan"
        ]
    },
    {
        "id": 528,
        "nombre": "Joaquin Correa",
        "nacionalidad": "Argentina",
        "clubes": [
            "Inter Milan",
            "Sampdoria",
            "Lazio",
            "Sevilla",
            "Estudiantes",
            "Marseille"
        ]
    },
    {
        "id": 529,
        "nombre": "Lucas Ocampos",
        "nacionalidad": "Argentina",
        "clubes": [
            "Genoa",
            "River Plate",
            "AC Milan",
            "Ajax",
            "Sevilla",
            "Monaco",
            "Marseille"
        ]
    },
    {
        "id": 530,
        "nombre": "Juan Foyth",
        "nacionalidad": "Argentina",
        "clubes": [
            "Villarreal",
            "Tottenham",
            "Estudiantes"
        ]
    },
    {
        "id": 531,
        "nombre": "Micky van de Ven",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Volendam",
            "Wolfsburg",
            "Tottenham"
        ]
    },
    {
        "id": 532,
        "nombre": "Jeremie Frimpong",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Bayer Leverkusen",
            "Manchester City",
            "Celtic"
        ]
    },
    {
        "id": 533,
        "nombre": "Lutsharel Geertruida",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Leipzig",
            "Feyenoord"
        ]
    },
    {
        "id": 534,
        "nombre": "Ian Maatsen",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Coventry",
            "Chelsea",
            "Dortmund",
            "Burnley",
            "Aston Villa"
        ]
    },
    {
        "id": 535,
        "nombre": "Tijjani Reijnders",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "PEC Zwolle",
            "AC Milan",
            "AZ Alkmaar"
        ]
    },
    {
        "id": 536,
        "nombre": "Ryan Gravenberch",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Liverpool",
            "Ajax",
            "Bayern Munich"
        ]
    },
    {
        "id": 537,
        "nombre": "Wout Weghorst",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Ajax",
            "Heracles Almelo",
            "Wolfsburg",
            "Burnley",
            "Hoffenheim",
            "Besiktas",
            "Manchester United",
            "AZ Alkmaar"
        ]
    },
    {
        "id": 538,
        "nombre": "Steven Bergwijn",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Ajax",
            "Al Ittihad",
            "PSV",
            "Tottenham"
        ]
    },
    {
        "id": 539,
        "nombre": "Joshua Zirkzee",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Parma",
            "Manchester United",
            "Bayern Munich",
            "Bologna",
            "Anderlecht"
        ]
    },
    {
        "id": 540,
        "nombre": "Teun Koopmeiners",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Juventus",
            "Atalanta",
            "AZ Alkmaar"
        ]
    },
    {
        "id": 541,
        "nombre": "Donny van de Beek",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Everton",
            "Ajax",
            "Girona",
            "Frankfurt",
            "Manchester United"
        ]
    },
    {
        "id": 542,
        "nombre": "Luuk de Jong",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Barcelona",
            "Monchengladbach",
            "Sevilla",
            "Twente",
            "PSV",
            "Newcastle"
        ]
    },
    {
        "id": 543,
        "nombre": "Jasper Cillessen",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Barcelona",
            "Ajax",
            "NEC",
            "Las Palmas",
            "Valencia"
        ]
    },
    {
        "id": 544,
        "nombre": "Matias Viña",
        "nacionalidad": "Uruguay",
        "clubes": [
            "Flamengo",
            "Nacional",
            "AS Roma",
            "Sassuolo",
            "Palmeiras",
            "Bournemouth"
        ]
    },
    {
        "id": 545,
        "nombre": "Nicolas de la Cruz",
        "nacionalidad": "Uruguay",
        "clubes": [
            "Liverpool Montevideo",
            "Flamengo",
            "River Plate"
        ]
    },
    {
        "id": 546,
        "nombre": "Facundo Pellistri",
        "nacionalidad": "Uruguay",
        "clubes": [
            "Panathinaikos",
            "Peñarol",
            "Alaves",
            "Granada",
            "Manchester United"
        ]
    },
    {
        "id": 547,
        "nombre": "Maximiliano Araujo",
        "nacionalidad": "Uruguay",
        "clubes": [
            "Sporting CP",
            "Puebla",
            "Toluca",
            "Wanderers"
        ]
    },
    {
        "id": 548,
        "nombre": "Nahitan Nandez",
        "nacionalidad": "Uruguay",
        "clubes": [
            "Cagliari",
            "Al Qadsiah",
            "Peñarol",
            "Boca Juniors"
        ]
    },
    {
        "id": 549,
        "nombre": "Giorgian de Arrascaeta",
        "nacionalidad": "Uruguay",
        "clubes": [
            "Cruzeiro",
            "Defensor Sporting",
            "Flamengo"
        ]
    },
    {
        "id": 550,
        "nombre": "Martin Caceres",
        "nacionalidad": "Uruguay",
        "clubes": [
            "Recreativo",
            "Barcelona",
            "Levante",
            "Juventus",
            "LA Galaxy",
            "Sevilla",
            "Chelsea",
            "Lazio",
            "Fiorentina",
            "Defensor Sporting",
            "Verona"
        ]
    },
    {
        "id": 551,
        "nombre": "Cristhian Stuani",
        "nacionalidad": "Uruguay",
        "clubes": [
            "Espanyol",
            "Racing Santander",
            "Middlesbrough",
            "Levante",
            "Danubio",
            "Girona",
            "Albacete",
            "Reggina"
        ]
    },
    {
        "id": 552,
        "nombre": "Alvaro Recoba",
        "nacionalidad": "Uruguay",
        "clubes": [
            "Inter Milan",
            "Torino",
            "Danubio",
            "Venezia",
            "Nacional"
        ]
    },
    {
        "id": 553,
        "nombre": "Daniel Muñoz",
        "nacionalidad": "Colombia",
        "clubes": [
            "Genk",
            "Atletico Nacional",
            "Crystal Palace",
            "Rionegro Aguilas"
        ]
    },
    {
        "id": 554,
        "nombre": "Jhon Lucumi",
        "nacionalidad": "Colombia",
        "clubes": [
            "Genk",
            "Deportivo Cali",
            "Bologna"
        ]
    },
    {
        "id": 555,
        "nombre": "Johan Mojica",
        "nacionalidad": "Colombia",
        "clubes": [
            "Deportivo Cali",
            "Elche",
            "Villarreal",
            "Osasuna",
            "Rayo Vallecano",
            "Girona",
            "Atalanta",
            "Valladolid",
            "Mallorca"
        ]
    },
    {
        "id": 556,
        "nombre": "Richard Rios",
        "nacionalidad": "Colombia",
        "clubes": [
            "Mazatlan",
            "Palmeiras",
            "Guarani",
            "Flamengo"
        ]
    },
    {
        "id": 557,
        "nombre": "Jhon Arias",
        "nacionalidad": "Colombia",
        "clubes": [
            "Llaneros",
            "Fluminense",
            "America de Cali",
            "Patriotas",
            "Santa Fe"
        ]
    },
    {
        "id": 558,
        "nombre": "Jhon Cordoba",
        "nacionalidad": "Colombia",
        "clubes": [
            "Espanyol",
            "Chiapas",
            "Envigado",
            "Hertha BSC",
            "Krasnodar",
            "Granada",
            "Köln",
            "Mainz 05"
        ]
    },
    {
        "id": 559,
        "nombre": "Jhon Duran",
        "nacionalidad": "Colombia",
        "clubes": [
            "Aston Villa",
            "Chicago Fire",
            "Envigado"
        ]
    },
    {
        "id": 560,
        "nombre": "Rafael Santos Borre",
        "nacionalidad": "Colombia",
        "clubes": [
            "Deportivo Cali",
            "River Plate",
            "Villarreal",
            "Eintracht Frankfurt",
            "Atletico Madrid",
            "Werder Bremen",
            "Internacional"
        ]
    },
    {
        "id": 561,
        "nombre": "Santiago Arias",
        "nacionalidad": "Colombia",
        "clubes": [
            "Sporting CP",
            "Cincinnati",
            "La Equidad",
            "Granada",
            "Bayer Leverkusen",
            "Atletico Madrid",
            "Bahia",
            "PSV"
        ]
    },
    {
        "id": 562,
        "nombre": "Mateus Uribe",
        "nacionalidad": "Colombia",
        "clubes": [
            "Envigado",
            "Porto",
            "Club America",
            "Al Sadd",
            "Tolima",
            "Atletico Nacional"
        ]
    },
    {
        "id": 563,
        "nombre": "Jeison Murillo",
        "nacionalidad": "Colombia",
        "clubes": [
            "Inter Milan",
            "Al Shamal",
            "Barcelona",
            "Sampdoria",
            "Granada",
            "Celta Vigo",
            "Cadiz",
            "Las Palmas",
            "Valencia"
        ]
    },
    {
        "id": 564,
        "nombre": "Cristian Zapata",
        "nacionalidad": "Colombia",
        "clubes": [
            "Deportivo Cali",
            "AC Milan",
            "Villarreal",
            "Atletico Nacional",
            "Udinese",
            "San Lorenzo",
            "Genoa"
        ]
    },
    {
        "id": 565,
        "nombre": "Carlos Bacca",
        "nacionalidad": "Colombia",
        "clubes": [
            "Brujas",
            "AC Milan",
            "Sevilla",
            "Villarreal",
            "Granada",
            "Junior"
        ]
    },
    {
        "id": 566,
        "nombre": "Fredy Guarin",
        "nacionalidad": "Colombia",
        "clubes": [
            "Shanghai Shenhua",
            "Inter Milan",
            "Envigado",
            "Saint-Etienne",
            "Millonarios",
            "Boca Juniors",
            "Porto",
            "Vasco da Gama"
        ]
    },
    {
        "id": 567,
        "nombre": "Mario Yepes",
        "nacionalidad": "Colombia",
        "clubes": [
            "Nantes",
            "Deportivo Cali",
            "PSG",
            "River Plate",
            "AC Milan",
            "Cortulua",
            "San Lorenzo",
            "Chievo"
        ]
    },
    {
        "id": 568,
        "nombre": "Ben Brereton Diaz",
        "nacionalidad": "Chile",
        "clubes": [
            "Sheffield United",
            "Southampton",
            "Blackburn Rovers",
            "Villarreal",
            "Nottingham Forest"
        ]
    },
    {
        "id": 569,
        "nombre": "Guillermo Maripan",
        "nacionalidad": "Chile",
        "clubes": [
            "Torino",
            "Alaves",
            "Monaco",
            "Universidad Catolica"
        ]
    },
    {
        "id": 570,
        "nombre": "Erick Pulgar",
        "nacionalidad": "Chile",
        "clubes": [
            "Galatasaray",
            "Universidad Catolica",
            "Fiorentina",
            "Antofagasta",
            "Flamengo",
            "Bologna"
        ]
    },
    {
        "id": 571,
        "nombre": "Gabriel Suazo",
        "nacionalidad": "Chile",
        "clubes": [
            "Colo-Colo",
            "Toulouse"
        ]
    },
    {
        "id": 572,
        "nombre": "Johan Vasquez",
        "nacionalidad": "México",
        "clubes": [
            "Pumas UNAM",
            "Monterrey",
            "Necaxa",
            "Cimarrones",
            "Genoa",
            "Cremonese"
        ]
    },
    {
        "id": 573,
        "nombre": "Cesar Montes",
        "nacionalidad": "México",
        "clubes": [
            "Espanyol",
            "Lokomotiv Moscow",
            "Monterrey",
            "Almeria"
        ]
    },
    {
        "id": 574,
        "nombre": "Jorge Sanchez",
        "nacionalidad": "México",
        "clubes": [
            "America",
            "Ajax",
            "Santos Laguna",
            "Porto",
            "Cruz Azul"
        ]
    },
    {
        "id": 575,
        "nombre": "Gerardo Arteaga",
        "nacionalidad": "México",
        "clubes": [
            "Genk",
            "Santos Laguna",
            "Monterrey"
        ]
    },
    {
        "id": 576,
        "nombre": "Luis Chavez",
        "nacionalidad": "México",
        "clubes": [
            "Tijuana",
            "Dynamo Moscow",
            "Pachuca"
        ]
    },
    {
        "id": 577,
        "nombre": "Orbelin Pineda",
        "nacionalidad": "México",
        "clubes": [
            "Querétaro",
            "AEK Athens",
            "Celta Vigo",
            "Guadalajara",
            "Cruz Azul"
        ]
    },
    {
        "id": 578,
        "nombre": "Uriel Antuna",
        "nacionalidad": "México",
        "clubes": [
            "LA Galaxy",
            "Tigres UANL",
            "Groningen",
            "Santos Laguna",
            "Guadalajara",
            "Cruz Azul"
        ]
    },
    {
        "id": 579,
        "nombre": "Henry Martin",
        "nacionalidad": "México",
        "clubes": [
            "Mérida",
            "Club America",
            "Tijuana"
        ]
    },
    {
        "id": 580,
        "nombre": "Julian Quiñones",
        "nacionalidad": "México",
        "clubes": [
            "Lobos BUAP",
            "Tigres UANL",
            "Atlas",
            "Club America",
            "Al Qadsiah",
            "Venados"
        ]
    },
    {
        "id": 581,
        "nombre": "Carlos Vela",
        "nacionalidad": "México",
        "clubes": [
            "LAFC",
            "Arsenal",
            "Real Sociedad",
            "West Brom",
            "Salamanca",
            "Celta Vigo",
            "Osasuna"
        ]
    },
    {
        "id": 582,
        "nombre": "Giovani dos Santos",
        "nacionalidad": "México",
        "clubes": [
            "Racing Santander",
            "Barcelona",
            "Galatasaray",
            "LA Galaxy",
            "Club America",
            "Tottenham",
            "Villarreal",
            "Ipswich Town",
            "Mallorca"
        ]
    },
    {
        "id": 583,
        "nombre": "Jonathan dos Santos",
        "nacionalidad": "México",
        "clubes": [
            "LA Galaxy",
            "Villarreal",
            "Club America",
            "Barcelona"
        ]
    },
    {
        "id": 584,
        "nombre": "Hector Herrera",
        "nacionalidad": "México",
        "clubes": [
            "Porto",
            "Atletico Madrid",
            "Houston Dynamo",
            "Pachuca"
        ]
    },
    {
        "id": 585,
        "nombre": "Diego Lainez",
        "nacionalidad": "México",
        "clubes": [
            "Braga",
            "Club America",
            "Real Betis",
            "Tigres UANL"
        ]
    },
    {
        "id": 586,
        "nombre": "Mehdi Benatia",
        "nacionalidad": "Marruecos",
        "clubes": [
            "Tours",
            "Juventus",
            "Al-Duhail",
            "Clermont",
            "AS Roma",
            "Udinese",
            "Lorient",
            "Bayern Munich",
            "Marseille"
        ]
    },
    {
        "id": 587,
        "nombre": "Nordin Amrabat",
        "nacionalidad": "Marruecos",
        "clubes": [
            "PSV",
            "VVV-Venlo",
            "Galatasaray",
            "Al Nassr",
            "AEK Athens",
            "Malaga",
            "Watford",
            "FC Omniworld",
            "Kayserispor",
            "Leganes"
        ]
    },
    {
        "id": 588,
        "nombre": "Adel Taarabt",
        "nacionalidad": "Marruecos",
        "clubes": [
            "QPR",
            "AC Milan",
            "Tottenham",
            "Al Nasr",
            "Lens",
            "Fulham",
            "Genoa",
            "Benfica"
        ]
    },
    {
        "id": 589,
        "nombre": "Marouane Chamakh",
        "nacionalidad": "Marruecos",
        "clubes": [
            "Arsenal",
            "Bordeaux",
            "Crystal Palace",
            "West Ham",
            "Cardiff City"
        ]
    },
    {
        "id": 590,
        "nombre": "Demba Ba",
        "nacionalidad": "Senegal",
        "clubes": [
            "Shanghai Shenhua",
            "Lugano",
            "Chelsea",
            "West Ham",
            "Hoffenheim",
            "Mouscron",
            "Rouen",
            "Besiktas",
            "Newcastle",
            "Basaksehir"
        ]
    },
    {
        "id": 591,
        "nombre": "Papiss Cisse",
        "nacionalidad": "Senegal",
        "clubes": [
            "Freiburg",
            "Metz",
            "Shandong Luneng",
            "Fenerbahce",
            "Chateauroux",
            "Cherbourg",
            "Alanyaspor",
            "Newcastle",
            "Amiens"
        ]
    },
    {
        "id": 592,
        "nombre": "M'Baye Niang",
        "nacionalidad": "Senegal",
        "clubes": [
            "Auxerre",
            "Al Ahli",
            "Torino",
            "AC Milan",
            "Bordeaux",
            "Rennes",
            "Caen",
            "Montpellier",
            "Empoli",
            "Watford",
            "Genoa"
        ]
    },
    {
        "id": 593,
        "nombre": "Cheikhou Kouyate",
        "nacionalidad": "Senegal",
        "clubes": [
            "Crystal Palace",
            "Brussels",
            "West Ham",
            "Nottingham Forest",
            "Anderlecht"
        ]
    },
    {
        "id": 594,
        "nombre": "Diego Laxalt",
        "nacionalidad": "Uruguay",
        "clubes": [
            "Genoa",
            "Torino",
            "AC Milan",
            "Celtic",
            "Empoli",
            "Dynamo Moscow",
            "Defensor Sporting",
            "Bologna"
        ]
    },
    {
        "id": 595,
        "nombre": "Gastón Pereiro",
        "nacionalidad": "Uruguay",
        "clubes": [
            "Cagliari",
            "Ternana",
            "PSV",
            "Nacional"
        ]
    },
    {
        "id": 596,
        "nombre": "Federico Ricca",
        "nacionalidad": "Uruguay",
        "clubes": [
            "Leuven",
            "Malaga",
            "Danubio",
            "Club Brugge"
        ]
    },
    {
        "id": 597,
        "nombre": "Samuel Eto'o",
        "nacionalidad": "Camerún",
        "clubes": [
            "Espanyol",
            "Everton",
            "Inter Milan",
            "Barcelona",
            "Antalyaspor",
            "Konyaspor",
            "Sampdoria",
            "Qatar SC",
            "Chelsea",
            "Real Madrid",
            "Anzhi",
            "Leganes",
            "Mallorca"
        ]
    },
    {
        "id": 598,
        "nombre": "Alex Song",
        "nacionalidad": "Camerún",
        "clubes": [
            "Rubin Kazan",
            "Sion",
            "Arsenal",
            "Barcelona",
            "Bastia",
            "West Ham",
            "Charlton"
        ]
    },
    {
        "id": 599,
        "nombre": "Joel Matip",
        "nacionalidad": "Camerún",
        "clubes": [
            "Schalke 04",
            "Liverpool"
        ]
    },
    {
        "id": 600,
        "nombre": "Giovanni Simeone",
        "nacionalidad": "Argentina",
        "clubes": [
            "River Plate",
            "Fiorentina",
            "Banfield",
            "Genoa",
            "Napoli",
            "Verona"
        ]
    },
    {
        "id": 601,
        "nombre": "Lucas Alario",
        "nacionalidad": "Argentina",
        "clubes": [
            "River Plate",
            "Colon",
            "Eintracht Frankfurt",
            "Bayer Leverkusen",
            "Internacional"
        ]
    },
    {
        "id": 602,
        "nombre": "Manuel Lanzini",
        "nacionalidad": "Argentina",
        "clubes": [
            "Fluminense",
            "Al Jazira",
            "West Ham",
            "River Plate"
        ]
    },
    {
        "id": 603,
        "nombre": "Facundo Roncaglia",
        "nacionalidad": "Argentina",
        "clubes": [
            "Espanyol",
            "Genoa",
            "Estudiantes",
            "Boca Juniors",
            "Celta Vigo",
            "Fiorentina",
            "Osasuna",
            "Aris",
            "Valencia"
        ]
    },
    {
        "id": 604,
        "nombre": "Franco Cervi",
        "nacionalidad": "Argentina",
        "clubes": [
            "Rosario Central",
            "Benfica",
            "Celta Vigo"
        ]
    },
    {
        "id": 605,
        "nombre": "Sebastian Driussi",
        "nacionalidad": "Argentina",
        "clubes": [
            "Austin FC",
            "River Plate",
            "Zenit"
        ]
    },
    {
        "id": 606,
        "nombre": "Matias Kranevitter",
        "nacionalidad": "Argentina",
        "clubes": [
            "River Plate",
            "Monterrey",
            "Sevilla",
            "Atletico Madrid",
            "Zenit"
        ]
    },
    {
        "id": 607,
        "nombre": "Augusto Fernandez",
        "nacionalidad": "Argentina",
        "clubes": [
            "River Plate",
            "Saint-Etienne",
            "Atletico Madrid",
            "Celta Vigo",
            "Cadiz",
            "Velez Sarsfield",
            "Beijing Renhe"
        ]
    },
    {
        "id": 608,
        "nombre": "Nicolas Gaitan",
        "nacionalidad": "Argentina",
        "clubes": [
            "Paços de Ferreira",
            "Dalian Yifang",
            "Atletico Madrid",
            "Boca Juniors",
            "Braga",
            "Chicago Fire",
            "Lille",
            "Benfica"
        ]
    },
    {
        "id": 609,
        "nombre": "Eduardo Salvio",
        "nacionalidad": "Argentina",
        "clubes": [
            "Pumas UNAM",
            "Lanús",
            "Atletico Madrid",
            "Boca Juniors",
            "Benfica"
        ]
    },
    {
        "id": 610,
        "nombre": "Lisandro Lopez defender",
        "nacionalidad": "Argentina",
        "clubes": [
            "Chacarita",
            "Inter Milan",
            "Getafe",
            "Tijuana",
            "Arsenal Sarandi",
            "Boca Juniors",
            "Genoa",
            "Benfica"
        ]
    },
    {
        "id": 611,
        "nombre": "Everton Soares",
        "nacionalidad": "Brasil",
        "clubes": [
            "Flamengo",
            "Benfica",
            "Gremio"
        ]
    },
    {
        "id": 612,
        "nombre": "Pedro Guilherme",
        "nacionalidad": "Brasil",
        "clubes": [
            "Fluminense",
            "Fiorentina",
            "Flamengo"
        ]
    },
    {
        "id": 613,
        "nombre": "Gabriel Barbosa",
        "nacionalidad": "Brasil",
        "clubes": [
            "Inter Milan",
            "Flamengo",
            "Benfica",
            "Santos"
        ]
    },
    {
        "id": 614,
        "nombre": "Ganso Ganso",
        "nacionalidad": "Brasil",
        "clubes": [
            "Fluminense",
            "Sevilla",
            "Sao Paulo",
            "Santos"
        ]
    },
    {
        "id": 615,
        "nombre": "Luiz Adriano",
        "nacionalidad": "Brasil",
        "clubes": [
            "Antalyaspor",
            "AC Milan",
            "Shakhtar Donetsk",
            "Spartak Moscow",
            "Palmeiras",
            "Internacional"
        ]
    },
    {
        "id": 616,
        "nombre": "Taison Barcellos",
        "nacionalidad": "Brasil",
        "clubes": [
            "PAOK",
            "Shakhtar Donetsk",
            "Metalist",
            "Internacional"
        ]
    },
    {
        "id": 617,
        "nombre": "Otavio Henrique",
        "nacionalidad": "Brasil",
        "clubes": [
            "Porto",
            "Famalicão",
            "Bordeaux",
            "Athletico Paranaense"
        ]
    },
    {
        "id": 618,
        "nombre": "Wendel da Silva",
        "nacionalidad": "Brasil",
        "clubes": [
            "Fluminense",
            "Sporting CP",
            "Zenit"
        ]
    },
    {
        "id": 619,
        "nombre": "Allan Marques",
        "nacionalidad": "Brasil",
        "clubes": [
            "Everton",
            "Al Wahda",
            "Granada",
            "Botafogo",
            "Udinese",
            "Vasco da Gama",
            "Napoli"
        ]
    },
    {
        "id": 620,
        "nombre": "Gustavo Scarpa",
        "nacionalidad": "Brasil",
        "clubes": [
            "Atletico Mineiro",
            "Fluminense",
            "Olympiacos",
            "Nottingham Forest",
            "Palmeiras"
        ]
    },
    {
        "id": 621,
        "nombre": "Danilo dos Santos",
        "nacionalidad": "Brasil",
        "clubes": [
            "Palmeiras",
            "Nottingham Forest"
        ]
    },
    {
        "id": 622,
        "nombre": "Renan Lodi",
        "nacionalidad": "Brasil",
        "clubes": [
            "Al Hilal",
            "Atletico Madrid",
            "Nottingham Forest",
            "Marseille",
            "Athletico Paranaense"
        ]
    },
    {
        "id": 623,
        "nombre": "Luiz Henrique",
        "nacionalidad": "Brasil",
        "clubes": [
            "Fluminense",
            "Botafogo",
            "Real Betis"
        ]
    },
    {
        "id": 624,
        "nombre": "Abner Vinicius",
        "nacionalidad": "Brasil",
        "clubes": [
            "Lyon",
            "Ponte Preta",
            "Real Betis",
            "Athletico Paranaense"
        ]
    },
    {
        "id": 625,
        "nombre": "Luiz Gustavo",
        "nacionalidad": "Brasil",
        "clubes": [
            "Fenerbahce",
            "Al Nassr",
            "Sao Paulo",
            "Wolfsburg",
            "Corinthians Alagoano",
            "Bayern Munich",
            "Hoffenheim",
            "Marseille"
        ]
    },
    {
        "id": 626,
        "nombre": "Dante Bonfim",
        "nacionalidad": "Brasil",
        "clubes": [
            "Lille",
            "Monchengladbach",
            "Nice",
            "Charleroi",
            "Wolfsburg",
            "Standard Liege",
            "Bayern Munich",
            "Juventude"
        ]
    },
    {
        "id": 627,
        "nombre": "Rafinha Souza",
        "nacionalidad": "Brasil",
        "clubes": [
            "Schalke 04",
            "Sao Paulo",
            "Gremio",
            "Olympiacos",
            "Bayern Munich",
            "Coritiba",
            "Genoa",
            "Flamengo"
        ]
    },
    {
        "id": 628,
        "nombre": "Juan Fernando Quintero",
        "nacionalidad": "Colombia",
        "clubes": [
            "Pescara",
            "Envigado",
            "River Plate",
            "Rennes",
            "Porto",
            "Atletico Nacional",
            "Racing Club",
            "Junior"
        ]
    },
    {
        "id": 629,
        "nombre": "Edwin Cardona",
        "nacionalidad": "Colombia",
        "clubes": [
            "Monterrey",
            "Pachuca",
            "Tijuana",
            "America de Cali",
            "Boca Juniors",
            "Atletico Nacional",
            "Racing Club",
            "Junior",
            "Santa Fe"
        ]
    },
    {
        "id": 630,
        "nombre": "Moussa Sissoko",
        "nacionalidad": "Francia",
        "clubes": [
            "Nantes",
            "Tottenham",
            "Watford",
            "Toulouse",
            "Newcastle"
        ]
    },
    {
        "id": 631,
        "nombre": "Etienne Capoue",
        "nacionalidad": "Francia",
        "clubes": [
            "Toulouse",
            "Tottenham",
            "Villarreal",
            "Watford"
        ]
    },
    {
        "id": 632,
        "nombre": "William Gallas",
        "nacionalidad": "Francia",
        "clubes": [
            "Arsenal",
            "Chelsea",
            "Tottenham",
            "Perth Glory",
            "Caen",
            "Marseille"
        ]
    },
    {
        "id": 633,
        "nombre": "Louis Saha",
        "nacionalidad": "Francia",
        "clubes": [
            "Everton",
            "Metz",
            "Sunderland",
            "Lazio",
            "Tottenham",
            "Fulham",
            "Newcastle",
            "Manchester United"
        ]
    },
    {
        "id": 634,
        "nombre": "David Ginola",
        "nacionalidad": "Francia",
        "clubes": [
            "Everton",
            "PSG",
            "Brest",
            "Toulon",
            "Tottenham",
            "Aston Villa",
            "Racing Club",
            "Newcastle"
        ]
    },
    {
        "id": 635,
        "nombre": "Steed Malbranque",
        "nacionalidad": "Francia",
        "clubes": [
            "Sunderland",
            "Saint-Etienne",
            "Lyon",
            "Tottenham",
            "Fulham"
        ]
    },
    {
        "id": 636,
        "nombre": "Pascal Chimbonda",
        "nacionalidad": "Francia",
        "clubes": [
            "Sunderland",
            "QPR",
            "Blackburn Rovers",
            "Tottenham",
            "Wigan",
            "Bastia",
            "Le Havre"
        ]
    },
    {
        "id": 637,
        "nombre": "Djibril Cisse",
        "nacionalidad": "Francia",
        "clubes": [
            "Sunderland",
            "Auxerre",
            "Panathinaikos",
            "QPR",
            "Lazio",
            "Bastia",
            "Liverpool",
            "Kuban Krasnodar",
            "Marseille",
            "Al Gharafa"
        ]
    },
    {
        "id": 638,
        "nombre": "Yoann Gourcuff",
        "nacionalidad": "Francia",
        "clubes": [
            "AC Milan",
            "Lyon",
            "Rennes",
            "Bordeaux"
        ]
    },
    {
        "id": 639,
        "nombre": "Jeremy Menez",
        "nacionalidad": "Francia",
        "clubes": [
            "PSG",
            "Paris FC",
            "Antalyaspor",
            "AC Milan",
            "Bordeaux",
            "Club America",
            "AS Roma",
            "Monaco",
            "Sochaux",
            "Bari",
            "Reggina"
        ]
    },
    {
        "id": 640,
        "nombre": "Philippe Mexes",
        "nacionalidad": "Francia",
        "clubes": [
            "Auxerre",
            "AC Milan",
            "AS Roma"
        ]
    },
    {
        "id": 641,
        "nombre": "Adil Rami",
        "nacionalidad": "Francia",
        "clubes": [
            "Fenerbahce",
            "Troyes",
            "AC Milan",
            "Sochaux",
            "Sevilla",
            "Marseille",
            "Lille",
            "Valencia"
        ]
    },
    {
        "id": 642,
        "nombre": "Mathieu Debuchy",
        "nacionalidad": "Francia",
        "clubes": [
            "Arsenal",
            "Saint-Etienne",
            "Bordeaux",
            "Valenciennes",
            "Lille",
            "Newcastle"
        ]
    },
    {
        "id": 643,
        "nombre": "Gael Clichy",
        "nacionalidad": "Francia",
        "clubes": [
            "Cannes",
            "Arsenal",
            "Servette",
            "Manchester City",
            "Basaksehir"
        ]
    },
    {
        "id": 644,
        "nombre": "Mikael Silvestre",
        "nacionalidad": "Francia",
        "clubes": [
            "Inter Milan",
            "Arsenal",
            "Portland Timbers",
            "Rennes",
            "Werder Bremen",
            "Manchester United"
        ]
    },
    {
        "id": 645,
        "nombre": "Laurent Koscielny",
        "nacionalidad": "Francia",
        "clubes": [
            "Tours",
            "Arsenal",
            "Guingamp",
            "Bordeaux",
            "Lorient"
        ]
    },
    {
        "id": 646,
        "nombre": "Gianluca Zambrotta",
        "nacionalidad": "Italia",
        "clubes": [
            "Barcelona",
            "Como",
            "Juventus",
            "AC Milan",
            "Chiasso",
            "Bari"
        ]
    },
    {
        "id": 647,
        "nombre": "Mauro Camoranesi",
        "nacionalidad": "Italia",
        "clubes": [
            "Juventus",
            "Lanús",
            "Santos Laguna",
            "Banfield",
            "Stuttgart",
            "Racing Club",
            "Montevideo Wanderers",
            "Cruz Azul",
            "Verona"
        ]
    },
    {
        "id": 648,
        "nombre": "Fabio Grosso",
        "nacionalidad": "Italia",
        "clubes": [
            "Inter Milan",
            "Palermo",
            "Juventus",
            "Lyon",
            "Perugia",
            "Chieti"
        ]
    },
    {
        "id": 649,
        "nombre": "Marco Materazzi",
        "nacionalidad": "Italia",
        "clubes": [
            "Everton",
            "Perugia",
            "Inter Milan",
            "Chennaiyin"
        ]
    },
    {
        "id": 650,
        "nombre": "Vincenzo Iaquinta",
        "nacionalidad": "Italia",
        "clubes": [
            "Cesena",
            "Juventus",
            "Padova",
            "Udinese",
            "Castel di Sangro",
            "Reggiolo"
        ]
    },
    {
        "id": 651,
        "nombre": "Alberto Gilardino",
        "nacionalidad": "Italia",
        "clubes": [
            "Genoa",
            "Palermo",
            "Parma",
            "Pescara",
            "AC Milan",
            "Piacenza",
            "Spezia",
            "Guangzhou Evergrande",
            "Empoli",
            "Fiorentina",
            "Bologna",
            "Verona"
        ]
    },
    {
        "id": 652,
        "nombre": "Luca Toni",
        "nacionalidad": "Italia",
        "clubes": [
            "Genoa",
            "Palermo",
            "Juventus",
            "Modena",
            "Treviso",
            "Brescia",
            "AS Roma",
            "Empoli",
            "Vicenza",
            "Bayern Munich",
            "Fiorentina",
            "Lodigiani",
            "Al Nasr",
            "Fiorenzuola",
            "Verona"
        ]
    },
    {
        "id": 653,
        "nombre": "Simone Perrotta",
        "nacionalidad": "Italia",
        "clubes": [
            "Juventus",
            "AS Roma",
            "Bari",
            "Chievo",
            "Reggina"
        ]
    },
    {
        "id": 654,
        "nombre": "Massimo Oddo",
        "nacionalidad": "Italia",
        "clubes": [
            "Lecce",
            "Monza",
            "AC Milan",
            "Lazio",
            "Fiorenzuola",
            "Lecco",
            "Prato",
            "Bayern Munich",
            "Napoli",
            "Verona"
        ]
    },
    {
        "id": 655,
        "nombre": "Cristian Zaccardo",
        "nacionalidad": "Italia",
        "clubes": [
            "Palermo",
            "Parma",
            "AC Milan",
            "Spezia",
            "Wolfsburg",
            "Carpi",
            "Vicenza",
            "Bologna"
        ]
    },
    {
        "id": 656,
        "nombre": "Simone Barone",
        "nacionalidad": "Italia",
        "clubes": [
            "Palermo",
            "Parma",
            "Livorno",
            "Torino",
            "Cagliari",
            "Alzano Virescit",
            "Chievo"
        ]
    },
    {
        "id": 657,
        "nombre": "Marco Amelia",
        "nacionalidad": "Italia",
        "clubes": [
            "Palermo",
            "Livorno",
            "AC Milan",
            "Chelsea",
            "Perugia",
            "Vicenza",
            "Genoa",
            "Lecce"
        ]
    },
    {
        "id": 658,
        "nombre": "Helder Postiga",
        "nacionalidad": "Portugal",
        "clubes": [
            "Zaragoza",
            "Sporting CP",
            "Panathinaikos",
            "Saint-Etienne",
            "Lazio",
            "Tottenham",
            "Deportivo",
            "Rio Ave",
            "Porto",
            "Valencia"
        ]
    },
    {
        "id": 659,
        "nombre": "Hugo Viana",
        "nacionalidad": "Portugal",
        "clubes": [
            "Sporting CP",
            "Al Ahli",
            "Al Wasl",
            "Braga",
            "Osasuna",
            "Newcastle",
            "Valencia"
        ]
    },
    {
        "id": 660,
        "nombre": "Miguel Monteiro",
        "nacionalidad": "Portugal",
        "clubes": [
            "Estrela Amadora",
            "Benfica",
            "Valencia"
        ]
    },
    {
        "id": 661,
        "nombre": "Manuel Fernandes",
        "nacionalidad": "Portugal",
        "clubes": [
            "Everton",
            "Lokomotiv Moscow",
            "Krasnodar",
            "Portsmouth",
            "Besiktas",
            "Kayserispor",
            "Benfica",
            "Valencia"
        ]
    },
    {
        "id": 662,
        "nombre": "Joao Pereira",
        "nacionalidad": "Portugal",
        "clubes": [
            "Sporting CP",
            "Trabzonspor",
            "Hannover 96",
            "Gil Vicente",
            "Braga",
            "Benfica",
            "Valencia"
        ]
    },
    {
        "id": 663,
        "nombre": "Ricardo Costa",
        "nacionalidad": "Portugal",
        "clubes": [
            "PAOK",
            "Tondela",
            "Al-Sailiya",
            "Granada",
            "Luzern",
            "Wolfsburg",
            "Boavista",
            "Porto",
            "Lille",
            "Valencia"
        ]
    },
    {
        "id": 664,
        "nombre": "Luis Neto",
        "nacionalidad": "Portugal",
        "clubes": [
            "Sporting CP",
            "Fenerbahce",
            "Nacional",
            "Varzim",
            "Siena",
            "Zenit"
        ]
    },
    {
        "id": 665,
        "nombre": "Rolando Fonseca",
        "nacionalidad": "Portugal",
        "clubes": [
            "Braga",
            "Inter Milan",
            "Belenenses",
            "Porto",
            "Napoli",
            "Marseille",
            "Anderlecht"
        ]
    },
    {
        "id": 666,
        "nombre": "Miguel Veloso",
        "nacionalidad": "Portugal",
        "clubes": [
            "Sporting CP",
            "Olivais e Moscavide",
            "Pisa",
            "Dynamo Kyiv",
            "Genoa",
            "Verona"
        ]
    },
    {
        "id": 667,
        "nombre": "Silvestre Varela",
        "nacionalidad": "Portugal",
        "clubes": [
            "Sporting CP",
            "Belenenses SAD",
            "Recreativo",
            "Parma",
            "Setubal",
            "Casa Pia",
            "West Brom",
            "Porto",
            "Kayserispor"
        ]
    },
    {
        "id": 668,
        "nombre": "Eliseu Pereira",
        "nacionalidad": "Portugal",
        "clubes": [
            "Zaragoza",
            "Lazio",
            "Malaga",
            "Belenenses",
            "Benfica"
        ]
    },
    {
        "id": 669,
        "nombre": "Jermaine Jenas",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "QPR",
            "Tottenham",
            "Nottingham Forest",
            "Aston Villa",
            "Newcastle"
        ]
    },
    {
        "id": 670,
        "nombre": "Tom Huddlestone",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Wolves",
            "Hull City",
            "Tottenham",
            "Manchester United",
            "Derby County"
        ]
    },
    {
        "id": 671,
        "nombre": "Michael Dawson",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Hull City",
            "Tottenham",
            "Nottingham Forest"
        ]
    },
    {
        "id": 672,
        "nombre": "Benoit Assou-Ekotto",
        "nacionalidad": "Camerún",
        "clubes": [
            "Metz",
            "QPR",
            "Saint-Etienne",
            "Tottenham",
            "Lens"
        ]
    },
    {
        "id": 673,
        "nombre": "Sebastien Bassong",
        "nacionalidad": "Camerún",
        "clubes": [
            "Metz",
            "Tottenham",
            "Newcastle",
            "Watford",
            "Norwich"
        ]
    },
    {
        "id": 674,
        "nombre": "Vedran Corluka",
        "nacionalidad": "Croacia",
        "clubes": [
            "Dinamo Zagreb",
            "Lokomotiv Moscow",
            "Inter Zapresic",
            "Tottenham",
            "Bayer Leverkusen",
            "Manchester City"
        ]
    },
    {
        "id": 675,
        "nombre": "Niko Kranjcar",
        "nacionalidad": "Croacia",
        "clubes": [
            "Dinamo Zagreb",
            "QPR",
            "Hajduk Split",
            "Tottenham",
            "Rangers",
            "Portsmouth",
            "New York Cosmos",
            "Dynamo Kyiv"
        ]
    },
    {
        "id": 676,
        "nombre": "Stipe Pletikosa",
        "nacionalidad": "Croacia",
        "clubes": [
            "Hajduk Split",
            "Tottenham",
            "Deportivo",
            "Shakhtar Donetsk",
            "Spartak Moscow",
            "Rostov"
        ]
    },
    {
        "id": 677,
        "nombre": "Steven Pienaar",
        "nacionalidad": "Sudáfrica",
        "clubes": [
            "Everton",
            "Sunderland",
            "Ajax",
            "Tottenham",
            "Dortmund",
            "Bidvest Wits"
        ]
    },
    {
        "id": 678,
        "nombre": "Jorge Valdivia",
        "nacionalidad": "Chile",
        "clubes": [
            "Universidad de Chile",
            "Colo-Colo",
            "Al Ain",
            "Rayo Vallecano",
            "Servette",
            "Monarcas Morelia",
            "Palmeiras"
        ]
    },
    {
        "id": 679,
        "nombre": "Humberto Suazo",
        "nacionalidad": "México",
        "clubes": [
            "Zaragoza",
            "Colo-Colo",
            "San Luis",
            "Monterrey"
        ]
    },
    {
        "id": 680,
        "nombre": "Alvaro Odriozola",
        "nacionalidad": "España",
        "clubes": [
            "Real Sociedad",
            "Fiorentina",
            "Real Madrid",
            "Bayern Munich"
        ]
    },
    {
        "id": 681,
        "nombre": "Diego Llorente",
        "nacionalidad": "España",
        "clubes": [
            "Real Sociedad",
            "Leeds United",
            "Rayo Vallecano",
            "Malaga",
            "AS Roma",
            "Real Betis",
            "Real Madrid"
        ]
    },
    {
        "id": 682,
        "nombre": "Jesus Vallejo",
        "nacionalidad": "España",
        "clubes": [
            "Zaragoza",
            "Wolves",
            "Granada",
            "Eintracht Frankfurt",
            "Real Madrid"
        ]
    },
    {
        "id": 683,
        "nombre": "Mario Hermoso",
        "nacionalidad": "España",
        "clubes": [
            "Espanyol",
            "AS Roma",
            "Atletico Madrid",
            "Real Madrid",
            "Valladolid"
        ]
    },
    {
        "id": 684,
        "nombre": "Sergio Canales",
        "nacionalidad": "España",
        "clubes": [
            "Racing Santander",
            "Monterrey",
            "Real Sociedad",
            "Real Betis",
            "Real Madrid",
            "Valencia"
        ]
    },
    {
        "id": 685,
        "nombre": "Esteban Granero",
        "nacionalidad": "España",
        "clubes": [
            "Espanyol",
            "QPR",
            "Real Sociedad",
            "Getafe",
            "Real Madrid"
        ]
    },
    {
        "id": 686,
        "nombre": "Asier Illarramendi",
        "nacionalidad": "España",
        "clubes": [
            "Real Sociedad",
            "Real Madrid",
            "Dallas"
        ]
    },
    {
        "id": 687,
        "nombre": "Inigo Lekue",
        "nacionalidad": "España",
        "clubes": [
            "Athletic Bilbao"
        ]
    },
    {
        "id": 688,
        "nombre": "Oscar de Marcos",
        "nacionalidad": "España",
        "clubes": [
            "Athletic Bilbao",
            "Alaves"
        ]
    },
    {
        "id": 689,
        "nombre": "Mikel Balenziaga",
        "nacionalidad": "España",
        "clubes": [
            "Athletic Bilbao",
            "Valladolid",
            "Numancia",
            "Deportivo"
        ]
    },
    {
        "id": 690,
        "nombre": "Alex Berenguer",
        "nacionalidad": "España",
        "clubes": [
            "Athletic Bilbao",
            "Torino",
            "Osasuna"
        ]
    },
    {
        "id": 691,
        "nombre": "Yeray Alvarez",
        "nacionalidad": "España",
        "clubes": [
            "Athletic Bilbao"
        ]
    },
    {
        "id": 692,
        "nombre": "Unai Nuñez",
        "nacionalidad": "España",
        "clubes": [
            "Athletic Bilbao",
            "Celta Vigo"
        ]
    },
    {
        "id": 693,
        "nombre": "Dani Garcia",
        "nacionalidad": "España",
        "clubes": [
            "Athletic Bilbao",
            "Olympiacos",
            "Eibar"
        ]
    },
    {
        "id": 694,
        "nombre": "Raul Garcia Escudero",
        "nacionalidad": "España",
        "clubes": [
            "Athletic Bilbao",
            "Osasuna",
            "Atletico Madrid"
        ]
    },
    {
        "id": 695,
        "nombre": "Joaquin Sanchez",
        "nacionalidad": "España",
        "clubes": [
            "Malaga",
            "Real Betis",
            "Fiorentina",
            "Valencia"
        ]
    },
    {
        "id": 696,
        "nombre": "Borja Mayoral",
        "nacionalidad": "España",
        "clubes": [
            "Levante",
            "Getafe",
            "Roma",
            "Wolfsburg",
            "Real Madrid"
        ]
    },
    {
        "id": 697,
        "nombre": "Mariano Diaz",
        "nacionalidad": "España",
        "clubes": [
            "Real Madrid",
            "Lyon",
            "Sevilla"
        ]
    },
    {
        "id": 698,
        "nombre": "Nolito Agudo",
        "nacionalidad": "España",
        "clubes": [
            "Barcelona",
            "Sevilla",
            "Granada",
            "Celta Vigo",
            "Manchester City",
            "Benfica",
            "Ibiza"
        ]
    },
    {
        "id": 699,
        "nombre": "Vitolo Machin",
        "nacionalidad": "España",
        "clubes": [
            "Getafe",
            "Las Palmas",
            "Sevilla",
            "Atletico Madrid"
        ]
    },
    {
        "id": 700,
        "nombre": "Aleix Vidal",
        "nacionalidad": "España",
        "clubes": [
            "Espanyol",
            "Barcelona",
            "Almeria",
            "Alaves",
            "Sevilla"
        ]
    },
    {
        "id": 701,
        "nombre": "Oliver Torres",
        "nacionalidad": "España",
        "clubes": [
            "Monterrey",
            "Sevilla",
            "Villarreal",
            "Atletico Madrid",
            "Porto"
        ]
    },
    {
        "id": 702,
        "nombre": "Munir El Haddadi",
        "nacionalidad": "Marruecos",
        "clubes": [
            "Barcelona",
            "Sevilla",
            "Alaves",
            "Getafe",
            "Las Palmas",
            "Leganes",
            "Valencia"
        ]
    },
    {
        "id": 703,
        "nombre": "Lucas Perez",
        "nacionalidad": "España",
        "clubes": [
            "Elche",
            "Arsenal",
            "PAOK",
            "Alaves",
            "Deportivo",
            "Rayo Vallecano",
            "West Ham",
            "Karpaty Lviv",
            "Cadiz"
        ]
    },
    {
        "id": 704,
        "nombre": "Santi Mina",
        "nacionalidad": "España",
        "clubes": [
            "Al Shabab",
            "Valencia",
            "Celta Vigo"
        ]
    },
    {
        "id": 705,
        "nombre": "Javi Martinez",
        "nacionalidad": "España",
        "clubes": [
            "Athletic Bilbao",
            "Qatar SC",
            "Bayern Munich"
        ]
    },
    {
        "id": 706,
        "nombre": "Jose Callejon",
        "nacionalidad": "España",
        "clubes": [
            "Espanyol",
            "Real Madrid",
            "Granada",
            "Fiorentina",
            "Napoli"
        ]
    },
    {
        "id": 707,
        "nombre": "Guti Hernandez",
        "nacionalidad": "España",
        "clubes": [
            "Real Madrid",
            "Besiktas"
        ]
    },
    {
        "id": 708,
        "nombre": "Luciano Vietto",
        "nacionalidad": "Argentina",
        "clubes": [
            "Sporting CP",
            "Al Hilal",
            "Sevilla",
            "Villarreal",
            "Atletico Madrid",
            "Fulham",
            "Racing Club",
            "Valencia"
        ]
    },
    {
        "id": 709,
        "nombre": "Mateo Musacchio",
        "nacionalidad": "Argentina",
        "clubes": [
            "AC Milan",
            "Lazio",
            "River Plate",
            "Villarreal"
        ]
    },
    {
        "id": 710,
        "nombre": "Roberto Pereyra",
        "nacionalidad": "Argentina",
        "clubes": [
            "River Plate",
            "Juventus",
            "AEK Athens",
            "Udinese",
            "Watford"
        ]
    },
    {
        "id": 711,
        "nombre": "Erik Lamela",
        "nacionalidad": "Argentina",
        "clubes": [
            "River Plate",
            "Sevilla",
            "Tottenham",
            "AEK Athens",
            "AS Roma"
        ]
    },
    {
        "id": 712,
        "nombre": "Ricky Alvarez",
        "nacionalidad": "Argentina",
        "clubes": [
            "Sunderland",
            "Inter Milan",
            "Velez",
            "Sampdoria",
            "Atlas"
        ]
    },
    {
        "id": 713,
        "nombre": "Javier Pastore",
        "nacionalidad": "Argentina",
        "clubes": [
            "Elche",
            "PSG",
            "Palermo",
            "AS Roma",
            "Huracan"
        ]
    },
    {
        "id": 714,
        "nombre": "Lucho Gonzalez",
        "nacionalidad": "Argentina",
        "clubes": [
            "River Plate",
            "Huracan",
            "Porto",
            "Marseille",
            "Athletico Paranaense"
        ]
    },
    {
        "id": 715,
        "nombre": "Ever Banega",
        "nacionalidad": "Argentina",
        "clubes": [
            "Inter Milan",
            "Newell's Old Boys",
            "Al Shabab",
            "Sevilla",
            "Atletico Madrid",
            "Boca Juniors",
            "Valencia"
        ]
    },
    {
        "id": 716,
        "nombre": "Jose Sosa",
        "nacionalidad": "Argentina",
        "clubes": [
            "Trabzonspor",
            "Fenerbahce",
            "AC Milan",
            "Metalist",
            "Atletico Madrid",
            "Bayern Munich",
            "Estudiantes",
            "Besiktas",
            "Napoli"
        ]
    },
    {
        "id": 717,
        "nombre": "Gareth Barry",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Aston Villa",
            "Everton",
            "Manchester City",
            "West Brom"
        ]
    },
    {
        "id": 718,
        "nombre": "Younes Belhanda",
        "nacionalidad": "Marruecos",
        "clubes": [
            "Schalke 04",
            "Galatasaray",
            "Nice",
            "Montpellier",
            "Dynamo Kyiv"
        ]
    },
    {
        "id": 719,
        "nombre": "Jackson Martinez",
        "nacionalidad": "Colombia",
        "clubes": [
            "Portimonense",
            "Guangzhou Evergrande",
            "Atletico Madrid",
            "Porto",
            "Independiente Medellin"
        ]
    },
    {
        "id": 720,
        "nombre": "Filipe Luis",
        "nacionalidad": "Brasil",
        "clubes": [
            "Flamengo",
            "Atletico Madrid",
            "Chelsea",
            "Deportivo"
        ]
    },
    {
        "id": 721,
        "nombre": "Diego Costa",
        "nacionalidad": "España",
        "clubes": [
            "Wolves",
            "Penafiel",
            "Chelsea",
            "Atletico Mineiro",
            "Atletico Madrid",
            "Celta Vigo",
            "Braga",
            "Valladolid",
            "Albacete",
            "Grêmio"
        ]
    },
    {
        "id": 722,
        "nombre": "Miranda Silva",
        "nacionalidad": "Brasil",
        "clubes": [
            "Inter Milan",
            "Sao Paulo",
            "Atletico Madrid",
            "Jiangsu Suning",
            "Coritiba",
            "Sochaux"
        ]
    },
    {
        "id": 723,
        "nombre": "Juanfran Torres",
        "nacionalidad": "España",
        "clubes": [
            "Espanyol",
            "Sao Paulo",
            "Atletico Madrid",
            "Real Madrid",
            "Osasuna"
        ]
    },
    {
        "id": 724,
        "nombre": "Adrian Lopez",
        "nacionalidad": "España",
        "clubes": [
            "Alaves",
            "Deportivo",
            "Villarreal",
            "Malaga",
            "Atletico Madrid",
            "Porto",
            "Osasuna",
            "Oviedo"
        ]
    },
    {
        "id": 725,
        "nombre": "Raul Garcia",
        "nacionalidad": "España",
        "clubes": [
            "Athletic Bilbao",
            "Osasuna",
            "Atletico Madrid"
        ]
    },
    {
        "id": 726,
        "nombre": "Arda Turan",
        "nacionalidad": "Turquía",
        "clubes": [
            "Barcelona",
            "Galatasaray",
            "Manisaspor",
            "Atletico Madrid",
            "Basaksehir"
        ]
    },
    {
        "id": 727,
        "nombre": "Christian Eriksen",
        "nacionalidad": "Dinamarca",
        "clubes": [
            "Inter Milan",
            "Brentford",
            "Ajax",
            "Tottenham",
            "Manchester United"
        ]
    },
    {
        "id": 728,
        "nombre": "Gareth Bale",
        "nacionalidad": "Gales",
        "clubes": [
            "Real Madrid",
            "Southampton",
            "Tottenham",
            "LAFC"
        ]
    },
    {
        "id": 729,
        "nombre": "Mesut Ozil",
        "nacionalidad": "Alemania",
        "clubes": [
            "Fenerbahce",
            "Arsenal",
            "Schalke 04",
            "Real Madrid",
            "Werder Bremen",
            "Basaksehir"
        ]
    },
    {
        "id": 730,
        "nombre": "David Alaba",
        "nacionalidad": "Austria",
        "clubes": [
            "Austria Wien",
            "Real Madrid",
            "Hoffenheim",
            "Bayern Munich"
        ]
    },
    {
        "id": 731,
        "nombre": "Antonio Rudiger",
        "nacionalidad": "Alemania",
        "clubes": [
            "Stuttgart",
            "AS Roma",
            "Chelsea",
            "Real Madrid"
        ]
    },
    {
        "id": 732,
        "nombre": "Thibaut Courtois",
        "nacionalidad": "Bélgica",
        "clubes": [
            "Genk",
            "Real Madrid",
            "Atletico Madrid",
            "Chelsea"
        ]
    },
    {
        "id": 733,
        "nombre": "Christian Panucci",
        "nacionalidad": "Italia",
        "clubes": [
            "Genoa",
            "Inter Milan",
            "Parma",
            "AC Milan",
            "Chelsea",
            "AS Roma",
            "Monaco",
            "Real Madrid"
        ]
    },
    {
        "id": 734,
        "nombre": "Claude Makelele",
        "nacionalidad": "Francia",
        "clubes": [
            "Nantes",
            "PSG",
            "Chelsea",
            "Celta Vigo",
            "Real Madrid",
            "Marseille"
        ]
    },
    {
        "id": 735,
        "nombre": "Emmanuel Adebayor",
        "nacionalidad": "Togo",
        "clubes": [
            "Metz",
            "Arsenal",
            "Olimpia",
            "Crystal Palace",
            "Tottenham",
            "Monaco",
            "Real Madrid",
            "Manchester City"
        ]
    },
    {
        "id": 736,
        "nombre": "Lassana Diarra",
        "nacionalidad": "Francia",
        "clubes": [
            "Lokomotiv Moscow",
            "PSG",
            "Arsenal",
            "Chelsea",
            "Le Havre",
            "Portsmouth",
            "Al Jazira",
            "Real Madrid",
            "Anzhi",
            "Marseille"
        ]
    },
    {
        "id": 737,
        "nombre": "Alvaro Arbeloa",
        "nacionalidad": "España",
        "clubes": [
            "Liverpool",
            "Real Madrid",
            "West Ham",
            "Deportivo"
        ]
    },
    {
        "id": 738,
        "nombre": "Royston Drenthe",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Everton",
            "Reading",
            "Alania Vladikavkaz",
            "Hercules",
            "Sheffield Wednesday",
            "Real Madrid",
            "Feyenoord"
        ]
    },
    {
        "id": 739,
        "nombre": "Klaas-Jan Huntelaar",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Heerenveen",
            "Ajax",
            "AC Milan",
            "Schalke 04",
            "De Graafschap",
            "Real Madrid",
            "PSV"
        ]
    },
    {
        "id": 740,
        "nombre": "Christoph Metzelder",
        "nacionalidad": "Alemania",
        "clubes": [
            "Dortmund",
            "Real Madrid",
            "Schalke 04",
            "Preussen Münster"
        ]
    },
    {
        "id": 741,
        "nombre": "Jerzy Dudek",
        "nacionalidad": "Polonia",
        "clubes": [
            "Real Madrid",
            "Sokol Knurów",
            "Liverpool",
            "Feyenoord"
        ]
    },
    {
        "id": 742,
        "nombre": "Thomas Gravesen",
        "nacionalidad": "Dinamarca",
        "clubes": [
            "Everton",
            "Celtic",
            "Vejle",
            "Real Madrid",
            "Hamburg"
        ]
    },
    {
        "id": 743,
        "nombre": "Filippo Inzaghi",
        "nacionalidad": "Italia",
        "clubes": [
            "Parma",
            "Juventus",
            "AC Milan",
            "Piacenza",
            "Atalanta"
        ]
    },
    {
        "id": 744,
        "nombre": "Bruno Rubio",
        "nacionalidad": "Brasil",
        "clubes": [
            "Eintracht Frankfurt",
            "Palmeiras",
            "Corinthians"
        ]
    },
    {
        "id": 745,
        "nombre": "Pedro Pereira",
        "nacionalidad": "Alemania",
        "clubes": [
            "Borussia Mönchengladbach",
            "Eintracht Frankfurt",
            "Bayer Leverkusen",
            "Real Madrid",
            "Mallorca"
        ]
    },
    {
        "id": 746,
        "nombre": "Mateo Ruiz",
        "nacionalidad": "Francia",
        "clubes": [
            "Nice",
            "Rennes",
            "Liverpool",
            "West Ham",
            "Monaco"
        ]
    },
    {
        "id": 747,
        "nombre": "Enzo Oliveira",
        "nacionalidad": "Italia",
        "clubes": [
            "Torino",
            "Heerenveen",
            "Utrecht"
        ]
    },
    {
        "id": 748,
        "nombre": "Paul Martin",
        "nacionalidad": "Italia",
        "clubes": [
            "Everton",
            "Juventus",
            "Atalanta"
        ]
    },
    {
        "id": 749,
        "nombre": "Antoine Perez",
        "nacionalidad": "Colombia",
        "clubes": [
            "Real Madrid",
            "Twente",
            "Barcelona",
            "AZ Alkmaar"
        ]
    },
    {
        "id": 750,
        "nombre": "Mario Ramos",
        "nacionalidad": "España",
        "clubes": [
            "Espanyol",
            "Real Sociedad",
            "Real Betis",
            "Genoa",
            "Bologna"
        ]
    },
    {
        "id": 751,
        "nombre": "Sergio Lopez",
        "nacionalidad": "Alemania",
        "clubes": [
            "Villarreal",
            "Real Betis",
            "Borussia Dortmund"
        ]
    },
    {
        "id": 752,
        "nombre": "Karim Cardoso",
        "nacionalidad": "Marruecos",
        "clubes": [
            "RB Leipzig",
            "Real Madrid",
            "Barcelona"
        ]
    },
    {
        "id": 753,
        "nombre": "Alessandro Silva",
        "nacionalidad": "Marruecos",
        "clubes": [
            "Real Madrid",
            "Wolfsburg"
        ]
    },
    {
        "id": 754,
        "nombre": "Alessandro Ruiz",
        "nacionalidad": "Alemania",
        "clubes": [
            "Stuttgart",
            "AS Roma",
            "Hoffenheim"
        ]
    },
    {
        "id": 755,
        "nombre": "Gabriel Rubio",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Everton",
            "Schalke 04",
            "Tottenham",
            "Hoffenheim"
        ]
    },
    {
        "id": 756,
        "nombre": "Jonas Gonzalez",
        "nacionalidad": "Brasil",
        "clubes": [
            "Stuttgart",
            "Bayer Leverkusen",
            "Flamengo",
            "Athletico Paranaense"
        ]
    },
    {
        "id": 757,
        "nombre": "Carlos Pereyra",
        "nacionalidad": "Francia",
        "clubes": [
            "Bordeaux",
            "Rosario Central",
            "Independiente"
        ]
    },
    {
        "id": 758,
        "nombre": "Olivier Santos",
        "nacionalidad": "Croacia",
        "clubes": [
            "Real Madrid",
            "Lanús",
            "Barcelona",
            "Estudiantes"
        ]
    },
    {
        "id": 759,
        "nombre": "Marco Guzman",
        "nacionalidad": "Portugal",
        "clubes": [
            "Lille",
            "Vitoria Guimaraes",
            "Lens"
        ]
    },
    {
        "id": 760,
        "nombre": "Ruben Souza",
        "nacionalidad": "Marruecos",
        "clubes": [
            "Borussia Mönchengladbach",
            "Hoffenheim",
            "Barcelona"
        ]
    },
    {
        "id": 761,
        "nombre": "Fernando Pereira",
        "nacionalidad": "Uruguay",
        "clubes": [
            "Real Madrid",
            "Chelsea",
            "Manchester United"
        ]
    },
    {
        "id": 762,
        "nombre": "David Rodriguez",
        "nacionalidad": "España",
        "clubes": [
            "Espanyol",
            "Atletico Madrid",
            "Arsenal",
            "Chelsea"
        ]
    },
    {
        "id": 763,
        "nombre": "Pedro Ramos",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Everton",
            "Atletico Mineiro",
            "Vasco da Gama",
            "Newcastle",
            "Manchester United"
        ]
    },
    {
        "id": 764,
        "nombre": "Alessandro Martin",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Porto",
            "Braga",
            "Twente",
            "PSV",
            "AZ Alkmaar"
        ]
    },
    {
        "id": 765,
        "nombre": "Alessandro Molina",
        "nacionalidad": "Alemania",
        "clubes": [
            "Inter Milan",
            "Eintracht Frankfurt",
            "Wolfsburg",
            "Sassuolo"
        ]
    },
    {
        "id": 766,
        "nombre": "Christian Castro",
        "nacionalidad": "Marruecos",
        "clubes": [
            "Espanyol",
            "Real Madrid",
            "Osasuna",
            "Barcelona"
        ]
    },
    {
        "id": 767,
        "nombre": "Marcos Martin",
        "nacionalidad": "Italia",
        "clubes": [
            "Genoa",
            "PSV",
            "Lazio",
            "Twente"
        ]
    },
    {
        "id": 768,
        "nombre": "Olivier Suarez",
        "nacionalidad": "Portugal",
        "clubes": [
            "Monaco",
            "Rio Ave"
        ]
    },
    {
        "id": 769,
        "nombre": "Olivier Costa",
        "nacionalidad": "Bélgica",
        "clubes": [
            "Espanyol",
            "Barcelona"
        ]
    },
    {
        "id": 770,
        "nombre": "Hugo Oliveira",
        "nacionalidad": "España",
        "clubes": [
            "Real Sociedad",
            "Borussia Dortmund",
            "Espanyol",
            "Celta Vigo"
        ]
    },
    {
        "id": 771,
        "nombre": "Pedro Cardoso",
        "nacionalidad": "Francia",
        "clubes": [
            "Bordeaux",
            "Lyon",
            "Nice",
            "Gremio",
            "Fluminense"
        ]
    },
    {
        "id": 772,
        "nombre": "Tiago Ribeiro",
        "nacionalidad": "México",
        "clubes": [
            "Real Madrid",
            "Atletico Mineiro",
            "Barcelona",
            "Santos"
        ]
    },
    {
        "id": 773,
        "nombre": "Antoine Pereira",
        "nacionalidad": "Marruecos",
        "clubes": [
            "Liverpool",
            "Barcelona"
        ]
    },
    {
        "id": 774,
        "nombre": "Julian Sanchez",
        "nacionalidad": "Senegal",
        "clubes": [
            "Real Madrid",
            "Lanús",
            "Barcelona"
        ]
    },
    {
        "id": 775,
        "nombre": "Marco Ortiz",
        "nacionalidad": "Uruguay",
        "clubes": [
            "Real Madrid",
            "Vasco da Gama",
            "Flamengo",
            "Barcelona"
        ]
    },
    {
        "id": 776,
        "nombre": "Antoine Gonzalez",
        "nacionalidad": "Croacia",
        "clubes": [
            "Torino",
            "Barcelona"
        ]
    },
    {
        "id": 777,
        "nombre": "Pierre Vazquez",
        "nacionalidad": "Croacia",
        "clubes": [
            "Porto",
            "Real Madrid",
            "Barcelona"
        ]
    },
    {
        "id": 778,
        "nombre": "Sergio Galan",
        "nacionalidad": "Marruecos",
        "clubes": [
            "Real Madrid",
            "AS Roma"
        ]
    },
    {
        "id": 779,
        "nombre": "Paul Pereira",
        "nacionalidad": "Senegal",
        "clubes": [
            "Real Madrid",
            "Atletico Madrid",
            "Barcelona"
        ]
    },
    {
        "id": 780,
        "nombre": "Felipe Batista",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Fluminense",
            "Sao Paulo",
            "Feyenoord"
        ]
    },
    {
        "id": 781,
        "nombre": "Mateo Castro",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Tottenham",
            "Aston Villa",
            "Palmeiras",
            "Vasco da Gama",
            "Manchester United"
        ]
    },
    {
        "id": 782,
        "nombre": "Álvaro Pinto",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Everton",
            "Wolves",
            "Espanyol",
            "Manchester United"
        ]
    },
    {
        "id": 783,
        "nombre": "Max Souza",
        "nacionalidad": "Uruguay",
        "clubes": [
            "Real Madrid",
            "Manchester United",
            "Barcelona"
        ]
    },
    {
        "id": 784,
        "nombre": "Felipe Almeida",
        "nacionalidad": "Colombia",
        "clubes": [
            "Real Madrid",
            "Nice",
            "Lille"
        ]
    },
    {
        "id": 785,
        "nombre": "Andrés Molina",
        "nacionalidad": "México",
        "clubes": [
            "Real Madrid",
            "Barcelona",
            "Santos"
        ]
    },
    {
        "id": 786,
        "nombre": "Marcos Cardoso",
        "nacionalidad": "Portugal",
        "clubes": [
            "Sporting CP",
            "Corinthians",
            "Athletico Paranaense"
        ]
    },
    {
        "id": 787,
        "nombre": "Joao Ramos",
        "nacionalidad": "Senegal",
        "clubes": [
            "Barcelona",
            "Athletico Paranaense"
        ]
    },
    {
        "id": 788,
        "nombre": "Álvaro Oliveira",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Feyenoord",
            "Lille",
            "Utrecht",
            "AZ Alkmaar"
        ]
    },
    {
        "id": 789,
        "nombre": "Julian Santos",
        "nacionalidad": "Colombia",
        "clubes": [
            "Real Madrid",
            "Barcelona",
            "Celta Vigo"
        ]
    },
    {
        "id": 790,
        "nombre": "Enzo Perez",
        "nacionalidad": "Alemania",
        "clubes": [
            "PSG",
            "Schalke 04",
            "Rennes",
            "Eintracht Frankfurt",
            "Wolfsburg"
        ]
    },
    {
        "id": 791,
        "nombre": "Jonas Ramos",
        "nacionalidad": "Bélgica",
        "clubes": [
            "Real Madrid",
            "Lazio"
        ]
    },
    {
        "id": 792,
        "nombre": "Joao Suarez",
        "nacionalidad": "Bélgica",
        "clubes": [
            "Espanyol",
            "Real Madrid",
            "Atletico Madrid"
        ]
    },
    {
        "id": 793,
        "nombre": "Max Rodriguez",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Newcastle",
            "Tottenham",
            "Manchester United",
            "Rennes"
        ]
    },
    {
        "id": 794,
        "nombre": "Juan Silva",
        "nacionalidad": "Marruecos",
        "clubes": [
            "Napoli",
            "Real Madrid",
            "Barcelona",
            "Juventus"
        ]
    },
    {
        "id": 795,
        "nombre": "Paul Perez",
        "nacionalidad": "Portugal",
        "clubes": [
            "Boavista",
            "Vitoria Guimaraes",
            "Mallorca",
            "Maritimo"
        ]
    },
    {
        "id": 796,
        "nombre": "Nico Teixeira",
        "nacionalidad": "Croacia",
        "clubes": [
            "Real Madrid",
            "Lille",
            "Barcelona",
            "Marseille"
        ]
    },
    {
        "id": 797,
        "nombre": "José Torres",
        "nacionalidad": "Portugal",
        "clubes": [
            "Maritimo",
            "Wolfsburg",
            "Rio Ave",
            "Bayern Munich",
            "Vitoria Guimaraes"
        ]
    },
    {
        "id": 798,
        "nombre": "Carlos Guzman",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Liverpool",
            "Rennes",
            "Bordeaux"
        ]
    },
    {
        "id": 799,
        "nombre": "José Cardoso",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Manchester City",
            "AZ Alkmaar"
        ]
    },
    {
        "id": 800,
        "nombre": "Alex Cardoso",
        "nacionalidad": "Colombia",
        "clubes": [
            "Real Madrid",
            "River Plate",
            "Barcelona"
        ]
    },
    {
        "id": 801,
        "nombre": "Tiago Diaz",
        "nacionalidad": "Marruecos",
        "clubes": [
            "Stuttgart",
            "RB Leipzig",
            "Real Madrid",
            "Barcelona"
        ]
    },
    {
        "id": 802,
        "nombre": "Ruben Castro",
        "nacionalidad": "Bélgica",
        "clubes": [
            "Boavista",
            "Barcelona"
        ]
    },
    {
        "id": 803,
        "nombre": "Miguel Oliveira",
        "nacionalidad": "Croacia",
        "clubes": [
            "Benfica",
            "Barcelona"
        ]
    },
    {
        "id": 804,
        "nombre": "Bruno Ruiz",
        "nacionalidad": "Croacia",
        "clubes": [
            "Real Madrid",
            "Barcelona",
            "Celta Vigo"
        ]
    },
    {
        "id": 805,
        "nombre": "David Sanchez",
        "nacionalidad": "Colombia",
        "clubes": [
            "Porto",
            "Real Madrid",
            "Vitoria Guimaraes",
            "Barcelona"
        ]
    },
    {
        "id": 806,
        "nombre": "Juan Ruiz",
        "nacionalidad": "Portugal",
        "clubes": [
            "Braga",
            "Sassuolo"
        ]
    },
    {
        "id": 807,
        "nombre": "Joao Alvarez",
        "nacionalidad": "Portugal",
        "clubes": [
            "Porto",
            "Sporting CP",
            "Benfica",
            "Athletico Paranaense"
        ]
    },
    {
        "id": 808,
        "nombre": "Olivier Batista",
        "nacionalidad": "Italia",
        "clubes": [
            "Leicester City",
            "Juventus",
            "Atalanta",
            "Fiorentina"
        ]
    },
    {
        "id": 809,
        "nombre": "Gonzalo Silva",
        "nacionalidad": "Argentina",
        "clubes": [
            "Vitoria Guimaraes",
            "Porto",
            "Velez Sarsfield",
            "Talleres"
        ]
    },
    {
        "id": 810,
        "nombre": "Pedro Moreno",
        "nacionalidad": "Portugal",
        "clubes": [
            "Fluminense",
            "Braga",
            "Vitoria Guimaraes",
            "Maritimo"
        ]
    },
    {
        "id": 811,
        "nombre": "Enzo Torres",
        "nacionalidad": "México",
        "clubes": [
            "San Lorenzo",
            "Real Madrid",
            "Velez Sarsfield",
            "Barcelona"
        ]
    },
    {
        "id": 812,
        "nombre": "Andrés Rubio",
        "nacionalidad": "Portugal",
        "clubes": [
            "Porto",
            "Bayern Munich"
        ]
    },
    {
        "id": 813,
        "nombre": "Juan Castro",
        "nacionalidad": "Brasil",
        "clubes": [
            "Sao Paulo",
            "Fluminense",
            "Sassuolo",
            "Bologna",
            "Internacional"
        ]
    },
    {
        "id": 814,
        "nombre": "Lucas Vidal",
        "nacionalidad": "Portugal",
        "clubes": [
            "Boavista",
            "Osasuna",
            "Atletico Madrid"
        ]
    },
    {
        "id": 815,
        "nombre": "Olivier Vazquez",
        "nacionalidad": "Senegal",
        "clubes": [
            "Real Madrid",
            "Lyon",
            "Lille",
            "Barcelona"
        ]
    },
    {
        "id": 816,
        "nombre": "Daniel Pereira",
        "nacionalidad": "España",
        "clubes": [
            "Valencia",
            "Sevilla",
            "Atletico Madrid",
            "Vasco da Gama",
            "Athletico Paranaense"
        ]
    },
    {
        "id": 817,
        "nombre": "Hugo Pereira",
        "nacionalidad": "Marruecos",
        "clubes": [
            "Cruzeiro",
            "Corinthians",
            "Barcelona"
        ]
    },
    {
        "id": 818,
        "nombre": "Fernando Pinto",
        "nacionalidad": "Francia",
        "clubes": [
            "Toulouse",
            "West Ham",
            "Manchester City",
            "PSG"
        ]
    },
    {
        "id": 819,
        "nombre": "Fernando Ramos",
        "nacionalidad": "Alemania",
        "clubes": [
            "Schalke 04",
            "Lyon",
            "RB Leipzig",
            "Lens",
            "Borussia Mönchengladbach"
        ]
    },
    {
        "id": 820,
        "nombre": "Diego Pereira",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "San Lorenzo",
            "Banfield",
            "AZ Alkmaar"
        ]
    },
    {
        "id": 821,
        "nombre": "Pierre Costa",
        "nacionalidad": "México",
        "clubes": [
            "Schalke 04",
            "Real Madrid",
            "Bayern Munich"
        ]
    },
    {
        "id": 822,
        "nombre": "Carlos Ramos",
        "nacionalidad": "Marruecos",
        "clubes": [
            "Stuttgart",
            "Real Madrid",
            "Bayern Munich",
            "Barcelona"
        ]
    },
    {
        "id": 823,
        "nombre": "Mateo Pinto",
        "nacionalidad": "Brasil",
        "clubes": [
            "Santos",
            "Vitoria Guimaraes",
            "Internacional"
        ]
    },
    {
        "id": 824,
        "nombre": "Carlos Martinez",
        "nacionalidad": "Alemania",
        "clubes": [
            "Rosario Central",
            "River Plate",
            "Bayern Munich",
            "Borussia Dortmund"
        ]
    },
    {
        "id": 825,
        "nombre": "Bruno Fernandez",
        "nacionalidad": "Uruguay",
        "clubes": [
            "Santos",
            "Real Madrid",
            "Barcelona",
            "Gremio"
        ]
    },
    {
        "id": 826,
        "nombre": "Max Fernandez",
        "nacionalidad": "Argentina",
        "clubes": [
            "Sassuolo",
            "AS Roma",
            "River Plate",
            "Independiente"
        ]
    },
    {
        "id": 827,
        "nombre": "Mateo Moreno",
        "nacionalidad": "Alemania",
        "clubes": [
            "Fiorentina",
            "Genoa",
            "Hoffenheim",
            "RB Leipzig"
        ]
    },
    {
        "id": 828,
        "nombre": "Andrés Souza",
        "nacionalidad": "Brasil",
        "clubes": [
            "Fluminense",
            "Palmeiras",
            "Atletico Mineiro",
            "AS Roma"
        ]
    },
    {
        "id": 829,
        "nombre": "Carlos Rodriguez",
        "nacionalidad": "Portugal",
        "clubes": [
            "River Plate",
            "Maritimo",
            "Boavista",
            "Porto",
            "Velez Sarsfield"
        ]
    },
    {
        "id": 830,
        "nombre": "Nico Costa",
        "nacionalidad": "Alemania",
        "clubes": [
            "Stuttgart",
            "Wolfsburg",
            "Boca Juniors"
        ]
    },
    {
        "id": 831,
        "nombre": "Marco Molina",
        "nacionalidad": "México",
        "clubes": [
            "Real Madrid"
        ]
    },
    {
        "id": 832,
        "nombre": "Pierre Torres",
        "nacionalidad": "México",
        "clubes": [
            "Racing Club",
            "Real Madrid",
            "Independiente",
            "Barcelona"
        ]
    },
    {
        "id": 833,
        "nombre": "Olivier Rodriguez",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Heerenveen",
            "Genoa",
            "PSV"
        ]
    },
    {
        "id": 834,
        "nombre": "Álvaro Vazquez",
        "nacionalidad": "Senegal",
        "clubes": [
            "Ajax",
            "Twente",
            "Barcelona"
        ]
    },
    {
        "id": 835,
        "nombre": "Carlos Batista",
        "nacionalidad": "Argentina",
        "clubes": [
            "Borussia Mönchengladbach",
            "Velez Sarsfield"
        ]
    },
    {
        "id": 836,
        "nombre": "Ruben Ribeiro",
        "nacionalidad": "Alemania",
        "clubes": [
            "Bayer Leverkusen",
            "Sassuolo",
            "Bayern Munich"
        ]
    },
    {
        "id": 837,
        "nombre": "Gabriel Ruiz",
        "nacionalidad": "Francia",
        "clubes": [
            "Twente",
            "Monaco"
        ]
    },
    {
        "id": 838,
        "nombre": "Paul Herrera",
        "nacionalidad": "Marruecos",
        "clubes": [
            "Real Madrid",
            "Utrecht",
            "Twente",
            "Barcelona"
        ]
    },
    {
        "id": 839,
        "nombre": "Gonzalo Guzman",
        "nacionalidad": "Uruguay",
        "clubes": [
            "Rosario Central",
            "Barcelona",
            "Banfield"
        ]
    },
    {
        "id": 840,
        "nombre": "Olivier Galan",
        "nacionalidad": "Croacia",
        "clubes": [
            "Real Madrid",
            "Barcelona"
        ]
    },
    {
        "id": 841,
        "nombre": "Hugo Alvarez",
        "nacionalidad": "Portugal",
        "clubes": [
            "Vitoria Guimaraes",
            "Rio Ave",
            "Borussia Dortmund",
            "Benfica"
        ]
    },
    {
        "id": 842,
        "nombre": "Juan Ortiz",
        "nacionalidad": "Italia",
        "clubes": [
            "Genoa",
            "Bologna",
            "Banfield"
        ]
    },
    {
        "id": 843,
        "nombre": "Tiago Suarez",
        "nacionalidad": "Brasil",
        "clubes": [
            "Fluminense",
            "Athletico Paranaense",
            "Villarreal",
            "Internacional"
        ]
    },
    {
        "id": 844,
        "nombre": "Nico Rubio",
        "nacionalidad": "España",
        "clubes": [
            "Real Madrid",
            "Hoffenheim",
            "Barcelona"
        ]
    },
    {
        "id": 845,
        "nombre": "Hugo Ruiz",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Everton",
            "Liverpool",
            "Chelsea",
            "Rio Ave"
        ]
    },
    {
        "id": 846,
        "nombre": "Alessandro Moreno",
        "nacionalidad": "España",
        "clubes": [
            "Borussia Mönchengladbach",
            "Real Madrid",
            "Bayer Leverkusen"
        ]
    },
    {
        "id": 847,
        "nombre": "Juan Cardoso",
        "nacionalidad": "Brasil",
        "clubes": [
            "Rosario Central",
            "Atletico Mineiro",
            "Athletico Paranaense"
        ]
    },
    {
        "id": 848,
        "nombre": "Marcos Vidal",
        "nacionalidad": "Portugal",
        "clubes": [
            "Porto",
            "Sporting CP",
            "Gremio"
        ]
    },
    {
        "id": 849,
        "nombre": "Gabriel Guzman",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Aston Villa",
            "Palmeiras",
            "Tottenham"
        ]
    },
    {
        "id": 850,
        "nombre": "Alex Gonzalez",
        "nacionalidad": "Bélgica",
        "clubes": [
            "Heerenveen",
            "Real Madrid",
            "Groningen",
            "Barcelona"
        ]
    },
    {
        "id": 851,
        "nombre": "Felipe Galan",
        "nacionalidad": "Argentina",
        "clubes": [
            "Wolfsburg",
            "Talleres",
            "Estudiantes",
            "Stuttgart",
            "Velez Sarsfield"
        ]
    },
    {
        "id": 852,
        "nombre": "Gonzalo Pinto",
        "nacionalidad": "Uruguay",
        "clubes": [
            "Real Madrid",
            "Barcelona"
        ]
    },
    {
        "id": 853,
        "nombre": "Pedro Ribeiro",
        "nacionalidad": "Alemania",
        "clubes": [
            "Borussia Mönchengladbach",
            "Hoffenheim",
            "Toulouse",
            "Borussia Dortmund"
        ]
    },
    {
        "id": 854,
        "nombre": "Nico Ribeiro",
        "nacionalidad": "Brasil",
        "clubes": [
            "Fluminense",
            "Everton",
            "Liverpool"
        ]
    },
    {
        "id": 855,
        "nombre": "Hugo Cardoso",
        "nacionalidad": "Senegal",
        "clubes": [
            "Real Madrid",
            "Barcelona",
            "Gremio"
        ]
    },
    {
        "id": 856,
        "nombre": "Thomas Moreno",
        "nacionalidad": "Croacia",
        "clubes": [
            "Liverpool",
            "Real Madrid",
            "Barcelona"
        ]
    },
    {
        "id": 857,
        "nombre": "Marco Costa",
        "nacionalidad": "Colombia",
        "clubes": [
            "Real Madrid",
            "West Ham",
            "Newcastle",
            "Barcelona"
        ]
    },
    {
        "id": 858,
        "nombre": "Antoine Diaz",
        "nacionalidad": "Brasil",
        "clubes": [
            "Arsenal",
            "Atletico Mineiro"
        ]
    },
    {
        "id": 859,
        "nombre": "Pedro Suarez",
        "nacionalidad": "Alemania",
        "clubes": [
            "Stuttgart",
            "Ajax",
            "RB Leipzig"
        ]
    },
    {
        "id": 860,
        "nombre": "Jonas Oliveira",
        "nacionalidad": "Argentina",
        "clubes": [
            "Newell's Old Boys",
            "Fluminense",
            "Independiente",
            "Velez Sarsfield",
            "Athletico Paranaense"
        ]
    },
    {
        "id": 861,
        "nombre": "Antoine Vazquez",
        "nacionalidad": "España",
        "clubes": [
            "Torino",
            "Bologna",
            "Barcelona"
        ]
    },
    {
        "id": 862,
        "nombre": "Alessandro Guzman",
        "nacionalidad": "Uruguay",
        "clubes": [
            "Heerenveen",
            "Real Madrid",
            "Groningen",
            "Barcelona"
        ]
    },
    {
        "id": 863,
        "nombre": "Enzo Pinto",
        "nacionalidad": "Croacia",
        "clubes": [
            "Real Madrid",
            "Inter Milan"
        ]
    },
    {
        "id": 864,
        "nombre": "Nico Molina",
        "nacionalidad": "Argentina",
        "clubes": [
            "Rosario Central",
            "Borussia Dortmund"
        ]
    },
    {
        "id": 865,
        "nombre": "Alex Alvarez",
        "nacionalidad": "Senegal",
        "clubes": [
            "Real Madrid",
            "Groningen",
            "Barcelona"
        ]
    },
    {
        "id": 866,
        "nombre": "Jonas Molina",
        "nacionalidad": "España",
        "clubes": [
            "Everton",
            "Sevilla",
            "Celta Vigo",
            "Real Madrid",
            "Manchester United"
        ]
    },
    {
        "id": 867,
        "nombre": "Hugo Mendes",
        "nacionalidad": "Uruguay",
        "clubes": [
            "Real Madrid",
            "Rio Ave",
            "Barcelona"
        ]
    },
    {
        "id": 868,
        "nombre": "Bruno Ribeiro",
        "nacionalidad": "Portugal",
        "clubes": [
            "Sporting CP",
            "Rio Ave",
            "Leicester City",
            "Maritimo"
        ]
    },
    {
        "id": 869,
        "nombre": "José Ortiz",
        "nacionalidad": "Uruguay",
        "clubes": [
            "Real Madrid",
            "Lyon",
            "Barcelona"
        ]
    },
    {
        "id": 870,
        "nombre": "Alessandro Ortiz",
        "nacionalidad": "Alemania",
        "clubes": [
            "Osasuna",
            "Hoffenheim",
            "Valencia"
        ]
    },
    {
        "id": 871,
        "nombre": "Sergio Santos",
        "nacionalidad": "Portugal",
        "clubes": [
            "Porto",
            "Borussia Mönchengladbach",
            "Wolfsburg",
            "Vitoria Guimaraes"
        ]
    },
    {
        "id": 872,
        "nombre": "Jonas Santos",
        "nacionalidad": "Brasil",
        "clubes": [
            "Schalke 04",
            "Fluminense",
            "Hoffenheim",
            "Flamengo",
            "Athletico Paranaense"
        ]
    },
    {
        "id": 873,
        "nombre": "Bruno Cardoso",
        "nacionalidad": "España",
        "clubes": [
            "Espanyol",
            "AC Milan",
            "Barcelona",
            "Villarreal"
        ]
    },
    {
        "id": 874,
        "nombre": "Christian Oliveira",
        "nacionalidad": "Argentina",
        "clubes": [
            "San Lorenzo",
            "Benfica",
            "Independiente"
        ]
    },
    {
        "id": 875,
        "nombre": "Nico Ruiz",
        "nacionalidad": "Portugal",
        "clubes": [
            "Sporting CP",
            "Utrecht",
            "Heerenveen",
            "Rio Ave",
            "Braga"
        ]
    },
    {
        "id": 876,
        "nombre": "Tiago Gomez",
        "nacionalidad": "Colombia",
        "clubes": [
            "Real Madrid",
            "Arsenal",
            "Barcelona"
        ]
    },
    {
        "id": 877,
        "nombre": "Mateo Costa",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Everton",
            "Borussia Mönchengladbach",
            "Liverpool",
            "Chelsea"
        ]
    },
    {
        "id": 878,
        "nombre": "Andrés Sanchez",
        "nacionalidad": "Senegal",
        "clubes": [
            "Porto",
            "Real Madrid",
            "Barcelona"
        ]
    },
    {
        "id": 879,
        "nombre": "Ruben Batista",
        "nacionalidad": "México",
        "clubes": [
            "Espanyol",
            "Real Madrid",
            "Barcelona"
        ]
    },
    {
        "id": 880,
        "nombre": "Paul Suarez",
        "nacionalidad": "Brasil",
        "clubes": [
            "Fluminense",
            "Vasco da Gama",
            "Newcastle"
        ]
    },
    {
        "id": 881,
        "nombre": "Miguel Pereyra",
        "nacionalidad": "Croacia",
        "clubes": [
            "Stuttgart",
            "Schalke 04",
            "Real Madrid",
            "Barcelona"
        ]
    },
    {
        "id": 882,
        "nombre": "Bruno Alvarez",
        "nacionalidad": "Francia",
        "clubes": [
            "Borussia Mönchengladbach",
            "Bordeaux",
            "Nice",
            "Lille"
        ]
    },
    {
        "id": 883,
        "nombre": "Bruno Martinez",
        "nacionalidad": "Francia",
        "clubes": [
            "Arsenal",
            "Nice",
            "Monaco",
            "Marseille",
            "Manchester City"
        ]
    },
    {
        "id": 884,
        "nombre": "Julian Fernandez",
        "nacionalidad": "Marruecos",
        "clubes": [
            "Real Madrid",
            "Rennes",
            "Barcelona"
        ]
    },
    {
        "id": 885,
        "nombre": "Enzo Gomez",
        "nacionalidad": "Italia",
        "clubes": [
            "Fluminense",
            "Cruzeiro",
            "Inter Milan",
            "Lazio"
        ]
    },
    {
        "id": 886,
        "nombre": "Paul Diaz",
        "nacionalidad": "Francia",
        "clubes": [
            "Bordeaux",
            "Nice",
            "Sao Paulo",
            "Monaco",
            "Vasco da Gama"
        ]
    },
    {
        "id": 887,
        "nombre": "Thomas Neves",
        "nacionalidad": "Marruecos",
        "clubes": [
            "Real Madrid",
            "Flamengo",
            "Barcelona",
            "Gremio"
        ]
    },
    {
        "id": 888,
        "nombre": "Marco Cardoso",
        "nacionalidad": "Marruecos",
        "clubes": [
            "Real Madrid",
            "Groningen",
            "Barcelona"
        ]
    },
    {
        "id": 889,
        "nombre": "Lucas Santos",
        "nacionalidad": "Italia",
        "clubes": [
            "Bologna",
            "Leicester City"
        ]
    },
    {
        "id": 890,
        "nombre": "Marcos Costa",
        "nacionalidad": "Uruguay",
        "clubes": [
            "Eintracht Frankfurt",
            "Real Madrid",
            "Wolfsburg"
        ]
    },
    {
        "id": 891,
        "nombre": "Alessandro Almeida",
        "nacionalidad": "Alemania",
        "clubes": [
            "Schalke 04",
            "Ajax",
            "PSV"
        ]
    },
    {
        "id": 892,
        "nombre": "Hugo Martinez",
        "nacionalidad": "México",
        "clubes": [
            "Real Madrid",
            "Groningen",
            "Utrecht"
        ]
    },
    {
        "id": 893,
        "nombre": "Andrés Pereyra",
        "nacionalidad": "Argentina",
        "clubes": [
            "Velez Sarsfield",
            "Estudiantes",
            "AZ Alkmaar"
        ]
    },
    {
        "id": 894,
        "nombre": "Marcos Ortiz",
        "nacionalidad": "Portugal",
        "clubes": [
            "Sporting CP",
            "Boavista",
            "Feyenoord",
            "Maritimo"
        ]
    },
    {
        "id": 895,
        "nombre": "Karim Sanchez",
        "nacionalidad": "Colombia",
        "clubes": [
            "Real Madrid",
            "Hoffenheim",
            "Barcelona"
        ]
    },
    {
        "id": 896,
        "nombre": "Gonzalo Diaz",
        "nacionalidad": "Colombia",
        "clubes": [
            "Real Madrid",
            "Hoffenheim",
            "Borussia Dortmund"
        ]
    },
    {
        "id": 897,
        "nombre": "Jonas Souza",
        "nacionalidad": "Argentina",
        "clubes": [
            "San Lorenzo",
            "Rosario Central",
            "Palmeiras",
            "Estudiantes"
        ]
    },
    {
        "id": 898,
        "nombre": "Nico Mendes",
        "nacionalidad": "Colombia",
        "clubes": [
            "Real Madrid",
            "Bologna",
            "Barcelona"
        ]
    },
    {
        "id": 899,
        "nombre": "Álvaro Mendes",
        "nacionalidad": "Uruguay",
        "clubes": [
            "Real Madrid",
            "Groningen",
            "Barcelona",
            "AZ Alkmaar"
        ]
    },
    {
        "id": 900,
        "nombre": "Thomas Cardoso",
        "nacionalidad": "Colombia",
        "clubes": [
            "Real Madrid",
            "Barcelona",
            "Mallorca"
        ]
    },
    {
        "id": 901,
        "nombre": "Bruno Moreno",
        "nacionalidad": "España",
        "clubes": [
            "Espanyol",
            "Boavista",
            "Vitoria Guimaraes",
            "Barcelona"
        ]
    },
    {
        "id": 902,
        "nombre": "Felipe Ruiz",
        "nacionalidad": "Alemania",
        "clubes": [
            "Bordeaux",
            "Hoffenheim",
            "Borussia Dortmund",
            "Borussia Mönchengladbach",
            "Toulouse"
        ]
    },
    {
        "id": 903,
        "nombre": "Alessandro Perez",
        "nacionalidad": "Alemania",
        "clubes": [
            "Arsenal",
            "Tottenham",
            "Eintracht Frankfurt",
            "Wolfsburg",
            "Borussia Mönchengladbach"
        ]
    },
    {
        "id": 904,
        "nombre": "Hugo Pinto",
        "nacionalidad": "Marruecos",
        "clubes": [
            "Real Madrid",
            "Barcelona",
            "Internacional"
        ]
    },
    {
        "id": 905,
        "nombre": "Max Mendes",
        "nacionalidad": "México",
        "clubes": [
            "Real Madrid",
            "Lille",
            "Rennes",
            "Barcelona"
        ]
    },
    {
        "id": 906,
        "nombre": "Lucas Mendes",
        "nacionalidad": "Argentina",
        "clubes": [
            "Wolfsburg",
            "River Plate",
            "Estudiantes",
            "Boca Juniors"
        ]
    },
    {
        "id": 907,
        "nombre": "Joao Ruiz",
        "nacionalidad": "Brasil",
        "clubes": [
            "Rennes",
            "Sao Paulo",
            "Gremio",
            "Fluminense",
            "Lille"
        ]
    },
    {
        "id": 908,
        "nombre": "Andrés Gomez",
        "nacionalidad": "Uruguay",
        "clubes": [
            "Real Madrid",
            "Corinthians",
            "Internacional"
        ]
    },
    {
        "id": 909,
        "nombre": "Felipe Mendes",
        "nacionalidad": "Bélgica",
        "clubes": [
            "Sporting CP",
            "Real Madrid",
            "Boavista"
        ]
    },
    {
        "id": 910,
        "nombre": "Gabriel Moreno",
        "nacionalidad": "Croacia",
        "clubes": [
            "Real Madrid",
            "Groningen",
            "Barcelona",
            "AZ Alkmaar"
        ]
    },
    {
        "id": 911,
        "nombre": "Jonas Pereira",
        "nacionalidad": "Croacia",
        "clubes": [
            "Real Sociedad",
            "Real Madrid",
            "Sevilla",
            "Barcelona"
        ]
    },
    {
        "id": 912,
        "nombre": "Diego Castro",
        "nacionalidad": "Brasil",
        "clubes": [
            "Bordeaux",
            "Gremio"
        ]
    },
    {
        "id": 913,
        "nombre": "Enzo Ribeiro",
        "nacionalidad": "Colombia",
        "clubes": [
            "Cruzeiro",
            "Real Madrid",
            "Sao Paulo",
            "Barcelona"
        ]
    },
    {
        "id": 914,
        "nombre": "Thomas Martin",
        "nacionalidad": "Alemania",
        "clubes": [
            "Talleres",
            "Borussia Dortmund",
            "Boca Juniors"
        ]
    },
    {
        "id": 915,
        "nombre": "Mario Oliveira",
        "nacionalidad": "Colombia",
        "clubes": [
            "Sporting CP",
            "Benfica",
            "Barcelona"
        ]
    },
    {
        "id": 916,
        "nombre": "Lucas Lopez",
        "nacionalidad": "Senegal",
        "clubes": [
            "Heerenveen",
            "Real Madrid"
        ]
    },
    {
        "id": 917,
        "nombre": "Carlos Mendes",
        "nacionalidad": "Colombia",
        "clubes": [
            "Real Madrid",
            "Bayern Munich",
            "Hoffenheim"
        ]
    },
    {
        "id": 918,
        "nombre": "Gabriel Almeida",
        "nacionalidad": "España",
        "clubes": [
            "Cruzeiro",
            "Real Betis",
            "Santos"
        ]
    },
    {
        "id": 919,
        "nombre": "Marco Teixeira",
        "nacionalidad": "Argentina",
        "clubes": [
            "Newell's Old Boys",
            "Utrecht",
            "Independiente",
            "Boca Juniors",
            "Feyenoord"
        ]
    },
    {
        "id": 920,
        "nombre": "Diego Almeida",
        "nacionalidad": "Senegal",
        "clubes": [
            "Real Madrid",
            "Inter Milan",
            "Atalanta"
        ]
    },
    {
        "id": 921,
        "nombre": "Gabriel Silva",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Fiorentina",
            "West Ham",
            "Wolves",
            "Inter Milan"
        ]
    },
    {
        "id": 922,
        "nombre": "Mario Rubio",
        "nacionalidad": "Marruecos",
        "clubes": [
            "Everton",
            "Real Madrid",
            "Barcelona"
        ]
    },
    {
        "id": 923,
        "nombre": "Alessandro Oliveira",
        "nacionalidad": "Brasil",
        "clubes": [
            "Fluminense",
            "Real Sociedad",
            "Mallorca",
            "Athletico Paranaense"
        ]
    },
    {
        "id": 924,
        "nombre": "José Suarez",
        "nacionalidad": "Argentina",
        "clubes": [
            "Internacional",
            "Lanús",
            "Atletico Mineiro",
            "Boca Juniors"
        ]
    },
    {
        "id": 925,
        "nombre": "Miguel Rubio",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "AZ Alkmaar",
            "Porto",
            "Twente",
            "Vitoria Guimaraes",
            "Feyenoord"
        ]
    },
    {
        "id": 926,
        "nombre": "Alex Diaz",
        "nacionalidad": "Italia",
        "clubes": [
            "Fiorentina",
            "Vasco da Gama",
            "Atalanta",
            "Internacional"
        ]
    },
    {
        "id": 927,
        "nombre": "Pedro Torres",
        "nacionalidad": "España",
        "clubes": [
            "Aston Villa",
            "Osasuna",
            "Atletico Madrid",
            "Celta Vigo"
        ]
    },
    {
        "id": 928,
        "nombre": "Gonzalo Teixeira",
        "nacionalidad": "México",
        "clubes": [
            "Schalke 04",
            "Real Madrid"
        ]
    },
    {
        "id": 929,
        "nombre": "Thomas Suarez",
        "nacionalidad": "Argentina",
        "clubes": [
            "Bordeaux",
            "Lanús",
            "Monaco",
            "Velez Sarsfield",
            "Banfield"
        ]
    },
    {
        "id": 930,
        "nombre": "Luis Ramos",
        "nacionalidad": "Uruguay",
        "clubes": [
            "Real Madrid",
            "Arsenal",
            "Barcelona"
        ]
    },
    {
        "id": 931,
        "nombre": "Luis Alvarez",
        "nacionalidad": "Argentina",
        "clubes": [
            "Santos",
            "Velez Sarsfield",
            "Sao Paulo",
            "Banfield"
        ]
    },
    {
        "id": 932,
        "nombre": "Antoine Souza",
        "nacionalidad": "España",
        "clubes": [
            "Real Madrid",
            "Wolfsburg",
            "Sevilla",
            "Villarreal"
        ]
    },
    {
        "id": 933,
        "nombre": "Diego Suarez",
        "nacionalidad": "México",
        "clubes": [
            "Real Madrid",
            "Toulouse",
            "Barcelona"
        ]
    },
    {
        "id": 934,
        "nombre": "Max Pinto",
        "nacionalidad": "Argentina",
        "clubes": [
            "Newell's Old Boys",
            "Atletico Mineiro",
            "Fluminense",
            "Racing Club",
            "Banfield"
        ]
    },
    {
        "id": 935,
        "nombre": "Mario Vidal",
        "nacionalidad": "España",
        "clubes": [
            "Vitoria Guimaraes",
            "Boavista",
            "Atletico Madrid",
            "Villarreal"
        ]
    },
    {
        "id": 936,
        "nombre": "Max Martin",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "PSG",
            "Toulouse",
            "AZ Alkmaar"
        ]
    },
    {
        "id": 937,
        "nombre": "Felipe Teixeira",
        "nacionalidad": "Alemania",
        "clubes": [
            "Stuttgart",
            "Schalke 04",
            "Bordeaux",
            "Lens"
        ]
    },
    {
        "id": 938,
        "nombre": "Hugo Batista",
        "nacionalidad": "Uruguay",
        "clubes": [
            "Racing Club",
            "Real Madrid",
            "Barcelona"
        ]
    },
    {
        "id": 939,
        "nombre": "David Lopez",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Manchester City",
            "Newcastle",
            "Chelsea",
            "Utrecht"
        ]
    },
    {
        "id": 940,
        "nombre": "Hugo Martin",
        "nacionalidad": "Colombia",
        "clubes": [
            "Lille",
            "Monaco",
            "Barcelona"
        ]
    },
    {
        "id": 941,
        "nombre": "Pierre Guzman",
        "nacionalidad": "Brasil",
        "clubes": [
            "Racing Club",
            "Palmeiras",
            "Estudiantes"
        ]
    },
    {
        "id": 942,
        "nombre": "Mario Galan",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "San Lorenzo",
            "Manchester City"
        ]
    },
    {
        "id": 943,
        "nombre": "José Gomez",
        "nacionalidad": "Marruecos",
        "clubes": [
            "San Lorenzo",
            "Velez Sarsfield",
            "Barcelona"
        ]
    },
    {
        "id": 944,
        "nombre": "Christian Fernandez",
        "nacionalidad": "Argentina",
        "clubes": [
            "Rosario Central",
            "Wolfsburg"
        ]
    },
    {
        "id": 945,
        "nombre": "Paul Gomez",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Bayer Leverkusen",
            "Manchester City",
            "Hoffenheim"
        ]
    },
    {
        "id": 946,
        "nombre": "Daniel Souza",
        "nacionalidad": "Senegal",
        "clubes": [
            "Groningen",
            "Barcelona"
        ]
    },
    {
        "id": 947,
        "nombre": "Sergio Rubio",
        "nacionalidad": "Francia",
        "clubes": [
            "Toulouse",
            "Rio Ave",
            "Benfica"
        ]
    },
    {
        "id": 948,
        "nombre": "Paul Ortiz",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Sassuolo",
            "Liverpool",
            "Newcastle",
            "Chelsea"
        ]
    },
    {
        "id": 949,
        "nombre": "Mateo Batista",
        "nacionalidad": "España",
        "clubes": [
            "Lyon",
            "Nice",
            "Barcelona",
            "Celta Vigo"
        ]
    },
    {
        "id": 950,
        "nombre": "Pedro Ruiz",
        "nacionalidad": "Francia",
        "clubes": [
            "Lille",
            "Real Betis",
            "Villarreal"
        ]
    },
    {
        "id": 951,
        "nombre": "Alex Fernandez",
        "nacionalidad": "Alemania",
        "clubes": [
            "RB Leipzig",
            "AZ Alkmaar"
        ]
    },
    {
        "id": 952,
        "nombre": "Karim Teixeira",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Aston Villa",
            "Braga",
            "Chelsea",
            "Maritimo"
        ]
    },
    {
        "id": 953,
        "nombre": "Nico Almeida",
        "nacionalidad": "Brasil",
        "clubes": [
            "Cruzeiro",
            "Rio Ave",
            "Gremio"
        ]
    },
    {
        "id": 954,
        "nombre": "Ruben Alvarez",
        "nacionalidad": "Bélgica",
        "clubes": [
            "Real Madrid",
            "Lazio",
            "Barcelona",
            "Juventus"
        ]
    },
    {
        "id": 955,
        "nombre": "Gabriel Perez",
        "nacionalidad": "Portugal",
        "clubes": [
            "Boavista",
            "Rio Ave",
            "Chelsea",
            "Benfica"
        ]
    },
    {
        "id": 956,
        "nombre": "David Santos",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Twente",
            "PSV",
            "Groningen",
            "Juventus"
        ]
    },
    {
        "id": 957,
        "nombre": "Olivier Cardoso",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Liverpool",
            "Feyenoord",
            "AZ Alkmaar"
        ]
    },
    {
        "id": 958,
        "nombre": "Olivier Ribeiro",
        "nacionalidad": "Bélgica",
        "clubes": [
            "Real Madrid",
            "Monaco",
            "Lens"
        ]
    },
    {
        "id": 959,
        "nombre": "Christian Rubio",
        "nacionalidad": "Italia",
        "clubes": [
            "Atalanta",
            "Utrecht"
        ]
    },
    {
        "id": 960,
        "nombre": "Christian Alvarez",
        "nacionalidad": "Senegal",
        "clubes": [
            "Real Madrid",
            "Barcelona",
            "Feyenoord"
        ]
    },
    {
        "id": 961,
        "nombre": "Ruben Ortiz",
        "nacionalidad": "Argentina",
        "clubes": [
            "San Lorenzo",
            "Barcelona"
        ]
    },
    {
        "id": 962,
        "nombre": "Karim Souza",
        "nacionalidad": "España",
        "clubes": [
            "Real Sociedad",
            "Bordeaux",
            "PSG"
        ]
    },
    {
        "id": 963,
        "nombre": "Julian Herrera",
        "nacionalidad": "Uruguay",
        "clubes": [
            "Real Madrid",
            "Toulouse",
            "Monaco",
            "Barcelona"
        ]
    },
    {
        "id": 964,
        "nombre": "Juan Pereyra",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Fluminense",
            "Wolves",
            "Manchester United"
        ]
    },
    {
        "id": 965,
        "nombre": "David Vazquez",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Wolves",
            "Chelsea",
            "Feyenoord"
        ]
    },
    {
        "id": 966,
        "nombre": "Daniel Ortiz",
        "nacionalidad": "Marruecos",
        "clubes": [
            "Stuttgart",
            "Schalke 04",
            "Real Madrid"
        ]
    },
    {
        "id": 967,
        "nombre": "Luis Almeida",
        "nacionalidad": "Senegal",
        "clubes": [
            "Real Madrid",
            "Barcelona",
            "Valencia"
        ]
    },
    {
        "id": 968,
        "nombre": "Luis Vidal",
        "nacionalidad": "Italia",
        "clubes": [
            "Juventus",
            "Lanús",
            "Sassuolo"
        ]
    },
    {
        "id": 969,
        "nombre": "Thomas Almeida",
        "nacionalidad": "Argentina",
        "clubes": [
            "Sassuolo",
            "River Plate"
        ]
    },
    {
        "id": 970,
        "nombre": "Hugo Souza",
        "nacionalidad": "Bélgica",
        "clubes": [
            "Eintracht Frankfurt",
            "Real Madrid",
            "Barcelona"
        ]
    },
    {
        "id": 971,
        "nombre": "Álvaro Gonzalez",
        "nacionalidad": "Italia",
        "clubes": [
            "Torino",
            "Benfica"
        ]
    },
    {
        "id": 972,
        "nombre": "Mateo Rubio",
        "nacionalidad": "Brasil",
        "clubes": [
            "Fluminense",
            "Eintracht Frankfurt",
            "Athletico Paranaense"
        ]
    },
    {
        "id": 973,
        "nombre": "Lucas Rodriguez",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Heerenveen",
            "Groningen",
            "Talleres",
            "Boca Juniors",
            "PSV"
        ]
    },
    {
        "id": 974,
        "nombre": "Marco Souza",
        "nacionalidad": "Francia",
        "clubes": [
            "Lille",
            "Toulouse",
            "Wolves"
        ]
    },
    {
        "id": 975,
        "nombre": "Pedro Gomez",
        "nacionalidad": "México",
        "clubes": [
            "Porto",
            "Real Madrid",
            "Maritimo"
        ]
    },
    {
        "id": 976,
        "nombre": "Daniel Santos",
        "nacionalidad": "Brasil",
        "clubes": [
            "Santos",
            "RB Leipzig",
            "Atletico Mineiro",
            "Stuttgart",
            "Vasco da Gama"
        ]
    },
    {
        "id": 977,
        "nombre": "Andrés Almeida",
        "nacionalidad": "Argentina",
        "clubes": [
            "Racing Club",
            "Groningen",
            "Independiente"
        ]
    },
    {
        "id": 978,
        "nombre": "Joao Martinez",
        "nacionalidad": "Croacia",
        "clubes": [
            "Real Madrid",
            "Boavista",
            "Barcelona"
        ]
    },
    {
        "id": 979,
        "nombre": "Ruben Galan",
        "nacionalidad": "Argentina",
        "clubes": [
            "Rennes",
            "Independiente",
            "Lens",
            "Racing Club",
            "Banfield"
        ]
    },
    {
        "id": 980,
        "nombre": "Felipe Martinez",
        "nacionalidad": "Portugal",
        "clubes": [
            "Porto",
            "Toulouse",
            "Lens",
            "Maritimo"
        ]
    },
    {
        "id": 981,
        "nombre": "Christian Silva",
        "nacionalidad": "México",
        "clubes": [
            "Real Madrid",
            "Athletico Paranaense",
            "Barcelona",
            "Santos"
        ]
    },
    {
        "id": 982,
        "nombre": "Juan Molina",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Twente",
            "Groningen",
            "Boavista",
            "Feyenoord"
        ]
    },
    {
        "id": 983,
        "nombre": "Miguel Neves",
        "nacionalidad": "Francia",
        "clubes": [
            "Marseille",
            "Rennes",
            "Rio Ave"
        ]
    },
    {
        "id": 984,
        "nombre": "Luis Martinez",
        "nacionalidad": "Senegal",
        "clubes": [
            "Braga",
            "Real Madrid",
            "Maritimo"
        ]
    },
    {
        "id": 985,
        "nombre": "Mario Cardoso",
        "nacionalidad": "Croacia",
        "clubes": [
            "Groningen",
            "Barcelona",
            "Feyenoord"
        ]
    },
    {
        "id": 986,
        "nombre": "Juan Teixeira",
        "nacionalidad": "Países Bajos",
        "clubes": [
            "Everton",
            "Groningen"
        ]
    },
    {
        "id": 987,
        "nombre": "Alessandro Teixeira",
        "nacionalidad": "Uruguay",
        "clubes": [
            "Hoffenheim",
            "Barcelona"
        ]
    },
    {
        "id": 988,
        "nombre": "Olivier Pereira",
        "nacionalidad": "Marruecos",
        "clubes": [
            "Real Madrid",
            "Atletico Madrid",
            "Villarreal"
        ]
    },
    {
        "id": 989,
        "nombre": "Ruben Ramos",
        "nacionalidad": "Portugal",
        "clubes": [
            "Sporting CP",
            "Lyon",
            "Boavista",
            "Monaco",
            "Rio Ave"
        ]
    },
    {
        "id": 990,
        "nombre": "Thomas Ribeiro",
        "nacionalidad": "España",
        "clubes": [
            "Juventus",
            "Real Betis"
        ]
    },
    {
        "id": 991,
        "nombre": "Enzo Sanchez",
        "nacionalidad": "Colombia",
        "clubes": [
            "Real Madrid",
            "Toulouse",
            "Monaco",
            "Barcelona"
        ]
    },
    {
        "id": 992,
        "nombre": "Julian Mendes",
        "nacionalidad": "Francia",
        "clubes": [
            "Porto",
            "Marseille",
            "Rennes"
        ]
    },
    {
        "id": 993,
        "nombre": "Ruben Fernandez",
        "nacionalidad": "Inglaterra",
        "clubes": [
            "Inter Milan",
            "Wolves"
        ]
    },
    {
        "id": 994,
        "nombre": "Antoine Lopez",
        "nacionalidad": "Senegal",
        "clubes": [
            "Real Madrid",
            "Barcelona",
            "Feyenoord"
        ]
    },
    {
        "id": 995,
        "nombre": "Christian Ortiz",
        "nacionalidad": "Francia",
        "clubes": [
            "Bordeaux",
            "AZ Alkmaar"
        ]
    },
    {
        "id": 996,
        "nombre": "Enzo Mendes",
        "nacionalidad": "Italia",
        "clubes": [
            "Torino",
            "AZ Alkmaar",
            "Feyenoord"
        ]
    },
    {
        "id": 997,
        "nombre": "David Pinto",
        "nacionalidad": "Argentina",
        "clubes": [
            "Lanús",
            "Groningen",
            "Talleres",
            "San Lorenzo",
            "Feyenoord"
        ]
    },
    {
        "id": 998,
        "nombre": "Sergio Ortiz",
        "nacionalidad": "Colombia",
        "clubes": [
            "Real Madrid",
            "Feyenoord"
        ]
    },
    {
        "id": 999,
        "nombre": "Karim Torres",
        "nacionalidad": "Colombia",
        "clubes": [
            "Heerenveen",
            "Real Madrid",
            "Ajax",
            "Barcelona"
        ]
    },
    {
        "id": 1000,
        "nombre": "Paul Oliveira",
        "nacionalidad": "Bélgica",
        "clubes": [
            "Real Madrid",
            "Lanús",
            "Barcelona",
            "Estudiantes"
        ]
    }
];
