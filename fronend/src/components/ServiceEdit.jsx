import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import { reset, updatedGoal } from "../features/goals/goalSlice";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { GrTechnology } from "react-icons/gr";
import Header from "./Header";

function ServiceEdit() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    image: "",
    service: "",
    description: "",
    price: "",
  });
  const dispatch = useDispatch();

  const navigate = useNavigate();
  // useEffect(() => {
  //   dispatch(updateGoal(id));
  // });

  console.log(id);

  const { image, service, description, price } = formData;

  const { goals, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    // if (isSuccess || services) {
    //   navigate("/");
    // }

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

      dispatch(updatedGoal(userData));
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
        <p>Edit a Service</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="image"
              name="image"
              value={formData.image}
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
              value={formData.service}
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
              value={formData.description}
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
              value={formData.price}
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

export default ServiceEdit;
