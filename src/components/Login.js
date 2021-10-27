import React from 'react'

const Login = ({handleActive}) => {
    return (
        <div className="login" >
            <div className="login-item">
                <label>Tài khoản</label>
                <input className="login-input" placeholder="Nhập tài khoản" />
            </div>
            <div className="login-item">
                <label>Mật khẩu</label>
                <input className="login-input" placeholder="Nhập mật khẩu" type="password" />
            </div>
            <button className="login-button">Đăng nhập</button>
            <p className="no-account">Bạn chưa có tài khoản ? <span style={{color: '#f26522', fontWeight: 700, cursor: 'pointer'}} onClick={() => handleActive(1)}>Đăng kí ngay</span></p>
        </div>
    )
}

export default Login
