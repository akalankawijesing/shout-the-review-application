import react from "react";
import ReactStars from "react-rating-stars-component";
import ShowMoreText from "react-show-more-text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBurger,
  faLightbulb,
  faThumbsUp,
  faSurprise,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";

const ratingChanged = (newRating) => {
  console.log(newRating);
};

function executeOnClick(isExpanded) {
  console.log(isExpanded);
}

function RecentActivitiesItem() {
  return (
    <>
      <div class="w-full max-w-md mt-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
        <div class="flex items-center justify-between">
          <div class="flex items-center sm:p-4">
            <div class="flex-shrink-0">
              <img
                class="w-8 h-8 rounded-full "
                src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                alt="Neil image"
              />
            </div>
            <div class="flex-1 min-w-0 ms-4">
              <p class="text-sm font-medium text-gray-900 dark:text-white">
                Neil Sims wrote a review
              </p>

              <p class="text-sm text-gray-500 dark:text-gray-400">Just now</p>
            </div>
          </div>
        </div>
        <div class="flow-root">
          <img
            class="w-full"
            src="https://s3-media0.fl.yelpcdn.com/bphoto/WV-OPa0uCxQlBdXyVzFvwA/l.jpg"
            alt="Neil image"
          />
        </div>

        <div class="flex items-center sm:p-4">
          <div class="flex-1 min-w-0 ms-2">
            <p class="text-sm text-gray-900 font-bold tracking-widest mb-2 uppercase">
              Osaka Imai
            </p>

            <p class="text-sm text-gray-500 dark:text-gray-400">
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
            </p>
            <div className="text-gray-900">
              <ShowMoreText
                /* Default options */
                lines={3}
                more="Show more"
                less="Show less"
                className="content-css"
                anchorClass="show-more-less-clickable"
                onClick={executeOnClick}
                expanded={false}
                width={280}
                truncatedEndingComponent={"... "}
              >
                what a fun time! making your own pizza is fun, the patio was the
                perfect size, nice little DJ, and some flat out AWESOME food:
                blackberry pizza was off the hook, the spicy tuna roll is mouth
                watering, yuzu lager is solid, and Miharu Ube flan is my new
                fave flavor. thanks to Yelp Elite for helping us celebrate FAHM
                with these flavors and vendors.
              </ShowMoreText>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between  align-baseline text-gray-900 gap-1">
          <div className="inline-block p-4 hover:bg-gray-100 text-gray-900   rounded-full  dark:bg-gray-800 dark:text-blue-500">
            <FontAwesomeIcon icon={faThumbsUp} size="xl" />
          </div>
          <div className="inline-block p-4 hover:bg-gray-100 text-gray-900   rounded-full  dark:bg-gray-800 dark:text-blue-500">
            <FontAwesomeIcon icon={faThumbsDown} size="xl" />
          </div><div className="inline-block p-4 hover:bg-gray-100 text-gray-900   rounded-full  dark:bg-gray-800 dark:text-blue-500">
            <FontAwesomeIcon icon={faLightbulb} size="xl" />
          </div><div className="inline-block p-4 hover:bg-gray-100 text-gray-900   rounded-full  dark:bg-gray-800 dark:text-blue-500">
            <FontAwesomeIcon icon={faSurprise} size="xl" />
          </div>
          
        </div>
      </div>
    </>
  );
}

export default RecentActivitiesItem;
