var quotes = [
    {author : "― Oscar Wilde", quote : "“Be yourself; everyone else is already taken.”"},
    {author : "― Marilyn Monroe", quote : "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”"},
    {author : "― Albert Einstein", quote : "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"},
    {author : "― Frank Zappa", quote : "“So many books, so little time.”"},
    {author : "― Marcus Tullius Cicero", quote : "“A room without books is like a body without a soul.”"},
    {author : "― Bernard M. Baruch", quote : "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”"},
    {author : "― William W. Purkey", quote : "“You've gotta dance like there's nobody watching Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”"},
    {author : "― Dr. Seuss", quote : "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”"}
];
function generateQuote(){
    var number =[];
    // for(var i = 0 ; i <= quotes.length ; i++){

        var randomNum = Math.floor(Math.random() * quotes.length);

        // number.push(randomNum);
        // if(randomNum in number){
        //     continue;
        // }

        document.getElementById("quote").innerHTML = quotes[randomNum].quote;
        document.getElementById("author").innerHTML = quotes[randomNum].author;
        console.log(randomNum);
    // }
    
}