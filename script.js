var html,css,js;
function run(){
 html=document.getElementById("htmlcode").value;
 css="<style>" + document.getElementById("csscode").value + "</style>";
 js="<scri" + "pt>" + document.getElementById("jscode").value+ "</scri" + "pt>";
var result=document.getElementById("preview-window").contentWindow.document;
result.open();
result.write(html+css+js);
result.close();
}
