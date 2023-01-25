import { useState } from 'react'
import React from 'react';
import { GET_DASHBOARD_DATA } from '../../Api';
import useFetch from '../Hooks/useFecth';
import { transformToBRL } from '../../helpers';

const CurrentBalance = () => {

	const [currentBalance, setCurrentBalance] = useState<number>(0)

	const reverse = false
	const { response, error, loading, request } = useFetch({reverse});

	React.useEffect(() => {
		const { url, options } = GET_DASHBOARD_DATA();
		request(url, options);
		setCurrentBalance(transformToBRL(response?.data?.current_balance))
	}, [request, currentBalance]);

	return (
		<>
			<div className="card mb-3 rounded-3 shadow-sm">
				<div className="card-header py-3 d-flex justify-content-between">
					<h4 className="my-0 fw-bold text-success"><i className="bi bi-cash"></i> Current Balance</h4>
					<h5 className="fw-bold text-success">R$ {currentBalance}</h5>
				</div>
			</div>
		</>
	)
}

export default CurrentBalance

