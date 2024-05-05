$("document").ready(function(){

    $("#btnSubmit").click(function(e){

        //Prevent default submit of the form
        e.preventDefault();
        
        //Get data from fields
        var name = $("#name").val();
        var surname = $("#surname").val();
        var password = $("#password").val();
        var email = $("#email").val();
        var newsletter;
        //Add values to newsletter
        if ($('#newsletter').is(":checked"))
            newsletter = 1;
        else
            newsletter = 0;
        
        //Ajax request to server
        $.ajax({
            url : 'http://localhost:3000/newUser',
            type : 'POST',
            data : {
                'name' : name,
                'surname' : surname,
                'password' : password,
                'email' : email,
                'newsletter': newsletter
            },
            dataType:'json',
            success : function(data) {
                if(typeof data.msg !== 'undefined'){
                    $("#errorMsg").html("<span class='alert alert-danger'>The user name must not contain spaces</span>");
                }        
                console.log(data);
            },
            error : function(request,error)
            {
                alert("Request: "+ JSON.stringify(request));
            }
        });
    })

    //return to menu button
    $("#btnMenu").click(function(){
        window.location.href = "login.html"; 
    });
});