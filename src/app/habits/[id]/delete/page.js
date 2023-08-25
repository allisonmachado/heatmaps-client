import DeleteHabitForm from "@/components/habit-delete-form";
import { findUserHabitOrRedirect } from "@/data/habits";

export default async function DeleteHabit({ params }) {
  const habit = await findUserHabitOrRedirect(params.id);

  return (
    <>
      <div className="row">
        <div className="col">
          <h1>Delete confirmation</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>
            Are you sure you want to delete the habit &quot;{habit.title}&quot;?
          </p>
        </div>
      </div>
      <DeleteHabitForm habitId={habit.id} />
    </>
  );
}
