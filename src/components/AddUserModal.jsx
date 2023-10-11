import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const initialValue = {
  firstName: "",
  lastName: "",
  phonenumber: "",
  email: "",
  address: ""
};
const AddUserModal = ({
  OpenModal,
  SetOpenModal,
  InputData,
  SetInputData,
  OnSubmit,
  DataEdit,
  SetDataEdit,
  AddEditItems,
}) => {

  const getLocalItems = () => {
    let list = localStorage.getItem("lists");
    console.log(list);
    if (list) {
      console.log(JSON.parse(localStorage.getItem("lists")));
      return JSON.parse(localStorage.getItem("lists"));
    } else {
      return [];
    }
  };

  return (
    <>
      {OpenModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-full max-w-xl mx-auto my-6">
              <div className="relative flex flex-col w-full bg-[#F0E7DC] dark:bg-[#202023] border-0 rounded-lg shadow-xl outline-none focus:outline-none">
                <div className="flex items-center justify-between p-5 rounded-t">
                  <h3 className="text-2xl font-semibold">Create User </h3>
                  <button
                    className="text-xl font-semibold leading-none outline-none "
                    onClick={() => SetOpenModal(false)}
                  >
                    <AiOutlineClose />
                  </button>
                </div>

                <div className="relative flex-auto p-6">
                  <div>
                    <label htmlFor="name" className="font-bold">
                      First Name
                    </label>
                    <input
                      className=""
                      type="text"
                      placeholder="First Name"
                      id="firstName"
                      value={InputData.name}
                      onChange={(e) =>
                        SetInputData({
                          ...InputData,
                          name: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="font-bold">
                      Last Name
                    </label>
                    <input
                      className=""
                      type="text"
                      placeholder="Last Name"
                      id="lastName"
                      value={InputData.lastName}
                      onChange={(e) =>
                        SetInputData({
                          ...InputData,
                          lastName: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mt-3">
                    <label htmlFor="phonenumber" className="font-bold">
                      Phone Number
                    </label>
                    <input
                      className=""
                      type="number"
                      placeholder="Phone Number"
                      id="phonenumber"
                      value={InputData.phonenumber}
                      onChange={(e) =>
                        SetInputData({
                          ...InputData,
                          phonenumber: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="font-bold">
                      Email
                    </label>
                    <input
                      className=""
                      type="text"
                      placeholder="Email"
                      id="email"
                      value={InputData.email}
                      onChange={(e) =>
                        SetInputData({
                          ...InputData,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="font-bold">
                      Address
                    </label>
                    <input
                      className=""
                      type="text"
                      placeholder="Address"
                      id="address"
                      value={InputData.address}
                      onChange={(e) =>
                        SetInputData({
                          ...InputData,
                          address: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end p-6 ">
                  <button
                    className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                    type="button"
                    onClick={() => SetOpenModal(false)}
                  >
                    Close
                  </button>
                  {DataEdit ? (
                    <button
                      className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-[#349795] active:bg-[#349795] hover:shadow-lg focus:outline-none"
                      type="button"
                      onClick={() => AddEditItems()}
                    >
                      Edit
                    </button>
                  ) : (
                    <button
                      className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-[#349795] active:bg-[#349795] hover:shadow-lg focus:outline-none"
                      type="button"
                      onClick={OnSubmit}
                    >
                      Add
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
};

export default AddUserModal;
