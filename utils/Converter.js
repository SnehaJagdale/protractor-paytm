xlsxj = require("xlsx-to-json");
xlsxj({
    input: "PayTMDetails.xlsx",
    output: "output.json"
}, function(err, result) {
    if(err) {
        console.error(err);
    }else {
        //console.log(result);
    }
});