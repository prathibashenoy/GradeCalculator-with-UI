document.getElementById("gradeForm").addEventListener("submit", function(event) {
    event.preventDefault()
    const name = document.getElementById("name").value.trim()
    const score = document.getElementById("score").value
    const nameError = document.getElementById("nameError")
    const scoreError = document.getElementById("scoreError")
    const result = document.getElementById("result")
    
    nameError.textContent = ""
    scoreError.textContent = ""
    result.textContent = ""

    if (name === "") {
        nameError.textContent = "Name cannot be empty"
        return
    }
    
    if (score === "" || score < 0 || score > 100) {
        scoreError.textContent = "Score must be between 0 and 100"
        return
    }
    
    let grade;
    if (score >= 90)
        {
            grade = "A"
        }
    else if (score >= 80)
        {
            grade = "B"
        } 
    else if (score >= 70) 
        {
            grade = "C"
        }
    else if (score >= 60) 
        {
            grade = "D"
        }
    else 
        {
            grade = "F"
        }

        result.textContent =name+' scored '+score+' and received a grade of '+grade    
})