import ActionHeader from "@/components/action-header";
import DeleteHabitLogForm from "@/components/log-delete-form";
import {
  findUserHabitLogOrRedirect,
  findUserHabitOrRedirect,
} from "@/data/habits";
import { redirect } from "next/navigation";

export default async function DeleteHabitLog(props) {
  const {
    params: { id: habitId, logId },
    searchParams: { date },
  } = props;

  const habit = await findUserHabitOrRedirect(habitId);
  const habitLog = await findUserHabitLogOrRedirect({
    habitId,
    targetDate: date,
  });

  if (`${habitLog.id}` !== logId) {
    redirect("/");
  }

  return (
    <>
      <ActionHeader
        title={"Delete Confirmation"}
        subTitle={`Are you sure you want to delete the ${habit.title} log from "${date}"`}
      />
      <DeleteHabitLogForm habitLog={habitLog} />
    </>
  );
}
