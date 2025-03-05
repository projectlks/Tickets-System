import StatusIcon from "./StatusIcon"

export default function AgentDashBoard() {
return (
    <>
<section className="w-full p-10">


    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              <div className="rounded-xl h-[100px] border border-gray-400 flex flex-col justify-between p-6">
                <h3 className="text-md font-semibold">All</h3>
    
                <h1 className="text-2xl font-bold">1200</h1>
              </div>
    
              {["Pending", "Resolved", "Open", "Closed"].map((status, idx) => (
                <div
                  key={status}
                  className="rounded-xl h-[100px] border border-gray-400 flex flex-col justify-between p-6"
                >
                  <div className="flex items-center space-x-2">
                    <StatusIcon status={status.toLowerCase()} />
                    <h3 className="text-md font-semibold">{status}</h3>
                  </div>
                  <h1 className="text-2xl font-bold">
                    {[300, 900, 500, 700][idx]}
                  </h1>
                </div>
              ))}
            </div>
            </section>
    </>
  )
}
