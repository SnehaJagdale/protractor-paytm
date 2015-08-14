/**
 * Created by snehaj on 7/16/2015.
 */
//var converter = require('Converter');

exports.SetData = function() {
    var fs = require('fs');
    var obj = JSON.parse(fs.readFileSync('utils/output.json', 'utf8'));
    for (var e in obj) {
        console.log("Operator " + obj[e].Operator);
        console.log("Number " +  obj[e].Number);
    }
    return obj;
};