import ActionHeader from "@/components/action-header";
import HabitForm from "@/components/habit-form";
import { findUserHabitOrRedirect } from "@/data/habits";

export default async function UpdateHabit({ params }) {
  const habit = await findUserHabitOrRedirect(params.id);

  return (
    <>
      <ActionHeader title={"Update Habit"} />
      <HabitForm habit={habit} />
    </>
  );
}
