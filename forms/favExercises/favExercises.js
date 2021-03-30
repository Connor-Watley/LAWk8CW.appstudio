var exercises = ["pullups", "pushups", "situps", "jogging", "plank", "curls"]
var coreExercises = ["situps", "plank"]

favExercises.onshow = function() {

    selExercises.clear()
    for (i = 0; i < exercises.length; i++)
        selExercises.addItem(exercises[i])
    for (j = 0; j < coreExercises.length; j++)
        selExercises.addItem(coreExercises[j])
        
        

}
Button3.onclick=function(){
 results =  selExercises.text.includes("situps", "plank")
 console.log(results)
 if(results == true){
    Label1.value = `You chose situps and planks - those are the two core exercises. `}
} else{
    Label1.value = ``}
