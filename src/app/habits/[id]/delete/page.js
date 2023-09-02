import ActionHeader from "@/components/action-header";
import DeleteHabitForm from "@/components/habit-delete-form";
import { findUserHabitOrRedirect } from "@/data/habits";

export default async function DeleteHabit({ params }) {
  const habit = await findUserHabitOrRedirect(params.id);

  return (
    <>
      <ActionHeader
        title={"Delete Confirmation"}
        subTitle={`Are you sure you want to delete the habit "${habit.title}"`}
      ></ActionHeader>
      <DeleteHabitForm habitId={habit.id} />
    </>
  );
}
