import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function SideBar({ isShow }) {
  const navigate = useNavigate();

  return (
    <>
      <section className={`w-[250px] lg:static absolute top-0 left-0 h-screen`}>
        <div
          className={`  w-[250px] z-50 ${
            isShow ? "left-0" : "-left-full"
          } flex transition-all fixed top-0  flex-col justify-between h-screen p-6 bg-white shadow-md `}
        >
          <div>
            {/* dashboard */}
            <span className="flex gap-2.5 items-center cursor-pointer p-4 bg-[#F9FAFB] h-[40px] mb-2 rounded-md">
              <i className="text-indigo-600 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </i>
              <p className="text-[14px] text-indigo-600 font-semibold">
                Dashboard
              </p>
            </span>

            {/* tickets */}
            <span
              onClick={() => navigate("/tickets-assignment")}
              className="flex group gap-2.5 items-center cursor-pointer p-4 hover:bg-[#F9FAFB] bg-[#FFF] h-[40px] mb-2  rounded-md"
            >
              <i className="group-hover:text-indigo-600 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                  />
                </svg>
              </i>
              <p className="text-[14px] group-hover:text-indigo-600 font-semibold">
                Tickets
              </p>
            </span>

            {/* {create ticket} */}
            <span
              onClick={() => navigate("/create-tickets-form")}
              className="flex group gap-2.5 items-center cursor-pointer p-4 hover:bg-[#F9FAFB] mb-2  bg-[#FFF] h-[40px] rounded-md"
            >
              <i className="group-hover:text-indigo-600 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </i>
              <p className="text-[14px] group-hover:text-indigo-600 font-semibold">
                Create Tickets
              </p>
            </span>

            {/* {assign to me} */}
            <span
              onClick={() => navigate("/tasks-list")}
              className="flex group gap-2.5 items-center cursor-pointer p-4 hover:bg-[#F9FAFB] mb-2  bg-[#FFF] h-[40px] rounded-md"
            >
              <i className="group-hover:text-indigo-600 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                  />
                </svg>
              </i>
              <p className="text-[14px] group-hover:text-indigo-600 font-semibold">
                Assign
              </p>
            </span>

            {/* {create account} */}
            <span
              onClick={() => navigate("/accounts-table")}
              className="flex group gap-2.5 items-center cursor-pointer p-4 hover:bg-[#F9FAFB] mb-2  bg-[#FFF] h-[40px] rounded-md"
            >
              <i className="group-hover:text-indigo-600 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </i>
              <p className="text-[14px] group-hover:text-indigo-600 font-semibold">
                All account
              </p>
            </span>
          </div>
          {/* log out */}
          <span
            onClick={() => navigate("/login")}
            className="flex items-center justify-center gap-2 px-5 py-2 rounded-md cursor-pointer bg-red-500 text-white font-bold text-[16px] transition-all duration-300 hover:bg-red-600 active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25a2.25 2.25 0 0 0-2.25-2.25h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M9 12h12m0 0-3-3m3 3-3 3"
              />
            </svg>
            Logout
          </span>
        </div>
      </section>
    </>
  );
}

SideBar.propTypes = {
  isShow: PropTypes.bool.isRequired,
};
