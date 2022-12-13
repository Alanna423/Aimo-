// GLOBAL VARS
// main
let scene = 1
let squareSize = 100
let back = 1

let currentQuestion = -1
const questionComplete = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] //4 Q's for each time period
const correctAnswer = [0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0] //correct answer options
const questions = ["What dynasty ruled China for nearly 400 years?", "The rise and fall of the ___ Empire is one of the most\n\consequential events of ancient history.", "In 1922, excited explorers found the tomb of which famous ancient ruler?", "Who was created with making the first map of the world", "Period of European history between ancient and modern times is called Middle Ages", "The average lifespan during the middle ages was what?", "Foreigners were called traitors.", "Who gave up all his wealth to serve God?", "What happened on 28th June 1914?", "NATO replaced the League of Nations when it failed to prevent World War 2.", "Who was the President of the United States at the start of the 20th Century?", "1963 was the year Valentina Tereshkova become the first woman in space."]
const answers = ["Han", "Tang", "Mughal", "Roman", "Ramesses 2", "Tutankhamen", "Anaximander", "Christopher Columbus", "True", "False", "28", "35", "True", "False", "St. Francis", "Don Quiote", "Assassination of Archduke\n\Franz Ferdinand", "Bombing of the\n\Austrian Embassy in Serbia", "True", "False", "Theodore Roosevelt", "William Mckinley", "True", "False"]
// Score var
let percent = 0
let points = 0  //total trivia score


function setup() {
  createCanvas(windowWidth, windowHeight)
  textAlign(CENTER, CENTER)
}


