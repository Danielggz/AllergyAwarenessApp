$("document").ready(function(){
    //Get current user details
    $.ajax({
        url : 'http://localhost:3000/getCurUser',
        type : 'GET',
        dataType:'json',
        success : function(data) {              
            var dbInfo = data[0];
            //get results of current user for inputs
            $("#name").val(dbInfo.user_name).prop('disabled', true);
            $("#surname").val(dbInfo.user_surname).prop('disabled', true);
            $("#email").val(dbInfo.email).prop('disabled', true);
        },
        error : function(request,error)
        {
            alert("Request: "+ JSON.stringify(request));
        }
    });

    //Add more fields when clicking more symptoms
    $("#moreSymptoms").click(function(){
        $("#divSymptom").after("<div class='form-group'><label for='symptom'>Symptom</label><input type='text' class='form-control symptom' id='symptom'/></div>");
    });

    $("#btnSubmit").click(function(e){

        //Prevent default submit of the form
        e.preventDefault();
        
        //Make an array with the values of the symptoms
        var symptomList = $(".symptom").map(function() {
            return $(this).val();
        }).get();

        console.log(symptomList);

        //Ajax request to server
        $.ajax({
            url : 'http://localhost:3000/allergyRegister',
            type : 'POST',
            data : {
                'symptoms' : symptomList
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

    //return to menu button
    $("#btnMenu").click(function(){
        window.location.href = "index.html"; 
    });
});