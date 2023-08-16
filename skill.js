document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("quiz-form");
    const submitButton = document.getElementById("submit-btn");
    const resultDiv = document.getElementById("result");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
    });

    submitButton.addEventListener("click", function() {
        const answers = {
            q1: "d", 
            q2: "c",
            q3: "b",
            q4: "c",
            q5: "c",
            q6: "c",
            q7: "b",
            q8: "c"
        };

        let score = 0;

        for (let question in answers) {
            const selectedOption = document.querySelector(`input[name=${question}]:checked`);
            
            if (selectedOption) {
                if (selectedOption.value === answers[question]) {
                    score++;
                }
            }
        }

        const totalQuestions = Object.keys(answers).length;
        const scorePercentage = (score / totalQuestions) * 100;
        resultDiv.textContent = `Your score: ${score} out of ${totalQuestions} (${scorePercentage.toFixed(2)}%)`;
    });
});
