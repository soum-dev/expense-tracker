import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTrasanction } from './components/AddTransaction';
import { GlobaProvider } from './context/GlobalState';
import './App.css';
function App() {
  return (
    <GlobaProvider>
      <Header />
      <div className='container'>
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTrasanction/>
      </div>
    </GlobaProvider>
  );
}

export default App;
