const Joi = require("joi");

const programSchema = Joi.object({
  title: Joi.string().max(255).required(),
  synopsis: Joi.string().required(),
  poster: Joi.string().max(255).required(),
  country: Joi.string().max(255).required(),
  year: Joi.number().integer().required(),
  category_id: Joi.number().integer().required(),
});

const validateProgram = (req, res, next) => {
  const { error } = programSchema.validate(req.body, { abortEarly: false });

  if (error == null) {
    next();
  } else {
    res.status(400).json({ validationErrors: error.details });
  }
};

module.exports = validateProgram;
