
//transferring content to HTML 
document.addEventListener("DOMContentLoaded", function(){
  
    // this code gets the template the script
    var source = document.getElementById("form-output").innerHTML;

    // this code compile the template
    var template = Handlebars.compile(source);

    // Data 
    var data = {
        img: "assets/me.jpeg",
        alt: "Page's author",
        intro: "Hi I'm Yarli!",
        message: "I hope you enjoyed this website. Please leave your feedback, and help me improve it.",
        close: "May God bless you!",
        namePlaceHolder: "Full name...",
        emailPlaceHolder: "Email Address...",
        textPlaceHolder: "Type your Comment...",
        submit: "Submit Comment",
    }

    // this code generates the HTML
    var output = template(data);

    // this code output the HTML
    document.querySelector('.form-input').innerHTML = output;

    // this code makes the form section a little bit interactive 
    var form = document.querySelector('.comment-box form');
    form.querySelector('button[type="submit"]').addEventListener('click', function(event){
        // This code prevent default form submission
        event.preventDefault();

        //Display alert
        alert('Your comment has been sent!');

        // this code reset the form cleaning the boxes when submitted
        // found on https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset_event
        form.reset();
    })
})