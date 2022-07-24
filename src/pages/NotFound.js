
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

// markup
const NotFound = () => {
	const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
     navigate('/')
    }, [1500])
    
  }, [navigate])
	return (
		<main className="not-found-container">
			<h1> Sorry! This page does not exist.</h1>
		
		</main>
		
	);
};

export default NotFound;
