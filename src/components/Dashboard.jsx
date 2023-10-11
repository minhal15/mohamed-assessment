import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import AddUserModal from "./AddUserModal";

const initialValue = {
  name: "",
  phonenumber: "",
};

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [dataEdit, setDataEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [inputData, setInputData] = useState(initialValue);
  const [userData, setUserData] = useState([]);
  const [searchData, setSearchData] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setUserData([...userData, inputData]);
    setInputData(initialValue);
    setOpenModal(false);
  };
  const deleteItem = (name) => {
    const updatedItems = userData.filter((elem) => {
      return elem.name !== name;
    });
    setUserData(updatedItems);
  };
  const editItem = (name) => {
    let newEditItem = userData.find((elem) => {
      return elem.name === name;
    });
    setOpenModal(true);
    setInputData(newEditItem);
    setDataEdit(true);
  };
  const AddEditItems = () => {
    const newData = [...userData];
    const editItemIndex = newData.findIndex((item) => item.name === editIndex);

    if (editItemIndex !== -1) {
      newData[editItemIndex] = inputData;

      setUserData(newData);
      setInputData(initialValue);
      setOpenModal(false);
    } else {
      console.error(`Item with name ${editIndex} not found.`);
    }
  };

  // Search Data
  const filteredData = userData.filter((item) =>
    item.name.toLowerCase().includes(searchData.toLowerCase())
  );

  return (
    <div className="py-8">
      <div className="container ">
        <div className="flex flex-col items-center justify-between gap-4 tablet:flex-row">
          <h3 className="text-xl tablet:text-[22px] lg:text-[48px] font-bold">
            Hello Mohamed
          </h3>
          <div className="flex items-center justify-center gap-6">
            <input
              type="text"
              className="bg-[#EAD1B2] dark:bg-[#555555] text-black px-4 border-none rounded-lg tablet:rounded-2xl h-[35px] tablet:h-[46px] placeholder:text-black"
              placeholder="Search Bar"
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
            />
            <button
              className="btn w-[220px] h-[36px] px-4 text-sm tablet:text-base rounded-[20px] py-0 btn-primary center gap-2 font-normal"
              onClick={() => (
                setOpenModal(!openModal),
                setDataEdit(false),
                setInputData(initialValue)
              )}
            >
              ADD NEW
              <p className="text-base leading-none tablet:text-lg">
                <AiOutlinePlus />
              </p>
            </button>
          </div>
        </div>
        <div className="w-full overflow-x-auto mt-[40px]">
          <table class="tablet:w-full w-[150%] p-2">
            <thead className="bg-[#EAD1B2] dark:bg-[#2C2C2C] ">
              <tr className="text-[22px] border-b border-[#92744F] dark:border-[#414141]">
                <th class="px-4 py-3 subtitle1 text-[22px] font-medium text-left">
                  First Name
                </th>
                <th class="px-4 py-3 subtitle1 text-[22px] font-medium text-left">
                  Phone
                </th>
                <th class="px-4 py-3 subtitle1 text-[22px] font-medium text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData?.map((item, index) => (
                <tr
                  className=" border-b border-[#92744F] dark:border-[#414141]"
                  key={index}
                >
                  <td className="px-4 py-4 font-bold">{item?.name}</td>
                  <td className="px-4 py-4 font-bold">{item?.phonenumber}</td>
                  <td className="flex items-center justify-center gap-3 px-4 py-4 text-xl text-white tablet:gap-5">
                    <button
                      className="btn bg-[#FF7A00] w-auto px-4 py-0 rounded-md text-base tablet:text-lg"
                      onClick={() => (
                        editItem(item?.name), setEditIndex(item?.name)
                      )}
                    >
                      Edit
                    </button>
                    <button
                      className="btn bg-[#FF3C3C] w-auto px-4 tablet:py-0 rounded-md text-base tablet:text-lg py-1"
                      onClick={() => deleteItem(item?.name)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* <div className="flex items-center justify-center mt-[30px] gap-5 tablet:gap-10">
          <button className="w-auto btn btn-primary h-[36px] rounded-[20px] py-0 ">
            Previous
          </button>
          <button className="w-auto btn btn-primary h-[36px] rounded-[20px] py-0 ">
            Next
          </button>
        </div> */}
      </div>

      {openModal && (
        <AddUserModal
          OpenModal={openModal}
          SetOpenModal={setOpenModal}
          InputData={inputData}
          SetInputData={setInputData}
          Items={userData}
          SetItems={setUserData}
          OnSubmit={onSubmit}
          DataEdit={dataEdit}
          SetDataEdit={setDataEdit}
          AddEditItems={AddEditItems}
        />
      )}
    </div>
  );
};

export default Dashboard;
