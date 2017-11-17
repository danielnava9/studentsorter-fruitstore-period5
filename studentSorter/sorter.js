var students = ["Daniel Cruz", "Albertito", "Alejandro De La Torree", "Bharles", "Mario", "Baby Ass Edward", "Slim", "Daniel Nava", "Byron", "Jonathan Duran", "Ricky", "Jorge", "Applemaker", "Ruben", "Alejandro Garcia", "Karely", "Katherine Armenta", "Rene", "Alexis", "Kimberlina", "Victor", "Jose Moyao", "Aaliyah", "Claudia", "Nicolas", "Jeremiah", "Jacqueline"]

function sortStudents(studentArray, size) {
    var groups = [ ]
    var currentGroup = [ ]
    
    // create a loop to pick random students and add them to our groups
    while (studentArray.length > 0) {
        // pick a random number between 0 and the total number of students
        var randomNumber = Math.floor(Math.random() * studentArray.length)
        var randomStudent = studentArray[randomNumber]
        // delete the student from the list
        studentArray.splice(randomNumber, 1)
        // add a student to current group
        currentGroup.push(randomStudent)
        // check to see if the current group is the right size
        if (currentGroup.length >= size) {
            groups.push(currentGroup)
            currentGroup = [ ]
        }
    }
    
    (var i = 0; i < groups. length; i++) {
        console.log('Group #' + (i+1) + '; ' + groups[i])
    }
}
sortStudents(students, 3)
