//import fetch from "node-fetch";
var axios=require("axios");
axios.get("http://localhost:3000/policies")
.then((res)=>{
    console.log("RESP :" + JSON.stringify(res.data[0].policyNumber));
});


