function load() {
    /*var mydata = JSON.parse(data);
    mydata.forEach(function(element) {
    }, this);*/
    
    loadJSON(function response(params) {
        var mydata = JSON.parse(params);
        mydata.forEach(function(element) {
            
        }, this);
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

