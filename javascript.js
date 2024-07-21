
function valid()
{
    var firstname= document.validform.firstName.value;
    var lastname= document.validform.lastName.value;
    var city= document.validform.city.value;
    var number= document.validform.number.value;
    var address= document.validform.address.value;
    if(firstname==null||lastname==""||city==""||number==""||address=="")
        {
        alert("Fill the details");
        return false;
        } 
} 
