$("document").ready(function(){
    $("#btnSubmit").click(function(e){

        //Prevent default submit of the form
        e.preventDefault();
        
        //Get data from fields
        var name = $("#name").val();
        var surname = $("#surname").val();
        var email = $("#email").val();

        //Ajax request to server
        $.ajax({
            url : 'http://localhost:3000/newUser',
            type : 'POST',
            data : {
                'name' : name,
                'surname' : surname,
                'email' : email
            },
            dataType:'json',
            success : function(data) {              
                console.log(data);
                
            },
            error : function(request,error)
            {
                alert("Request: "+ JSON.stringify(request));
            }
        });
    })
});