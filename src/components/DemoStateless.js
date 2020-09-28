// State les component là component function ( react function component)
// phím tắt 'rfc'
import React from 'react'

export default function DemoStateless() {
// Bên trong lệnh return của function componenet là nội dung
// giao diện của thẻ này . Lưu ý : nội dung là component
// phải được bao phủ bởi 1 thẻ bất kỳ.
    return (
        <>
        <div className="card" style={{backgroundColor: 'cadetblue', borderColor: 'darkblue'}}>
  <img className="card-img-top" src="http://picsum.photos/200/200" alt />
  <div className="card-body">
    <h4 className="card-title">Title</h4>
    <p className="card-text">Text</p>
  </div>
</div>

        </>
    )
}

