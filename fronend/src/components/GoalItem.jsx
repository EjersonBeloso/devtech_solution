import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteGoal } from "../features/goals/goalSlice";

function GoalItem({ goal }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const OnServiceEdit = () => {
    navigate(`/edit/${goal._id}`);
  };

  return (
    <div className="card mb-3 shadow mt-4">
      <img src={goal.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title  service-card">{goal.service}</h5>
        <p className="card-text  service-card">{goal.description}</p>
        <p className=" card-price service-card">Php{goal.price}</p>
        <button
          onClick={() => dispatch(deleteGoal(goal._id))}
          className=" btn btn-danger m-2"
        >
          Delete
        </button>
        <button onClick={OnServiceEdit} className="btn btn-primary m-2">
          Edit
        </button>
      </div>
    </div>
  );
}

export default GoalItem;
