# Define the questions as a dictionary
questions = {
    "What is the capital of France?": {
        "a": "Berlin",
        "b": "London",
        "c": "Paris",
        "d": "Rome",
        "answer": "c"
    },
    "What is the largest planet in our solar system?": {
        "a": "Earth",
        "b": "Jupiter",
        "c": "Mars",
        "d": "Saturn",
        "answer": "b"
    },
    "What language is used to create web pages?": {
        "a": "HTML",
        "b": "Java",
        "c": "Python",
        "d": "Ruby",
        "answer": "a"
    }
}

# Define a function to display the question and choices, and check the answer
def ask_question(question, choices, answer):
    print(question)
    print("a) " + choices["a"])
    print("b) " + choices["b"])
    print("c) " + choices["c"])
    print("d) " + choices["d"])
    user_answer = input("Enter your answer (a, b, c, or d): ")
    if user_answer.lower() == answer:
        print("Correct!")
        return 1
    else:
        print("Incorrect!")
        return 0

# Initialize the score
score = 0

# Ask each question and update the score
for question, choices in questions.items():
    score += ask_question(question, choices, choices["answer"])

# Print the final score
print("You scored " + str(score) + " out of " + str(len(questions)) + " questions.")
