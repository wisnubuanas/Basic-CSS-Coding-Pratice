$(document).ready(function() {
    $("#btnAlert").click(function(e){
        e.preventDefault();
        window.scrollTo(0,0);
        $("#divAlert").removeClass("d-none");
        const nama = $("#inputemail").val();
        $("#alertText").html(nama);    
    });
    $("#buttonClose").click(function(){
        $("#divAlert").addClass("d-none");
    });
    // $("#imageContent img").click(function(){
    //     const imageSrc = $(this).attr("src");
    //     $("#imgParent").attr("src", imageSrc);
    // });
    $("#kirim").click(function(e){
        $("#berhasil").removeClass("d-none");
        e.preventDefault();
        window.scrollTo(0,0);
        const first = $("#first").val();
        const last = $("#last").val();
        const adress = $("#adress").val();
        $("#shipform").addClass("d-none");
        $("#hasil1").html("Terimakasih " + first +" " + last);
        $("#hasil2").html("Paket akan dikirim ke " + adress);
    });
    $("#kursi1").click(function(){
        const image = $("#kursi1").attr("src");
        $("#kursi0").attr("src", image);
        $("#kursi0").css("width", "500px");
    })
    $("#kursi2").click(function(){
        const image = $("#kursi2").attr("src");
        $("#kursi0").attr("src", image);
        $("#kursi0").css("width", "500px");
    })
    $("#kursi3").click(function(){
        const image = $("#kursi3").attr("src");
        $("#kursi0").attr("src", image);
        $("#kursi0").css("width", "500px");
    })
    $("#kursi4").click(function(){
        const image = $("#kursi4").attr("src");
        $("#kursi0").attr("src", image);
        $("#kursi0").css("width", "500px");
    })    
    $("#kursi5").click(function(){
        const image = $("#kursi5").attr("src");
        $("#kursi0").attr("src", image);
        $("#kursi0").css("width", "500px");
    })    
});