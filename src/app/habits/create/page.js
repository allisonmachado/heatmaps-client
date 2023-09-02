import ActionHeader from "@/components/action-header";
import HabitForm from "@/components/habit-form";

export default async function NewHabit() {
  return (
    <>
      <ActionHeader title={"Create Habit"} />
      <HabitForm />
    </>
  );
}
