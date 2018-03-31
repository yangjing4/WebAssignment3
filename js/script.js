
    var ajaxhttp = new XMLHttpRequest();
    var url = "post.json";
    ajaxhttp.open("GET", url, true);
    ajaxhttp.onreadystatechange = function() {
    if(ajaxhttp.readyState == 4 && ajaxhttp.status == 200){
        var jcontent = JSON.parse(ajaxhttp.responseText);
        console.log(jcontent);
        console.log(ajaxhttp);
        var div = document.getElementById('post');
        var txt = "";
        for (x in jcontent) {
            txt += "<article>"
            txt += "<h1>" + jcontent[x].title + "</h1>" + "<address> Written by <strong>" + jcontent[x].author + "</strong>" + 
            " on <strong>" + jcontent[x].date + "</strong> </address>" + "<p>" + jcontent[x].post + "</p>";
            txt += "</article>" 
        }
        div.innerHTML = txt;
        
    }
}
ajaxhttp.send(null);
console.log(ajaxhttp);






var addButton = document.getElementById('add-anchor'),
addStickyListener = function (evt) {
    //Send AJAX call to get the stciky dom.
    var newStickyRequest = new XMLHttpRequest();
    newStickyRequest.open('GET', 'index.html', true);
    newStickyRequest.responseType = 'text';
    newStickyRequest.onload = function () {
        if (this.status == 200) {
            createSticky(this.responseText);
        }
    };
    newStickyRequest.send();
};

//Add click event handler/listener
addButton.addEventListener('click', addStickyListener);



var createSticky = function (stickyDom) {

    var stickyArea = document.getElementById("add");
    var input1 = document.createElement('input');
    var input2 = document.createElement('input');
    //var input3 = "'" + date.getFullYear() + "-" + date.getMonth() + "-" 
    //+ date.getDate() + "'",
    var input4 = document.createElement('input');
    var button = document.createElement('button');
    var newContent = document.createTextNode("Submit"); 
    button.appendChild(newContent); //add the text node to the newly created div. 
     
    input1.id = "input1",
    input1.type = "text",
    input2.id = "input2",
    //input3.id = "input3",
    input4.id = "input4";
    button.id = "submit";
    button.setAttribute('onclick', "myFunction()");

    stickyArea.appendChild(input1);
    stickyArea.appendChild(input2);
    //stickyArea.appendChild(input3);
    stickyArea.appendChild(input4);
    stickyArea.appendChild(button);



}


function myFunction(){

            var date = new Date();
            var query = "";
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0'+minutes : minutes;
            var strTime = hours + ':' + minutes + ' ' + ampm;
            var jcontent1 = document.getElementById("input1").value,
            jcontent2 = document.getElementById("input2").value, 
            jcontent3 = "'"  + date.getMonth() + "/" 
            + date.getDate() + "/"+  date.getFullYear() + ", "+strTime+"'", 
            jcontent4 = document.getElementById("input4").value;

            
            var txt = "";
            jcontent=input1.value;
            var newArticle = document.createElement("article");
        
            txt += "<h1>" + jcontent + "</h1>" + "<address> Written by <strong>" + jcontent2 + "</strong>" + 
            " on <strong>" + jcontent3+ "</strong> </address>" + "<p>" + jcontent4 + "</p>";
            newArticle.innerHTML = txt;            
            document.getElementById("post").appendChild(newArticle);
            document.getElementById("add").innerHTML = "";
        
    
}

jQuery(document).ready(function(){
    var navOffset = jQuery("nav").offset().top;
    jQuery("nav").wrap('<div class="nav-placeholder"></div>');
    jQuery(".nav-placeholder").height(jQuery("nav").outerHeight());
    jQuery(window).scroll(function(){
       var scrollPos=jQuery(window).scrollTop(); 
       if(scrollPos>=navOffset){
           jQuery("nav").addClass("fixed"); 
       }else{
           jQuery("nav").removeClass("fixed");
       }

    });


});
