import { Notification } from "./shared/ui/notify/notify";
import Feedback from "./widgets/feedback/feedback";
import Form from "./widgets/form/form";

function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 max-w-5xl mx-auto">
      <Notification />
      <Form />
      <Feedback />
    </div>
  );
}

export default App;
