function load() {
    
    loadJSON(function response(params) {
        var mydata = JSON.parse(params);
        var elem = document.getElementById("project-list");
        var list = document.createElement("ul");
        mydata.forEach(function(element) {
           var li = document.createElement("li");
           var a = document.createElement("a");
           a.href = element.html_url;
           a.innerText = element.name;
           var l = document.createTextNode(": ".concat(element.description));
           li.appendChild(a);
           li.appendChild(l);
           list.appendChild(li);
            
        }, this);
        elem.appendChild(list);
        
    })
}

function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'https://api.github.com/users/jensvaaben/repos', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {

        // .open will NOT return a value but simply returns undefined in async mode so use a callback
            callback(xobj.responseText);

        }
    }
    xobj.send(null);

}