function display(val){
    document.getElementById('inp').value=document.getElementById('inp').value+val
}
function clearDisplay(){
    document.getElementById('inp').value=""
}
function equal(){
    var text=document.getElementById('inp').value
    var result=eval(text)
    document.getElementById('inp').value=result
}
