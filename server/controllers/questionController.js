const Question = require("../models/Question");


exports.createQuestion = async (req, res) => {
  try {
    const { first_name, last_name, email, phone, question_text, category_id } =
      req.body;

    const newQuestion = await Question.create({
      first_name,
      last_name,
      email,
      phone,
      question_text,
      category_id,
    });
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(500).json({ error: "Failed to create question" });
  }
};


exports.getQuestions = async (req, res) => {
  try {
    const questions = await Question.findAll({
      include: [{ model: require("../models/Category") }],
    });
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch questions" });
  }
};
