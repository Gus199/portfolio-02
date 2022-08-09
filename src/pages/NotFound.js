
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Spinner from '../components/shared/Spinner'

// markup
const NotFound = () => {
	const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
     navigate('/')
    }, [1500])
    
  }, [navigate])
	return (
		<div className='main-container' >
		<main className='not-found'>
			<h1> Sorry! This page does not exist.</h1>
			
		</main>
		<section>
			<Spinner />
		</section>

		</div>
		
	);
};

export default NotFound;
