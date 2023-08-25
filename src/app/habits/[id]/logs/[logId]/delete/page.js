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
      <div className="row">
        <div className="col">
          <h1>Delete confirmation</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>
            Are you sure you want to delete the {habit.title} log from &quot;
            {date}&quot;?
          </p>
        </div>
      </div>
      <DeleteHabitLogForm habitLog={habitLog} />
    </>
  );
}
