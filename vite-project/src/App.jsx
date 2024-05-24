import SortingChart from "./components/SortingChart";
import SortingProvider from "./contexts/SortingContext";

function App() {
    return (
        <SortingProvider>
            <div className="container mx-auto px-4">
                <SortingChart />
            </div>
        </SortingProvider>
    );
}

export default App;
/*<SortingProvider>: This is a context provider component. 
Context providers are part of React's Context API, 
used for managing global state. Any component inside 
the SortingProvider can access the context's value 
without passing props down manually at every level.*/