function draw() {
  background(240, 236, 209)
  textSize(14)

  for (let i = 0; i < 12; i++) {
    if (questionComplete[i] == 0)
      break;
    else if (i == 11) {
      scene = 6
    }
  }

  // MAIN SCENE SETUP
  if (scene == 6) {
    if (points >= 9) {
      background("green")
      textSize(30)
      text("Congrats! You have reached normalacy!", windowWidth / 2, windowHeight / 2)
      textSize(20)
      text("You have gotten " + Math.round(points / 12 * 100) + "% of questions right.", windowWidth / 2, windowHeight / 2 + 100)
    } else if (points >= 6) {
      textSize(30)
      text("You are getting close to reaching normalacy", windowWidth / 2, windowHeight / 2)
      textSize(20)
      text("You have gotten " + Math.round(points / 12 * 100) + "% of questions right.", windowWidth / 2, windowHeight / 2 + 100)
    } else if (points < 6) {
      textSize(30)
      background("red")
      text("YOU HAVE FAILED TO REACH NORMALACY...", windowWidth / 2, windowHeight / 2)
      textSize(20)
      text("You have gotten " + Math.round(points / 12 * 100) + "% of questions right.", windowWidth / 2, windowHeight / 2 + 100)
    }
    
  } else if (scene == 1) {
    noStroke()
    // SQUARES FOR QUES
    // Ancient
    if (questionComplete[0] != 0 && questionComplete[1] != 0 && questionComplete[2] != 0 && questionComplete[3] != 0) {
      fill("gray")
    } else {
      fill("ivory")
    }
    rect(windowWidth / 7, windowHeight / 7 * 3, squareSize, squareSize)
    // Middle
    if (questionComplete[4] != 0 && questionComplete[5] != 0 && questionComplete[6] != 0 && questionComplete[7] != 0) {
      fill("gray")
    } else {
      fill("ivory")
    }
    rect(windowWidth / 7 * 3, windowHeight / 7 * 3, squareSize, squareSize)
    // Present
    if (questionComplete[8] != 0 && questionComplete[9] != 0 && questionComplete[10] != 0 && questionComplete[11] != 0) {
      fill("gray")
    } else {
      fill("ivory")
    }
    rect(windowWidth / 7 * 5, windowHeight / 7 * 3, squareSize, squareSize)


    // TEXT LABELS
    fill("black") // text color
    textSize(14)  // text size
    text("Ancient Times", windowWidth / 7 + squareSize / 2, windowHeight / 7 * 3 + squareSize / 2)
    text("Middle Ages", windowWidth / 7 * 3 + squareSize / 2, windowHeight / 7 * 3 + squareSize / 2)
    text("20th Century", windowWidth / 7 * 5 + squareSize / 2, windowHeight / 7 * 3 + squareSize / 2)
  }

  // TIME PERIODS SELECTION
  // Questions for Ancient
  else if (scene > 1 && scene < 5) {
    fill("ivory")
    noStroke()

    rect(windowWidth / 8 - squareSize / 2, windowHeight / 7 * 3 - squareSize / 2, squareSize, squareSize)
    rect(windowWidth / 8 * 3 - squareSize / 2, windowHeight / 7 * 3 - squareSize / 2, squareSize, squareSize)
    rect(windowWidth / 8 * 5 - squareSize / 2, windowHeight / 7 * 3 - squareSize / 2, squareSize, squareSize)
    rect(windowWidth / 8 * 7 - squareSize / 2, windowHeight / 7 * 3 - squareSize / 2, squareSize, squareSize)
    // Question text
    fill("black")
    textSize(20)
    if (scene == 2)
      text("Ancient Times", windowWidth / 2, windowHeight / 4)
    else if (scene == 3)
      text("Middle Ages", windowWidth / 2, windowHeight / 4)
    else
      text("20th Century", windowWidth / 2, windowHeight / 4)
    textSize(14)
    text("Question 1", windowWidth / 8, windowHeight / 7 * 3)
    text("Question 2", windowWidth / 8 * 3, windowHeight / 7 * 3)
    text("Question 3", windowWidth / 8 * 5, windowHeight / 7 * 3)
    text("Question 4", windowWidth / 8 * 7, windowHeight / 7 * 3)

    // BACK BUTTON
    fill("ivory")
    rect(windowWidth / 2 - 40, windowHeight / 4 * 3, 80, 40)
    fill("black")
    text("B for BACK", windowWidth / 2, windowHeight / 4 * 3 + 20)
  }
  else if (scene == 5) {
    question()
  }

  // Ending page
  else {

    if (points >= 9) {
      background("green")
      textSize(30)
      text("Congrats! You have reached normalacy!", windowWidth / 2, windowHeight / 2)
      textSize(20)
      text("You have gotten " + points / 12 * 100 + "% of questions right.", windowWidth / 2, windowHeight / 2 + 100)
    } else if (points >= 6) {
      textSize(30)
      text("You are getting close to reaching normalacy", windowWidth / 2, windowHeight / 2)
      textSize(20)
      text("You have gotten " + points / 12 * 100 + "% of questions right.", windowWidth / 2)
    } else if (points < 6) {
      textSize(30)
      background("red")
      text("YOU HAVE FAILED TO REACH NORMALACY...", windowWidth / 2, windowHeight / 2)
      textSize(20)
      text("You have gotten " + points / 12 * 100 + "% of questions right.", windowWidth / 2)
    }

  }

  // B goes back button
  if (keyIsPressed && key == 'b') {
    if (scene > 1 && scene < 6){
      scene = 1
    }   
  }
} // DRAW END 







