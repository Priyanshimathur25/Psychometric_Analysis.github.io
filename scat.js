function calculateScore() {
    let totalScore = 0;
    
    for (let i = 1; i <= 90; i++) {
        let selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedOption && selectedOption.value === "yes") {
            totalScore++;
        }
    }

    let interpretation = "";
    
    if (totalScore >= 30) {
        interpretation = "Extremely High Anxiety.";
    } else if (totalScore >= 28) {
        interpretation = "High Anxiety.";
    } else if (totalScore >=17 ) {
        interpretation = "Normal Anxiety Level.";
    } else if (totalScore >=14 ) {
        interpretation = "Low Anxiety Level.";
    } else {
        interpretation = "Extremely Low Anxiety Level.";
    }

    // Display result
    alert(`Total Score: ${totalScore}\n${interpretation}`);
}
