function calculateScore() {
    let totalScore = {
        physical: 0,
        social: 0,
        temperamental: 0,
        educational: 0,
        moral: 0,
        intellectual: 0
    };

    // Define category-wise question numbers
    let categories = {
        physical: [2,3,9,20,22,27,29,31],
        social: [1,8,21,40,43,46,48],
        temperamental: [4,10,14,16,19,23,24,28],
        educational: [5,12,15,17,25,26,30,32],
        moral: [6,34,35,41,42,44,45,47]
    };
    let grandTotal = 0;

    // Loop through all 48 questions
    for (let i = 1; i <= 48; i++) {
        let selectedOption = document.querySelector(`input[name="ques${i}"]:checked`);
        let score = 0; // Default lowest score

        if (selectedOption) {
            switch (selectedOption.value) {
                case "A": score = 5; break;
                case "B": score = 4; break;
                case "C": score = 3; break;
                case "D": score = 2; break;
                case "E": score = 1; break;
            }
        }
        grandTotal +=score;

        // Assign score to the appropriate category
        if (categories.physical.includes(i)) {
            totalScore.physical += score;
        } else if (categories.social.includes(i)) {
            totalScore.social += score;
        } else if (categories.temperamental.includes(i)) {
            totalScore.temperamental += score;
        } else if (categories.educational.includes(i)) {
            totalScore.educational += score;
        } else if (categories.moral.includes(i)) {
            totalScore.moral += score;
        } else {
            totalScore.intellectual += score; // Remaining questions belong to intellectual
        }
    }
    function interpret(score) {
        if (score >= 33) return "High self concept";
        if (score >= 25) return "Above average self concept";
        if (score >= 17) return "Average self concept";
        if (score >= 9) return "Below average self concept";
        return "Low self concept";
    }

    // Interpretation for Grand Total
    function interpretGrandTotal(score) {
        if (score >= 200) return "High self concept";
        if (score >= 150) return "Above average self concept";
        if (score >= 100) return "Average self concept";
        if (score >= 50) return "Below average well-being.";
        return "Low self concept";
    }

    let interpretation = `
        🏋️ Physical Score: ${totalScore.physical} (${interpret(totalScore.physical)})\n
        🤝 Social Score: ${totalScore.social} (${interpret(totalScore.social)})\n
        😡 Temperamental Score: ${totalScore.temperamental} (${interpret(totalScore.temperamental)})\n
        📚 Educational Score: ${totalScore.educational} (${interpret(totalScore.educational)})\n
        ⚖️ Moral Score: ${totalScore.moral} (${interpret(totalScore.moral)})\n
        🧠 Intellectual Score: ${totalScore.intellectual} (${interpret(totalScore.intellectual)})\n
        ⭐ Grand Total Score: ${grandTotal} (${interpretGrandTotal(grandTotal)})
    `;

    // Display result
    alert(interpretation);
}
