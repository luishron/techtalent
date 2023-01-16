import { useContext } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

import "react-initials-avatar/lib/ReactInitialsAvatar.css";
import { JobsContext } from "../../context/JobContext";
import { AvatarGenerator } from "../avatar/AvatarGenerator";
import FormattedDate from "../formatted-date/FormattedDate";
import "./card.scss";

export const Card = ({ job }) => {
  const { state, dispatch } = useContext(JobsContext);

  const isFavorite = state.favorites.some((fav) => fav.id === job.id);

  const handleFav = () => {
    if (!isFavorite) {
      dispatch({ type: "ADD_TO_FAVORITES", job });
    } else {
      dispatch({ type: "REMOVE_FROM_FAVORITES", job });
    }
  };

  return (
    <div className="card">
      <div className="card-head">
        <AvatarGenerator name={job.company} />
        <span className="job-date">
          <FormattedDate date={job.date_posted} />
        </span>
      </div>
      <div className="card-body">
        <h3 className="job-title">{job.position}</h3>
        <span className="job-company">{job.company}</span>
        <span className="job-details">
          {job.employment_type} - {job.work_setting}
        </span>
      </div>
      <div className="card-footer">
        <span className="job-location">
          <GoLocation />
          {job.location}
        </span>
        <span className="job-favorite">
          {isFavorite ? (
            <AiFillHeart size={24} onClick={handleFav} className="card-fav" />
          ) : (
            <AiOutlineHeart size={24} onClick={handleFav} />
          )}
        </span>
      </div>
    </div>
  );
};
