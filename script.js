function idCard (){
    var first = document.getElementById('first').value;
    var last = document.getElementById('last').value;
    var address = document.getElementById('addrs').value;
    document.getElementById('postfullname').innerHTML = first +"  "+last;
    document.getElementById('postaddress').innerHTML = address;
    var age = parseint(document.getElementById('age').value);
    var phonenumber = parseint(document.getElementById('phonenumber').value);
    var numberArray =[];{
        numberArray.push('age','phonenumber');
            for (i=0;i<numberArray.lenghth;i++){
            if (numberArray[i]<=100){
                document.getElementById('postage').innerHTML = 'AGE:'+'age';
            }
            else if (numberArray[i]>100) {
            document.getElementById('postphonenumber').innerHTML = 'Phone Number:' + 'phonenumber';
            }
        }   
    }

}