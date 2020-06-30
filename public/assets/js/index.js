$(document).ready(()=>{
    $("#makeButton").click(()=>{
        const name = $("#burgerName").val();
        
        $.post("/burgers/create", {name}, (result, status) => {
            window.location.reload(true);
        });
    })
    $(".devour").click((event) => {
        const burgerID = $(event.target).attr("data");
        $.post("/burgers/devour/"+burgerID, (data, status) => {
            window.location.reload(true);
        });
    })
})

    