import { useForm } from "react-hook-form";
import type { FormType } from "../../shared/types/form.type";
import { useAddFeedback } from "../../features/form/hook/useAddFeedback";

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormType>({
    defaultValues: {
      id: crypto.randomUUID(),
      userName: "",
      email: "",
      rating: 3,
      title: "",
    },
  });
  const { onSubmit } = useAddFeedback(reset);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-2xl shadow-md p-6 space-y-4"
    >
      <h2 className="text-2xl font-semibold mb-4">Оставьте отзыв</h2>

      <div>
        <label className="block text-sm font-medium mb-1">Имя</label>
        <input
          {...register("userName", {
            required: "Имя обязательно",
            minLength: {
              value: 2,
              message: "Имя должно быть не короче 2 символов",
            },
          })}
          type="text"
          className="w-full border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ваше имя"
        />
        {errors.userName && (
          <p className="text-red-500 text-sm mt-1">{errors.userName.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          {...register("email", {
            required: "Введите email",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Некорректный email",
            },
          })}
          type="email"
          className="w-full border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="you@example.com"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Оценка</label>
        <div className="flex space-x-1 text-yellow-500 text-2xl">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>☆</span>
          <span>☆</span>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Отзыв</label>
        <textarea
          {...register("title", {
            required: "Введите отзыв",
            minLength: {
              value: 10,
              message: "Отзыв должен быть не менее 10 символов",
            },
          })}
          className="w-full border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
          placeholder="Напишите ваш отзыв..."
        ></textarea>
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
      >
        Отправить
      </button>
    </form>
  );
}
