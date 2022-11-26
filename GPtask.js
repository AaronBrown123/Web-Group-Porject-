
//this function will close the window on the press of the end game button 
function windowClose() {
    window.open('','_parent','');
    window.close();
    }


// Global variable to store players data 
 var PlayersData = new Array;

 
 //this function will disable all feilds in the form once the Quit button is clicked
 function disable(){
            document.getElementById('submit').disabled="true";
            document.getElementById('choose-file').disabled="true";
            document.getElementById('Firstname').disabled="true";
            document.getElementById('Lastname').disabled = "true";
            document.getElementById('dob').disabled = "true";
            document.getElementById('email').disabled = "true";
            document.getElementById('age').disabled = "true";
            document.getElementById('gender').disabled = "true";
            document.getElementById('address').disabled = "true";
            document.getElementById('educational_Level').disabled = "true";
  }

//this function will enable the feilds once the quit button is clicked 
  function enable1(){
    document.getElementById('submit').disabled = "";
    document.getElementById('choose-file').disabled = "";
    document.getElementById('Firstname').disabled = "";
    document.getElementById('Lastname').disabled = "";
    document.getElementById('dob').disabled = "";
    document.getElementById('email').disabled = "";
    document.getElementById('age').disabled = "";
    document.getElementById('gender').disabled = "";
    document.getElementById('address').disabled = "";
    document.getElementById('educational_Level').disabled = "";
    document.getElementById('Div1').disabled = "";
}




//Display all the data in the global variable players data 
function showAll(){
    for(var i = 0; i < 100; i++) {


        
}
}



function findPercentageScore(){


}




function showfreq(){


}



//this function will clear the login / regiter form when the quit button is clicked 
  function clearForm() {
    document.getElementById("myForm").reset();

}


  // this function will enable the end game and play button when the register button is clicked 
  function enable(){
      document.getElementById("EndGame").disabled = "";
      document.getElementById("Play").disabled = "";
  }
  

  //this function opens the board / play area

  function PlayGame()
  {
    window.open(
        "board.html", "_blank");
  }


//function called Register() that will accept the values entered in the fields
function Register(e) {
    e.preventDefault();

    let firstname = document.getElementById('Firstname').value;
    let lastname = document.getElementById('Lastname').value;
    let DOB = document.getElementById('dob').value;
    let email = document.getElementById('email').value;
    let age = document.getElementById('age').value;
    let dob = new Date(document.getElementById('dob').value);
    let gender = document.getElementById('gender').value;
    let address = document.getElementById('address').value;
    let educational_level = document.getElementById('educational_Level').value;

    let ageresult = Date.now() - dob.getTime();  
   
    let agedate = new Date(ageresult);   
   
    let year = agedate.getUTCFullYear();  

    let totalAge = Math.abs(year - 2022);  
    
    
    if (totalAge < 12 ) {
        console.log("Age must be greater than 12");
        return false;
    } else {
        age.innerHTML = totalAge;
    } 

    //check firstname
    if (firstname.length < 4) {
        console.log("username minimum lenght 4 characters");
        return false
    }

      //check firstname
      if (lastname.length < 4) {
        console.log("username minimum lenght 4 characters");
        return false
    }


    //check email
    let indexOfAt = email.indexOf("@");
    let indexOfPeriod = email.indexOf(".");

    if (indexOfAt < 1 || indexOfPeriod <= indexOfAt + 2 || indexOfPeriod === email.length - 1) {
        console.log("invalid email"); 
        return false;
    }
// Appends infromation to global array players data 
    PlayersData.push(firstname + lastname + DOB + email + age+ gender+ address+ educational_level);
    return true;
}


//60 SECOND TIMER 
var gametimer = 60;
window.setInterval(function(){
 if (gametimer > 0)
	 gametimer--;
      document.getElementById("gametimer").innerHTML = "Time ends in: " + gametimer + " seconds";
}, 1000);


const Div1 = document.getElementById('Div1')
const scoreDisplay = document.getElementById('score')


