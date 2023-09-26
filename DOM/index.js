
//tranferring content to HTML
document.addEventListener("DOMContentLoaded", function(){

    //Slides 
    const fixed = 3;
    var slideSource = [];
    var slideTemplate = [];
    var slideOutput = [];

    //For loop to iterate and output slides
    for(var i = 1; i <= fixed; i++){
        slideSource[i] = document.getElementById(`slide-${i}`).innerHTML;
        slideTemplate[i] = Handlebars.compile(slideSource[i]);
        slideOutput[i] = slideTemplate[i](data.slides[i-1]);
        document.querySelector(`.slide-output${i}`).innerHTML = slideOutput[i];
    }

    //Articles
    var articleSource = [];
    var articleTemplate = [];
    var articleOutput = [];

    //For loop to iterate and output articles
    for(var i = 0; i < fixed; i++){
        articleSource[i] = document.getElementById(`articleContent${i}`).innerHTML;
        articleTemplate[i] = Handlebars.compile(articleSource[i]);
        articleOutput[i] = articleTemplate[i](data1.articles[i]);
        document.querySelector(`.articleBody${i}`).innerHTML = articleOutput[i];
    }

});

