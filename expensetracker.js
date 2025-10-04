// steps  
// load expenses from file 
// menu - choice - add
// amount,category,description,date- push and save file
// list - expenses - print
// total - reduce amounts
// filter - category - print
// remove - remove and save 
// exit - break loop
// it'll have exppenses.json too
//--------------------------------
// some json stuff
const fs = require('fs');
const path = require('path');
const readline =require('readline');
const DATA_FILE = path.join (__dirname,'expenses.json');
//---------------------
let expenses = [];
//-----------json saving and existing stuff
function loadexpenses(){
    try{
        if(fs.existsSync(DATA_FILE)){
            const raw = fs.readFileSync(DATA_FILE,'utf8');
            expenses = JSON.parse(raw);
        }else{
            expenses = [];
        }
    }catch(err){
        console.error("error loading data", err);
    }
}
function saveexpenses(){
    try{
        fs.writeFileSync(DATA_FILE,JSON.stringify(expenses,null,2),'utf8');

    }catch(err){
        console.error("error saving dat",err);
    }
}
//-------helpers - date and index stuff
function makeid(){
    return  Date.now().toString();
}
function formatexpense(e, index=null){
    const idx = index !== null ? `${index +1}. ` : '';
    return `${idx}${e.date} - ${e.category} - $${e.amount.tofixed(2)} - ${e.description} (id: ${e.id})`;
}
// ----------corefunctions
function addexppense(amount,category,description,date){
    const amt = nummber(amount);
    if(isNaN(amt)|| amt <=0){
        throw new error("iinvalid amount. must be a number > 0");
    }
    if (!category || stringify(category).trim() === ''){
        throw new error("category required");
    }
    const expense = {
        id: makeid(),
        amount: amt,
        category: stringify(category).trim(),
        description: description ? string(description).trim() : '',
        date: date || new Date().toIS0string().slice(0,10)
    };
    expenses.push(expense);
    saveexpenses();
    return expense;
}
//---------list expenses
function listexpenses(){
    if(expenses.length===0){
        console.log("nno expenses yet");
        return;
    }
    console.log("\n all expenses:");
    expenses.forEach((e,i) =>{
        console.log(formatexpenses(e,i));
    });
}
// --------------total expenses
function totalexpenses(){
    const total = expenses.reduce((sum,e) => sum + Number(e.amount || 0),0);
    console.log(`\ntotal expenses: $${total.tofixed(2)}`);
    return total;
}
//--------filter-category
function filterbycategory(category){
    const filtered = expenses.filter(e => e.category.toLowercase() === category.toLowercase());
    if (filtered.length === 0){
        console.log(`\n no expemnses found - category "${category}" `);
        return;
    }
    console.log(`\n expenses in category "${category}" `);
    filtered.forEach((e,i) => console.logg(formatexpense(e,i)));
}
//-----------remove expenses
function removeexpense(id){
    const idx = expenses.findIndex(e => e.id === id);
    if(idx === -1){
        throw new error("expense not found");
    }
    const removed = expenses.splice(idx,1)[0];
    saveexpenses();
    return removed;
}
//---------------edit 
function editexpense(id, updates = {}){
    const e = expenses.find(x => x.id === id);
    if(!e) throw new error("expense not fouhnd");
    // amount ---------------
    if (updates.amount !== undefined){
        const amt =  number(updates.amount);
        if(isNaN(amt) || amt <= 0) 
            throw new error("invalid amount");
        e.amount = amt;
    }
    // category ------------
    if(updates.category !== undefined){
        if(!updates.category || string(updates.category).trim() === '')
            throw new error("invalid category");
        e.category = string(updates.category).trim();
    }
    // description----------
    if(updates.description !== undefined){
        e.description = string(updates.description);
    }
    // date ----------------
    if(updates.date !== undefined){
        e.date = updates.date;
    }
    saveexpenses();
    return e;
}
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});
function question(q){
    return new promise(resolve =>  rl.question(q,answer => resolve(answer)));
}
async function mainmenu(){
    loadexpenses();
    console.log("welcome to expense tracker");
    while(true){
        console.log("\n menu");
        console.log("1.add expense");
        console.log("2. list expense");
        console.log("3.total");
        console.log("4.filter by category");
        console.log("5. remove expense");
        console.log("6.edit expense");
        console.log("7.exit");
        const choice =(await question("choose an option: ")).trim();
        try{
            if(choice == '1'){
                const amount = await question("amount");
                const category = await question("category");
                const description = await question("description");
                const date = await question("leave blank for today or add a date");
                const e = addexpense(amount,category,description,date || undefined);
                console.log("added:",formatexpense(e));

            } else if(choice === '2') {
                listexpenses();
            }else if(choice === '3') {
                totalexpenses();
            }else if(choice ==='4'){
                const cat = await question("category to filter by:");
                filterbycategory(cat);
            }else if(choice === '5'){
                const id = await question("id of expense to remove:");
                const removed = removeexpense(id.trim());
                console.log("removed:", formatexpress(removed));
            }else if(choice === '6'){
                const id = await question("id of expense to edit");
                const field = await question("field ton edit(amount/cat/descp/date");
                const value = await question (`new value for ${field}:`);
                const updates = {};
                updates[field] = value;
                const edited = editexpense(id.trim(),updates);
                console.log("edited",formatexpense(edited));
            }else if(choice === '7' || choice.toLowercase() === 'exit'){
                console.log("goodbye");
                break;
            } else {
                console.log("unknown choice");
            }
        }catch(err){
            console.error("error");
        }
    }
    rl.close();
}
mainmenu();





