import cn from "classnames";
import { HTMLAttributes, KeyboardEvent, useEffect, useState } from "react";
import StarIcon from "shared/assets/icons/star.svg";
import styles from "./Rating.module.scss";

export interface RatingProps extends HTMLAttributes<HTMLDivElement> {
  rating: number;
  editable?: boolean;
  setRating?: (rating: number) => void;
}

export function Rating({
  editable = false,
  rating,
  setRating,
  ...props
}: RatingProps) {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  function constructRating(currentRating: number) {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: editable,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => clickHandler(i + 1)}
        >
          <StarIcon
            tabIndex={editable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGElement>) => editable && spaceDownHandler(i + 1, e)}
          />
        </span>
      );
    });
    setRatingArray(updatedArray);
  }

  function changeDisplay(item: number) {
    if (!editable) {
      return;
    }

    constructRating(item);
  }

  function clickHandler(item: number) {
    if (!editable || !setRating) {
      return;
    }

    setRating(item);
  }

  function spaceDownHandler(item: number, e: KeyboardEvent<SVGElement>) {
    if (setRating && (e.code == "Space" || e.code == "Enter")) {
      setRating(item);
    }
    return;
  }

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
}
