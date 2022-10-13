import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Icons from '../Helpers/Icons';
import HiddenSvg from '../Partials/HiddenSvg';

export default function BorrowStatusCard({ objects }) {
	const hidden = false;

	console.log('Child :>> ', objects);

	const [addFavorite, setValue] = useState(false);

	// {require(`../../assets/images/${objects.image}`)} 

	const favoriteHandler = () => {
		if (!addFavorite) {
			setValue(true);
			toast.success('Added to Favorite List');
		} else {
			setValue(false);
			toast.warn('Remove to Favorite List');
		}
	};

	return (
		<div className='card-style-one mb-10 flex flex-col justify-between w-full h-[370px] bg-white p-3 pb rounded-2xl'>
			<div className='w-full h-72'>
				{/* thumbnail image */}
				<div className='w-full h-full rounded-xl overflow-hidden px-4 pt-4'>
					<div className='flex justify-between '>
						<span
							onClick={favoriteHandler}
							className={`w-7 h-7 bg-white rounded-full flex justify-center items-center  cursor-pointer ${
								addFavorite ? 'text-pink' : 'text-dark-gray'
							}`}
						>
							<Icons name='love' />
						</span>
						<span className='w-7 h-7 flex justify-center items-center bg-white rounded-full cursor-pointer'>
							<Icons name='dots' />
						</span>
					</div>
					{(hidden && <HiddenSvg />) || null}
					<div className='icon flex justify-center items-center'>
						<h2 className='text-2xl font-bold text-center text-dark-gray'>{objects.name}</h2>
					</div>
					<div className='icon mt-2 flex justify-center items-center'>
						<img src={require(`../../assets/images/${objects.image}`)} alt='' className='w-full h-full' />
					</div>
				</div>
			</div>
			<div className='card-buttons flex items-center space-x-2'>
				<Link
					to='/active-bids'
					className='btn-shine w-[98px] h-[33px] text-white rounded-full text-sm bg-pink flex justify-center items-center'
				>
					Terminate loan
				</Link>
				<Link to='#' className='text-dark-gray text-sm'>
					<span className=' border-b border-dark-gray'>View transaction</span>
				</Link>
			</div>
		</div>
	);
}
