
//tranferring data to HTML
document.addEventListener("DOMContentLoaded", function(){

    // Cards
    const fixed = 8;
    var templates = [];
    var outputs = [];

    //For loop to iterate and output cards
    for(var i = 0; i < fixed; i++){
        var source = document.getElementById(`card-input${i}`).innerHTML;
        templates[i] = Handlebars.compile(source);
        outputs[i] = templates[i](data2.cards[i % 4]);
        document.querySelector(`.card-output${i}`).innerHTML = outputs[i];
    }
});