//Array of categories along with thier respective questions and answers 
const jeopardyCategories = [

    {
        genre: 'Music',
        questions : [
            {
                question: 'Tattoo by Jordin Sparks “You’re still apart of everything I do”',
                answers : ['“You’re on my heart just like a tattoo”','I will always have you','"Don’t look back got a new direction"'], 
                correct : '“You’re on my heart just like a tattoo”',
                dailydouble: Math.floor(Math.random() * 5) + 1, // gives the daily double variable a random value 
                level: 'veryeasy' ,             
            },

            {
                question: 'Throne by Koffee “Mi nuh waste time with the music”',
                answers : ['In your ears like any q-tip','When them see me all over the media','Use to facetime with the blues'], 
                correct : 'In your ears like any q-tip',
                level: 'easy',              
            },
            {
                question: 'Under the Influence by Chris Brown “Baby who cares”',
                answers : ['“But I know you care”','Bring it over to my place','I don’t know what you did, did to me'], 
                correct : '“But I know you care”',
                dailydouble: Math.floor(Math.random() * 5) + 1, // gives the daily double variable a random value 
                level: 'verymedium' ,             
            },

            {
                question: 'Rich Flex by Drake & 21 Savage “21 can you do something for me”',
                answers : ['“Can you hit a lil rich flex for me”','21, do your thing 21','Drop some bars to my ex for me'], 
                correct : '“Can you hit a lil rich flex for me”',
                level: 'medium',              
            },
            {
                question: '3.	Bake Bean by Govana “Mi full a sauce like bake bean”',
                answers : ['“NO underage over eighteen”','Breezy a suh me stay clean', 'Dem love me foot ina me straight jeans'], 
                correct : '“NO underage over eighteen”',
                dailydouble: Math.floor(Math.random() * 5) + 1, // gives the daily double variable a random value 
                level: 'hard',              
           },
        ],
    },
    
    {
        genre: 'Sports',
        questions : [

            {
                question: 'How often are the Olympics held ?',
                answers : ['Every four year','Every two years','Every three years'], 
                correct : 'Every four year',
                dailydouble: Math.floor(Math.random() * 5) + 1, // gives the daily double variable a random value 
                level: 'veryeasy',      
            },
            {
                question: 'Which player has won the most NBA Championships all-time?',
                answers : ['Bill Russell','Lebron James ', 'Steph Curry'], 
                correct : 'Bill Russell',
                level: 'easy' ,             
            },

            {
                question: 'Which athlete holds the record of winning the most Olympic medals?',
                answers : ['Michael Phelps','Usain Bolt', 'Justin Gatlin'], 
                correct : 'Michael Phelps',
                dailydouble: Math.floor(Math.random() * 5) + 1, // gives the daily double variable a random value 
                level: 'verymedium',              
            },
            {
                question: 'How high off the ground is a regulation basketball hoop?',
                answers : ['10 feet ','12 feet','9 feet'], 
                correct : '10 feet',
                level: 'medium' ,             
            },

            {
                question: 'Who won the 2018 FIFA World Cup?',
                answers : ['France','Germany','Spain'], 
                correct : 'France',
                dailydouble: Math.floor(Math.random() * 5) + 1, // gives the daily double variable a random value 
                level: 'hard',              
            },
        ],
    },
                
          {
        genre: 'History',
        questions : [
            {
                question: 'Who were the first inhabitants of Jamaica? (Caribs, Tainos, Aztecs)',
                answers : ['Tainos','Caribs','Aztecs'], 
                correct : 'Tainos',
                dailydouble: Math.floor(Math.random() * 5) + 1, // gives the daily double variable a random value 
                level: 'veryeasy' ,             
            },

            {
                question: 'In what year did Christopher Columbus first visit Jamaica?',
                answers : ['1494','1492','1852'], 
                correct : '1494',
                level: 'easy' ,             
            },
            {
                question: 'In what year was Emancipation granted to slaves in Jamaica? ',
                answers : ['1834','1838','1962'], 
                correct : '1834',
                dailydouble: Math.floor(Math.random() * 5) + 1, // gives the daily double variable a random value 
                level: 'verymedium',            
            },

            {
                question: 'Universal Adult Suffrage was granted in 1944. (True / False)',
                answers : ['True','False'], 
                correct : 'True',
                level: 'medium',              
            },
            {
                question: 'Which of these were introduced by the British? (Irish Potato, Breadfruit, Sugar Cane)',
                answers : ['Irish Potato','Sugar Cane','Breadfruit'], 
                correct : 'Irish Potato',
                level: 'hard',              
           },
        ],
    },  {
        genre: 'Riddles',
        questions : [
            {
                question: 'What has a head and mouth but cannot wear a hat?',
                answers : ['River','Dog', 'Toy'], 
                correct : 'River',
                dailydouble: Math.floor(Math.random() * 5) + 1, // gives the daily double variable a random value 
                level: 'veryeasy' ,             
            },

            {
                question: ' She tore her yellow dress but no one can fix it',
                answers : ['Banana','Plum','Peach'], 
                correct : 'Banana',
                level: 'easy',              
            },
            {
                question: ' What’s yours but other people use it more than you do?',
                answers : ['name','Car','picture'], 
                correct : 'name',
                dailydouble: Math.floor(Math.random() * 5) + 1, // gives the daily double variable a random value 
                level: 'verymedium' ,             
            },

            {
                question: ' What has to be broken before you can use it?',
                answers : ['egg','prmoise','heart'], 
                correct : 'egg',
                level: 'medium',              
            },
            {
                question: 'What is full of holes but still holds water?',
                answers : ['sponge','Cup','straw'], 
                correct : 'River',
                dailydouble: Math.floor(Math.random() * 5) + 1, // gives the daily double variable a random value 
                level: 'hard',              
           },
        ],
    },  {
        genre: 'Tv-Shows',
        questions : [
            {
                question: 'What is the most-watched TV show on Netflix?',
                answers : ['Squid Game','Blood and Water','You'], 
                correct : 'Squid Game',
                dailydouble: Math.floor(Math.random() * 5) + 1, // gives the daily double variable a random value 
                level: 'veryeasy' ,             
            },

            {
                question: 'What American state is Stranger Things set?',
                answers : ['Delaware','Indiana','Idaho'], 
                correct : 'Indiana',
                dailydouble: Math.floor(Math.random() * 5) + 1, // gives the daily double variable a random value 
                level: 'easy',              
            },
            {
                question: 'How many people played in Squid Game',
                answers : ['200','500','456'], 
                correct : '456',
                level: 'verymedium' ,             
            },

            {
                question: 'How many seasons the office have?',
                answers : ['Nine','Ten','Five'], 
                correct : 'Nine',
                level: 'medium',              
            },
            {
                question: '"Who are Merediths roommates?"',
                answers : ['Izzie and George','Derrek', 'Webber and Izzie'], 
                correct : 'Izzie and George',
                level: 'hard',              
           },
        ],
    }, 
]


