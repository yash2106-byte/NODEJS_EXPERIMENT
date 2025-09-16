console.log("welcome to the PERSONAL TASK MANGER CLI")
console.log("PLEASE DESIGN YOUR COMMAND IN A PROPER (node file_name argument command) ")
const command = process.argv[3];
const argument = process.argv[2];
const ch=process.argv[4];
const list=[]


if(ch==="yes")
{
if(command === "add"){
    console.log(`task added ${argument}`)
    list.push(argument)
}else if(command==="delete"){
    console.log(`task removed ${argument}`)
    del=console.log(list.includes(argument))
    list.pop(del)
}else if(command==="complete"){
    console.log(`task listed ${argument}`)
}else{
    console.log("unknown command");
}
}
else{
    console.log(list)
}