import React, { useState } from "react";

const DownloadBtn = ({
  isOpen,
  onClose,
  netid,
  year,
  handleDownload,
  section,
}) => {
  const [selectedSection, setSelectedSection] = useState("");
  const [placementStatus, setPlacementStatus] = useState("");

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Download Filtered Students
          </h3>
          <div className="mt-2">
            <div className="flex justify-center items-center space-x-4">
              <p>{year}</p>
              <select
                value={selectedSection}
                onChange={(e) => setSelectedSection(e.target.value)}
                className="border outline-none rounded-md p-1  hover:bg-gray-200 "
              >
                <option value="">Section</option>
                {section.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <select
              value={placementStatus}
              onChange={(e) => setPlacementStatus(e.target.value)}
              className="select select-bordered select-primary w-full max-w-xs mt-2"
            >
              <option disabled value="">
                Placement Status
              </option>
              <option value="Placed">Placed</option>
              <option value="Unplaced">Unplaced</option>
              <option value="Intern">Intern</option>
              <option value="HigherStudies">Higher Studies</option>
            </select>
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() =>
                  handleDownload({
                    netid,
                    year,
                    selectedSection,
                    placementStatus,
                  })
                }
                className="text-blue-600 hover:shadow-xl rounded p-1"
              >
                Download
              </button>
              <button
                onClick={onClose}
                className="text-red-600 hover:shadow-xl rounded p-1"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadBtn;