//initializing score to 100 
let score = 100

//initilizing games playes variable to 0 
gamesplayed =0 

corretquestions =0 

wrongquestions=0


//this function will list the categories on the board by creating a div for each 
function addCategory(category){

 const column= document.createElement('div')
 column.classList.add('genre-column')

 const genreTitle = document.createElement('div')
 genreTitle.classList.add('genre-title')
 genreTitle.innerHTML = category.genre
 
 column.appendChild(genreTitle)
 Div1.append(column)


 category.questions.forEach(question => {
    const card = document.createElement('div')
    card.classList.add('card')
    column.append(card)   
    

    // checks the level of the queston to determine the points that should be awarded 
    if (question.level === 'veryeasy'){
        card.innerHTML = 100
    }
    
    if (question.level === 'easy'){
        card.innerHTML = 200
    }

    
    if (question.level === 'verymedium'){
        card.innerHTML = 300
    }

     
    if (question.level === 'medium'){
        card.innerHTML = 400
    }

     
    if (question.level === 'hard'){
        card.innerHTML = 500
    }

   
//Set the value of the cards using the array 
    card.setAttribute('data-question',question.question);
    card.setAttribute('data-answer-1',question.answers[0]);
    card.setAttribute('data-answer-2',question.answers[1]);
    card.setAttribute('data-answer-3',question.answers[2]);
    card.setAttribute('data-correct',question.correct);
    card.setAttribute('daily-double',question.dailydouble)
    card.setAttribute('data-value',card.getInnerHTML());


    //display the info in the inner html of the card once its clicked 
    if (question.dailydouble >3){
        display();
        card.addEventListener('click',flipCard1) 
    }
    else
    {
        card.addEventListener('click',flipCard) 
    }
 
   
 })
}

jeopardyCategories.forEach(category=>addCategory(category))//pass category arrays to add category function



    
function flipCard() {
this.innerHTML= ""
this.style.fontSize="9px"
this.style.lineHeight= "20px"

12
const textDisplay = document.createElement('div')
textDisplay.classList.add('card-text')
textDisplay.innerHTML= this.getAttribute('data-question')
const firstButton = document.createElement('button')
const secondButton = document.createElement('button')
const thirdButton = document.createElement('button')

firstButton.classList.add('firstButton')
secondButton.classList.add('secondButton')
thirdButton.classList.add('thirdButton')
firstButton.innerHTML = this.getAttribute('data-answer-1')
secondButton.innerHTML = this.getAttribute('data-answer-2')
thirdButton.innerHTML = this.getAttribute('data-answer-3')

firstButton.addEventListener('click',CheckAnswer)
secondButton.addEventListener('click',CheckAnswer)
thirdButton.addEventListener('click',CheckAnswer)

this.append(textDisplay,firstButton,secondButton,thirdButton)

const allCards = Array.from(document.querySelectorAll('.card'));
allCards.forEach(card => card.removeEventListener('click',flipCard));


} 

