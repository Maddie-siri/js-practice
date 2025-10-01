// file system module
const fs = require("fs");
// user id -symbol
const userId = Symbol("userId");
// database file 
const filePath = "users.json";
// load users - start
let users = loadUsers();
// load users from file - helper 
function loadUsers() {
    if (fs.existsSync(filePath)){
        let data = fs.readFileSync(filePath,"utf-8");
        return JSON.parse(data);
    }
    return [];
}
// save users to file - helper
function saveUsers(){
    fs.writeFileSync(filePath,JSON.stringify(users,null,2));
}

// data base storage type - array
//let users =[];
// add users  - functn
function addUser(name,email){
    // input
    let cleanName = name.trim();
    let cleanEmail = email.toLowerCase();
    // prevent duplicates 
    if(users.some(user => user.email === cleanEmail)){
        console.log(`user with ${cleanEmail} already exists`);
        return;
    }
    //object
    let user ={
        id: users.length  +1,//[userId]: users.length + 1,
        name: cleanName,
        email: cleanEmail,
    };
    users.push(user);
    saveUsers(); // new
    console.log(`user added: ${cleanName}`);
}
// search users - email - functn
function findUserByEmail(email){
    let target = email.toLowerCase();
    return users.find(user => user.email === target);
}
// update user - email -  functn
function UpdateUser(email,newName){
    let user = findUserByEmail(email);
    if(user){
        user.name = newName.trim();
        saveUsers(); //new
        console.log(`user updated:${user.email} -> ${user.name}`)
    }else{
        console.log(`users  with email ${email} not found`);
    }
}
// functn - delete user - email
function deleteUser(email){
    let target = email.trim().toLowerCase();
    let index = users.findIndex(user => findUserByEmail === target);
    if (index !== -1){
        let removed = users.splice(index, 1);
        console.log(`user deleted : ${removed[0].email}`);
    }else {
        console.log(`user with email ${email} not found`);
    }
}
// all users - functn
function listUsers(){
    console.log("\n All Users:");
    users.forEach(user => {
        console.log(`-${user.name}(${user.email})`);
    });
}
// functn - hidden ID
//function showUserIds(){
    //console.log("\n User Ids (BigInt)")
    //users.forEach(user => {
        // conversion - id to int
        //let bigId = BigInt(user[userId]);
        //console.log(`${user.name}: ${bigId}`);
    //});
//}
// some users info 
addUser(" siri  ", "siri@abc.com");
addUser(" alice ", "ALICE@MAIL.COM");
addUser("bob","bob@mail.com");
addUser("nari","nari@mail.com");

listUsers();
UpdateUser("alice@mail.com","alice wonderland");
//deleteUser("bob@mail.com");
//let found =  findUserByEmail("alice@mail.com");
//console.log("\n found:",found ? found.name :  "no user");
//showUserIds();
listUsers();
