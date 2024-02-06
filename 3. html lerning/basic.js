var isDisplay=true;

function hideElement(){
    if(isDisplay==true){
        isDisplay=false;
        document.getElementById("h2Basic").style.display="none";
    }
    else{
        isDisplay=true;
        document.getElementById("h2Basic").style.display="block";
    }
}