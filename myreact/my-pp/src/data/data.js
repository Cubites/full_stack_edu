const navList = [
    {id: 1, link: 'Python', title: 'Python', contents: [
        {id: '1-1', link: 'En-to-Ko_Translator', name: '영한번역기', text: '파이썬으로 만든 번역기입니다. 클립보드에 있는 내용을 처음부터 확인하여 번역할 문구(A)를 번역한 문구(B)로 변경하도록 만들었습니다.'}, 
        {id: '1-2', link: 'exe_calculator', name: '.exe계산기', text: '파이썬으로 만든 .exe번역기입니다. 테이블에 여러 입력값을 받아 각 칸마다 다른 계수를 곱하여 여러 결과값을 보여주는 계산기입니다.'}, 
        {id: '1-3', link: 'todoList-with-Django', name: 'django로 만든 TodoList', text: 'django를 이용하여 만든 해야할 일 목록을 저장하는 기능을 가진 TodoList입니다.'}
    ]},
    {id: 2, link: 'HTML_CSS', title: 'HTML, CSS', contents: [
        {id: '2-1', link: 'Position', name: 'Position', text: 'html 태그에 위치 속성을 부여합니다. 종류로는 static, relative, absolute, fixed, sticky가 있습니다.'}, 
        {id: '2-2', link: 'Display', name: 'Display', text: 'html 태그의 타입을 지정합니다. 종류로는 inline, block, inline-block, flex 등이 있습니다.'}, 
        {id: '2-3', link: 'Animation', name: 'Animation', text: 'html 태그 속성값 변화에 Animation을 추가할 수 있습니다.'}, 
        {id: '2-4', link: 'Pseudo-classes', name: 'Pseudo-classes', text: '이름 그대로 임시 class로 before, after, hover, :first-child, :last-child 등이 있습니다.'}
    ]},
    {id: 3, link: 'Javascript', title: 'Javascript', contents: [
        {id: '3-1', link: 'Node', name: 'Node', text: '문서 노드, 요소 노드, 속성 노드, 텍스트 노드, 주석 노드 등의 종류가 있다. 즉, HTML 문서를 구성하는 대부분의 요소들이 노드라고 할 수 있다.'}, 
        {id: '3-2', link: 'NodeList', name: 'NodeList', text: 'querySelect나 querySelectAll을 사용한 결과로 나오는 노드들의 list이다. list와 유사한 형태이지만 prototype을 요소로 가지고 있어 list와는 다른 것이다.'}, 
        {id: '3-3', link: 'Scope', name: 'Scope', text: '간단히 말하면 변수를 사용할 수 있는 범위라고 할 수 있다. 예를 들면, 어떤 함수 내에서 선언한 변수를 함수 밖에서 사용하려 하면 에러가 나는 경우가 있다. 이는 해당 변수를 사용할 수 있는 범위(scope)가 함수 안으로 한정되어 있기 때문이다.'}
    ]},
    {id: 4, link: 'ETC', title: 'ETC', contents: [
        {id: '4-1', link: 'Problem_solve', name: '알고리즘(PS)', text: '누적 합, 이분탐색, BFS, DFS, 재귀 등의 문제들을 풀어 보았다.'}
    ]}
]

export default navList