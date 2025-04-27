import { readFile } from 'node:fs/promises';

const filepath=process.argv[2];
const filecontent= await readFile('./file-1.txt','utf-8')

const wordarray=(filecontent.split(/[\W]/).filter((w)=> w));

const wordcount={};


wordarray.forEach((word)=>{
    if(word in wordcount){
        wordcount[word]+=1;
    }
    else{
        wordcount[word]=1;
    }
})

console.log(wordcount);