import SiteHeader from "../components/site-header";
import Ide from "./components/ide";

const Page = async () => {
  return (
    <div className="h-full flex flex-col">
      <SiteHeader />
      <Ide />
    </div>
  );
};

export default Page;
