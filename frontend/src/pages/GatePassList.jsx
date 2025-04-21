import { useState } from "react";

const tabs = ["All", "Accepted", "Pending", "Rejected", "Expired"];

const passes = [
  {
    name: "prudhvi",
    purpose: "classwork",
    from: "8:00 AM",
    to: "3:00 PM",
    requestDate: "22-06-2022",
    id: "22L31A5469",
    status: "Accepted",
  },
  {
    name: "satish",
    purpose: "exams",
    from: "8:00 AM",
    to: "12:00  PM",
    issueDate: "22-06-2022",
    id: "22L31A5463",
    status: "Pending",
  },
  {
    name: "prasad",
    purpose: "feeling bad",
    from: "8:00 AM",
    to: "3:00 PM",
    issueDate: "22-06-2022",
    id: "23L35A5414",
    status: "Expired",
  },
  {
    name: "rakesh",
    purpose: "meeting",
    from: "8:00 AM",
    to: "3:00 PM",
    issueDate: "22-05-2022",
    id: "22L31A5493",
    status: "Rejected",
  },
  {
    name: "rakesh",
    purpose: "meeting",
    from: "8:00 AM",
    to: "3:00 PM",
    issueDate: "22-05-2022",
    id: "22L31A5493",
    status: "Rejected",
  },
];

const statusColors = {
  Accepted: "text-green-600",
  Pending: "text-yellow-600",
  Expired: "text-gray-500",
  Rejected: "text-red-600",
};

export default function GatePassList() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredPasses = passes.filter(
    (pass) =>
      (filter === "All" || pass.status === filter) &&
      pass.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
   <div className=" flex justify-center items-center">
     <div className="p-4 max-w-md mx-auto bg-gray-50">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-4 ">All Passes</h1>

      {/* Search Bar */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full border rounded-md pl-10 pr-3 py-2 text-sm bg-white shadow-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="absolute left-3 top-2.5 text-gray-400">
          <i className="fas fa-search" />
        </span>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`p-2 rounded-md transition ${
              filter === tab
                ? "bg-green-600 text-gray shadow"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Pass Cards */}
      <div className="space-y-4 overflow-hidden">
        {filteredPasses.map((pass, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow-sm border"
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-semibold">{pass.name}</h2>
                <p className="text-sm text-gray-600">{pass.purpose}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400">{pass.id}</p>
                <p
                  className={`text-sm font-semibold ${
                    statusColors[pass.status] || "text-gray-600"
                  }`}
                >
                  ● {pass.status}
                </p>
              </div>
            </div>
            <div className="text-xs text-gray-600 mt-3 flex justify-between">
              <p>
                From<br />
                <span className="font-medium">{pass.from}</span>
              </p>
              <p>
                To<br />
                <span className="font-medium">{pass.to}</span>
              </p>
              <p>
                {pass.requestDate ? "Request Date" : "Issue Date"}<br />
                <span className="font-medium">
                  {pass.requestDate || pass.issueDate}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
   </div>
  );
}
