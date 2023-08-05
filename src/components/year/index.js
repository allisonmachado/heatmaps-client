import { simpleRange } from "@/utils/array";
import Month from "../month";
import "./main.css";

const year = new Date().getFullYear();

export default function Year({ habitId }) {
  return (
    <div className="row">
      {new simpleRange(12).map((month) => (
        <div key={month} className="col-xs-12 col-sm-6 col-lg-4 col-xl-2 mb-4">
          <Month year={year} month={month} />
        </div>
      ))}
    </div>
  );
}
