$("document").ready(function(){
    // fetch('/dbInfo')
    // .then(response => response.json())
    // .then(data => console.log(data));

    $("#btnSearch").click(function(){
        var barcode = $("#barcode").val();
        console.log(barcode);
        $.ajax({
            url : 'http://localhost:3000/dbInfo',
            type : 'POST',
            data : {
                'barcode' : barcode
            },
            dataType:'json',
            success : function(data) {              
                var dbInfo = data;
                console.log(dbInfo);
            },
            error : function(request,error)
            {
                alert("Request: "+ JSON.stringify(request));
            }
        });
    })
});