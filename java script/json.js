var text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

obj = JSON.parse(text);
console.log(obj.employees[1].firstName + " " + obj.employees[1].lastName)


// json basic structure
var text='{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

ver=JSON.parse(text);
console.log(ver.employees[2].firstName+" "+ver.employees[2].lastName)