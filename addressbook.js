var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
};

/*Create a search function
then call it passing "Jones"*/
var search = function(lastName) {
    var contactsLength = contacts.length;
    for(i = 0; i < contactsLength; i++){
     if(contacts[i].lastName === lastName){
            printPerson(contacts[i]);
        }
    }
};

var add  = function(firstName, lastName, email, phoneNumber)
{
var contactsLength = contacts.length;
var Person = new Object();
Person.firstName = firstName;
Person.lastName = lastName;
Person.email = email;
Person.phoneNumber = phoneNumber;
contacts[contactsLength] = Person;


};


search("Jones");
var first = prompt("First Name?");
var second = prompt("Last Name?");
var third = prompt("Email?");
var fourth = prompt("Telephone No.?");
add(first, second, third, fourth);
list();