// Ques 1 : Given an input string s, reverse the order of the words

// Input: "the sky is blue"     ----->>>>>     Output: "blue is sky the"
// Input: "  hello world  "     ----->>>>>     Output: "world hello"
// Input: "a good   example"    ----->>>>>     Output: "example good a"

// "the sky is blue" => [the,sky,is,blue]
// [] => [the,sky,is,blue] => blue is sky the

const reverseSentence = (string) => {
  const splitString = string.split(" ");
  const stack = [];
  for (let i of splitString) {
    stack.push(i);
  }
  let finalString = "";
  while (stack.length) {
    const current = stack.pop();
    if (current) {
      finalString += " " + current;
    }
  }
  return finalString;
};

console.log(reverseSentence("The Sky is Blue"));
