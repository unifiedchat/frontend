import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
//https://mui.com/material-ui/material-icons

export default function Sidebar() {
  return (
    <div className="flex justify-between py-4 w-20 hover:w-40 h-full duration-300	 fixed left-0 flex-col bg-[#131c2e]">
      <div className="flex justify-center">
        <div>
          <GitHubIcon className="text-white" />
        </div>
      </div>
      <div className="flex justify-start flex-col">
        <div className="px-4 flex justify-between items-center rounded-r-xl w-30 h-8 bg-[#080D15]">
          <div>
            <YouTubeIcon className="text-white" />
          </div>
          <div>
            <h1 className="text-white hover:none">sa</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div>
          <PeopleAltIcon className="text-white " />
        </div>
      </div>
    </div>
  );
}
