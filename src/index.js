let hour = new Date();
let greetings;
if (hour >= 0 && hour <12) {
    greetings = "Good morning";
}
else if(hour >=12 && hour <18){
    greetings = "Good afternoon";
}
else {
    greetings = "Goog evening";
}

document.write("<h1>" +  greetings + "</h1>");