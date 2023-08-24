import Year from "@/components/year";
import Joi from "joi";
import { getFirstAndLastDayOfYear } from "@/utils/date";

export default function Habits({ params, searchParams }) {
  const getYearFromParams = (searchParams) => {
    const schema = Joi.object({
      year: Joi.number().integer().min(1000).max(9999).required(),
    });

    const validationResult = schema.validate(searchParams);

    if (validationResult.error) {
      return null;
    }

    return validationResult.value.year;
  };

  const inputYear = getYearFromParams(searchParams);

  const { currentYear, firstDayOfYear, lastDayOfYear } =
    getFirstAndLastDayOfYear(inputYear);

  return (
    <>
      <Year
        habitId={params.id}
        currentYear={currentYear}
        firstDayOfYear={firstDayOfYear}
        lastDayOfYear={lastDayOfYear}
      />
    </>
  );
}
