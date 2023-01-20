function getParameterByName(f, url = window.location.href) {
    f = f.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + f + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  };

var nacc = document.getElementById("nacc");
var paramF = getParameterByName("f");
var ifr = document.getElementById("mifr")
var ddl = document.getElementById("ddl")

if (paramF !== null && paramF !== undefined) {
    ifr.data = "/cloud/main/files/" + paramF
    ddl.href = "/cloud/main/files/" + paramF
    ddl.downlaod = paramF
} else if (paramF == null && paramF == undefined) {
    nacc.style.display = "block";
};