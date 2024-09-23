import Design1 from "./components/layouts/design1";
import Design2 from "./components/layouts/design2";

export default function Desktop() {
  return (
    <div className="w-[100vw] h-[100vh] bg-white overflow-hidden flex flex-col items-center justify-center">
      {/* <Design1 /> */}
      <Design2 />
    </div>
  );
}
