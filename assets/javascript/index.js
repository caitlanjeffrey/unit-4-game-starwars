
$(document).ready(function(){
    //var heros = [];
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    });

    var helloKittyAPower = (Math.floor(Math.random) * 100)
    var darthMaulAPower = (Math.floor(Math.random) * 30)
    var paulRuddAPower = 11
    var keanuReevesAPower = (Math.floor(Math.random) * 15)

    $(".btn").on("click", function(event){
        var index = $(this).attr("index")
        
    })
})
