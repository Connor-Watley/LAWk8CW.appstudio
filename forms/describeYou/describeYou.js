





rdbPerson.onchange=function(){
     let userChoice = $("input[name=rdbPerson]:checked").prop("value")
   console.log(`You picked ${userChoice}`)
   
   
   lblPrompt2.value = `I would agree you are a ${userChoice} person too!`
  
}

Button2.onclick=function(){
  ChangeForm(favExercises)
}
