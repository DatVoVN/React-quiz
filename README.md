# UseReducer: 
    - Hàm reducer được gọi khi dispatch bắt đầu, Cái này theo cách hỉu cũng như State nhưng nó hơn là nó lưu trữ tất cả trạng thái kể từ khi bắt đầu
## VD nha: 
    ```javascript
        function reducer(state, action) {
            console.log(state, action)
        }
          const [count, dispatch] = useReducer(reducer, 0)  
          const inc = function () {
            dispatch(1)
        }
    _ Thì cách hoạt động của nó sơ sơ ý là khi mình bắt đầu thực hiện hàm inc thì state ban đầu là 0, dispatch(1) thì trạng thái tiếp theo sẽ là 1 và nó sẽ là 1 và nó sẽ gọi tới hàm reducer để in ra cửa sổ log cái `console.log(state, action)`
    _ Action chính là `dispatch(1)` còn State chính là trạng thái hiện tại
        