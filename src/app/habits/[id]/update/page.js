import HabitForm from "@/components/habit-form";
import { findUserHabit } from "@/data/habits";

export default async function UpdateHabit({ params }) {
  const habit = await findUserHabit(params.id);

  return (
    <>
      <div className="row">
        <div className="col">
          <h1>Update Habit</h1>
        </div>
      </div>
      <div className="row">
        <HabitForm habit={habit} />
      </div>
    </>
  );
}
