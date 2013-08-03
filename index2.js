
// Model
var person1 = {first_name:"kaven", second_name:"feng"};


function initPage(){

    // load template
    var tmplPeople = Handlebars.templates['Person.hbs'];
    
    // Apply model to template:
    var content = tmplPeople(person1);

    // Apply contents
    $("#content").html(content);
}