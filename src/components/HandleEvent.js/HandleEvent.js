import React, { Component } from 'react'

export default class HandleEvent extends Component {

    showTitle =() => {
        alert('hello cybersoft')
    }
    showMess =()=>{
        alert('Hello Tuyền')
    }


    render() {
        return (
            <div>
                {/* // Xử lý sự kiện truyền callback */}
                <button onClick={this.showTitle}>Hello</button>

                {/* Xử lý sự kiện sử dụng hàm trung gian không tham số  */}
                <button onClick={()=>{
                    this.showTitle();
                }}>showTitle</button> 

                <br/>

                <button onClick={this.showMess.bind(this,'Tuyền')}>Show Mess</button>
                
                {/* CÓ tham số */}
                <button onClick={()=>
                this.showMess('Tuyền')}>
                    showMess
                </button>
            </div>
        )
    }
}
