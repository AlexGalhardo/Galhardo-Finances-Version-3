import { useState } from 'react'
import CurrentBalance from './Components/Dashboard/CurrentBalance'
import Expenses from './Components/Dashboard/Expenses'
import Investments from './Components/Dashboard/Investments'
import NewDeposit from './Components/Modals/NewDeposit'
import NewExpense from './Components/Modals/NewExpense'
import NewInvestment from './Components/Modals/NewInvestment'
import Navbar from './Components/Navbar'
import FilterTransactions from './Components/FilterTransactions'
import ExportTransactions from './Components/ExportTransactions'
import Transactions from './Components/Transactions'

function App() {
  return (
    <>
		<Navbar />
		<NewDeposit />
		<NewExpense />
		<NewInvestment />

    	<main className="mt-5">
        	<div className="container">
          		<div className="row">
            		<div className="col-lg-5">
              			<CurrentBalance />
						<Expenses />
						<Investments />
            		</div>
            		<div className="col-lg-7">
						<FilterTransactions />
						<ExportTransactions />
						<Transactions />
            		</div>
          		</div>
        	</div>
    	</main>
    </>
  )
}

export default App
