// Cú pháp tạo 'rcc'
import React, { Component } from 'react'

// statefj, component hay còn gọi là react class componenet ->
// là 1 lớp đối tượng kế thừa tư lớp đối tượng componenet của react
// => vì vậy sẽ có 1 số thuộc tính và phương thưc có sẵn từ class Component


export default class DemoStateFul extends Component {
    
    // Phương thưc render là phương thức chưa nội dung hiền thị
    // của giao diện thẻ componenet này 
    
    render() {
        return (
            <div>
  <nav className="navbar navbar-expand-md navbar-dark bg-primary">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
    <div className="collapse navbar-collapse" id="collapsibleNavId">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
          <div className="dropdown-menu" aria-labelledby="dropdownId">
            <a className="dropdown-item" href="#">Action 1</a>
            <a className="dropdown-item" href="#">Action 2</a>
          </div>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
</div>

        )
    }
}
