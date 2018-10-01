
jQuery(function(){
    var width = window.innerWidth;
    if(width<=640){
        var elementosTroca = document.getElementsByClassName('troca');
        var elementosTroca2 = document.getElementsByClassName('troca2');
        for(let i = 0; i < elementosTroca.length; i++){
            var el1 = elementosTroca[i];
            var el2 = elementosTroca2[i];
            el1.parentElement.removeChild(el2);
            el1.parentElement.insertBefore(el2,el1);
        }
    }   
})