import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GrTechnology } from "react-icons/gr";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { createGoal, reset } from "../features/goals/goalSlice";
import Header from "./Header";

function ServiceForm() {
  const [formData, setFormData] = useState({
    image: "",
    service: "",
    description: "",
    price: "",
  });

  const { image, service, description, price } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { goals, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(reset());
  }, [goals, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

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
    if (isSuccess || goals) {
      navigate("/dashboard");
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <Header />
        <h1>
          <GrTechnology />
          DevTech Solution
        </h1>
        <p>Add a Service</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="image"
              name="image"
              value={image}
              placeholder="Enter Image"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="service"
              name="service"
              value={service}
              placeholder="Enter service offered"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="desciption"
              name="description"
              value={description}
              placeholder="Description"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="price"
              name="price"
              value={price}
              placeholder="Price"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default ServiceForm;
