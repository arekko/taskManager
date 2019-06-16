import * as React from "react";
import { Provider } from "react-redux";
import { Navigation } from "./navigation";
import store from "./redux-store/store";
import TaskApiService from "./services";

export const TaskServiceProvider = React.createContext({});

const taskApiService = new TaskApiService();

const App: React.FC = () => {
  return (
    <TaskServiceProvider.Provider value={taskApiService}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </TaskServiceProvider.Provider>
  );
};

export default App;
