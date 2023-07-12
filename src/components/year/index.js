import { simpleRange } from "@/utils/array";
import Month from "../month";
import "./main.css";

const year = (new Date()).getFullYear();

export default function Year() {
  return (
    <div className="row">
      {new simpleRange(12).map(month => <div key={month} className="col-xs-12">
        <Month year={year} month={month}/>
      </div>)}
    </div>
  );
}
