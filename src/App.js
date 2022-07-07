import { useEffect, useState } from "react";
import {
  messsageCategories,
  messages,
} from "./js/placeholderData/messageCenterData";
import { Dialog } from "@headlessui/react";
import CategoryFilter from "./components/MessageCenter/CategoryFilter";
import MessageRow from "./components/MessageCenter/MessageRow";
import MobileCategoryFilter from "./components/MessageCenter/MobileCategoryFilter";

import Pagination from "./components/General/Pagination";
import { usePagination } from "./hooks/usePagination";

export default function App() {
  const [currentCategory, setCurrentCategory] = useState(1);
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const {
    current,
    numberPerPage,
    totalPages,
    totalItems,
    currentPage,
    setCurrentPage,
  } = usePagination(filteredMessages, 6);

  useEffect(() => {
    setFilteredMessages(
      messages.filter((message) => {
        if (currentCategory === 1) {
          return message;
        } else {
          return message.category === currentCategory;
        }
      })
    );
  }, [currentCategory]);

  return (
    <>
      <div className="container my-8">
        <h1>Message Center</h1>
        <p>
          Lorem ipsum dolor sit amet, eam ad autem fabulas. Expetenda dissentiet
        </p>
        <hr />
      </div>

      <div className="container ui-component-spacing">
        <div className="flex flex-row items-start">
          <div className="hidden mb-8 text-center md:block md:w-64 md:flex-shrink-0">
            { messsageCategories.map((category, categoryIndex) => {
              return (
                <CategoryFilter
                  key={`message-category-${category.id}`}
                  category={category}
                  first={categoryIndex === 0}
                  last={messsageCategories.length - 1 === categoryIndex}
                  currentCategory={currentCategory}
                  setCurrentCategory={setCurrentCategory}
                />
              );
            }) }
          </div>

          <div className="md:w-full md:ml-6">
            <div className="md:hidden text-right mb-4">
              <button
                id="ID_btnPpenMobileFilter"
                className="ui-btn-primary"
                tabIndex="0"
                aria-label="Add payment a method"
                onClick={() => setIsOpen(true)}
              >
                Filter Options
              </button>
            </div>

            {/* <!-- search form --> */}
            <div className="hidden md:block">
              <div className="grid gap-x-4 md:grid-cols-2 lg:grid-cols-3 place-items-end justify-items-stretch">
                <div className="mb-1 lg:mb-8 md:col-span-2 lg:col-span-1">
                  <div className="ui-input-search">
                    <input
                      id="ID_searchMessages"
                      type="text"
                      className="bg-white pl-6"
                      placeholder="Search Messages"
                      aria-label="Enter term and press enter to filter messages"
                    />
                  </div>
                </div>
                <div className="mb-1 md:mb-8">
                  <label id="ID_showPolicyLabel" htmlFor="ID_showPolicy">
                    Policy:
                  </label>
                  <select
                    id="ID_showPolicy"
                    aria-labelledby="ID_showPolicyLabel"
                    className="bg-white"
                  >
                    <option>Show All</option>
                  </select>
                </div>
                <div className="mb-8 md:mb-8">
                  <label id="ID_messageDateLabel" htmlFor="ID_messageDate">
                    Date
                  </label>
                  <select
                    id="ID_messageDate"
                    aria-labelledby="ID_messageDateLabel"
                    className="bg-white"
                  >
                    <option>Newest to oldest</option>
                  </select>
                </div>
              </div>
            </div>
            {/* <!-- search form --> */}

            {/* <!-- messages list --> */}
            { current.map((message) => (
              <MessageRow key={ "message -" + message.id } message={ message } admin={ true } />
            )) }
            {/* <!-- message list --> */}

            {/* <!-- paging component --> */}
            <div className="flex justify-between items-start mt-6">
              <div></div>
              <Pagination
                numberPerPage={ numberPerPage }
                totalPages={ totalPages }
                totalItems={ totalItems }
                currentPage={ currentPage }
                setCurrentPage={ setCurrentPage }
              />
            </div>
            {/* <!-- paging component --> */}
          </div>
        </div>
      </div>

      {/* <!-- dialogs --> */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="ui-dialogs"
      >
        <Dialog.Panel
          role="dialog"
          id="ID_dialogFilterMessages"
          aria-modal="true"
          className="ui-default-dialog"
        >
          <Dialog.Title className="dialog_label2 font-body text-xl font-bold text-left">
            Filter Options
          </Dialog.Title>
          <button
            className="ui-default-dialog-close"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="ui-icon h-3.5 w-3.5"
              focusable="false"
              aria-hidden="true"
              role="presentation"
            >
              <use href="#ui-icon-close"></use>
            </svg>
          </button>

          <Dialog.Description>
            Lorem ipsum dolor sit amet, eam ad autem fabulas. Expetenda
            dissentiet
          </Dialog.Description>

          <hr className="my-4" />

          <div>
            <label
              id="ID_dialogSearchMessagesLabel"
              htmlFor="ID_dialogSearchMessages"
            >
              Search Messages:
            </label>
            <div className="ui-input-search">
              <input
                id="ID_dialogSearchMessages"
                type="text"
                className="bg-white pl-6"
                placeholder="Search Messages"
                aria-labelledby="ID_dialogSearchMessagesLabel"
              />
            </div>
          </div>

          <hr className="my-4" />

          <div>
            <fieldset>
              <legend className="block mb-2">Inbox Type:</legend>
              {messsageCategories.map((category) => {
                return (
                  <MobileCategoryFilter
                    key={`mobile-message-category-${category.id}`}
                    category={category}
                    currentCategory={currentCategory}
                    setCurrentCategory={setCurrentCategory}
                  />
                );
              })}
            </fieldset>
          </div>

          <hr className="my-4" />

          <div>
            <label id="ID_dialogShowPolicyLabel" htmlFor="ID_dialogShowPolicy">
              Policy:
            </label>
            <select
              id="ID_dialogShowPolicy"
              aria-labelledby="ID_dialogShowPolicyLabel"
              className="bg-white"
            >
              <option>Show All</option>
            </select>
          </div>

          <hr className="my-4" />
          <div>
            <label
              id="ID_dialogMessageDateLabel"
              htmlFor="ID_dialogMessageDate"
            >
              Date
            </label>
            <select
              id="ID_dialogMessageDate"
              aria-labelledby="ID_dialogMessageDateLabel"
              className="bg-white"
            >
              <option>Newest to oldest</option>
            </select>
          </div>

          <hr className="my-4" />

          {/* <!-- Buttons --> */}
          <div className="block text-right mt-6">
            <button
              className="ui-btn-secondary min-w-[140px] mt-4"
              aria-label="cancel filtering messages"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
            <button
              id="ID_applyFilterOptions"
              className="ui-btn-primary min-w-[140px] mt-4"
              aria-label="apply messages"
              onClick={() => setIsOpen(false)}
            >
              Apply
            </button>
          </div>
        </Dialog.Panel>
      </Dialog>
      {/* <!-- dialogs --> */}
      <hr />
    </>
  );
}
