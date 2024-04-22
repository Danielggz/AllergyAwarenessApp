$("document").ready(function(){
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
                var dbInfo = data[0];
                console.log(dbInfo);

                //Change information in modal
                $("#product_name").html(dbInfo.product_name);
                $("#weight").html(dbInfo.weight);
                $("#brand").html(dbInfo.brand);
                $("#barcodeInfo").html(dbInfo.barcode);
                $("#ingredients").html(dbInfo.ingredients);
                //Check if contains peanut or cross contamination and display messages accordingly
                if(dbInfo.contains_peanut){
                    $("#peanut").html("<span class='alert alert-danger'> YES </span>");
                }else{
                    $("#peanut").html("<span class='alert alert-success'> NO </span>");
                }
                if(dbInfo.cross_contamination){
                    $("#crossCont").html("<span class='alert alert-danger'> YES </span>");
                }else{
                    $("#crossCont").html("<span class='alert alert-success'> NO </span>");
                }
                
                //Display modal to show the information
                $('#dataModal').modal('show');
            },
            error : function(request,error)
            {
                alert("Request: "+ JSON.stringify(request));
            }
        });
    })
});