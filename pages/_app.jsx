import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='max-w-4xl mx-auto '>
      <Header />
      <Component {...pageProps} />
    </div>
  ) 
  
  
}

export default MyApp
