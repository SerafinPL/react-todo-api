import axios from "../../axios";
import React, { useEffect, Suspense } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

import List from "../List/List";

import { Route, HashRouter, Switch, Redirect } from "react-router-dom";

import { listStateMain, fatchData } from "../../recoliState";

import { Spinner } from "theme-ui";

const AddTask = React.lazy(() => import("../AddTask/AddTask"));

const FullTask = React.lazy(() => import("../FullTask/FullTask"));

const Main = () => {
  const [todoList, setTodoList] = useRecoilState(listStateMain);
  const setFetchData = useSetRecoilState(fatchData);

  useEffect(() => {
    axios
      .get("/users/2373/todos")
      .then((response) => {
        let data = [...response.data.data];
        let moreData = [...data];
        if (response.data.meta.pagination.pages > 1) {
          for (let i = 2; i <= response.data.meta.pagination.pages; i++) {
            axios
              .get("/users/2373/todos?page=" + i)
              .then((res) => {
                moreData = [...moreData, ...res.data.data];

                setTodoList(moreData);
              })
              .catch((err) => console.log(err));
          }
        } else {
          setTodoList(data);
        }
        setFetchData(true);
      })
      .catch((err) => console.log(err));
  }, [setTodoList, setFetchData]);

  let link;

  if (todoList) {
    link = todoList.map((todoItem) => (
      <Route
        key={todoItem.id}
        exact
        path={"/" + todoItem.id}
        render={() => (
          <Suspense fallback={<Spinner />}>
            <FullTask task={todoItem} />
          </Suspense>
        )}
      />
    ));
  }

  return (
    <React.Fragment>
      <HashRouter>
        <Switch>
          <Route
            path="/newtask" //component={Auth}
            render={() => (
              <Suspense fallback={<Spinner />}>
                <AddTask setlist={setTodoList} />
              </Suspense>
            )}
          />

          {link}

          <Route
            path="/"
            render={() => <List list={todoList} setlist={setTodoList} />}
          />

          <Redirect to="/" />
        </Switch>
      </HashRouter>
    </React.Fragment>
  );
};

export default Main;