function mouseClicked() {

  //TIME PERIODS
  if (scene == 1) {
    // Ancient
    if (mouseX > windowWidth / 7 && mouseX < windowWidth / 7 + squareSize && mouseY > windowHeight / 7 * 3 && mouseY < windowHeight / 7 * 3 + squareSize) {
      scene = 2
    }
    // Middle
    if (mouseX > windowWidth / 7 * 3 && mouseX < windowWidth / 7 * 3 + squareSize && mouseY > windowHeight / 7 * 3 && mouseY < windowHeight / 7 * 3 + squareSize) {
      scene = 3
    }
    // Present
    if (mouseX > windowWidth / 7 * 5 && mouseX < windowWidth / 7 * 5 + squareSize && mouseY > windowHeight / 7 * 3 && mouseY < windowHeight / 7 * 3 + squareSize) {
      scene = 4
    }
    // Back button
    if (mouseX > windowWidth / 2 - 40 && mouseX < windowWidth / 2 + 40 && mouseY > windowHeight / 4 * 3 && mouseY < windowHeight / 4 * 3 + 40) {
      scene = 1
    }
    currentQuestion = -1;

    //SELECT QUESTION
  } else if (scene > 1 && scene < 5) {
    if (mouseX > windowWidth / 9 - squareSize / 2 && mouseX < windowWidth / 9 + squareSize / 2 && mouseY > windowHeight / 7 * 3 - squareSize / 2 && mouseY < windowHeight / 7 * 3 + squareSize / 2) {
      currentQuestion = 4 * (scene - 2)
    } else if (mouseX > windowWidth / 8 * 3 - squareSize / 2 && mouseX < windowWidth / 8 * 3 + squareSize / 2 && mouseY > windowHeight / 7 * 3 - squareSize / 2 && mouseY < windowHeight / 7 * 3 + squareSize / 2) {
      currentQuestion = 4 * (scene - 2) + 1
    } else if (mouseX > windowWidth / 8 * 5 - squareSize / 2 && mouseX < windowWidth / 8 * 5 + squareSize / 2 && mouseY > windowHeight / 7 * 3 - squareSize / 2 && mouseY < windowHeight / 7 * 3 + squareSize / 2) {
      currentQuestion = 4 * (scene - 2) + 2
    } else if (mouseX > windowWidth / 8 * 7 - squareSize / 2 && mouseX < windowWidth / 8 * 7 + squareSize / 2 && mouseY > windowHeight / 7 * 3 - squareSize / 2 && mouseY < windowHeight / 7 * 3 + squareSize / 2) {
      currentQuestion = 4 * (scene - 2) + 3
    }

    scene = 5

    //ANSWER QUESTION
  } else if (scene == 5) {
    //PICKED FIRST OPTION
    if (mouseX > windowWidth / 3 - 50 && mouseX < windowWidth / 3 + 150 && mouseY > windowHeight / 5 * 3 && mouseY < windowHeight / 5 * 3 + 100) {
      if (correctAnswer[currentQuestion] == 0) {
        questionComplete[currentQuestion] = 1; //mark as complete
        points++
      } else {
        questionComplete[currentQuestion] = -1; //mark as complete
      }
    }
    //PICKED SECOND OPTION
    else if (mouseX > windowWidth / 3 * 2 - 50 && mouseX < windowWidth / 3 * 2 + 150 && mouseY > windowHeight / 5 * 3 && mouseY < windowHeight / 5 * 3 + 100) {
      if (correctAnswer[currentQuestion] == 1) {
        questionComplete[currentQuestion] = 1; //mark as complete
        points++
      } else {
        questionComplete[currentQuestion] = -1; //mark as complete
      }
    }
  }

} // MOUSECLICKED END

//has scene 
function question() {
  //text(currentQuestion, 100, 100)
  if (questionComplete[currentQuestion] == 0) {
    fill("ivory")
  } else if (questionComplete[currentQuestion] == 1) {
    fill("green")
  } else {
    fill("red")
  }
  noStroke()
  rect(windowWidth / 3 - 125, windowHeight / 5 * 3, 250, 100)
  rect(windowWidth / 3 * 2 - 125, windowHeight / 5 * 3, 250, 100)
  fill("black")
  text(questions[currentQuestion] + " ", windowWidth / 2, windowHeight / 4)
  text(answers[currentQuestion * 2] + " ", windowWidth / 3, windowHeight / 5 * 3 + 50)
  text(answers[currentQuestion * 2 + 1] + " ", windowWidth / 3 * 2, windowHeight / 5 * 3 + 50)

  // Back button
  fill("ivory")
  rect(windowWidth / 2 - 40, windowHeight / 4 * 3, 80, 40)
  fill("black")
  text("B for BACK", windowWidth / 2, windowHeight / 4 * 3 + 20)

} // QUES END


function score() {
  for (let i = 0; i < 12; i = i + 1) {
    if (questionComplete[i] == 1)
      points++;
  }
} // SCORE END
