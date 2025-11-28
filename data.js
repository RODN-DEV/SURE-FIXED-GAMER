// Game Data
const gamesData = {
    free: [
        {
            league: "Bundesliga",
            time: "22:30",
            teamA: "Borrussia M",
            teamB: "RB Leipzig",
            prediction: "Away Win (2)", 
            odds: "2.15",
            status: "pending",
            isLive: false
        },
        {
            league: "Ligue 1",
            time: "20:45",
            teamA: "Metz",
            teamB: "Rennes",
            prediction: "Away Win (2)", 
            odds: "1.95",
            status: "pending",
            isLive: false
        },
        {
            league: "Premier League",
            time: "16:00",
            teamA: "Luton Town",
            teamB: "Man City",
            prediction: "Over 2.5 Goals", 
            odds: "1.45",
            status: "won",
            isLive: false
        }
    ],
    topSecret: [
        {
            league: "Bosnia & Herz.",
            time: "14:00",
            teamA: "Romanija Pale",
            teamB: "Zvijezda 09",
            prediction: "Under 2.5", 
            odds: "1.62",
            status: "pending",
            isLive: false
        },
        {
            league: "Europa League",
            time: "21:00",
            teamA: "Genk",
            teamB: "Basel",
            prediction: "Home Win (1)", 
            odds: "1.95",
            status: "pending",
            isLive: false
        },
        {
            league: "Saudi Div 1",
            time: "18:00",
            teamA: "Al Adalh",
            teamB: "Al-Ula",
            prediction: "Away Win (2)", 
            odds: "1.39",
            status: "won",
            isLive: false
        },
        {
            league: "La Liga",
            time: "20:00",
            teamA: "Getafe",
            teamB: "Elche",
            prediction: "Home Win (1)", 
            odds: "2.25",
            status: "pending",
            isLive: false
        },
        {
            league: "Championship",
            time: "19:45",
            teamA: "Oxford United",
            teamB: "Ipswich",
            prediction: "Away Win (2)", 
            odds: "1.57",
            status: "pending",
            isLive: false
        }
    ],
    ultimate: [
        {
            league: "Saudi Pro",
            time: "19:00",
            teamA: "Al Hilal",
            teamB: "Al Shorta",
            prediction: "Over 3.5 Goals", 
            odds: "2.42",
            status: "won",
            isLive: false
        },
        {
            league: "South Africa",
            time: "20:30",
            teamA: "Magesi",
            teamB: "Kaizer Chiefs",
            prediction: "Away Win", 
            odds: "2.20",
            status: "pending",
            isLive: true
        },
        {
            league: "Israel Liga",
            time: "15:00",
            teamA: "Hapoel Tirat",
            teamB: "Maccabi K.A",
            prediction: "Away Win", 
            odds: "2.30",
            status: "won",
            isLive: false
        },
        {
            league: "Primera División",
            time: "22:00",
            teamA: "Cobresal",
            teamB: "Colo Colo",
            prediction: "Away Win (2)", 
            odds: "2.20",
            status: "pending",
            isLive: false
        },
        {
            league: "Eredivisie",
            time: "20:00",
            teamA: "PEC Zwolle",
            teamB: "Heerenveen",
            prediction: "Away Win (2)", 
            odds: "1.85",
            status: "pending",
            isLive: false
        }
    ],
    overUnder: [
        {
            league: "Eredivisie",
            time: "12:15",
            teamA: "Ajax",
            teamB: "Sparta R.",
            prediction: "Over 2.5", 
            odds: "1.55",
            status: "pending",
            isLive: false
        },
        {
            league: "Serie A",
            time: "15:00",
            teamA: "Lecce",
            teamB: "Bologna",
            prediction: "Under 2.5", 
            odds: "1.65",
            status: "pending",
            isLive: false
        },
        {
            league: "La Liga",
            time: "21:00",
            teamA: "Barcelona",
            teamB: "Girona",
            prediction: "Over 3.5", 
            odds: "2.10",
            status: "won",
            isLive: false
        },
        {
            league: "3. Liga",
            time: "18:00",
            teamA: "Oldenburg",
            teamB: "Meppen",
            prediction: "Over 2.5", 
            odds: "1.80",
            status: "pending",
            isLive: false
        },
        {
            league: "Eerste Divisie",
            time: "20:00",
            teamA: "Den Bosch",
            teamB: "Willem II",
            prediction: "Over 2.5", 
            odds: "1.75",
            status: "pending",
            isLive: false
        },
        {
            league: "Eerste Divisie",
            time: "19:00",
            teamA: "FC Emmen",
            teamB: "Jong AZ",
            prediction: "Over 2.5", 
            odds: "1.70",
            status: "pending",
            isLive: false
        },
        {
            league: "Wales Premier",
            time: "19:45",
            teamA: "The New Saints",
            teamB: "Caernarfon Town",
            prediction: "Over 2.5", 
            odds: "1.83",
            status: "pending",
            isLive: false
        },
        {
            league: "Qatar Stars League",
            time: "17:30",
            teamA: "Al Shamal",
            teamB: "Al Rayyan",
            prediction: "Over 2.5", 
            odds: "1.72",
            status: "pending",
            isLive: false
        }
    ],
    btts: [
        {
            league: "Europa League",
            time: "18:45",
            teamA: "AS Roma",
            teamB: "Midtjylland",
            prediction: "BTTS: Yes", 
            odds: "1.80",
            status: "won",
            isLive: false,
            score: "2:1"
        },
        {
            league: "Europa Conference",
            time: "21:00",
            teamA: "Genk",
            teamB: "Basel",
            prediction: "BTTS: Yes", 
            odds: "1.57",
            status: "won",
            isLive: false,
            score: "2:1"
        },
        {
            league: "Europa Conference",
            time: "21:00",
            teamA: "Aston Villa",
            teamB: "Young Boys",
            prediction: "BTTS: Yes", 
            odds: "1.90",
            status: "won",
            isLive: false,
            score: "2:1"
        },
        {
            league: "Champions League",
            time: "21:00",
            teamA: "Feyenoord",
            teamB: "Celtic",
            prediction: "BTTS: Yes", 
            odds: "1.62",
            status: "won",
            isLive: false,
            score: "1:3"
        },
        {
            league: "Champions League",
            time: "21:00",
            teamA: "Atlético Madrid",
            teamB: "Inter",
            prediction: "BTTS: Yes", 
            odds: "1.70",
            status: "won",
            isLive: false,
            score: "2:1"
        },
        {
            league: "Champions League",
            time: "21:00",
            teamA: "Arsenal",
            teamB: "Bayern Munich",
            prediction: "BTTS: Yes", 
            odds: "1.67",
            status: "won",
            isLive: false,
            score: "3:1"
        },
        {
            league: "Norwegian Div 2",
            time: "17:00",
            teamA: "Aalesund",
            teamB: "Egersund",
            prediction: "BTTS: Yes", 
            odds: "1.67",
            status: "won",
            isLive: false,
            score: "3:1"
        },
        {
            league: "Swiss Super League",
            time: "19:30",
            teamA: "Lugano",
            teamB: "St. Gallen",
            prediction: "BTTS: Yes", 
            odds: "1.53",
            status: "won",
            isLive: false,
            score: "1:3"
        }
    ]
};