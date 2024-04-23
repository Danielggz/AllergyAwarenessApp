$("document").ready(function(){     
    $("#btnScan").click(function(){
        // Stop any existing Quagga instance to avoid conflicts
        //Quagga.stop();
        // Initialize Quagga scanner
        //initializeQuagga();

        //set values to barcodes
        var barcodeArr = ["20484255","20835996","20201234","20064440","4056489377603","20172688","20024727"];
        var random = Math.floor(Math.random() * barcodeArr.length);
        $("#barcode").val(barcodeArr[random]);
        $("#btnSearch").focus();
        
    });

    $("#btnSearch").click(function(){
        var barcode = $("#barcode").val();
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
    });
    //return to menu button
    $("#btnMenu").click(function(){
        window.location.href = "mainMenu.html"; 
    });
});

    // Function to initialize Quagga scanner
    function initializeQuagga() {
        Quagga.init({
            inputStream : {
                name : "Live",
                type : "LiveStream",
                target: document.querySelector('#scanner-container'), // Selector for the live stream container
                constraints: {
                    facingMode: "environment" // Use the rear camera for mobile devices
                }
            },
            decoder : {
                readers : ['ean_reader'] // Use EAN barcode reader
            }
        }, function(err) {
            if (err) {
                console.log(err);
                return;
            }
            console.log("Initialization finished. Ready to start");
            Quagga.start();
        });
    }

    // Quagga scanner detection event
    Quagga.onDetected(function(result) {
        
    })

    