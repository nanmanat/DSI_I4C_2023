import React, { useEffect } from "react";
import logo from "./logo.svg";
import "../App.css";
import GMap from "../Map";

const Info: React.FC = () => {
  const [showLightGreenMarkers, setShowLightGreenMarkers] = React.useState(false);
  const [showRedZoneMarkers, setShowRedZone] = React.useState(false);
  const [showOtherMarkers, setShowOtherMarkers] = React.useState(false);

  const handleToggleCheckbox = () => {
    setShowLightGreenMarkers(!showLightGreenMarkers);
  };
  const handleToggleCheckboxRZ = () => {
    setShowRedZone(!showRedZoneMarkers);
  };
  const handleToggleCheckboxOT = () => {
    setShowOtherMarkers(!showOtherMarkers);
  };

  useEffect(() => {

  }, [showLightGreenMarkers, showRedZoneMarkers, showOtherMarkers]);

  return (
    <div className="relative flex">
      <div className="w-full">
        <div className="fixed w-2/3 h-full shadow-lg">
          <GMap showLightGreenMarkers={showLightGreenMarkers} showRedZoneMarkers={showRedZoneMarkers} showOtherMarkers={showOtherMarkers} />
        </div>
      </div>
      <div className="fixed right-0 top-0 w-1/3 h-full bg-[#5F224A] shadow-lg">
        <div className="h-full flex flex-col justify-center items-center gap-5">
          <h1 className="text-white font-bold text-xl">Confidence Level</h1>
          <div className="py-5 w-4/5 rounded-md bg-[#EBEBEB] shadow-lg">
            <div className="flex w-[95%] mx-auto">
              <div className="w-[70%] flex items-center gap-5 ml-[5%]">
                <input
                  type="checkbox"
                  checked={showLightGreenMarkers}
                  onChange={handleToggleCheckbox}
                />
                <div className="h-[10px] w-[10px] bg-[#8BCE1D] rounded-sm shadow-sm" />
                <div>Path</div>
              </div>
            </div>
            <div className="flex w-[95%] mx-auto">
              <div className="w-[70%] flex items-center gap-5 ml-[5%]">
                <input
                  type="checkbox"
                  checked={showOtherMarkers}
                  onChange={handleToggleCheckboxOT}
                />
                <div className="h-[10px] w-[10px] bg-[#e6c243] rounded-sm shadow-sm" />

                <div>Werehouse</div>
              </div>
            </div>
            <div className="flex w-[95%] mx-auto">
              <div className="w-[70%] flex items-center gap-5 ml-[5%]">
                <input
                  type="checkbox"
                  checked={showRedZoneMarkers}
                  onChange={handleToggleCheckboxRZ}
                />
                <div className="h-[10px] w-[10px] bg-[#ff3131] rounded-sm shadow-sm" />
                <div>Home</div>
              </div>
            </div>
          </div>
          <h1 className="text-white font-bold text-xl">Schedule</h1>
          <div className="py-5 w-4/5 mx-auto rounded-md h-[55%] bg-[#EBEBEB] shadow-lg">
            <div className="flex flex-col items-start w-[95%] gap-1 mx-auto">
              <div className="flex flex-rol justify-between w-2/3">
                <div className="text-md">00:00น. - 09:00น.</div>
                <div className="text-md">:</div>
                <div className="text-md">Home</div>
              </div>
              <div className="flex flex-rol justify-between w-2/3">
                <div className="text-md">09:01น. - 09:20น.</div>
                <div className="text-md">:</div>
                <div className="text-md">Path</div>
              </div>
              <div className="flex flex-rol justify-between w-2/3">
                <div className="text-md">09:21น. - 09:35น.</div>
                <div className="text-md">:</div>
                <div className="text-md">Path</div>
              </div>
              <div className="flex flex-rol justify-between w-2/3">
                <div className="text-md">09:36น. - 09:57น.</div>
                <div className="text-md">:</div>
                <div className="text-md">Path</div>
              </div>
              <div className="flex flex-rol justify-between w-2/3">
                <div className="text-md">09:58น.  - 10:12น.</div>
                <div className="text-md">:</div>
                <div className="text-md">Path</div>
              </div>
              <div className="flex flex-rol justify-between w-2/3">
                <div className="text-md">10:13น.  - 11:14น.</div>
                <div className="text-md">:</div>
                <div className="text-md">Werehouse</div>
              </div>
              <div className="flex flex-rol justify-between w-2/3">
                <div className="text-md">11:14น.  - 12:23น.</div>
                <div className="text-md">:</div>
                <div className="text-md">Werehouse</div>
              </div>
              <div className="flex flex-rol justify-between w-2/3">
                <div className="text-md">12:24น.  - 13:30น.</div>
                <div className="text-md">:</div>
                <div className="text-md">Path</div>
              </div>
              <div className="flex flex-rol justify-between w-2/3">
                <div className="text-md">13:30น.  - 17:51น.</div>
                <div className="text-md">:</div>
                <div className="text-md">Werehouse</div>
              </div>
              <div className="flex flex-rol justify-between w-2/3">
                <div className="text-md">13:30น.  - 17:51น.</div>
                <div className="text-md">:</div>
                <div className="text-md">Werehouse</div>
              </div>
              <div className="flex flex-rol justify-between w-2/3">
                <div className="text-md">13:30น.  - 17:51น.</div>
                <div className="text-md">:</div>
                <div className="text-md">Werehouse</div>
              </div>
              <div className="flex flex-rol justify-between w-2/3">
                <div className="text-md">17:52น.  - 18:30น.</div>
                <div className="text-md">:</div>
                <div className="text-md">Path</div>
              </div>
              <div className="flex flex-rol justify-between w-2/3">
                <div className="text-md">18:31น.  - 21:20น.</div>
                <div className="text-md">:</div>
                <div className="text-md">Home</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="fixed left-[5%] bottom-8 bg-[#5F224A] shadow-lg rounded-[100px] w-auto">
        <div className="h-[45px] flex items-center gap-5 px-7">
          <div className="h-[10px] w-[10px] bg-[#E7770E] rounded-sm" />
          <h1 className="text-white text-md">home</h1>
          <div className="h-[10px] w-[10px] bg-[#8BCE1D] rounded-sm" />
          <h1 className="text-white text-md">office</h1>
          <div className="h-[10px] w-[10px] bg-[#1D8BCE] rounded-sm" />
          <h1 className="text-white text-md">warehouse</h1>
        </div>
      </div> */}
    </div>
  );
};

export default Info;
