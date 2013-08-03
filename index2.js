
// Model

var langs = {
	programs :[
		{lan:"javascript"},
		{lan:"cpp"},
		{lan:"java"}
	]
}

var lang2 = {
	name:["html","js","css"]
}

var lang3 = {
	title:"My first post",
	author:{
		firstName: "Kaven",
		lastName: "Feng"
	},
	address:{
		county: "China",
		city: "Shanghai"
	}
}

function initPage(){

    // load template
    var tmplPeople = Handlebars.templates['Person.hbs'];
    
    // Apply model to template:
    var content = tmplPeople(langs);

    // Apply contents
    $("#content").html(content);

   	var tmpl2 = Handlebars.templates['EachBlockHelper.hbs'];
   	var cont2 = tmpl2(lang2);
   	$("#content").append(cont2);

   		var tmpl3 = Handlebars.templates['WithHelper.hbs'];
   		var cont3 = tmpl3(lang3);
   		$("#content").append(cont3);


    // jQuery.getScript('TemplatesJS/EachBlockHelper.tmpl.js', function (data, textStatus, jqxhr) {
   	// 	var tmpl2 = Handlebars.templates['EachBlockHelper.hbs'];
   	// 	var cont2 = tmplPeople(lang2);
   	// 	$("#content").append(cont2);
    // });

    // jQuery.getScript('TemplatesJS/WithHelper.tmpl.js', function (data, textStatus, jqxhr) {
   	// 	var tmpl = Handlebars.templates['WithHelper.hbs'];
   	// 	var cont = tmplPeople(lang3);
   	// 	$("#content").append(cont);
    // });

}