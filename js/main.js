$(document).ready(function(){


    var i = 0;
    
    $('.slidebox').click(function(){

        i++
        if(i > 2){
            i = 0
        }   

    $('.imgbox').animate({
        left: (-100*i) + "%"
    })
    });

    // setInterval(function(){

    //     $('.slidebox').trigger('click')
    // },3000);
})