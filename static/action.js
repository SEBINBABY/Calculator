function buttonClick(val)
 {
   document.getElementById("displayScreen").value+=val
 }

function equalClick()
 {
   var text= document.getElementById("displayScreen").value
   document.getElementById("displayScreen").value=eval(text)
 }

function clearClick()
 {
   document.getElementById("displayScreen").value=""
 }

function alert()
 {
  var check=document.getElementById("mycheck")
  var text=document.getElementById("text")
  if(check.checked==true)
     {
      text.style.display = "block"
     }
  else
      {
        text.style.display = "none"
      }
  }


