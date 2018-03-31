
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
        // var createDiv=document.createElement("div");
        // var position=document.getElementById("bloglist");
        // position.appendChild(createDiv);
        // createDiv.setAttribute("class","blog");
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
    var input2 = document.createElement('input')
    var input3 = document.createElement('input');
    var input4 = document.createElement('input');
    var button = document.createElement('button');
    var newContent = document.createTextNode("Submit"); 
    button.appendChild(newContent); //add the text node to the newly created div. 
     
    input1.id = "input1",
    input1.type = "text",
    input2.id = "input2",
    input3.id = "input3",
    input4.id = "input4";
    button.id = "submit";
    button.setAttribute('onclick', "myFunction()");

    stickyArea.appendChild(input1);
    stickyArea.appendChild(input2);
    stickyArea.appendChild(input3);
    stickyArea.appendChild(input4);
    stickyArea.appendChild(button);



}


function myFunction(){

            var jcontent1 = document.getElementById("input1").value,
            jcontent2 = document.getElementById("input2").value, 
            jcontent3 = document.getElementById("input3").value, 
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


