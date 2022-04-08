import "./Categories.css";
export const Categeries = ({ img, title }) => {
  return (
    <div>
      <div className="box">
        <img src={img} alt="" />
        <p>{title}</p>
      </div>
    </div>
  );
};
