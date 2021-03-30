var exercises = ["pullups", "pushups", "situps", "jogging", "plank", "curls"]
var coreExercises = ["situps", "plank"]

favExercises.onshow = function() {

    selExercises.clear()
    for (i = 0; i < exercises.length; i++)
        selExercises.addItem(exercises[i])
    for (j = 0; j < coreExercises.length; j++)
        selExercises.addItem(coreExercises[j])



}
Button3.onclick = function() {
    results1 = selExercises.text.includes("plank")
    results2 = selExercises.text.includes("situps")
    console.log(results)
    if (results1 == true && results2 == true) {
        Label1.value = `You chose situps and planks - those are the two core exercises. `
    } else {
        Label1.value = `you did not pick two core exercises`
    }
}


Button4.onclick = function() {
ChangeForm(mobileNav)
}