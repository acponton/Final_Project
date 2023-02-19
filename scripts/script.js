var verbs, nouns, adjectives, adverbs, prepositions;

nouns = ["man", "firefighter", "police", "rabbit", "scientist", "girl", "boy", "cat", "doctor", "doll", "detective", "old lady"];
verbs = ["worked", "talked", "played", "travelled", "flew", "drank", "sliced", "ate", "died", "breathed", "slept", "wrote"];
adjectives = ["fast", "silly", "beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "cold", "ugly", "slimy"];
adverbs = ["today", "extremely", "slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately"];
prepositions = ["beside", "under", "down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];

function randGenerator() {
    return Math.floor(Math.random() * 6);
}

function sentence() {
    var random1 = Math.floor(Math.random()*12);
    var random2 = Math.floor(Math.random()*12);
    var random3 = Math.floor(Math.random()*12);
    var random4 = Math.floor(Math.random()*12);
    var random5 = Math.floor(Math.random()*12);
    var random6 = Math.floor(Math.random()*12);

    var content = "The " + adjectives[random1] + " " + nouns[random1] + " " + adverbs[random1] + " " + verbs[random1] 
    + " because some " + nouns[random2] + " " + adverbs[random2] + " " + verbs[random2] + " " + prepositions[random2] 
    + " a " + adjectives[random3] + " " + nouns[random3] + " which, became a " + adjectives[random6] + ", " 
    + adjectives[random5] + " " + nouns[random5] + ".";

    document.getElementById("sentence").innerHTML = "&quot;" + content + "&quot;";
};
sentence();