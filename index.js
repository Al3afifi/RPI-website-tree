var data = [
    {
        "firstName": "Jhon",
        "lastName": "Smith"
    },
    {
        "firstName": "Bob",
        "lastName": "Ross"
    },
    {
        "firstName": "Jhon",
        "lastName": "Doe"
    }
]

for (var i in data){
    var row = <div>
        <div>$data[i].firstName</div>
        <div>$data[i].lastName</div>
    </div>
}