function display() {
    document.getElementById("gametimer").style.display = 'block';
   }
   

function CheckAnswer(){
    const allCards = Array.from(document.querySelectorAll('.card'))
    allCards.forEach(card => card.addEventListener('click', flipCard))
 
    const cardOfButton = this.parentElement

    if(cardOfButton.getAttribute('data-correct') == this.innerHTML){
     score = score  + parseInt(cardOfButton.getAttribute('data-value'))
     corretquestions= corretquestions +1; 
     scoreDisplay.innerHTML=score
     cardOfButton.classList.add('correct-answer')
     setTimeout(() => {
         while (cardOfButton.firstChild){
             cardOfButton.removeChild(cardOfButton.lastChild)
         }
         cardOfButton.innerHTML=cardOfButton.getAttribute('data-value')
     }, 100)
    } else{
        score = score  - parseInt(cardOfButton.getAttribute('data-value'))
        wrongquestions=wrongquestions +1; 

        scoreDisplay.innerHTML=score
     cardOfButton.classList.add('wrong-answer')
     setTimeout(() =>{
         while (cardOfButton.firstChild){
             cardOfButton.removeChild(cardOfButton.lastChild)
         }
         cardOfButton.innerHTML = 0
     }, 100)
    }
    cardOfButton.removeEventListener('click', flipCard)

     gamesplayed= gamesplayed+1; 

    PlayersData.push(gamesplayed + corretquestions + wrongquestions + score);// append information to global variable playersData
 }


    
 function flipCard1() {
    this.innerHTML= ""
    this.style.fontSize="25px"
    this.style.lineHeight= "20px"
    const textDisplay = document.createElement('div')
    textDisplay.classList.add('card-text')
    textDisplay.innerHTML= this.getAttribute('data-question')
    const firstButton = document.createElement('button')
    const secondButton = document.createElement('button')
    const thirdButton = document.createElement('button')

    firstButton.classList.add('firstButton')
    secondButton.classList.add('secondButton')
    thirdButton.classList.add('thirdButton')

    firstButton.innerHTML = this.getAttribute('data-answer-1')
    secondButton.innerHTML = this.getAttribute('data-answer-2')
    thirdButton.innerHTML = this.getAttribute('data-answer-3')
    
    firstButton.addEventListener('click',getResult1)
    secondButton.addEventListener('click',getResult1)
    thirdButton.addEventListener('click',getResult1)
    
    this.append(textDisplay,firstButton,secondButton,thirdButton)
    
    const allCards = Array.from(document.querySelectorAll('.card'));
    allCards.forEach(card => card.removeEventListener('click',flipCard));
} 

function getResult1(){
    const allCards = Array.from(document.querySelectorAll('.card'))
    allCards.forEach(card => card.addEventListener('click', flipCard))
    
    let num1 = prompt("Please Enter the amount you would like to wager : ","");

    const cardOfButton = this.parentElement

    if(cardOfButton.getAttribute('data-correct') == this.innerHTML){
        score = score  + Number (num1)
        corretquestions= corretquestions +1; 

        scoreDisplay.innerHTML=score
        cardOfButton.classList.add('correct-answer')
        setTimeout(() => {
            while (cardOfButton.firstChild){
                cardOfButton.removeChild(cardOfButton.lastChild)
            }
            cardOfButton.innerHTML=cardOfButton.getAttribute('data-value')
        }, 100)
    }else{
        score = score  - Number (num1)
        wrongquestions=wrongquestions +1; 

        scoreDisplay.innerHTML=score
        cardOfButton.classList.add('wrong-answer')
        setTimeout(() =>{
            while (cardOfButton.firstChild){
                cardOfButton.removeChild(cardOfButton.lastChild)
            }
            cardOfButton.innerHTML = 0
        }, 100)
    }
    cardOfButton.removeEventListener('click', flipCard)

    
    gamesplayed= gamesplayed+1; 

    PlayersData.push(gamesplayed + corretquestions + wrongquestions + score);// append information to global variable playersData
}

    
    
    