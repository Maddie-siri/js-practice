// input - sentence
//output - obj/map-spplit eaxh word and give a 1 value for themm
// functn-split-word count holder-word already exists - increase count - no -  give 1
function wordcounter(sentence){
    let words = sentence.split(" ");
    let  wordcount = {};
    for(let word of words){
        if(wordcount[word]){
            wordcount[word]++;
        }else{
            wordcount[word]=1;
        }
    }return wordcount;
}
let sentence = "backend learning is fun and exiciting";
console.log(wordcounter(sentence));