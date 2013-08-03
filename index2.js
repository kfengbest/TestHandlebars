
// Model

var langs = {
	programs :[
		{lan:"javascript"},
		{lan:"cpp"},
		{lan:"java"}
	]
}

function initPage(){

    // load template
    var tmplPeople = Handlebars.templates['Person.hbs'];
    
    // Apply model to template:
    var content = tmplPeople(langs);

    // Apply contents
    $("#content").html(content);
}