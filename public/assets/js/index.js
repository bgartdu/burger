$(document).ready(()=>{
    $("#makeButton").click(()=>{
        const name = $("#burgerName").val();
        
        $.post("/burgers/create", {name}, (result, status) => {
            window.location.reload(true);
        });
    })
})

    