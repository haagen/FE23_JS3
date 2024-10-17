import styles from './Child.module.css';

export default function Child() {
    return(<>
        <p className={ styles.odeToClara }>
            Denna paragraf är styled till MediumOrchid via Modular CSS i Child-komponenten.
        </p>
    </>);
}