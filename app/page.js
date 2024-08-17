import BgImage from "./components/BackgroundImage.js/bgImage";
import Folders from "./components/Folders";

export default function Desktop() {
  return (
    <div className="h-screen w-full bg-gray-100 relative">
      <BgImage />
      <Folders />
    </div>
  );
}
