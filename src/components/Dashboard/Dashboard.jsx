import React, { useState } from 'react';
import dataLens from '../../data/lend_data.json';
import CreateOrder from '../Partials/CreateOrder';
import Layout from '../Partials/Layout';
import TxHistory from '../Partials/TxHistory';
import MyLendStatus from './MyLendStatus';

export default function Nubicuo() {
	const allLends = dataLens.data;

	const [selectedButton, setSelectedButton] = useState('Assets');
	const [selectedOrder, setSelectedOrder] = useState(allLends);

	function changeTabHandler(buttonValue) {
		setSelectedButton(buttonValue);
		for (let i = 0; i < allLends.length; i++) {
			const number = `${Math.floor(Math.random() * 999)},${Math.floor(Math.random() * 999)} ETH`;
			console.log(number);
			allLends[i].price = number;
			setSelectedOrder(allLends);
		}
	}

	return (
		<>
			<Layout>
				<div className='home-page-wrapper'>
					<CreateOrder />
					<div className='m-2 grid grid-cols-3 justify-center'>
						<button
							onClick={() => changeTabHandler('Assets')}
							type='button'
							style={{
								backgroundColor: selectedButton === 'Assets' ? '#ddd' : '#333',
								outline: '2px solid #333',
							}}
							className='flex cursor-pointer lg:w-[250px] w-[150px] h-[40px] items-center rounded-full pr-4 pl-4'
						>
							<div className='flex items-center justify-between w-full h-full'>
								<span className='lg:block hidden'></span>
								<p
									className='lg:text-m text-m font-bold text-white'
									style={{ color: selectedButton === 'Assets' ? '#333' : '#ccc' }}
								>
									My Assets
								</p>
								<span className='lg:block hidden'></span>
							</div>
						</button>
						<button
							onClick={() => changeTabHandler('Loans')}
							type='button'
							style={{
								backgroundColor: selectedButton === 'Loans' ? '#ddd' : '#333',
								outline: '2px solid #333',
							}}
							className='flex cursor-pointer lg:w-[250px] w-[150px] h-[40px] items-center rounded-full pr-4 pl-4'
						>
							<div className='flex items-center justify-between w-full h-full'>
								<span className='lg:block hidden'></span>
								<p
									className='lg:text-m text-m font-bold text-white'
									style={{ color: selectedButton === 'Loans' ? '#333' : '#ccc' }}
								>
									My Loans
								</p>
								<span className='lg:block hidden'></span>
							</div>
						</button>
						<button
							onClick={() => changeTabHandler('Swaps')}
							type='button'
							style={{
								backgroundColor: selectedButton === 'Swaps' ? '#ddd' : '#333',
								outline: '2px solid #333',
							}}
							className='flex cursor-pointer lg:w-[250px] w-[150px] h-[40px] items-center rounded-full pr-4 pl-4'
						>
							<div className='flex items-center justify-between w-full h-full'>
								<span className='lg:block hidden'></span>
								<p
									className='lg:text-m text-m font-bold text-white'
									style={{ color: selectedButton === 'Swaps' ? '#333' : '#ccc' }}
								>
									My Swaps
								</p>
								<span className='lg:block hidden'></span>
							</div>
						</button>
					</div>
				</div>
				<MyLendStatus allLends={selectedOrder} className='mt-5 mb-10' />
				<TxHistory className='mb-10' />
			</Layout>
		</>
	);
}
