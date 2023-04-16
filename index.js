$(document).ready(function(){

    $.getJSON("test.json", function(data){
        console.log(data)

        $('.percentage').html(data.percentage);
        $('.omni').html(data.online);
        $('.shipping').html(data.shipping);

    }).fail(function(){
        console.log("Check code")
    })
})