import Joi from "joi";

const habitLogList = Joi.array()
  .items(
    Joi.object({
      id: Joi.number().required(),
      habitId: Joi.number().required(),
      day: Joi.date().iso().required(),
      timerValue: Joi.any().allow(null).required(),
    }),
  )
  .min(1);

export const assertIsHabitLogList = (data) => {
  const validationResult = habitLogList.validate(data);

  if (validationResult.error) {
    return false;
  }

  return data;
};
