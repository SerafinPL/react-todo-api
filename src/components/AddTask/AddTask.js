import React, { useState, useRef, useEffect } from "react";
import { useSetRecoilState } from "recoil";

import axios from "../../axios";

import { Flex, Box, Text, Input, Button, Spinner, Heading } from "theme-ui";

import { Redirect } from "react-router-dom";

import { NavLink } from "react-router-dom";

import { listStateMain } from "../../recoliState";

const AddTask = (props) => {
  const inputRef = useRef(null);

  const setTodoList = useSetRecoilState(listStateMain);

  const [input, setInput] = useState("");
  const [redirect, setRedirect] = useState(null);
  const [loading, setloading] = useState(false);
  const [erros, setError] = useState(false);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onEnter = (event) => {
    if (event.keyCode === 13) {
      createToDo();
    }
  };

  const createToDo = () => {
    if (input !== "") {
      setloading(true);
      axios
        .post("/users/1000/todos", {
          user: 'KubaKoder',
          status: "pending",
          title: input,
          user_id: "1000",
          
          
        })
        .then((res) => {
          setInput("");

          setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
              id: res.data.data.id,
              title: res.data.data.title,
              completed: res.data.data.completed,
              user_id: res.data.data.user_id,
            },
          ]);

          setloading(false);
          setRedirect(<Redirect to="/" />);
        })
        .catch((err) => {
          console.log(err);
          setloading(false);
        });
    }
  };

  console.log(loading);

  return (
    <Flex
      sx={{
        height: "100%",
        flexDirection: "column",
        maxHeight: "-webkit-fill-available",
      }}
      bg="muted"
    >
      {redirect}

      <Box
        sx={{
          height: "77px",
          padding: "5px",
          textAlign: "center",
          borderBottom: "1px solid #442929",
          bg: "nextPrimary",
          color: "secondary",
        }}
      >
        <Heading>Dodawanie zadania</Heading>
      </Box>

      <Flex
        sx={{
          flexGrow: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {loading ? (
          <React.Fragment>
            <Spinner />
            <Text sx={{ color: "secondary" }}>Dodaje Zadanie</Text>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Input
              ref={inputRef}
              sx={{ width: "80%" }}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={onEnter}
            />
            <Button variant="add" onClick={createToDo}>
              Dodaj zadanie
            </Button>
          </React.Fragment>
        )}
      </Flex>
      <Flex>
        <NavLink to="/" exact={props.exact} style={{ width: "100vw" }}>
          <Button>Lista Zadań</Button>
        </NavLink>
      </Flex>
    </Flex>
  );
};

export default AddTask;
