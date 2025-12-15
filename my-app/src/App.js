import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {

	const [steps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	const currentStep = steps[activeIndex];
	const isLastStep = activeIndex === steps.length - 1;
	const isFirstStep = activeIndex === 0;

	const handlerNext = () => {
		if (isLastStep) {
			setActiveIndex(0);
		} else {
			setActiveIndex(activeIndex + 1);
		}
	}

	const handlerPref = () => {
		if (activeIndex > 0) {
			setActiveIndex(activeIndex - 1)
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						<h2>{currentStep.title}</h2>
						<p>{currentStep.content}</p>
					</div>
					<ul className={styles['steps-list']}>
						{steps.map((step, index) => {
							const isDone = index < activeIndex;

							return (
								<li key={step.id} className={`${styles['steps-item']} ${isDone ? styles.done : ''}`}>
									<button className={styles['steps-item-button']}>{index + 1}</button>
									{step.title}
								</li>
							)
						})}
					</ul>
					<div className={styles['buttons-container']}>
						<button className={styles.button} onClick={handlerPref} disabled={isFirstStep}>Назад</button>
						<button className={styles.button} onClick={handlerNext}>
							{isLastStep ? 'Начать сначала' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
