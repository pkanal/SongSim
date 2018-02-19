var POETRY = { label: "Poetry", slug: "poetry" };
var NR = { label: "Nursery Rhymes", slug: "nursery_rhymes" };
var MISC = { label: "Misc", slug: "misc" };
var SIXTIES = { label: "60's", slug: "60s" };
var SEVENTIES = { label: "70's", slug: "70s" };
var EIGHTIES = { label: "80's", slug: "80s" };
var NINETIES = { label: "90's", slug: "90s" };
var NAUGHTS = { label: "00's", slug: "00s" };
var CONTEMP = { label: "Contemporary", slug: "contemp" };

var ORDERED_CATEGORIES = [
  CONTEMP,
  NAUGHTS,
  NINETIES,
  EIGHTIES,
  SEVENTIES,
  SIXTIES,
  NR,
  POETRY,
  MISC
];

var CANNED_SONGS = [
  {
    slug: "green-light",
    artist: "Lorde",
    title: "Green Light",
    group: CONTEMP.slug,
    dropdown: true
  },
  {
    slug: "sober",
    artist: "Lorde",
    title: "Sober",
    group: CONTEMP.slug,
    dropdown: true
  },
  {
    slug: "homemade-dynamite",
    artist: "Lorde",
    title: "Homemade Dynamite",
    group: CONTEMP.slug,
    dropdown: true
  },
  {
    slug: "liability",
    artist: "Lorde",
    title: "Liability",
    group: CONTEMP.slug,
    dropdown: true
  },
  {
    slug: "perfect-places",
    artist: "Lorde",
    title: "Perfect Places",
    group: CONTEMP.slug,
    dropdown: true
  },
  {
    slug: "yeah-right",
    artist: "Vince Staples",
    title: "Yeah Right",
    group: CONTEMP.slug,
    dropdown: true
  },
  {
    slug: "halo",
    artist: "Beyonce",
    title: "Halo",
    group: CONTEMP.slug,
    dropdown: true
  },
  {
    slug: "work",
    artist: "Rhianna",
    title: "Work",
    group: CONTEMP.slug,
    dropdown: true
  },
  {
    slug: "one-more-time",
    artist: "Daft Punk",
    title: "One More Time",
    group: CONTEMP.slug,
    dropdown: true
  },
  {
    slug: "around-the-world",
    artist: "Daft Punk",
    title: "Around the World",
    group: CONTEMP.slug,
    dropdown: true
  },
  {
    slug: "give-it-away",
    artist: "Red Hot Chili Peppers",
    title: "Give It Away",
    group: CONTEMP.slug,
    dropdown: true
  },
  {
    slug: "shape-of-you",
    artist: "Ed Sheeran",
    title: "Shape of You",
    group: CONTEMP.slug,
    dropdown: true
  },
  {
    slug: "voodoo",
    artist: "Sleepy K",
    title: "Voodoo",
    group: CONTEMP.slug,
    dropdown: true
  },
  // {
  //   slug: "12daysofxmas",
  //   artist: "",
  //   title: "The 12 Days Of Christmas",
  //   group: MISC.slug,
  //   dropdown: true
  // },
  // {
  //   slug: "4thofjuly",
  //   artist: "Kelis",
  //   title: "4th Of July",
  //   group: NAUGHTS.slug,
  //   hidden: true
  // },
  // {
  //   slug: "abc",
  //   artist: "Jackson 5",
  //   title: "ABC",
  //   group: SEVENTIES.slug,
  //   dropdown: true
  // },
  // {
  //   slug: "adamssong",
  //   artist: "Blink-182",
  //   title: "Adam's Song",
  //   group: NINETIES.slug
  // },
  // {
  //   slug: "allthesmallthings",
  //   artist: "Blink-182",
  //   title: "All The Small Things",
  //   group: NINETIES.slug,
  //   dropdown: true
  // },
  // {
  //   slug: "allyouneedislove",
  //   artist: "The Beatles",
  //   title: "All You Need Is Love",
  //   group: SIXTIES.slug,
  //   dropdown: true
  // },
  // {
  //   slug: "anthems",
  //   artist: "Broken Social Scene",
  //   title: "Anthems For A Seventeen-Year Old Girl",
  //   group: NAUGHTS.slug
  // },
  // {
  //   slug: "baabaa",
  //   artist: "",
  //   title: "Baa Baa Black Sheep",
  //   group: NR.slug,
  //   dropdown: true,
  //   mini: true
  // },
  // {
  //   slug: "bad",
  //   artist: "Michael Jackson",
  //   title: "Bad",
  //   group: EIGHTIES.slug
  // },
  // {
  //   slug: "badblood",
  //   artist: "Taylor Swift",
  //   title: "Bad Blood",
  //   group: CONTEMP.slug
  // },
  // {
  //   slug: "badgirls",
  //   artist: "M.I.A.",
  //   title: "Bad Girls",
  //   group: CONTEMP.slug
  // },
  // {
  //   slug: "badromance",
  //   artist: "Lady Gaga",
  //   title: "Bad Romance",
  //   group: NAUGHTS.slug,
  //   dropdown: true
  // },
  // {
  //   slug: "barbiegirl",
  //   artist: "Aqua",
  //   title: "Barbie Girl",
  //   group: NINETIES.slug,
  //   dropdown: true
  // },
  // {
  //   slug: "beatit",
  //   artist: "Michael Jackson",
  //   title: "Beat It",
  //   group: EIGHTIES.slug
  // },
  // {
  //   slug: "billsbillsbills",
  //   artist: "Destiny's Child",
  //   title: "Bills Bills Bills",
  //   group: NINETIES.slug
  // },
  // {
  //   slug: "biology",
  //   artist: "Girls Aloud",
  //   title: "Biology",
  //   group: NAUGHTS.slug,
  //   hidden: true
  // },
  // {
  //   slug: "bizarrelovetriangle",
  //   artist: "New Order",
  //   title: "Bizarre Love Triangle",
  //   group: EIGHTIES.slug
  // },
  // {
  //   slug: "blackbeatles",
  //   artist: "Rae Sremmurd ft. Gucci Mane",
  //   title: "Black Beatles",
  //   group: CONTEMP.slug
  // },
  // {
  //   slug: "blowblow",
  //   artist: "William Shakespeare",
  //   title: "Blow, Blow, Thou Winter Wind (from As You Like It)",
  //   group: MISC.slug
  // },
  // {
  //   slug: "bomt",
  //   artist: "Britney Spears",
  //   title: "...Baby One More Time",
  //   group: NINETIES.slug,
  //   dropdown: true
  // },
  // {
  //   slug: "bootylicious",
  //   artist: "Destiny's Child",
  //   title: "Bootylicious",
  //   group: NAUGHTS.slug
  // },
  // {
  //   slug: "bossy",
  //   artist: "Kelis",
  //   title: "Bossy",
  //   group: NAUGHTS.slug,
  //   hidden: true
  // },
  // {
  //   slug: "boyproblems",
  //   artist: "Carly Rae Jepsen",
  //   title: "Boy Problems",
  //   group: CONTEMP.slug,
  //   hidden: true
  // },
  // {
  //   slug: "breaktherules",
  //   artist: "Charli XCX",
  //   title: "Break The Rules",
  //   group: CONTEMP.slug,
  //   hidden: true
  // },
  // {
  //   slug: "brokenflowers",
  //   artist: "Danny L Harle",
  //   title: "Broken Flowers",
  //   group: CONTEMP.slug
  // },
  // {
  //   slug: "buddyholly",
  //   artist: "Weezer",
  //   title: "Buddy Holly",
  //   group: NINETIES.slug,
  //   dropdown: true
  // },
  // {
  //   slug: "burningdownthehouse",
  //   artist: "Talking Heads",
  //   title: "Burning Down The House",
  //   group: EIGHTIES.slug
  // },
  // {
  //   slug: "callmemaybe",
  //   artist: "Carly Rae Jepsen",
  //   title: "Call Me Maybe",
  //   group: CONTEMP.slug,
  //   dropdown: true
  // },
  // {
  //   slug: "calltheshots",
  //   artist: "Girls Aloud",
  //   title: "Call The Shots",
  //   group: NAUGHTS.slug,
  //   hidden: true
  // },
  // {
  //   slug: "cantfeelmyface",
  //   artist: "The Weeknd",
  //   title: "Can't Feel My Face",
  //   group: CONTEMP.slug,
  //   dropdown: true
  // },
  // {
  //   slug: "cantspeakfrench",
  //   artist: "Girls Aloud",
  //   title: "Can't Speak French",
  //   group: NAUGHTS.slug
  // },
  // {
  //   slug: "cgyoomh",
  //   artist: "Kylie Minogue",
  //   title: "Can't Get You Out Of My Head",
  //   group: NAUGHTS.slug,
  //   dropdown: true
  // },
  // {
  //   slug: "chandelier",
  //   artist: "Sia",
  //   title: "Chandelier",
  //   group: CONTEMP.slug
  // },
  // {
  //   slug: "cheapthrills",
  //   artist: "Sia",
  //   title: "Cheap Thrills",
  //   group: CONTEMP.slug,
  //   dropdown: true
  // },
  // {
  //   slug: "darkhorse",
  //   artist: "Katy Perry ft. Juicy J",
  //   title: "Dark Horse",
  //   group: CONTEMP.slug,
  //   dropdown: true
  // },
  // {
  //   slug: "debaser",
  //   artist: "The Pixies",
  //   title: "Debaser",
  //   group: EIGHTIES.slug
  // },
  // {
  //   slug: "discontent",
  //   artist: "William Shakespeare",
  //   title:
  //     "Now is the winter of our discontent... (Richard III opening soliloquy)",
  //   group: MISC.slug
  // },
  // {
  //   slug: "dontfuckingtellmewhattodo",
  //   artist: "Robyn",
  //   title: "Don't Fucking Tell Me What To Do",
  //   group: CONTEMP.slug
  // },
  // {
  //   slug: "everyinch",
  //   artist: "Florrie",
  //   title: "Every Inch",
  //   group: CONTEMP.slug,
  //   hidden: true
  // },
  // { slug: "foolish", artist: "Ashanti", title: "Foolish", group: NAUGHTS.slug },
  // {
  //   slug: "formation",
  //   artist: "Beyonce",
  //   title: "Formation",
  //   group: CONTEMP.slug
  // },
  // {
  //   slug: "freefalling",
  //   artist: "Florrie",
  //   title: "Free Falling",
  //   group: CONTEMP.slug,
  //   hidden: true
  // },
  // {
  //   slug: "frerejacques",
  //   artist: "",
  //   title: "Frere Jacques",
  //   group: NR.slug,
  //   mini: true
  // },
  // {
  //   slug: "geniusoflove",
  //   artist: "Tom Tom Club",
  //   title: "Genius Of Love",
  //   group: EIGHTIES.slug
  // },
  // {
  //   slug: "getlucky",
  //   artist: "Daft Punk ft. Pharrell Williams",
  //   title: "Get Lucky",
  //   group: CONTEMP.slug
  // },
  // {
  //   slug: "getthepartystarted",
  //   artist: "Pink",
  //   title: "Get The Party Started",
  //   group: NAUGHTS.slug,
  //   dropdown: true
  // },
  // {
  //   slug: "geturfreakon",
  //   artist: "Missy Elliott",
  //   title: "Get Ur Freak On",
  //   group: NAUGHTS.slug,
  //   dropdown: true
  // },
  // {
  //   slug: "gimmegimmegimme",
  //   artist: "ABBA",
  //   title: "Gimme Gimme Gimme",
  //   group: EIGHTIES.slug
  // },
  // {
  //   slug: "gimmelove",
  //   artist: "Carly Rae Jepsen",
  //   title: "Gimmie Love",
  //   group: CONTEMP.slug,
  //   hidden: true
  // },
  // {
  //   slug: "gimmemore",
  //   artist: "Britney Spears",
  //   title: "Gimme More",
  //   group: NAUGHTS.slug
  // },
  // {
  //   slug: "gottobereal",
  //   artist: "Cheryl Lynn",
  //   title: "Got To Be Real",
  //   group: SEVENTIES.slug
  // },
  // {
  //   slug: "gutfeeling",
  //   artist: "Devo",
  //   title: "Gut Feeling",
  //   group: SEVENTIES.slug
  // },
  // {
  //   slug: "harderbetterfasterstronger",
  //   artist: "Daft Punk",
  //   title: "Harder, Better, Faster, Stronger",
  //   group: NAUGHTS.slug
  // },
  // {
  //   slug: "hardestbutton",
  //   artist: "The White Stripes",
  //   title: "The Hardest Button To Button",
  //   group: NAUGHTS.slug,
  //   dropdown: true
  // },
  // {
  //   slug: "hotcrossbuns",
  //   artist: "",
  //   title: "Hot Cross Buns",
  //   group: NR.slug,
  //   dropdown: true,
  //   mini: true
  // },
  // {
  //   slug: "hotlinebling",
  //   artist: "Drake",
  //   title: "Hotling Bling",
  //   group: CONTEMP.slug,
  //   dropdown: true
  // },
  // {
  //   slug: "humps",
  //   artist: "The Black-eyed Peas",
  //   title: "My Humps",
  //   group: NAUGHTS.slug
  // },
  // {
  //   slug: "ibleed",
  //   artist: "The Pixies",
  //   title: "I Bleed",
  //   group: NINETIES.slug
  // },
  // {
  //   slug: "ifeellove",
  //   artist: "Donna Summer",
  //   title: "I Feel Love",
  //   group: SEVENTIES.slug,
  //   dropdown: true
  // },
  // {
  //   slug: "ikissedagirl",
  //   artist: "Katy Perry",
  //   title: "I Kissed A Girl",
  //   group: NAUGHTS.slug
  // },
  // {
  //   slug: "iknowwhatboyslike",
  //   artist: "The Waitresses",
  //   title: "I Know What Boys Like",
  //   group: EIGHTIES.slug
  // },
  // {
  //   slug: "independentwomen",
  //   artist: "Destiny's Child",
  //   title: "Independent Women Pt. 1",
  //   group: NAUGHTS.slug
  // },
  // {
  //   slug: "intergalactic",
  //   artist: "Beastie Boys",
  //   title: "Intergalactic",
  //   group: NINETIES.slug
  // },
  // {
  //   slug: "itsraining",
  //   artist: "",
  //   title: "It's Raining, It's Pouring",
  //   group: NR.slug,
  //   dropdown: true
  // },
  // {
  //   slug: "jabberwocky",
  //   artist: "Lewis Carroll",
  //   title: "The Jaberwocky",
  //   group: POETRY.slug
  // },
  // { slug: "judas", artist: "Lady Gaga", title: "Judas", group: CONTEMP.slug },
  // {
  //   slug: "killvmaim",
  //   artist: "Grimes",
  //   title: "Kill v Maim",
  //   group: CONTEMP.slug
  // },
  // {
  //   slug: "konichiwabitches",
  //   artist: "Robyn",
  //   title: "Konichiwa Bitches",
  //   group: CONTEMP.slug
  // },
  // {
  //   slug: "leanon",
  //   artist: "Major Lazer ft. M0",
  //   title: "Lean On",
  //   group: CONTEMP.slug
  // },
  // {
  //   slug: "lefttoolate",
  //   artist: "Florrie",
  //   title: "Left Too Late",
  //   group: CONTEMP.slug,
  //   hidden: true
  // },
  // {
  //   slug: "likeaprayer",
  //   artist: "Madonna",
  //   title: "Like A Prayer",
  //   group: EIGHTIES.slug
  // },
  // {
  //   slug: "littlewhitelies",
  //   artist: "Florrie",
  //   title: "Little White Lies",
  //   group: CONTEMP.slug,
  //   hidden: true
  // },
  // {
  //   slug: "lockyouup",
  //   artist: "Charli XCX",
  //   title: "Lock You Up",
  //   group: CONTEMP.slug
  // },
  // {
  //   slug: "lovefool",
  //   artist: "The Cardigans",
  //   title: "Lovefool",
  //   group: NINETIES.slug,
  //   dropdown: true
  // },
  // {
  //   slug: "loveshack",
  //   artist: "The B-52's",
  //   title: "Love Shack",
  //   group: EIGHTIES.slug
  // },
  // {
  //   slug: "lucky",
  //   artist: "Britney Spears",
  //   title: "Lucky",
  //   group: NAUGHTS.slug
  // },
  // {
  //   slug: "majorgeneral",
  //   artist: "Gilbert And Sullivan",
  //   title: "The Major-General's Song",
  //   group: MISC.slug
  // },
  // {
  //   slug: "milkshake",
  //   artist: "Kelis",
  //   title: "Milkshake",
  //   group: NAUGHTS.slug,
  //   dropdown: true
  // },
  // {
  //   slug: "millionreasons",
  //   artist: "Lady Gaga",
  //   title: "Million Reasons",
  //   group: CONTEMP.slug
  // },
  // { slug: "mmmbop", artist: "Hanson", title: "Mmmbop", group: NINETIES.slug },
  // {
  //   slug: "mysharona",
  //   artist: "The Knack",
  //   title: "My Sharona",
  //   group: SEVENTIES.slug
  // },
  // {
  //   slug: "odetopsyche",
  //   artist: "John Keats",
  //   title: "Ode To Psyche",
  //   group: POETRY.slug,
  //   dropdown: true
  // },
  // {
  //   slug: "onceinalifetime",
  //   artist: "Talking Heads",
  //   title: "Once In A Lifetime",
  //   group: EIGHTIES.slug,
  //   dropdown: true
  // },
  // {
  //   slug: "oops",
  //   artist: "Britney Spears",
  //   title: "Oops!... I Did It Again",
  //   group: NAUGHTS.slug,
  //   dropdown: true
  // },
  // {
  //   slug: "peaches",
  //   artist: "The Presidents of the United States of America",
  //   title: "Peaches",
  //   group: NINETIES.slug,
  //   dropdown: true
  // },
  // {
  //   slug: "plan",
  //   artist: "They Might Be Giants",
  //   title: "No-one Knows My Plan",
  //   group: NINETIES.slug
  // },
  // {
  //   slug: "praiseyou",
  //   artist: "Fatboy Slim",
  //   title: "Praise You",
  //   group: NINETIES.slug
  // },
  // {
  //   slug: "psychokiller",
  //   artist: "Talking Heads",
  //   title: "Psycho Killer",
  //   group: SEVENTIES.slug
  // },
  // {
  //   slug: "rapture",
  //   artist: "Blondie",
  //   title: "Rapture",
  //   group: EIGHTIES.slug
  // },
  // {
  //   slug: "rayoflight",
  //   artist: "Madonna",
  //   title: "Ray Of Light",
  //   group: NINETIES.slug,
  //   dropdown: true
  // },
  // {
  //   slug: "ribs",
  //   artist: "Lorde",
  //   title: "Ribs",
  //   group: CONTEMP.slug,
  //   dropdown: true
  // },
  // {
  //   slug: "rocklobster",
  //   artist: "The B-52's",
  //   title: "Rock Lobster",
  //   group: SEVENTIES.slug,
  //   dropdown: true
  // },
  // { slug: "royals", artist: "Lorde", title: "Royals", group: CONTEMP.slug },
  // {
  //   slug: "rumourhasit",
  //   artist: "Adele",
  //   title: "Rumour Has It",
  //   group: CONTEMP.slug,
  //   dropdown: true
  // },
  // {
  //   slug: "runawaywithme",
  //   artist: "Carly Rae Jepsen",
  //   title: "Run Away With Me",
  //   group: CONTEMP.slug,
  //   hidden: true
  // },
  // {
  //   slug: "sabotage",
  //   artist: "Beastie Boys",
  //   title: "Sabotage",
  //   group: NINETIES.slug,
  //   dropdown: true
  // },
  // { slug: "secret", artist: "Madonna", title: "Secret", group: NINETIES.slug },
  // {
  //   slug: "sexotheque",
  //   artist: "La Roux",
  //   title: "Sexotheque",
  //   group: CONTEMP.slug
  // },
  // {
  //   slug: "shotyoudown",
  //   artist: "Florrie",
  //   title: "Shot You Down",
  //   group: CONTEMP.slug
  // },
  // {
  //   slug: "sidetoside",
  //   artist: "Ariana Grande (feat. Nicki Minaj)",
  //   title: "Side To Side",
  //   group: CONTEMP.slug,
  //   dropdown: true
  // },
  // {
  //   slug: "sinceubeengone",
  //   artist: "Kelly Clarkson",
  //   title: "Since U Been Gone",
  //   group: NAUGHTS.slug,
  //   dropdown: true
  // },
  // {
  //   slug: "singleladies",
  //   artist: "Beyonce",
  //   title: "Single Ladies",
  //   group: NAUGHTS.slug
  // },
  // {
  //   slug: "sk8erboi",
  //   artist: "Avril Lavigne",
  //   title: "Sk8er Boi",
  //   group: NAUGHTS.slug
  // },
  // {
  //   slug: "somethingnew",
  //   artist: "Girls Aloud",
  //   title: "Something New",
  //   group: CONTEMP.slug,
  //   hidden: true
  // },
  // {
  //   slug: "speedoflight",
  //   artist: "Florrie",
  //   title: "Speed Of Light",
  //   group: CONTEMP.slug,
  //   hidden: true
  // },
  // {
  //   slug: "spiderwebs",
  //   artist: "No Doubt",
  //   title: "Spiderwebs",
  //   group: NINETIES.slug
  // },
  // {
  //   slug: "stressedout",
  //   artist: "Twenty-One Pilots",
  //   title: "Stressed Out",
  //   group: CONTEMP.slug
  // },
  // {
  //   slug: "sugarsugar",
  //   artist: "The Archies",
  //   title: "Sugar Sugar",
  //   group: SIXTIES.slug,
  //   dropdown: true
  // },
  // {
  //   slug: "supermodel",
  //   artist: "RuPaul",
  //   title: "Supermodel (You Better Work)",
  //   group: NINETIES.slug
  // },
  // { slug: "team", artist: "Lorde", title: "Team", group: CONTEMP.slug },
  // {
  //   slug: "temptation",
  //   artist: "New Order",
  //   title: "Temptation",
  //   group: EIGHTIES.slug,
  //   dropdown: true
  // },
  // {
  //   slug: "thatthing",
  //   artist: "Lauryn Hill",
  //   title: "Doo Wop (That Thing)",
  //   group: NINETIES.slug,
  //   dropdown: true
  // },
  // {
  //   slug: "theechoinggreen",
  //   artist: "William Blake",
  //   title: "The Echoing Green",
  //   group: POETRY.slug
  // },
  // {
  //   slug: "thelamb",
  //   artist: "William Blake",
  //   title: "The Lamb",
  //   group: POETRY.slug
  // },
  // {
  //   slug: "theowlandthepussycat",
  //   artist: "Edward Lear",
  //   title: "The Owl And The Pussycat",
  //   group: POETRY.slug
  // },
  // {
  //   slug: "thepasture",
  //   artist: "Robert Frost",
  //   title: "The Pasture",
  //   group: POETRY.slug,
  //   dropdown: true,
  //   mini: true
  // },
  // {
  //   slug: "thetyger",
  //   artist: "William Blake",
  //   title: "The Tyger",
  //   group: POETRY.slug,
  //   dropdown: true
  // },
  {
    slug: "threeblindmice",
    artist: "",
    title: "Three Blind Mice",
    group: NR.slug,
    mini: true
  },
  {
    slug: "thriller",
    artist: "Michael Jackson",
    title: "Thriller",
    group: EIGHTIES.slug
    // dropdown: true
  },
  { slug: "tiktok", artist: "Kesha", title: "Tik Tok", group: CONTEMP.slug },
  {
    slug: "totheend",
    artist: "Florrie",
    title: "To The End",
    group: CONTEMP.slug,
    hidden: true
  },
  {
    slug: "toxic",
    artist: "Britney Spears",
    title: "Toxic",
    group: NAUGHTS.slug
  },
  {
    slug: "conventionalgirl",
    artist: "Kate Nash",
    title: "Conventional Girl",
    group: CONTEMP.slug
  },
  {
    slug: "vroomvroom",
    artist: "Charli XCX",
    title: "Vroom Vroom",
    group: CONTEMP.slug,
    hidden: true
  },
  {
    slug: "walkinginla",
    artist: "Missing Persons",
    title: "Walking In L.A.",
    group: EIGHTIES.slug
  },
  {
    slug: "wannadancewithsomebody",
    artist: "Whitney Houston",
    title: "I Wanna Dance With Somebody",
    group: EIGHTIES.slug
  },
  {
    slug: "wevegotitgoingon",
    artist: "Backstreet Boys",
    title: "We've Got It Going On",
    group: NINETIES.slug
  },
  {
    slug: "whatsup",
    artist: "4 Non Blondes",
    title: "What's Up?",
    group: NINETIES.slug
    // dropdown: true
  },
  {
    slug: "whenafelon",
    artist: "Gilbert And Sullivan",
    title: "When A Felon's Not Engaged In His Employment",
    group: MISC.slug
  },
  {
    slug: "whenineededyou",
    artist: "Carly Rae Jepsen",
    title: "When I Needed You",
    group: CONTEMP.slug,
    hidden: true
  },
  {
    slug: "whenitrains",
    artist: "They Might Be Giants",
    title: "When It Rains It Snows",
    group: EIGHTIES.slug
  },
  {
    slug: "wheniwasoneandtwenty",
    artist: "A.E. Housman",
    title: "When I Was One-and-Twenty",
    group: POETRY.slug,
    mini: true
  },
  {
    slug: "whereismymind",
    artist: "The Pixies",
    title: "Where Is My Mind?",
    group: EIGHTIES.slug
    // dropdown: true
  },
  { slug: "whipit", artist: "Devo", title: "Whip It", group: EIGHTIES.slug },
  {
    slug: "wordyrappinghood",
    artist: "Tom Tom Club",
    title: "Wordy Rappinghood",
    group: EIGHTIES.slug
  },
  {
    slug: "workbitch",
    artist: "Britney Spears",
    title: "Work Bitch",
    group: CONTEMP.slug
  },
  {
    slug: "wouldntitbenice",
    artist: "The Beach Boys",
    title: "Wouldn't It Be Nice",
    group: SIXTIES.slug
    // dropdown: true
  },
  {
    slug: "youbelongwithme",
    artist: "Taylor Swift",
    title: "You Belong With Me",
    group: NAUGHTS.slug
  },

  {
    slug: "goodvibrations",
    artist: "The Beach Boys",
    title: "Good Vibrations",
    group: SIXTIES.slug
  },
  {
    slug: "jimmymack",
    artist: "Martha & The Vandellas",
    title: "Jimmy Mack",
    group: SIXTIES.slug
  },
  {
    slug: "moreperfect",
    artist: "Barack Obama",
    title: "A More Perfect Union (excerpt)",
    group: MISC.slug
  },
  {
    slug: "ocanada",
    artist: "",
    title: "O Canada",
    group: MISC.slug,
    // dropdown: true,
    mini: true
  },
  {
    slug: "onthebeaches",
    artist: "Winston Churchill",
    title: "We Shall Fight On The Beaches (excerpt)",
    group: MISC.slug
    // dropdown: true
  },
  {
    slug: "sohappytogether",
    artist: "The Turtles",
    title: "So Happy Together",
    group: SIXTIES.slug
  },
  {
    slug: "starspangled",
    artist: "",
    title: "The Star-Spangled Banner",
    group: MISC.slug
  },
  {
    slug: "suspiciousminds",
    artist: "Elvis Presley",
    title: "Suspicious Minds",
    group: SIXTIES.slug
  },
  {
    slug: "thatstheway",
    artist: "KC And The Sunshine Band",
    title: "That's The Way (I Like It)",
    group: SEVENTIES.slug
  },
  {
    slug: "think",
    artist: "Aretha Franklin",
    title: "Think",
    group: SIXTIES.slug
  }
];

export { ORDERED_CATEGORIES, CANNED_SONGS as default };
