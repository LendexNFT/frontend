import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import { CartState } from '../../context/Context';
import useToggle from "../../hooks/useToggle";
import ModalCom from "../Helpers/ModalCom";
import SearchAssetToBorrow from "./SearchBorrowAssets";
import YourBorrowsWidget from "./YourBorrowsWidget";

export default function MyAssetsItem ({ product }) {

  const {
    yuorSuppliesAssetsDispatch,
  } = CartState();

  const [balanceDropdown, setbalanceValue] = useToggle(false);
  const [moneyPopup, setPopup] = useToggle(false);
  const addMoneyHandler = () => {
    setPopup.toggle();
    setbalanceValue.set(false);
  };

  const [confirmationLend, setConfirmationLendModal] = useState(false);
  const confirmationLendHandler = () => {
    setConfirmationLendModal(!confirmationLend);
  };

  const [lendOrderReady, setLendOrderReadyModal] = useState(false);
  const lendOrderReadyHandler = () => {
    setLendOrderReadyModal(!lendOrderReady);
  };

  function addToLend () {
    yuorSuppliesAssetsDispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  }

  const onSubmit = (data) => {
    console.log(data);
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    ...rest
  } = useForm({
    defaultValues: {
      assetsToLend: '',
    }
  });

  console.log(errors, rest);

  const includeAddressReserved = watch('includeAddressReserved');

  console.log(balanceDropdown);
  return (
    <>
      <li key={product.id} className="content-item py-3 border-b border-light-purple hover:border-purple">
        <div className="flex justify-between items-center">
          <div className="account-name flex space-x-4 items-center">
            <div className="icon w-14 h-14 flex justify-center items-center">
              <img src={require(`../../assets/images/${product.image}`)} alt="" className="w-full h-full" />
            </div>
            <div>
              <div className="name">
                <p className="text-base text-dark-gray font-medium mb-1">
                  {product.name}
                </p>
              </div>
              <div className="time">
                <p className="text-sm text-thin-light-gray font-medium">
                  {product.title}
                </p>
              </div>
              <div className="time">
                <p className="text-sm text-thin-light-gray font-medium">
                  {product.wallet}
                </p>
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={() => addMoneyHandler()}
              type="button"
              className="w-[110px] h-[33px] flex justify-center items-center btn-gradient text-base rounded-full text-white"
            >
              Add to order
            </button>
            <p className="usd text-base text-light-green text-right mr-2">
              <Link
                to="/shop-details"
                state={{
                  id: product.id
                }}
              >
                View details
              </Link>
            </p>
          </div>
        </div>
      </li>
      {moneyPopup && (
        <ModalCom action={addMoneyHandler} situation={moneyPopup}>
          {/* <div className="lg:w-[680px] sm:w-[550px] w-full rounded-2xl h-auto bg-white overflow-auto"> */}
          <div className="lg:w-[980px] w-full rounded-2xl bg-white">
            <div className="heading border-b border-light-purple lg:px-7 sm:px-5 px-3 py-3 flex items-center justify-between">
              <h3 className="text-xl font-bold text-dark-gray">
                Set Lending Order
              </h3>
              <span onClick={addMoneyHandler}>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36 16.16C36 17.4399 36 18.7199 36 20.0001C35.7911 20.0709 35.8636 20.2554 35.8385 20.4001C34.5321 27.9453 30.246 32.9248 22.9603 35.2822C21.9006 35.6251 20.7753 35.7657 19.6802 35.9997C18.4003 35.9997 17.1204 35.9997 15.8401 35.9997C15.5896 35.7086 15.2189 35.7732 14.9034 35.7093C7.77231 34.2621 3.08728 30.0725 0.769671 23.187C0.435002 22.1926 0.445997 21.1199 0 20.1599C0 18.7198 0 17.2798 0 15.8398C0.291376 15.6195 0.214408 15.2656 0.270759 14.9808C1.71321 7.69774 6.02611 2.99691 13.0428 0.700951C14.0118 0.383805 15.0509 0.386897 15.9999 0C17.2265 0 18.4532 0 19.6799 0C19.7156 0.124041 19.8125 0.136067 19.9225 0.146719C27.3 0.868973 33.5322 6.21922 35.3801 13.427C35.6121 14.3313 35.7945 15.2484 36 16.16ZM33.011 18.0787C33.0433 9.77105 26.3423 3.00309 18.077 2.9945C9.78479 2.98626 3.00344 9.658 2.98523 17.8426C2.96667 26.1633 9.58859 32.9601 17.7602 33.0079C26.197 33.0577 32.9787 26.4186 33.011 18.0787Z"
                    fill="#374557"
                    fillOpacity="0.6"
                  />
                  <path
                    d="M15.9309 18.023C13.9329 16.037 12.007 14.1207 10.0787 12.2072C9.60071 11.733 9.26398 11.2162 9.51996 10.506C9.945 9.32677 11.1954 9.0811 12.1437 10.0174C13.9067 11.7585 15.6766 13.494 17.385 15.2879C17.9108 15.8401 18.1633 15.7487 18.6375 15.258C20.3586 13.4761 22.1199 11.7327 23.8822 9.99096C24.8175 9.06632 26.1095 9.33639 26.4967 10.517C26.7286 11.2241 26.3919 11.7413 25.9133 12.2178C24.1757 13.9472 22.4477 15.6855 20.7104 17.4148C20.5228 17.6018 20.2964 17.7495 20.0466 17.9485C22.0831 19.974 24.0372 21.8992 25.9689 23.8468C26.9262 24.8119 26.6489 26.1101 25.4336 26.4987C24.712 26.7292 24.2131 26.3441 23.7455 25.8757C21.9945 24.1227 20.2232 22.3892 18.5045 20.6049C18.0698 20.1534 17.8716 20.2269 17.4802 20.6282C15.732 22.4215 13.9493 24.1807 12.1777 25.951C11.7022 26.4262 11.193 26.7471 10.4738 26.4537C9.31345 25.9798 9.06881 24.8398 9.98589 23.8952C11.285 22.5576 12.6138 21.2484 13.9387 19.9355C14.5792 19.3005 15.2399 18.6852 15.9309 18.023Z"
                    fill="#374557"
                    fillOpacity="0.6"
                  />
                </svg>
              </span>
            </div>
            <div className="content lg:px-7 px-3 sm:px-5 py-8">
              <form onSubmit={handleSubmit(onSubmit)}>
                
                
                <div className="h-90 grid grid-cols-2 gap-4 content-start mb-8 pb-4 border-b-2">
                  <div>
                    <h3 className="text-xl font-bold text-dark-gray">
                      My asset
                    </h3>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-gray">
                      Requested collateral assets
                    </h3>
                  </div>

                  <div className="account-name flex space-x-4 content-start">
                    <div className="icon w-14 h-14 flex justify-center items-center">
                      <img src={require(`../../assets/images/${product.image}`)} alt="" className="w-full h-full" />
                    </div>
                    <div>
                      <div className="name">
                        <p className="text-base text-dark-gray font-medium mb-1">
                          {product.name} <span>- ID #{product.id} - QTY: 1</span>
                        </p>
                      </div>
                      <div className="time">
                        <p className="text-sm text-thin-light-gray font-medium">
                          {product.title}
                        </p>
                      </div>
                      <div className="time">
                        <p className="text-sm text-thin-light-gray font-medium">
                          {product.wallet}
                        </p>
                      </div>
                    </div>
                    
                  </div>

                  <div>
                    <SearchAssetToBorrow />
                  </div>

                </div>


                <div className="grid grid-cols-3 gap-4 content-center">
                  <div className="">
                    <span className='font-semibold text-gray-900 dark:text-white'>Interests to be paid:</span>
                  </div>
                  <div>
                    <input type="text"
                      name="interestToBePaid"
                      id="interestToBePaid"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                      focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                      dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Qty" required
                    />
                  </div>

                  <div className="">
                      <input type="text"
                        name="contractToRequestInterest"
                        id="contractToRequestInterest"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                    focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Select Asset or Type Contract Address"
                        required
                      />
                  </div>

                  <div className="">
                    <span className="font-semibold text-gray-900 dark:text-white">Loan Terms (in days):</span>
                  </div>

                  <div className="">
                    <input type="text"
                        name="howLong"
                        id="howLong"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="How long (Days)" required
                      />
                    
                  </div>
                </div>
                
                <div className="relative w-full">
                  {errors.assetsToLend && (
                    <span className="bg-yellow-400">{errors.assetsToLend?.message}</span>
                  )}
                </div>
                <div className="flex mt-5 mb-10">
                  <div className="w-1/3 ...">
                    <div className="relative flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="candidates"
                          aria-describedby="candidates-description"
                          name="candidates"
                          type="checkbox"
                          {...register('includeAddressReserved')}
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="candidates" className="font-semibold text-gray-900 dark:text-white">
                          Reserve for an address
                        </label>
                      </div>
                    </div>
                  </div>
                  {includeAddressReserved && (
                    <div className="w-2/3">
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Add wallet address</label>
                        <input type="text"
                          name="addressRserved"
                          id="addressRserved"
                          // checked={disableUI} 
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                    focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add wallet address..." required
                        />
                      </div>
                    </div>
                  )}
                </div>

                <YourBorrowsWidget />

                <button
                  // className="mt-4 w-full bg-green-400 hover:bg-green-600 text-green-100 border py-3 px-6 font-semibold text-md rounded"
                  className="w-[122px] h-11  my-3 flex justify-center items-center btn-gradient text-base rounded-full text-white text-xl"
                  type="submit"
                  onClick={() => {
                    addMoneyHandler();
                    confirmationLendHandler();
                  }}
                >
                  All set
                </button>
              </form>
            </div>
          </div>
        </ModalCom>
      )
      }
      {
        confirmationLend && (
          <ModalCom action={confirmationLendHandler} situation={confirmationLend}>
            <div className="lg:w-[450px] sm:w-[350px] w-full rounded-2xl h-auto bg-white">
              <div className="heading border-b border-light-purple lg:px-7 sm:px-5 px-3 py-6 flex items-center justify-between">
                <h3 className="text-xl font-bold text-dark-gray">
                  Confirm Order
                </h3>
                <span onClick={confirmationLendHandler}>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M36 16.16C36 17.4399 36 18.7199 36 20.0001C35.7911 20.0709 35.8636 20.2554 35.8385 20.4001C34.5321 27.9453 30.246 32.9248 22.9603 35.2822C21.9006 35.6251 20.7753 35.7657 19.6802 35.9997C18.4003 35.9997 17.1204 35.9997 15.8401 35.9997C15.5896 35.7086 15.2189 35.7732 14.9034 35.7093C7.77231 34.2621 3.08728 30.0725 0.769671 23.187C0.435002 22.1926 0.445997 21.1199 0 20.1599C0 18.7198 0 17.2798 0 15.8398C0.291376 15.6195 0.214408 15.2656 0.270759 14.9808C1.71321 7.69774 6.02611 2.99691 13.0428 0.700951C14.0118 0.383805 15.0509 0.386897 15.9999 0C17.2265 0 18.4532 0 19.6799 0C19.7156 0.124041 19.8125 0.136067 19.9225 0.146719C27.3 0.868973 33.5322 6.21922 35.3801 13.427C35.6121 14.3313 35.7945 15.2484 36 16.16ZM33.011 18.0787C33.0433 9.77105 26.3423 3.00309 18.077 2.9945C9.78479 2.98626 3.00344 9.658 2.98523 17.8426C2.96667 26.1633 9.58859 32.9601 17.7602 33.0079C26.197 33.0577 32.9787 26.4186 33.011 18.0787Z"
                      fill="#374557"
                      fillOpacity="0.6"
                    />
                    <path
                      d="M15.9309 18.023C13.9329 16.037 12.007 14.1207 10.0787 12.2072C9.60071 11.733 9.26398 11.2162 9.51996 10.506C9.945 9.32677 11.1954 9.0811 12.1437 10.0174C13.9067 11.7585 15.6766 13.494 17.385 15.2879C17.9108 15.8401 18.1633 15.7487 18.6375 15.258C20.3586 13.4761 22.1199 11.7327 23.8822 9.99096C24.8175 9.06632 26.1095 9.33639 26.4967 10.517C26.7286 11.2241 26.3919 11.7413 25.9133 12.2178C24.1757 13.9472 22.4477 15.6855 20.7104 17.4148C20.5228 17.6018 20.2964 17.7495 20.0466 17.9485C22.0831 19.974 24.0372 21.8992 25.9689 23.8468C26.9262 24.8119 26.6489 26.1101 25.4336 26.4987C24.712 26.7292 24.2131 26.3441 23.7455 25.8757C21.9945 24.1227 20.2232 22.3892 18.5045 20.6049C18.0698 20.1534 17.8716 20.2269 17.4802 20.6282C15.732 22.4215 13.9493 24.1807 12.1777 25.951C11.7022 26.4262 11.193 26.7471 10.4738 26.4537C9.31345 25.9798 9.06881 24.8398 9.98589 23.8952C11.285 22.5576 12.6138 21.2484 13.9387 19.9355C14.5792 19.3005 15.2399 18.6852 15.9309 18.023Z"
                      fill="#374557"
                      fillOpacity="0.6"
                    />
                  </svg>
                </span>
              </div>
              <div className="content lg:px-7 px-3 sm:px-5 py-8">
                <div className="heading text-center">
                  <h1 className="text-xl font-bold text-dark-gray">
                    You're about to creat a Lending order:
                  </h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="chart-analysis mt-5">
                    <div className="deatil-order-list">
                      <ul>
                        <li className="flex items-center mb-3.5">
                          <div>
                            <p className="text-base text-dark-gray font-medium mb-1">
                              <span>QTY: 1    {product.name} - ID #{product.id}</span>
                            </p>
                          </div>
                        </li>
                        <li className="flex items-center mb-3.5">
                          <div>
                            <p className="text-base text-dark-gray font-medium mb-1">
                              <span>Collateral Asset  {product.name} - ID #{product.id}</span>
                            </p>
                          </div>
                        </li>
                        <li className="flex items-center mb-3.5">
                          <div>
                            <span className="text-base text-dark-gray font-medium mb-1">
                              Charging an interest of:
                            </span>
                            <span className="text-base text-dark-gray font-medium mb-1">
                              20
                            </span>
                            <span className="text-base text-dark-gray font-medium mb-1">
                              <>&nbsp;&nbsp;</>$MATIC
                            </span>
                          </div>
                        </li>
                        <li className="flex items-center mb-3.5">
                          <div>
                            <span className="text-base text-dark-gray font-medium mb-1">
                              Loan term:
                            </span>
                            <span className="text-base text-dark-gray font-medium mb-1">
                              20
                            </span>
                            <span className="text-base text-dark-gray font-medium mb-1">
                              <>&nbsp;&nbsp;</> days
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="sm:flex justify-between items-center pt-5 border-t border-light-purple">
                    <div>
                      <button
                        type="button"
                        onClick={() => {
                          confirmationLendHandler();
                          addToLend({
                            type: "ADD_TO_CART",
                            payload: product,
                          });
                          lendOrderReadyHandler();

                        }}
                        className="w-[122px] h-11 flex justify-center items-center btn-gradient text-base rounded-full text-white"
                      >
                        Place order
                      </button>
                    </div>
                    <div>
                      <button
                        type="submit"
                        onClick={() => {
                          confirmationLendHandler();
                          addMoneyHandler();

                        }}
                        className="w-[122px] h-11 flex justify-center items-center btn-gradient text-base rounded-full text-white"
                      >
                        Cancel
                      </button>
                    </div>

                  </div>
                </form>
              </div>
            </div>
          </ModalCom >
        )
      }
      {
        lendOrderReady && (
          <ModalCom action={lendOrderReadyHandler} situation={lendOrderReady}>
            <div className="lg:w-[450px] sm:w-[350px] w-full rounded-2xl h-auto bg-white">
              <div className="heading border-b border-light-purple lg:px-7 sm:px-5 px-3 py-6 flex items-center justify-between">
                <h3 className="text-xl font-bold text-dark-gray">
                  Transaction sent to blockchain
                </h3>
                <span onClick={lendOrderReadyHandler}>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M36 16.16C36 17.4399 36 18.7199 36 20.0001C35.7911 20.0709 35.8636 20.2554 35.8385 20.4001C34.5321 27.9453 30.246 32.9248 22.9603 35.2822C21.9006 35.6251 20.7753 35.7657 19.6802 35.9997C18.4003 35.9997 17.1204 35.9997 15.8401 35.9997C15.5896 35.7086 15.2189 35.7732 14.9034 35.7093C7.77231 34.2621 3.08728 30.0725 0.769671 23.187C0.435002 22.1926 0.445997 21.1199 0 20.1599C0 18.7198 0 17.2798 0 15.8398C0.291376 15.6195 0.214408 15.2656 0.270759 14.9808C1.71321 7.69774 6.02611 2.99691 13.0428 0.700951C14.0118 0.383805 15.0509 0.386897 15.9999 0C17.2265 0 18.4532 0 19.6799 0C19.7156 0.124041 19.8125 0.136067 19.9225 0.146719C27.3 0.868973 33.5322 6.21922 35.3801 13.427C35.6121 14.3313 35.7945 15.2484 36 16.16ZM33.011 18.0787C33.0433 9.77105 26.3423 3.00309 18.077 2.9945C9.78479 2.98626 3.00344 9.658 2.98523 17.8426C2.96667 26.1633 9.58859 32.9601 17.7602 33.0079C26.197 33.0577 32.9787 26.4186 33.011 18.0787Z"
                      fill="#374557"
                      fillOpacity="0.6"
                    />
                    <path
                      d="M15.9309 18.023C13.9329 16.037 12.007 14.1207 10.0787 12.2072C9.60071 11.733 9.26398 11.2162 9.51996 10.506C9.945 9.32677 11.1954 9.0811 12.1437 10.0174C13.9067 11.7585 15.6766 13.494 17.385 15.2879C17.9108 15.8401 18.1633 15.7487 18.6375 15.258C20.3586 13.4761 22.1199 11.7327 23.8822 9.99096C24.8175 9.06632 26.1095 9.33639 26.4967 10.517C26.7286 11.2241 26.3919 11.7413 25.9133 12.2178C24.1757 13.9472 22.4477 15.6855 20.7104 17.4148C20.5228 17.6018 20.2964 17.7495 20.0466 17.9485C22.0831 19.974 24.0372 21.8992 25.9689 23.8468C26.9262 24.8119 26.6489 26.1101 25.4336 26.4987C24.712 26.7292 24.2131 26.3441 23.7455 25.8757C21.9945 24.1227 20.2232 22.3892 18.5045 20.6049C18.0698 20.1534 17.8716 20.2269 17.4802 20.6282C15.732 22.4215 13.9493 24.1807 12.1777 25.951C11.7022 26.4262 11.193 26.7471 10.4738 26.4537C9.31345 25.9798 9.06881 24.8398 9.98589 23.8952C11.285 22.5576 12.6138 21.2484 13.9387 19.9355C14.5792 19.3005 15.2399 18.6852 15.9309 18.023Z"
                      fill="#374557"
                      fillOpacity="0.6"
                    />
                  </svg>
                </span>
              </div>
              <div className="content lg:px-7 px-3 sm:px-5 py-8">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="ready-order">
                        <p className="text-[22px] py-6">
                          You can see the order in your dashboard along with your orders history</p>
                    </div>
                  <div className="sm:flex justify-self-center items-center pt-5 border-t border-light-purple">
                    <div>
                      <button
                        type="button"
                        onClick={() => {
                          lendOrderReadyHandler();
                          // addToLend({
                          //   type: "ADD_TO_CART",
                          //   payload: product,
                          // });
                        }}
                        className="w-[182px] h-11 flex justify-center items-center btn-gradient text-base rounded-full text-white"
                      >
                        Close
                      </button>
                    </div>
                 
                  </div>
                </form>
              </div>
            </div>
          </ModalCom >
        )
      }
    </>
  );
}

