let invitedguest=["aiswarya","abhi","ram","simi"];
let guest="abhi"
if(invitedguest.includes(guest))
{
let position=invitedguest.indexOf(guest);
console.log(" Welcome Invited guest in the " + position +"st position")
}
else
console.log("Sorry guest is not invited");
