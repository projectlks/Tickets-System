import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import PropTypes from "prop-types";

export default function FilterBtn({ filterTickets }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 focus:ring-indigo-600 ring-inset hover:bg-gray-50">
          Filter Tickets
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 size-5 text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-none">
        <div className="py-1">
          <MenuItem>
            {({ active }) => (
              <button
                onClick={() => filterTickets("")}
                className={`${
                  active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                } block px-4 py-2 text-sm w-full text-left`}
              >
                All Priorities
              </button>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <button
                onClick={() => filterTickets("High")}
                className={`${
                  active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                } block px-4 py-2 text-sm w-full text-left`}
              >
                High Priority
              </button>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <button
                onClick={() => filterTickets("Medium")}
                className={`${
                  active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                } block px-4 py-2 text-sm w-full text-left`}
              >
                Medium Priority
              </button>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <button
                onClick={() => filterTickets("Low")}
                className={`${
                  active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                } block px-4 py-2 text-sm w-full text-left`}
              >
                Low Priority
              </button>
            )}
          </MenuItem>

          <MenuItem>
            {({ active }) => (
              <button
                onClick={() => filterTickets("Unassigned")}
                className={`${
                  active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                } block px-4 py-2 text-sm w-full text-left`}
              >
             UnAssigned
              </button>
            )}
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}

// Prop validation using PropTypes
FilterBtn.propTypes = {
  filterTickets: PropTypes.func.isRequired,
};
