
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("quiz-form");
    const submitButton = document.getElementById("submit-btn");
    const resultDiv = document.getElementById("result");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
    });

    submitButton.addEventListener("click", function() {
        const answers = {
            q1: "b", 
            q2: "d",
            q3: "c",
            q4: "c",
            q5: "d", 
            q6: "d" 
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

