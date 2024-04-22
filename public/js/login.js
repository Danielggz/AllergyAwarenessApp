$("document").ready(function(){
    $("#btnLogin").click(function(){
        var username = $("#username").val();
        var password = $("#password").val();

        //Ajax request to server
        $.ajax({
            url : 'http://localhost:3000/login',
            type : 'POST',
            data : {
                'username' : username,
                'password' : password
            },
            dataType:'json',
            success : function(data) {   
                //Redirects to index in case the data is not empty
                if(!jQuery.isEmptyObject(data))
                    window.location.href = "index.html";
                else
                    // display error message if not valid (The data will be empty since it was not found in db)
                    $("#errorMsg").html("<div class='alert alert-danger'>The username or password are not valid. Please try again</div>")
            },
            error : function(request,error)
            {
                alert("Request: "+ JSON.stringify(request));
            }
        });
    });
    $("#btnRegister").click(function(){
        window.location.href = "register.html"; 
    });
});