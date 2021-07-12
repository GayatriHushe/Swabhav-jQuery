(function($) {
    $.fn.formToJson = function() {
        var studentJson = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (studentJson[this.name]) {
                if (!studentJson[this.name].push) {
                    studentJson[this.name] = [studentJson[this.name]];
                }
                studentJson[this.name].push(this.value || '');
            } else {
                studentJson[this.name] = this.value || '';
            }
        });
        return studentJson;
    };
})(jQuery);

$('form').submit(function(e) {
    e.preventDefault();
    var data = $(this).formToJson();
    console.log(data);
    addStudent(data)
});

function addStudent(data) {
    //$("#loading").css("visibility", "visible");
    //setTimeout(function() {
    $.post("http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students",
        data,
        function(data1, status) {
            alert("Data: " + data1 + "\nStatus: " + status);
            console.log("Data: " + data1 + "\nStatus: " + status)
        });
    //$("#loading").css("visibility", "hidden");
    //}, 2000);
}

$("#display").click(getData);

function getData() {
    setTimeout(function() {
        //$("#loading").css("visibility", "visible");
        $.getJSON("http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students", function(data) {
                $("#total").html("Total entries : " + data.length)
                $("#table").css("visibility", "visible")
                var student = '';
                $.each(data, function(key, value) {
                    student += '<tr>';
                    student += '<td>' + value.rollNo + '</td>';
                    student += '<td>' + value.name + '</td>';
                    student += '<td>' + value.age + '</td>';
                    student += '<td>' + value.email + '</td>';
                    student += '<td>' + value.date + '</td>';
                    student += '<td>' + value.isMale + '</td>';
                    student += '</tr>';
                });
                $('#table').append(student);
            })
            //$("#loading").css("visibility", "hidden");
    }, 2000);
}























// jQuery(function($){
//     $.fn.formToJson=function(infoContainer){
//         const form=this;
//         let submittedData=[];
//         let formData={
//             rollNo:Number,
//             name:String,
//             age:Number,
//             email:String,
//             date:String,
//             isMale:Boolean,
//         };
//         let jsonOutputData = Object.create(formData);
//         console.log(jsonOutputData)
//         $(form).submit(function(event){
//             event.preventDefault();
//             jsonData();
//             outputData();
//             resetData();
//         });
//         function jsonData(){
//             if (submittedData!=undefined||submittedData!=null){
//                 $(submittedData).promise().done(function(){
//                     jsonOutputData.rollNo=submittedData[0];
//                     jsonOutputData.name=submittedData[1];
//                     jsonOutputData.age=submittedData[2];
//                     jsonOutputData.email=submittedData[3];
//                     jsonOutputData.date=submittedData[4];
//                     jsonOutputData.isMale=submittedData[5];
//                     console.log(jsonOutputData)
//                 });
//             }
//         };
//         function outputData(){
//             let stringifyJsonData = JSON.stringify(jsonOutputData);
//             if(infoContainer!==undefined||infoContainer!==null){
//                 $(jsonOutputData).promise().done(function(){
//                     $(infoContainer).html(stringifyJsonData);
//                     console.log(stringifyJsonData)
//                 });
//             }
//             else{
//                 // else just return the JSON data
//                 console.log('resultContainer undefined');
//                 return stringifyJsonData;
//             }
//         }
//         function resetData(){
//             // reset all data
//             submittedData = [];
//             jsonOutputData = {};
//         }
//         console.log(submittedData)
//     }

// }(jQuery));


// jQuery.noConflict();
// jQuery(document).ready(function( $ ){
//     $('#studentform').formToJson('.result-json-output');

// });