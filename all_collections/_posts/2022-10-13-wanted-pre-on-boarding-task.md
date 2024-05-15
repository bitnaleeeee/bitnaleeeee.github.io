---
layout: post
title: "[React] 유효성 검사 및 API 호출, To Do List 체크박스 수정 및 삭제기능 배포"
date: 2022-10-13 16:31:00
modified: 2022-10-13 16:31:00
tag: [react, javascript]
---

배포 링크 : [https://bitnaleeeee.github.io/wanted-pre-onboarding-fe-7/](https://bitnaleeeee.github.io/wanted-pre-onboarding-fe-7/)

### STACK

<img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"> <img src="https://img.shields.io/badge/SASS-cc6699.svg?&style=for-the-badge&logo=Sass&logoColor=White">

---

## 목차

- [프로젝트의 실행](#프로젝트의실행)
- [폴더 구조](#폴더구조)
- [구현 사항](#구현사항)

---

<br>

## 프로젝트의실행

```
$ npm install
$ npm start
```

<br>

## 폴더구조

```
📦 src
├── 📂 pages
│   ├──📂 Auth
│   │    ├── 📂 SignIn
│   │    │    ├── 📜 SignIn.js
│   │    │    └── 📜 SignIn.scss
│   │    └── 📂 SignUp
│   │         ├── 📜 SignUp.js
│   │         └── 📜 SignUp.scss
│   │
│   └── 📂 Todo
│        ├──📜 Todo.js
│        ├──📜 Todo.scss
│        ├──📜 TodoForm.js
│        ├──📜 TodoForm.scss
│        ├──📜 TodoItem.js
│        ├──📜 TodoItem.scss
│        └──📜 TodoList.js
│
├── 📜 config.js
├── 📜 index.js
└── 📜 Router.js
```

## 구현사항

<br>

# 로그인 / 회원가입

<br>

- ### 토큰이 있을 경우 todo 페이지로 이동

```javascript
//SignIn.js
const navigate = useNavigate();

useEffect(() => {
  if (localStorage.getItem("token")) {
    navigate("/todo");
  }
}, [navigate]);
```

로컬 스토리지에 토큰이 있는 상태로 `/` 에 접속할 경우 `todo`페이지로 연결됩니다.
<br>

- ### 아이디, 비밀번호 로그인 조건 충족시 로그인 버튼 활성화

```javascript
//SignIn.js

let idValue = "";
let pwValue = "";

const SignIn = () => {
  const [val, setVal] = useState(true);
  function loginCheck(e) {
    if (e.target.id === "id") {
      idValue = e.target.value;
    } else {
      pwValue = e.target.value;
    }
    idValue.includes("@") && pwValue.length >= 8 ? setVal(false) : setVal(true);
  }
};
```

전역 변수에 `idValue` 와 `pwValue`를 빈값으로 선언한 후 아아디와 비밀번호 창에 입력이 될 때 `onClick`이벤트를 주고 해당 입력값을 각 변수에 담았습니다. 삼항 연산자로 각 아이디 비밀번호의 입력 값이 조건에 충족할 경우 `useState`에 `true` `false` 값에 따라 버튼을 활성, 비활성화 시킵니다. 조건에 충족할때만 버튼이 활성화 되도록 하였습니다.
<br>
<br>

- ### 로그인시 아이디, 비밀번호 확인 및 토큰 발급

```javascript
//SignIn.js

    const login = () => {
      fetch(API.LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: idValue,
        password: pwValue,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.access_token) {
          localStorage.setItem('token', data.access_token);
          navigate('/todo');
        } else {
          alert('아이디 또는 비밀번호를 확인해주세요.');
        }
      });

```

[JSX]

```javascript
<button disabled={val} type="submit" id="button" onClick={login}>
  로그인
</button>
```

`useState`에 값이 `false`가 담길때만 로그인 활성화 되도록 작성하였고, 활성화 된 버튼에 `onClick`이벤트가 발생할 경우 `login`함수가 실행되도록 하였습니다. 로그인 조건이 충족되었을때 `fetch`로 각 아이디, 비밀번호 입력 값을 담아 토큰 발행 요청을 보내어 로컬 스토리지에 저장 후, `todo` 페이지로 바로 이동합니다. 조건 미충족 및 입력을 잘못하여 토큰을 받을 수 없는 경우에는 로그인이 불가함을 `alert` 창 으로 안내합니다.
<br>
<br>

- ### 아이디, 비밀번호 조건 충족시 회원가입 버튼 활성화

```javascript
//SignUp.js

  let idValue = '';
  let nameValue = '';
  let pwValue = '';

  const SignUp = () => {
  const [val, setVal] = useState(true);

  function userInfo(e) {
    if (e.target.id === 'id') {
      idValue = e.target.value;
    } else if (e.target.id === 'name') {
      nameValue = e.target.value;
    } else {
      pwValue = e.target.value;
    }
    signUpCheck();
  }

    function signUpCheck() {
    if (idValue.includes('@') && pwValue.length >= 8 && nameValue.length >= 1) {
      setVal(false);
    } else {
      setVal(true);
    }

    function signUpCheck() {
    if (idValue.includes('@') && pwValue.length >= 8 && nameValue.length >= 1) {
      setVal(false);
    } else {
      setVal(true);
    }
  }

```

전역 변수에 회원가입 창에 아이디,성명,비밀번호 값을 담을 변수를 빈 값으로 선언했습니다.
각 입력창에 `onChange`이벤트가 실행될때 `userInfo`함수가 실행되도록 작성하였습니다. 해당 함수는 각 입력창의 값을 이벤트가 발생할때 해당되는 변수에 담은 후 `signUpCheck`함수를 실행합니다. 이 함수는 아이디와 비밀번호를 충족하는지 검사한 후 `useState`를 이용하여 값의 변화를 변수에 담도록 하였습니다.
<br>

[JSX]

```javascript
  <button disabled={val} type="submit" id="signUp"
  onClick={validSignUp} >
```

val에 변동되는 값에 따라 `useState`값이 `true`일 경우 버튼이 비활성화되고, 입력 조건이 충족하여 `false`일 경우 버튼이 활성화 되도록 하였습니다.
<br>
<br>

- ### 회원가입시 아이디, 비밀번호 확인 및 토큰 발급 후 로그인 페이지로 이동

```javascript
//SignUp.js

const validSignUp = () => {
  fetch(API.SIGNUP, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: idValue,
      password: pwValue,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        return alert(data.message);
      }
      localStorage.setItem("token", data.access_token);
      alert("환영합니다!");
      navigate("/");
    });
};
```

회원가입 시 입력한 아이디, 비밀번호를 담아 토큰 발급을 요청하고 회원 가입 입력 조건이 미충족 되는 경우 해당 에러 메시지를 `alert`창에 출력하도록 작성했습니다. 만약 토큰이 발급되었을 경우, 이를 로컬스토리지에 저장한 후 로그인창으로 바로 이동하도록 하였습니다.

<br><br>

# 투두 리스트

<br>

투두 리스트 컴포넌트 구조는 아래와 같습니다.
<br>

```
📜 Todo.js
 ├──📜 TodoForm.js
 └──📜 TodoList.js
     └──📜 TodoItem.js
```

- ### 투두 컴포넌트, 네가지 기능의 함수가 있습니다.

1. 초기 셋팅
2. 항목 추가
3. 항목 삭제
4. 항목 수정

```javascript
//Todo.js

const Todo = () => {
  const getTodo = () => {
    // [API]
    fetch(API.TODO, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTodoData(data);
      });
  };

  const addTodoItem = (item) => {
    fetch(API.TODO, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        todo: item,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setTodoData(
          todoData.concat({
            id: data.id,
            ...{ isCompleted: false, todo: item },
          })
        );
      });
  };

  const removeTodoItem = (id) => {
    fetch(`${API.TODO}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setTodoData(
      todoData.filter((todoArr) => {
        return todoArr.id !== id;
      })
    );
  };

  const updateTodoItem = (id, check, todo) => {
    fetch(`${API.TODO}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        todo: todo,
        isCompleted: check,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setTodoData(
          todoData.map((item) => {
            return item.id === id
              ? { ...item, ...{ isCompleted: check }, ...{ todo: todo } }
              : item;
          })
        );
      });
  };
};
```

1. 초기 셋팅  
   `getTodo` 함수에서는 `fetch`를 이용하여 해당 계정에 저장되어있는 투두 리스트를 받아 `setTodoData` 함수로 리스트를 셋팅합니다. 맨 처음 가입한 회원은 따로 저장된 투두 리스트가 없기 때문에 셋팅을 따로 안해줍니다.
2. 항목 추가  
   `addTodoItem` 함수는 `TodoForm` 컴포넌트에서 받은 할일 항목을 요청값으로 보내고 서버에서는 응답값으로 해당 항목을 저장한 아이디를 보내줍니다. 서버에서 응답을 받을 시점에 `setTodoData` 함수로 응답받은 아이디와 추가한 투두 항목을 저장해줍니다.
3. 삭제  
   `removeTodoItem` 함수는 서버 요청 url에 파라미터로 삭제할 아이디를 요청하며 통신 메서드는 `DELETE` 메서드로 요청합니다. 서버에 요청 후 `filter` 메서드를 활용해서 삭제한 아이디가 아닌 항목들을 리턴하여 리스트를 다시 구성해줍니다.
4. 수정  
   `updateTodoItem`는 투두 항목의 할일 목록 및 할일 체크 유무를 업데이트 하기 위한 함수입니다. 하위 컴포넌트(`TodoItem`)에서 id, check, todo을 받아오며 서버에는 수정할 투두 항목의 아이디를 url에 파라미터로 보내주며, 통신 body에 할일 목록 및 체크 유무를 보내줍니다. `setTodoData` 함수에는 해당 아이디와 매칭되는 투두 항목에 새롭게 바뀐 할일 내용 및 체크 유무를 셋팅해 줍니다.

- ### 투두 항목(할일) 추가 컴포넌트

```javascript
// TodoForm.js

const ToDoForm = (props) => {
  const changeTodoStr = (e) => {
    setTodoStr(e.target.value);
  };

  const keyPress = (e) => {
    if (e.key === "Enter") {
      clickAddBtn();
    }
  };

  const clickAddBtn = () => {
    if (todoStr.length) {
      addTodoItem(todoStr);
      setTodoStr("");
    }
  };
};
```

텍스트 인풋에 내용을 작성하면 `changeTodoStr` 함수의 `setTodoStr`함수로 내용을 실시간으로 업데이트하며, 추가 버튼을 누르면 `props`에서 받아온 `addTodoItem`함수로 작성한 내용을 전달해 줍니다. 이 함수는 `Todo` 컴포넌트에서 작성된 투두 항목을 받아 서버로 요청하게 됩니다. 엔터키를 눌러도 `keyPress` 함수가 실행되어 할일 내용을 추가하게 됩니다.

- ### 투두 리스트 컴포넌트

```javascript
// TodoList.js

const TodoList = (props) => {
  const { todoData, removeTodoItem, updateTodoItem } = props;
  return (
    <div className="todoList">
      {todoData.map((item, idx) => {
        return (
          <TodoItem
            key={idx}
            data={item}
            removeTodoItem={removeTodoItem}
            updateTodoItem={updateTodoItem}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
```

`Todo` 컴포넌트에서 투두 항목에 데이터를 전달해주고 삭제(`removeTodoItem`) 및 업데이트(`updateTodoItem`) 함수를 전달해 줍니다.

- ### 투두 항목 셋팅 컴포넌트

```javascript
// TodoItem.js

let prevTodoStr = "";
const TodoItem = (props) => {
  const { data, removeTodoItem, updateTodoItem } = props;
  const [editing, setEditing] = useState(false);
  const [todoStr, setTodoStr] = useState("");
  const [todoCheck, setTodoCheck] = useState(false);

  useEffect(() => {
    setTodoStr(data.todo);
    setTodoCheck(data.isCompleted);
  }, [data.todo, data.isCompleted]);

  const changeEdition = () => {
    prevTodoStr = todoStr;
    setTodoStr(todoStr);
    setEditing(!editing);
    updateTodoItem(data.id, todoCheck, todoStr);
  };

  const cencelEdtiong = () => {
    setTodoStr(prevTodoStr);
    setEditing(!editing);
  };

  const changeTodoStr = (e) => {
    setTodoStr(e.target.value);
  };

  const deleteTodoItem = () => {
    removeTodoItem(data.id);
  };

  const changeCheckbox = () => {
    setTodoCheck(!todoCheck);
    updateTodoItem(data.id, !todoCheck, todoStr);
  };

  if (editing) {
    return (
      <div className="item">
        <input
          type="checkbox"
          checked={todoCheck}
          onChange={changeCheckbox}
          readOnly
        />
        <input type="text" value={todoStr} onChange={changeTodoStr} />
        <div className="btnBox">
          <button type="button" className="sendBtn" onClick={changeEdition}>
            제출
          </button>
          <button type="button" className="cencleBtn" onClick={cencelEdtiong}>
            취소
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="item">
      <label
        htmlFor={"chk_" + data.id}
        className={data.isCompleted ? "clear" : ""}
      >
        <input
          type="checkbox"
          id={"chk_" + data.id}
          checked={todoCheck}
          onChange={changeCheckbox}
          readOnly
        />
        {todoStr}
      </label>
      <div className="btnBox">
        <button type="button" className="modifyBtn" onClick={changeEdition}>
          수정
        </button>
        <button type="button" className="deleteBtn" onClick={deleteTodoItem}>
          삭제
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
```

`TodoItem` 컴포넌트에서는 삭제/수정/수정취소/할일 완수 유무를 셋팅합니다.

1. 초기값 셋팅 및 내용 수정
   `useEffect`로 초기에 각 받아온 항목을 셋팅하며 `changeEdition` 함수는 할일 내용을 편집합니다. 편집하는 순간에 `prevTodoStr` 변수에 수정되기 전 할일 내용을 넣어주며 이는 할일 편집 취소를 클릭했을 때 수정되기 전 내용으로 변경하기 위해 사용됩니다. 할일 내용을 편집할때는 `editing` 변수가 `true`가 되며 이때 `JSX`는 수정 모드로 보여지게 됩니다. 할일 내용을 수정하면 `props`에서 받아온 `updateTodoItem` 함수에 아이디, 할일, 할일 완수 유무를 보내주며 이 데이터는 서버로 보내서 데이터를 업데이트 하게 됩니다.

2. 수정 취소
   편집중 취소 버튼은 `cencelEdtiong` 함수가 실행되며 할일 내용 수정하기 전 내용(`prevTodoStr`)로 셋팅해 줍니다.

3. 내용 삭제
   삭제 버튼은 `deleteTodoItem` 함수를 실행하며 `props`에서 받아온 `removeTodoItem`함수에 삭제할 항목의 아이디를 인자값으로 보내줍니다. 이 함수는 서버에 `DELETE`에서드를 활용한 요청으로 서버에서 해당 항목을 삭제하게 됩니다.

4. 할일 완수 유무(체크박스)
   체크박스는 체크할 때마다 `changeCheckbox` 함수를 실행하며 삭제 버튼과 마찬가지로 `props`애서 받아온 `updateTodoItem`함수를 호출하여 할일 완수 유무를 업데이트 해줍니다.
