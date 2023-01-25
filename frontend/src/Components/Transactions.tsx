import React from 'react'
import { getTransactionCategoryIcon, transformToBRL } from '../helpers';
import useFetch from './Hooks/useFecth';
import Error from './Helpers/Error';
import { GET_TRANSACTIONS } from '../Api';

const Transactions = () => {

	const reverse = true
	const { response, error, loading, request } = useFetch({reverse});

	React.useEffect(() => {
		const { url, options } = GET_TRANSACTIONS();
		request(url, options);
	}, [request]);

	return (
		<>
			<h3><i className="bi bi-receipt-cutoff"></i> Transactions</h3>
			<ul className="list-group list-group-item-action" id="ul_transactions">
				{error && <Error error={error} />}
      			{loading && "Searching transactions..."}
				{response && response.map((transaction) => (
					<li className="list-group-item list-group-item-action d-flex justify-content-between">
			 				<div className="me-auto">
								<h5 className={'fw-bold ' + transaction.type === "DEPOSIT"
								? "text-success"
								: transaction.type === "EXPENSE"
								? "text-danger"
								: "text-primary"}>
									<i className={getTransactionCategoryIcon(transaction.category)}></i>   {transaction.description}
								</h5>
			 					<small>{transaction.created_at}</small>
			 				</div>
			 				<div className="ms-auto">
			 					<h5 className={'fw-bold ' + transaction.type === "DEPOSIT"
								? "text-success"
								: transaction.type === "EXPENSE"
								? "text-danger"
								: "text-primary"}>
								{transaction.type === "DEPOSIT"
								? "+ "
								: transaction.type === "EXPENSE"
								? "- "
								: ""}
								 R$ {transformToBRL(transaction.amount)}</h5>
								<form className="d-flex justify-content-end">
									<button type="submit" className="btn btn-sm btn-outline-danger button_delete_transaction" id={
										transaction.transaction_id
									}><i className="bi bi-trash"></i> Delete</button>
								</form>
			 				</div>
			 		</li>
				))}
			</ul>
		</>
	)
}

export default Transactions
