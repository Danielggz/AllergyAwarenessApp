    $("document").ready(function(){
        $("#allergyManagement").click(function(){
            window.location.href = "allergyManagement.html"; 
        });
        $("#realTimeDetection").click(function(){
            window.location.href = "realTimeDetection.html"; 
        });
        $("#settings").click(function(){
            window.location.href = "settings.html"; 
        });
    });
    
    // Placeholder function for handling allergy type button click
    function allergyTypeSelected(AllergyType) {
        // alert(`Selected Allergy Types: ${allergyType}`);

        // Add actual functionality for the selected allergy type
    }

    // Placeholder function for the scanner button
    function scanProduct() {
        alert('Please Scan The barcode on The Product!');
        // Add actual scanner functionality code here
    }
    // Placeholder function for alert state
    function toggleAlert(buttonId) {
        const alertButton = document.getElementById(buttonId);
        const isAlertOn = alertButton.classList.contains('btn-success');
        const alertState = isAlertOn ? 'Off' : 'On';

        alertButton.textContent = `Alert: ${alertState}`;
        alertButton.classList.toggle('btn-success');
        alertButton.classList.toggle('btn-danger');

        // Add actual alert functionality code here
        if (isAlertOn) {
            // Turn off alert actions
        } else {
            // Turn on alert actions
        }
    }