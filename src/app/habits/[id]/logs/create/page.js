import HabitLogForm from "@/components/habit-log-form";

export default async function NewHabitLog() {
  return (
    <>
      <div className="row">
        <div className="col">
          <h1>New Habit</h1>
        </div>
      </div>
      <div className="row">
        <div>
          <HabitLogForm />
        </div>
      </div>
    </>
  );
}
