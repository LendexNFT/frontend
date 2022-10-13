import { useState } from 'react';
import CreateOrder from '../Partials/CreateOrder';
import Layout from '../Partials/Layout';
import TxHistory from '../Partials/TxHistory';
import BorrowStatusCard from './BorrowStatusCard';
import { CartState } from '../../context/Context';

export default function Nubicuo() {
	const {
		state: { products },
	} = CartState();

	const [objects] = useState(products);

	function BorrowStatusCards(cards) {
		return cards.map((card) => <BorrowStatusCard key={card.id} objects={card} />);
	}

	return (
		<>
			<Layout>
				<CreateOrder />
				<div className='grid grid-cols-4 gap-2 items-center'>{BorrowStatusCards(objects)}</div>
				<TxHistory className='mb-10' />
			</Layout>
		</>
	);
}
