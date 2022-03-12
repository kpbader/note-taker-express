const fs = require('fs');
const util = require('util');

//look intp promisify from util
const readAsync = util.promisify(fs.readFile)
const writeAsync = util.promisify(fs.writeFile)

class Notes {
read(){
    return readAsync('db/db.json', 'utf8')
}

//review json.stringify
write(data){
 return writeAsync('db/db.json', JSON.stringify(data));
}

readNotes(){
    return this.read().then((notes)=>{
        let allNotes;

        //if the db.json is empty or cannot be turned into an array we should return an empty arrayToObject
        try {
            //review json.parse. why do we use concat vs push?
            allNotes =  [].concat(JSON.parse(notes))
        }catch(err){
            allNotes = []
        }

        return allNotes
    })
}

writeNotes(data){
    const newNote = {
        title: data.title, 
        text: data.text,
        //find a way to create a unique id for every note
        //id:
    }

    return this.readNotes().then((notes)=>{
        return [...notes, newNote];
    }).then((updatedNotes)=> this.write(updatedNotes))
}
}

module.exports = new Notes();