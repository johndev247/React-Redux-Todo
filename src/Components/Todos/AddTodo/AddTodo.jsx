import React, {useState, useRef} from "react";
import {nanoid} from "@reduxjs/toolkit";
import {Title, SuccessButton, DangerButton} from "../../../GlobalStyles";
import {
  AddTodoContainer,
  AddTodoForm,
  AddTodoHeader,
  AddTodoInput,
} from "./addTodo";
import {AddTodos} from "../../../Features/Todos/TodoSlice";
import {useDispatch, useSelector} from "react-redux";
import {ToggleLoginStatus} from "../../../Features/LogginStatus/LoginStatusSlice";

const AddTodo = () => {
  const [fullname, setFullName] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(true);
  const isLoggedIn = useSelector((state) => state.LoginStatus);

  const Dispatch = useDispatch();
  const inp = useRef();
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    if (value.trim() !== "" || inp.code === "Enter") {
      Dispatch(AddTodos({desc: value}));
    }
    e.preventDefault();
    setValue("");
  };

  const checkAndSubmit = () => {
    if (fullname.length < 1) {
      setError("Fullname cannot be empty");
    } else if (email.length < 4) {
      setError("Please fill in email");
    } else if (password1.length < 4) {
      setError("password must be more than 3");
    } else if (password1 !== password2) {
      setError("Password does not match");
    } else {
      setError("");
      const users = JSON.parse(localStorage.getItem("users"));
      if (users) {
        const tempUsers = users;
        tempUsers.push({
          fullname,
          email,
          password: password1,
          id: nanoid(),
        });
        localStorage.setItem("users", JSON.stringify(tempUsers));
        Dispatch(ToggleLoginStatus());
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
      } else {
        localStorage.setItem(
          "users",
          JSON.stringify([{fullname, email, password: password1, id: nanoid()}])
        );
        Dispatch(ToggleLoginStatus());
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
      }
    }
  };

  const checkAndLogin = () => {
    const users = JSON.parse(localStorage.getItem("users"));
    if (email.length < 4) {
      setError("Please fill in your email");
    } else if (password1?.length < 4) {
      setError("Please fill in your Password");
    } else {
      const user = users.find((u) => u?.email === email);
      if (!user) {
        setError("Email Does not exist");
      } else if (user && user?.password !== password1) {
        setError("Password Incorrect");
      } else if (user?.email === email && user?.password === password1) {
        Dispatch(ToggleLoginStatus());
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
      }
    }
  };

  return (
    <AddTodoContainer>
      {isLoggedIn && (
        <>
          <AddTodoHeader>
            <DangerButton
              onClick={() => {
                Dispatch(ToggleLoginStatus());
                localStorage.setItem("isLoggedIn", JSON.stringify(false));
              }}
              style={{marginBottom: 20}}
            >
              Logout
            </DangerButton>
            <Title>Add A Task</Title>
          </AddTodoHeader>
          <AddTodoForm onSubmit={handleSubmit}>
            <AddTodoInput
              ref={inp}
              name="add-todo"
              value={value}
              onChange={handleChange}
            />
            <SuccessButton type="submit">Upload</SuccessButton>
          </AddTodoForm>
        </>
      )}
      {!isLoggedIn && (
        <>
          {isSignUp ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <h2>Register</h2>
              <div style={{display: "flex", flexDirection: "row"}}>
                <p style={{margin: 0, width: 100}}>Full Name:</p>
                <input
                  onChange={(e) => setFullName(e.target.value)}
                  value={fullname}
                  style={{marginLeft: 5}}
                />
              </div>
              <div style={{display: "flex", flexDirection: "row"}}>
                <p style={{margin: 0, width: 100}}>Email:</p>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  style={{marginLeft: 5}}
                />
              </div>
              <div style={{display: "flex", flexDirection: "row"}}>
                <p style={{margin: 0, width: 100}}>Password:</p>
                <input
                  onChange={(e) => setPassword1(e.target.value)}
                  type="password"
                  style={{marginLeft: 5}}
                  value={password1}
                />
              </div>
              <div style={{display: "flex", flexDirection: "row"}}>
                <p style={{margin: 0, width: 100}}>Confirm Password:</p>
                <input
                  onChange={(e) => setPassword2(e.target.value)}
                  type="password"
                  value={password2}
                  style={{marginLeft: 5}}
                />
              </div>
              {error.length > 0 && <p style={{color: "pink"}}>{error}</p>}
              <div
                style={{
                  alignSelf: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <DangerButton
                  onClick={() => checkAndSubmit()}
                  style={{
                    width: 70,
                    marginTop: 10,
                    marginBottom: 10,
                    marginRight: 5,
                    alignSelf: "center",
                  }}
                >
                  Register
                </DangerButton>
                <span style={{marginBottom: 5}}>
                  Do you have an account?{" "}
                  <button
                    onClick={() => {
                      setError("");
                      setIsSignUp(false);
                    }}
                    style={{fontSize: 19, color: "blue"}}
                  >
                    Login
                  </button>
                </span>
              </div>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <h2>Login</h2>
              <div style={{display: "flex", flexDirection: "row"}}>
                <p style={{margin: 0, width: 100}}>Email:</p>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  style={{marginLeft: 5}}
                />
              </div>
              <div style={{display: "flex", flexDirection: "row"}}>
                <p style={{margin: 0, width: 100}}>Password:</p>
                <input
                  onChange={(e) => setPassword1(e.target.value)}
                  type="password"
                  style={{marginLeft: 5}}
                  value={password1}
                />
              </div>
              {error.length > 0 && <p style={{color: "pink"}}>{error}</p>}
              <div
                style={{
                  alignSelf: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <DangerButton
                  onClick={() => checkAndLogin()}
                  style={{
                    width: 70,
                    marginTop: 10,
                    marginBottom: 10,
                    marginRight: 5,
                    backgroundColor: "green",
                    alignSelf: "center",
                  }}
                >
                  Login
                </DangerButton>
                <span style={{marginBottom: 5}}>
                  You dont have an account?
                  <button
                    onClick={() => {
                      setError("");
                      setIsSignUp(true);
                    }}
                    style={{fontSize: 19, color: "blue", marginLeft: 5}}
                  >
                    Register
                  </button>
                </span>
              </div>
            </div>
          )}
        </>
      )}
    </AddTodoContainer>
  );
};

export default AddTodo;
