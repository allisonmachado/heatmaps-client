import HabitLogForm from "@/components/habit-log-form";

export default async function NewHabitLog(props) {
  const {
    params: { id },
    searchParams: { date, habitType },
  } = props;

  return (
    <>
      <div className="row">
        <div className="col">
          <h1>Log Day</h1>
        </div>
      </div>
      <div className="row">
        <div>
          <HabitLogForm habitId={id} date={date} habitType={habitType} />
        </div>
      </div>
    </>
  );
}
