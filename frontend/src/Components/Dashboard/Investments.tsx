import React from 'react'
import { GET_DASHBOARD_DATA } from '../../Api'
import { transformToBRL } from '../../helpers'
import useFetch from '../Hooks/useFecth'

function Investments() {

	const [totalInvestments, setTotalInvestments] = React.useState<string>('')

	const [investments_fixed_income, setInvestmentsFixedIncome] = React.useState<string>('')
	const [percentage_fixed_income, setPercentageFixedIncome] = React.useState<string>('')

	const [investments_variable_income, setInvestmentsVariableIncome] = React.useState<string>('')
	const [percentage_variable_income, setPercentageVariableIncome] = React.useState<string>('')

	const [investments_criptocurrencies, setInvestmentsCriptocurrencies] = React.useState<string>('')
	const [percentage_criptocurrencies, setPercentageCriptocurrencies] = React.useState<string>('')

	const [investments_others, setInvestmentsOthers] = React.useState<string>('')
	const [percentage_others, setPercentageOthers] = React.useState<string>('')

	const reverse = false
	const { response, error, loading, request } = useFetch({reverse});

	console.log('response => ', response)

	React.useEffect(() => {
		const { url, options } = GET_DASHBOARD_DATA();
		request(url, options);
		setTotalInvestments(transformToBRL(response?.data.investments_total))
		setInvestmentsFixedIncome(transformToBRL(response?.data.investments_fixed_income))
		setInvestmentsVariableIncome(transformToBRL(response?.data.investments_variable_income))
		setInvestmentsCriptocurrencies(transformToBRL(response?.data.investments_criptocurrencies))
		setInvestmentsOthers(transformToBRL('2350'))
	}, [request]);

	return (
		<>
			<div className="card mb-3 rounded-3 shadow-sm">
				<div className="card-header py-3 d-flex justify-content-between">
					<h4 className="my-0 fw-bold text-start text-primary"><i className="bi bi-bar-chart"></i> Investments </h4>
					<span className="my-0 fw-bold text-end text-primary">R$ {totalInvestments}</span>
				</div>
				<div className="card-body">
					<table className="table table-striped">
						<tbody>
							<tr>
								<th><i className="bi bi-graph-up-arrow"></i> Fixed Income</th>
								<td>R$ {investments_fixed_income}</td>
								<td>{percentage_fixed_income} %</td>
							</tr>
							<tr>
								<th><i className="bi bi-graph-down-arrow"></i> Variable Income</th>
								<td>R$ {investments_variable_income}</td>
								<td>{percentage_variable_income} %</td>
							</tr>
							<tr>
								<th><i className="bi bi-currency-bitcoin"></i> Criptocurrencies</th>
								<td>R$ {investments_criptocurrencies}</td>
								<td>{percentage_criptocurrencies} %</td>
							</tr>
							<tr>
								<th><i className="bi bi-gem"></i> Others</th>
								<td>R$ {investments_others}</td>
								<td>{percentage_others} %</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	)
}

export default Investments
