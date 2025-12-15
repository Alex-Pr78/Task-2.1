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
						{/* Для получения активного контента использйте steps и activeIndex */}
						Контент соответственный шагу. Сейчас активен шаг 3
					</div>
					<ul className={styles['steps-list']}>
						{/* Выводите <li> с помощью массива steps и метода map(), подставляя в разметку нужные значения и классы */}
						<li className={styles['steps-item'] + ' ' + styles.done}>
							{/* Для того, чтобы вычислить необходимый класс используйте активный индекс, текущий индекс, а также тернарные операторы */}
							<button className={styles['steps-item-button']}>1</button>
							{/* При клике на кнопку установка выбранного шага в качестве активного */}
							Шаг 1
						</li>
						<li className={styles['steps-item'] + ' ' + styles.done}>
							<button className={styles['steps-item-button']}>2</button>
							Шаг 2
						</li>
						<li
							className={
								styles['steps-item'] +
								' ' +
								styles.done +
								' ' +
								styles.active
							}
						>
							<button className={styles['steps-item-button']}>3</button>
							Шаг 3
						</li>
						<li className={styles['steps-item']}>
							<button className={styles['steps-item-button']}>4</button>
							Шаг 4
						</li>
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
