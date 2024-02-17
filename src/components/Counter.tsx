import React from 'react'
import classes from './Counter.module.scss'

const Counter = () => {
	const [count, setCount] = React.useState(0)

	const increment = () => {
		setCount(count + 1)
	}
	return (
		<div>
			<div>{count}</div>
			<button className={classes.button} onClick={increment}>
				increment
			</button>
		</div>
	)
}

export default Counter
