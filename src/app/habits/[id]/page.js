import Year from "@/components/year";
import Link from "next/link";

export default function Habits({ params }) {
  return (
    <>
      <Year habitId={params.id} />
      <div className="row">
        <div className="col">
          <Link
            href={`/habits/${params.id}/delete`}
            type="button"
            className="btn btn-danger"
          >
            Delete Habit
          </Link>
        </div>
      </div>
    </>
  );
}
