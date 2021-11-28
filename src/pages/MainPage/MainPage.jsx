import { CardsContainer } from '../../components/CardsContainer/CardsContainer';

import './MainPage.scss';

export const MainPage = () => {
  return (
    <div className="MainPage">
      <h1 className="MainPage__title">Features</h1>
      <p className="MainPage__text">
        Some of the features and advantages that we provide for those of you who store data in this
        Data Warehouse.
      </p>
      <CardsContainer />
    </div>
  );
};
