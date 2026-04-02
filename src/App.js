import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'

const App=()=>{
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-grow">
                <Body />
            </div>
            <Footer />
        </div>
    )
}
export default App