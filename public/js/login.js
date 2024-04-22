$("document").ready(function(){
    $("#btnLogin").click(function(){
        var username = $("#username").val();
        var password = $("#password").val();

        // Checks if the username or password are included in the FileList
        if(username == "guest" && password == "abc123."){
            window.location.href = "index.html"; 
        }else{
            // display error message if not valid
            $("#errorMsg").html("<div class='alert alert-danger'>The username or password are not valid. Please try again</div>")
        }
    });
    $("#btnRegister").click(function(){
        window.location.href = "register.html"; 
    });
});