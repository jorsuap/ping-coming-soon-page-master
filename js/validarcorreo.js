function validarcorreo(){
    var valor = document.getElementById("email").value;
    var stilo = document.getElementById("email");
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var valido = expReg.test(valor);
    var msjalert = document.getElementsByClassName("idmsnerror")[0];
    
    if(valido==false){
        stilo.classList.add("error");
        msjalert.classList.add("active");
        event.preventDefault();
    }
    else{
        stilo.classList.remove("error");
        msjalert.classList.remove("active");
    }
}