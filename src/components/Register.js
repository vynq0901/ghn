import React from 'react'

const Register = ({handleActive}) => {
    return (
        <div className="login">
            <div className="login-item">
                <label>Họ và tên</label>
                <input className="login-input" placeholder="Nhập họ tên" />
            </div>
            <div className="login-item">
                <label>Tài khoản</label>
                <input className="login-input" placeholder="Nhập tài khoản" />
            </div>
            <div className="login-item">
                <label>Số điện thoại</label>
                <input className="login-input" placeholder="Nhập số điện thoại" type="password" />
            </div>
            <div className="login-item">
                <label>Email</label>
                <input className="login-input" placeholder="Nhập email" />
            </div>
            <div className="login-item">
                <label>Mật khẩu</label>
                <input className="login-input" placeholder="Nhập mật khẩu" type="password" />
            </div>
            <div className="login-item">
                <label>Nhập lại mật khẩu</label>
                <input className="login-input" placeholder="Nhập lại mật khẩu" type="password" />
            </div>
            <button className="login-button">Đăng kí</button>
            <p className="no-account">Bạn là shipper ? <span style={{color: '#f26522', fontWeight: 700, cursor: 'pointer', textDecoration: 'underline'}} onClick={() => handleActive(3)}>Đăng kí shipper</span></p>
        </div>
    )
}

export default Register
