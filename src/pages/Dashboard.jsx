import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import AddUserModal from "../components/AddUserModal";
import { addUser, editUser, deleteUser } from "../redux/actions/userActions";
import { useSelector, useDispatch } from "react-redux";
import { updateSearchData } from "../redux/actions/userActions";
import { useNavigate } from "react-router-dom";

const initialValue = {
  name: "",
  phonenumber: "",
};

const Dashboard = () => {
  // State Variables
  const [openModal, setOpenModal] = useState(false);
  const [dataEdit, setDataEdit] = useState(false);
  const [error, setError] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [inputData, setInputData] = useState({ 
    name: "",
  phonenumber: "",
  });

  // Get users first Name for Welcome
  const UserFirstName = localStorage.getItem("firstName");

  // Redux
  const searchData = useSelector((state) => state.searchData);
  const userData = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Validation for form
  const onSubmit = (e) => {
    const errors = {};
    if (inputData.name === "") {
      errors.name = "First Name is required";
    }
    if (inputData.phonenumber === "") {
      errors.phonenumber = "Phone Number is required";
    } else {
      e.preventDefault();
      const newUser = { ...inputData, id: Date.now() };
      dispatch(addUser(newUser));
      setInputData({ name: "", phonenumber: "" });
      setOpenModal(false);
    }
    setError(errors);
  };

  // delete item
  const deleteItem = (name) => {
    dispatch(deleteUser(name));
  };

  // Edit item, use actions
  const editItem = (name) => {
    let newEditItem = userData.find((elem) => elem.name === name);
    setOpenModal(true);
    setInputData(newEditItem);
    setDataEdit(true);
  };

  const AddEditItems = () => {
    if (dataEdit) {
      dispatch(editUser(inputData));
      setInputData({ email: "", phonenumber: "" });
      setOpenModal(false);
    }
  };


  const filteredData = userData.filter((item) =>
    item.name.toLowerCase().includes(searchData.toLowerCase())
  );

  const handleSearchInputChange = (e) => {
    const searchText = e.target.value;
    dispatch(updateSearchData(searchText));
  };

  // Handle log out, make sure local storage is cleared
  const HandleLogOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="py-8">
      <div className="container ">
        <div className="flex flex-col items-center justify-between gap-4 tablet:flex-row">
          {/* Welcome user with first name */}
          <h3 className="text-xl tablet:text-[22px] lg:text-[48px] font-bold">
            Hello {UserFirstName}
          </h3>
          <div className="flex flex-col items-center justify-center gap-3 tablet:flex-row">
            <input
              type="text"
              className="bg-[#EAD1B2] dark:bg-[#555555] text-black px-4 border-none rounded-lg tablet:rounded-2xl h-[35px] tablet:h-[35px] placeholder:text-black"
              placeholder="Search Bar"
              value={searchData}
              onChange={handleSearchInputChange}
            />
            <button
              className="btn w-[180px] h-[35px] px-0 text-[12px] rounded-[20px] py-0 btn-primary center gap-2 font-normal"
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

            <button
              className="btn bg-[#e9c69c] text-xs h-[35px] w-[100px] p-0 font-bold -pb-1"
              onClick={() => HandleLogOut()}
            >
              Log Out
            </button>
          </div>
        </div>
        <div className="w-full overflow-x-auto mt-[40px]">
          <table className="tablet:w-full w-[150%] p-2">
            <thead className="bg-[#EAD1B2] dark:bg-[#2C2C2C] ">
              <tr className="border-b border-[#92744F] dark:border-[#414141]">
                <th className="px-4 py-3 subtitle1 text-[18px] font-medium text-left">
                  First Name
                </th>
                <th className="px-4 py-3 subtitle1 text-[18px] font-medium text-left">
                  Phone
                </th>
                <th className="px-4 py-3 subtitle1 text-[18px] font-medium text-center">
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
                  <td className="p-2 font-bold">{item?.name}</td>
                  <td className="p-2 font-bold">{item?.phonenumber}</td>
                  <td className="flex items-center justify-center gap-3 p-2 text-xl text-white tablet:gap-5">
                    <button
                      className="btn bg-[#FF7A00] w-auto p-0 h-[30px] px-3 rounded-md text-base"
                      onClick={() => (
                        editItem(item?.name), setEditIndex(item?.name)
                      )}
                    >
                      Edit
                    </button>
                    <button
                      className="btn bg-[#FF3C3C] w-auto rounded-md p-0 h-[30px] px-3 text-base "
                      onClick={() => {
                        if (window.confirm("Are you sure you want to delete?")) {
                          deleteItem(item?.name);
                        }
                      }}
                      >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {openModal && (
        <AddUserModal
          OpenModal={openModal}
          SetOpenModal={setOpenModal}
          InputData={inputData}
          SetInputData={setInputData}
          Items={userData}
          OnSubmit={onSubmit}
          DataEdit={dataEdit}
          SetDataEdit={setDataEdit}
          AddEditItems={AddEditItems}
          Error={error}
          SetError={setError}
        />
      )}
    </div>
  );
};
export default React.memo(Dashboard);
