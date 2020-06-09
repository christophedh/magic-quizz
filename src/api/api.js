const loadQuestions = async () => {
  const data = localStorage.getItem("questions") || "";
  const questions = data ? await JSON.parse(data) : [];
  let err = null;

  return [questions, err];
};

const saveQuestion = async (question) => {
  const [questions] = await loadQuestions();
  let err = null;

  console.log(questions);
  if (questions) {
    questions.push(question);
  }

  console.log(questions);

  localStorage.setItem("questions", JSON.stringify(questions));
  return err;
};

export { loadQuestions, saveQuestion };
