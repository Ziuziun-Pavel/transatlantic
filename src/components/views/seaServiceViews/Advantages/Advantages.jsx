import managerIcon from "../../../../assets/images/service/advantages/manager-icon.png";
import opportunityIcon from "../../../../assets/images/service/advantages/opportunity-icon.png";
import portIcon from "../../../../assets/images/service/advantages/port-icon.png";
import safetyIcon from "../../../../assets/images/service/advantages/safety-icon.png";
import seaIcon from "../../../../assets/images/service/advantages/sea-icon.png";
import serviceIcon from "../../../../assets/images/service/advantages/service-icon.png";

import styles from "./advantages.module.css";

const Advantages = () => {
  return (
    <section className={styles.advantage}>
      <div className={styles.advantage__container}>
        <h3 className={styles.advantage__title}>Почему мы</h3>
        <ul className={styles.advantage__list}>
          <li className={styles.advantage__item}>
            <img
              src={seaIcon}
              alt="sea icon"
              className={styles.advantage__icon}
            />
            <h4 className={styles.advantage__heading}>
              Прямые контракты с морскими линиями
            </h4>
            <p className={styles.advantage__descr}>
              Налаженные связи с ключевыми перевозчиками — выгодные условия
              ваших перевозок.
            </p>
          </li>
          <li className={styles.advantage__item}>
            <img
              src={portIcon}
              alt="port icon"
              className={styles.advantage__icon}
            />
            <h4 className={styles.advantage__heading}>Свои агенты в портах</h4>
            <p className={styles.advantage__descr}>
              Партнёры более чем в 60 портах стран ЮВА для быстрого решения
              задач.
            </p>
          </li>
          <li className={styles.advantage__item}>
            <img
              src={serviceIcon}
              alt="service icon"
              className={styles.advantage__icon}
            />
            <h4 className={styles.advantage__heading}>Прозрачность</h4>
            <p className={styles.advantage__descr}>
              Личный кабинет клиента — для получения любой необходимой
              информации по перевозке.
            </p>
          </li>
          <li className={styles.advantage__item}>
            <img
              src={safetyIcon}
              alt="safety icon"
              className={styles.advantage__icon}
            />
            <h4 className={styles.advantage__heading}>Надёжность</h4>
            <p className={styles.advantage__descr}>
              Наша деятельность как перевозчика застрахована.
            </p>
          </li>
          <li className={styles.advantage__item}>
            <img
              src={opportunityIcon}
              alt="opportunity icon"
              className={styles.advantage__icon}
            />
            <h4 className={styles.advantage__heading}>
              Безграничные возможности
            </h4>
            <p className={styles.advantage__descr}>
              Доставим грузы по всему земному шару.
            </p>
          </li>
          <li className={styles.advantage__item}>
            <img
              src={managerIcon}
              alt="manager icon"
              className={styles.advantage__icon}
            />
            <h4 className={styles.advantage__heading}>Персональный менеджер</h4>
            <p className={styles.advantage__descr}>
              Мы всегда на связи и готовы решить любые ваши задачи.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Advantages;
