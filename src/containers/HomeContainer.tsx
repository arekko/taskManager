import * as React from "react";
import TaskApiService from "../services";

interface Props {}

export const HomeContainer: React.FC<Props> = () => {
  TaskApiService.getTasks({
    page: 1
  }).then((data: any) => console.log(data));

  return <div>HomeContainer</div>;
};
