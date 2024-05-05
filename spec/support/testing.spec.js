const axios = require('axios');

//Group testing for server
describe("Server", ()=>{
    var server;
    beforeAll(()=>{
        server = require("../../server");
    });
    afterAll(()=>{
        server.close();
    });

    //Testing for server basic functionalities
    describe("GET /testing", ()=>{
        var data = {};
        beforeAll((done)=>{
            axios.get("http://localhost:3000/testing")
            .then((response) => {
                data.status = response.status;
                data.body = response.data.message;
                done();
            } )
            .catch((err)=>{
                //console.log(err);
                done();
            });;
        });
        it("Status 200", ()=>{
            expect(data.status).toBe(200);
        });
        it("Body", ()=>{
            expect(data.body).toBe("Message delivered");
        })
    })

    //Testing for login
    describe("POST /login", ()=>{
        //Initiate object with null attribute values
        var loginInfo = {
            id: null,
            username: null,
            password: null
        };
        beforeAll((done)=>{
            axios.post("http://localhost:3000/login", {
                //User and password are present in database
                username: "Mike",
                password: "abc123."
            })
            .then((response) => {
                //Get back the login info
                var dbInfo;
                if(typeof response.data !== 'undefined' && response.data.length > 0){
                    //If the data received is not empty (it found the user) stores it in variable
                    dbInfo = response.data[0];
                    loginInfo.id = dbInfo.id;
                    loginInfo.username = dbInfo.user_name;
                    loginInfo.password = dbInfo.password;
                }
                done();
            }).catch((err)=>{
                console.log(err);
                done();
            });
        });
        it("Login pass", ()=>{
            //test expected values in database
            expect(loginInfo.id).toBe(4);
            expect(loginInfo.username).toBe("Mike");
            expect(loginInfo.password).toBe("abc123.");
        });
    })

    //Testing for barcode retrieval
    describe("POST /dbInfo", ()=>{
        //Initiate object with null attribute values
        var loginInfo = {
            id: null,
            barcode: null,
            product_name: null
        };
        beforeAll((done)=>{
            axios.post("http://localhost:3000/dbInfo", {
                //Barcode
                barcode: "4056489479222"
            })
            .then((response) => {
                //Get back the product info
                var dbInfo;
                if(typeof response.data !== 'undefined' && response.data.length > 0){
                    //If the data received is not empty (it found the user) stores it in variable
                    dbInfo = response.data[0];
                    loginInfo.id = dbInfo.id;
                    loginInfo.barcode = dbInfo.barcode;
                    loginInfo.product_name = dbInfo.product_name;
                }
                done();
            }).catch((err)=>{
                console.log(err);
                done();
            });
        });
        it("Login pass", ()=>{
            //test expected values in database
            expect(loginInfo.id).toBe(6);
            expect(loginInfo.barcode).toBe(4056489479222);
            expect(loginInfo.product_name).toBe("Chocolate Sauce");
        });
    })
});