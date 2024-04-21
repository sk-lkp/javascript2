const greetings = "Hello World!"
for (const greet of greetings){
    //console.log(`each char is ${greet}`)
}

const map = new Map()
map.set('IN',"India")
map.set('USA', "America")

//console.log(map);

for(const key of map){
    console.log(key);
}