import { useNotify } from "../../lib/context/notify/notify-context";

export const Notification = () => {
  const { isActive, text, closeNotify } = useNotify();

  if (!isActive) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4 rounded-lg bg-green-600 text-white px-6 py-3 shadow-md">
      <span>{text}</span>
      <button onClick={closeNotify} className="hover:text-red-200">
        ✖
      </button>
    </div>
  );
};
