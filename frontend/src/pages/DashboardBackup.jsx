// import { useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import GoalItem from "../components/GoalItem";
// import Spinner from "../components/Spinner";
// import { getGoals, reset } from "../features/goals/goalSlice";
// import { IoIosAddCircleOutline } from "react-icons/io";

// function Dashboard() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const { user } = useSelector((state) => state.auth);
//   const { goals, isLoading, isError, message } = useSelector(
//     (state) => state.goals
//   );

//   useEffect(() => {
//     if (isError) {
//       console.log(message);
//     }

//     if (!user) {
//       navigate("/login");
//     }

//     dispatch(getGoals());

//     return () => {
//       dispatch(reset());
//     };
//   }, [user, navigate, isError, message, dispatch]);

//   if (isLoading) {
//     return <Spinner />;
//   }

//   return (
//     <>
//       <section className="heading">
//         <h1>Welcome {user && user.name}</h1>
//         <p>My Dashboard</p>
//       </section>

//       <section className="content">
//         {goals.length > 0 ? (
//           <div className="goals ">
//             {goals.map((goal) => (
//               <GoalItem key={goal._id} goal={goal} />
//             ))}
//           </div>
//         ) : (
//           <div>
//             <Link to="/add " className="link btn btn-dark">
//               <IoIosAddCircleOutline />
//               Add Service
//             </Link>
//             <h3>Please add Service!</h3>
//           </div>
//         )}
//       </section>
//     </>
//   );
// }

// export default Dashboard;
