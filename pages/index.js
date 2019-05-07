import { Component } from 'react';
import { Link } from 'routes';

import s from './style.scss';

class App extends Component {
	render() {
		return (
			<section className={s('container')}>
				<h1>
					This is my Next.js Boilerplate.
				</h1>
				<Link route='about'>
					<a>
						Go to About Me
					</a>
				</Link>
			</section>
		)
	}
}

export default App;
