const noiseScale = [
	"Quiet (~40 dB)",
	"Medium-Quiet (~50 dB)",
	"Medium-Loud (~60 dB)",
	"Loud (~70 dB)"
];

const lightScale = [
	"Dark",
	"Moody",
	"Well-Lit",
	"Bright"
];

const PLACES = [
      //[Identifier, Latitude, Longitude, Max Occupancy, Description]
	["ARMS", 40.431008, -86.914955, 1, "Armstrong (Neil) Hall of Engineering"],
	["BALY", 40.427192, -86.910063, 1, "Bailey (Ralph and Bettye) Hall"],
	["BHEE", 40.428643, -86.911951, 1, "Brown (Max W & Maileen) Family Hall"],
	["BRNG", 40.425577, -86.916278, 1, "Beering (Steven C.) Hall of Liberal Arts and Education"],
	["BRWN", 40.426581, -86.911887, 1, "Brown (Herbert C.) Laboratory of Chemistry"],
	["CHAS", 40.428578, -86.915604, 1, "Chaney-Hale Hall of Science"],
	["CL50", 40.426328, -86.915052, 1, "Class of 1950 Lecture Hall"],
	["DSAI", 40.428954, -86.914870, 1, "Hall of Data Science and AI"],
	["DUDL", 40.427141, -86.911265, 1, "Dudley Hall"],
	["FRNY", 40.429513, -86.913982, 1, "Forney Hall of Chemical Engineering"],
	["GRIS", 40.426342, -86.910845, 1, "Grissom Hall"],
	["HAAS", 40.426818, -86.916326, 1, "Haas (Felix) Hall"],
	["HAMP", 40.430318, -86.914878, 1, "Hampton (Delon and Elizabeth) Hall of Civil Engineering"],
	["HIKS", 40.424535, -86.912653, 1, "Hicks (John W.) Undergraduate Library"],
	["HOVD", 40.428239, -86.914434, 1, "Hovde (Frederick L.) Hall of Administration"],
	["JNSN", 40.429405, -86.915528, 1, "Johnson (Helen R.) Hall of Nursing"],
	["KNOY", 40.427774, -86.911139, 1, "Knoy (Maurice G.) Hall of Technology"],
	["LMBS", 40.427608, -86.911654, 1, "Lambertus Hall"],
	["LWSN", 40.427790, -86.916986, 1, "Lawson (Richard and Patricia) Computer Science Building"],
	["MATH", 40.426214, -86.915764, 1, "Mathematical Sciences Building"],
	["ME",   40.428235, -86.912898, 1, "Mechanical Engineering Building"],
	["MRRT", 40.424552, -86.916997, 1, "Marriott Hall"],
	["MSEE", 40.429354, -86.912646, 1, "Materials and Electrical Engineering Building"],
	["MTHW", 40.424729, -86.916381, 1, "Matthews Hal"],
	["PGSC", 40.429877, -86.911840, 1, "Purdue Graduate Student Center"],
	["PHYS", 40.430197, -86.913522, 1, "Physics Building"],
	["PMU",  40.425033, -86.911373, 1, "Purdue Memorial Union"],
	["PMUC", 40.425385, -86.910673, 1, "Purdue Memorial Union Club"],
	["POTR", 40.427516, -86.912399, 1, "Potter (A.A.) Engineering Cente"],
	["PRCE", 40.426651, -86.915055, 1, "Peirce Hall"],
	["PSYC", 40.427043, -86.914942, 1, "Psychological Sciences Building"],
	["RHPH", 40.429754, -86.915976, 1, "Heine (Robert E.) Pharmacy Building"],
	["SC",   40.426469, -86.914372, 1, "Stanley Coulter Hall"],
	["SCHM", 40.425805, -86.915203, 1, "Helen B. Schleman Hall"],
	["STEW", 40.425046, -86.912706, 1, "Stewart Center"],
	["STON", 40.424646, -86.915264, 1, "Stone (Winthrop E.) Hall"],
	["UNIV", 40.425270, -86.915193, 1, "University Hall"],
	["WALC", 40.427412, -86.913220, 1800, "Wilmeth Active Learning Center"],
	["WANG", 40.430458, -86.912556, 1, "Wang (Seng-Liang) Hall"],
	["WTHR", 40.426457, -86.913099, 1, "Wetherill (Richard Benbridge) Laboratory of Chemistry"],
];