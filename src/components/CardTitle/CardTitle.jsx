import './CardTitle.scss';

export const CardTitle = ({ title }) => {
  // let newTitle = title[0].toUpperCase() + title.slice(1);

  return <h2 className="CardTitle">{title}</h2>;
};
