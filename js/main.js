function load() {
    
    loadJSON(function response(params) {
        var mydata = JSON.parse(params);
        var elem = document.getElementById("project-list");
        var list = document.createElement("ul");
        mydata.forEach(function(element) {
           var li = document.createElement("li");
           var a = document.createElement("a");
           a.href = element.url;
           a.innerText = element.name;
           li.appendChild(a);
           list.appendChild(li);
            
        }, this);
        elem.appendChild(list);
    })
}

function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'projects.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {

        // .open will NOT return a value but simply returns undefined in async mode so use a callback
            callback(xobj.responseText);

        }
    }
    xobj.send(null);

}

