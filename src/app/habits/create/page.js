import HabitForm from "@/components/habit-form";

export default async function NewHabit() {
  return (
    <>
      <div className="row">
        <div className="col">
          <h1>New Habit</h1>
        </div>
      </div>
      <div className="row">
        <div>
          <HabitForm />
        </div>
      </div>
    </>
  );
}
