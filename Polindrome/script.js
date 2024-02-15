const checkBtn=document.getElementById("check-btn");
const result=document.getElementById("result")
const text=document.getElementById("text-input");

const polindrome=()=> {
  if(text.value===""){
    alert("Please input a value")
  }

  if(text.value.length===1) {
    result.innerHTML=`<p>${text.value} is a palindrome</p>`
     console.log(text.value.length)
  }
  let normalized=text.value.replace(/[^A-Za-z0-9]/g,"").toLowerCase();
  let reversed=[...normalized].reverse().join("");
  if(normalized==reversed){
    result.innerHTML=`<p>${text.value} is a palindrome</p>`
  }
  else  {
    result.innerHTML=`<p>${text.value} is not a palindrome</p>`
  }

}

checkBtn.addEventListener("click",polindrome)

