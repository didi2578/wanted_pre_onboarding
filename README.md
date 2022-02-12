# 원티드 프리온보딩 수강생 선발 과제

## 1. Toggle

✅구현한 방법과 이유

- input의 checkbox를 이용, checked 상태에 따라 css를 구현했다.

✅구현하면서 어려웠던 점과 해결 방법

- css로 위치를 잡는 것이 어려웠지만 before와 after 선택자를 이용, 배경색이 자연스럽게 차오르도록 구현했다.

## 2. Modal

✅구현한 방법과 이유

- useState를 사용, state 상태가 true 일때만 modal 창이 보이도록 구현했다.

## 3. Tab

✅구현한 방법과 이유

- useState로 상태값을 0으로 지정 후 map의 index값을 함수를 통해 setState로 보내 주었다.

- map의 index와 state로 전송된 index 값을 비교하여 선택된 tab에만 active 클래스를 주었다.

## 4. Tag

✅구현한 방법과 이유

- input을 통해 입력된 값을 state에 저장 후 새로운 state 배열에 보내준다.
- 삭제 버튼 클릭 시 함수를 통해 map 의 index값을 보내 filter로 해당 tag를 삭제했다.

✅구현하면서 어려웠던 점과 해결 방법

- 따로 발행 버튼 없이 엔터를 통해 태그를 보내주어야 했는데 submit을 할때마다 태그의 값이 초기화 되어서 난감했다. input 의 onSubmit을 onKeyPress으로 바꾼 뒤 key의 이벤트를 `e.key === 'Enter'` 변경 해주니 잘 해결 되었다.

- input창을 클릭할 때 마다 div도 포커스가 되는 것 같이 효과를 주고 싶었다. 따로 active state를 만들어 `onFocus={() => setActive(true)} onBlur={() => setActive(false)}` 상태를 관리했다.

## 5. AutoComplete
✅구현한 방법과 이유

✅구현하면서 어려웠던 점과 해결 방법

- 클릭 이벤트를 AutoComplete container 바깥에서만 발생시키고 싶은데 마우스로 윈도우를 클릭할 때 마다 이벤트가 발생해서 검색값이 input에 들어가지 않았다.

  - 해결방안
    📑참고사이트(https://developer-talk.tistory.com/124)

  1. ref와 EventListener를 사용하여 외부클릭을 감지한다.
  2. `current.contains(e.target)` 현재 이벤트를 실행한 element가 ref에 포함되면 true, 포함되지 않으면 false이다.
  3. 외부를 클릭했을 때 동작해야 하므로 ` if (current && !current.contains(e.target))` !를 붙여준다

## 6. Click To Edit
✅구현한 방법과 이유

✅구현하면서 어려웠던 점과 해결 방법

- input의 onBlur를 사용하여 state를 변경하였다.

✅구현하면서 어려웠던 점과 해결 방법

- 단순하게 e.target.value를 사용하면 될 것이라고 생각했는데, onChange를 통해 보낸 value값이 잘 전달이 되지 않았다.
  - 해결방안
  1.  `const { name, value } = e.target` 비구조화 할당을 통해 e.target 에서 name 과 value 를 추출
  2.  `setValues((prevValues) => ({...prevValues,[name]: value,}))` 기존의 state를 복사한 뒤 name 키를 가진 값을 value 로 설정했다.
