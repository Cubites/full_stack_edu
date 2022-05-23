# Fetch, Axios
## Fetch
### class ver
> <pre>
> componentDidMount = async () => {
>   const response = await fetch('http://date.jsontest.com');
>   const body = await response.json();
>   alert(body.date);
> }
> </pre>

### function ver
> <pre>
> useEffect(() => {
>   const fetchData = async () => {
>     const response = await fetch('http://date.jsontest.com');
>     const body = await response.json();
>     alert(body.date);
>   }
>   fetchData();
> }, []);
> </pre>

## Axios
### function ver
> <pre>
> componentDidMount(){
>   axios.get('http://date.jsontest.com/')
>     .then(response => alert(response.data.date))
> }
> </pre>

# Event
### onKeyDown
* 키를 누를 때 실행
* 누를 때 기존에 있던 텍스트가 value값으로 인식
* ctrl, shift 같은 버튼들도 인식
### onKeyPress
* 키를 누를 때 실행
* 누를 때 기존에 있던 텍스트가 value값으로 인식
* ctrl, shift 같은 버튼들은 인식하지 않음
### onKeyUp
* 키를 누른 후 뗄 때 실행
* 키를 뗄 때 입력된 텍스트를 value값으로 인식
* ctrl, shift 같은 버튼들도 인식