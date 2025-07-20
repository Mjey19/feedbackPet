import React from "react";
import useGetFeedbacks from "../../features/feedback/hook/useGetFeedbacks";
import type { FormType } from "../../shared/types/form.type";

// const feedbacks = [
//   {
//     id: "1",
//     title: "Отличный сервис! Всё просто и удобно.",
//     userName: "Алексей",
//     rating: 4,
//   },
//   {
//     id: "2",
//     title: "В целом неплохо, но можно лучше.",
//     userName: "Мария",
//     rating: 2,
//   },
//   {
//     id: "3",
//     title: "Всё супер! Рекомендую!",
//     userName: "Игорь",
//     rating: 5,
//   },
// ];

function StarRating({ rating }: { rating: number }) {
  const safeRating = Number.isFinite(rating)
    ? Math.max(0, Math.min(5, Math.floor(rating)))
    : 0;
  const fullStars = Array(safeRating).fill("★");
  const emptyStars = Array(5 - safeRating).fill("☆");

  return (
    <div className="text-yellow-500 text-lg">
      {[...fullStars, ...emptyStars].map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
}

export default function Feedback() {
  const { feedbacks, isLoading } = useGetFeedbacks();

  return (
    <div className="bg-gray-50 rounded-2xl shadow-md p-6 space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Отзывы</h2>

      {isLoading
        ? Array.from({ length: 3 }).map((_, idx) => (
            <SkeletonFeedback key={idx} />
          ))
        : feedbacks.map((item: FormType) => (
            <div key={item.id} className="border-b pb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold">{item.userName}</span>
                <div className="text-yellow-500">
                  <StarRating rating={item.rating} />
                </div>
              </div>
              <p className="text-sm text-gray-700">{item.title}</p>
            </div>
          ))}
    </div>
  );
}

function SkeletonFeedback() {
  return (
    <div className="border-b pb-4 animate-pulse space-y-2">
      <div className="flex items-center justify-between">
        <div className="h-4 w-24 bg-gray-200 rounded"></div>
        <div className="flex gap-1">
          {[...Array(5)].map((_, idx) => (
            <div key={idx} className="h-4 w-4 bg-yellow-100 rounded-full"></div>
          ))}
        </div>
      </div>
      <div className="h-3 w-3/4 bg-gray-200 rounded"></div>
    </div>
  );
}
