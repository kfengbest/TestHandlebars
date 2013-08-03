
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

var lang4 = {
	User:{
		firstName:"Kaven1",
		lastName:"Feng1",
		phone: "123-456-789"
	}
}


Handlebars.registerHelper("formatPhoneNum", function(num){
	return "(021)-" + num; 
});


function initPage(){

    // load template
    var tmplPeople = Handlebars.templates['Person.hbs'];
    
    // Apply model to template:
    var content = tmplPeople(langs);

    // Apply contents
    $("#content").html(content);


    jQuery.getScript('TemplatesJS/EachBlockHelper.tmpl.js', function (data, textStatus, jqxhr) {
	   	var tmpl2 = Handlebars.templates['EachBlockHelper.hbs'];
	   	var cont2 = tmpl2(lang2);
	   	$("#content").append(cont2);
    });

    jQuery.getScript('TemplatesJS/WithHelper.tmpl.js', function (data, textStatus, jqxhr) {
   		var tmpl = Handlebars.templates['WithHelper.hbs'];
   		var cont = tmpl(lang3);
   		$("#content").append(cont);
    });

    jQuery.getScript('TemplatesJS/CustomHelper.tmpl.js', function (data, textStatus, jqxhr) {
   		 var tmpl = Handlebars.templates['CustomHelper.hbs'];
   		 var cont = tmpl(lang4);
   		 $("#content").append(cont);
    });

}