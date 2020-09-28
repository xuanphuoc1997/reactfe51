import React, { Component } from 'react'

export default class Databinding extends Component {

    hocVien = {
        ma: 1,
        hinhanh : 'https://picsum.photos/200/200',
        tenHocVien : ' Hà Bảo Tuyền'
    }

// Phương thức => phương thưc có thể gọi trong các phương thức khác cửa lớp đối tượng

    renderHocVien =() => {
        return (
          <div className="card border-dark">
            <img
              className="card-img-top"
              src={this.hocVien.hinhanh}
              alt
            />
            <div className="card-body">
        <h4 className="card-title">{this.hocVien.ma}</h4>
        <p className="card-text">{this.hocVien.tenHocVien}</p>
            </div>
          </div>
        );

    }


    render() {
        let title = 'Cybersoft';
        let imgSrc = 'https://picsum.photos/200/200';


        //binding data là hàm
       const renderImg = () => {
            return <div className="card text-white bg-primary">
                <img className="card-img-top" src={imgSrc}alt />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                </div>

            </div>
       }



        return (
            <div className="container">
                <div id="title">{title}</div>
                <div className="w-25">
                    <img src={imgSrc} />
                </div>
                <input className="w-50 form-control" value={title} />
                
             <div> {renderImg()}</div>

             <ul>
        <li> Mã học viên {this.hocVien.ma}</li>
        <li> Tên học viên {this.hocVien.tenHocVien}</li>
        <li> Hình ảnh {this.hocVien.hinhanh}</li>
             </ul>
             
             {/* {this.renderHocVien()} */}
            </div>
        )
    }
}
