import ActionHeader from "@/components/action-header";
import HabitLogForm from "@/components/habit-log-form";
import { findUserHabitOrRedirect } from "@/data/habits";

export default async function NewHabitLog(props) {
  const {
    params: { id },
    searchParams: { date, habitType },
  } = props;

  await findUserHabitOrRedirect(id);

  return (
    <>
      <ActionHeader
        title={"Log Day"}
        subTitle={`Confirm tracking date "${date}"`}
      />
      <HabitLogForm habitId={id} date={date} habitType={habitType} />
    </>
  );
}
