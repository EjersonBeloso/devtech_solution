import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from "../features/goals/goalSlice";

function GoalForm() {
  const [formData, setFormdata] = useState({
    service: "",
    image: "",
    description: "",
    price: "",
  });
  const { service, image, description, price } = formData;
  const dispatch = useDispatch();

  // const onSubmit = (e) => {
  //   e.preventDefault();

  //   const goalData = {
  //     service,
  //     image,
  //     description,
  //     price,
  //   };

  //   dispatch(createGoal(goalData));
  //   setFormdata("");
  // };
  const onSubmit = (e) => {
    e.preventDefault();
    {
      const userData = {
        image,
        service,
        description,
        price,
      };

      dispatch(createGoal(userData));
    }
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Service</label>
          <input
            type="text"
            name="service"
            id="service"
            value={service}
            onChange={(e) => setFormdata(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="text">Image</label>
          <input
            type="text"
            name="image"
            id="image"
            value={image}
            onChange={(e) => setFormdata(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="text">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={(e) => setFormdata(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="text">price</label>
          <input
            type="text"
            name="price"
            id="price"
            value={price}
            onChange={(e) => setFormdata(e.target.value)}
          />
        </div>

        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Goal
          </button>
        </div>
      </form>
    </section>
  );
}

export default GoalForm;
