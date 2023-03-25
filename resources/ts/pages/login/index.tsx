import React from "react"

const LoginPage: React.VFC = () => {
    return(
        <>
            <div className="login-page">
                <div className="login-panel">
                    <form>
                        <div className="input-group">
                            <label>メールアドレス</label>
                            <input type="email" className="input"/>
                        </div>
                        <div className="input-group">
                            <label>パスワード</label>
                            <input type="password" className="input"/>
                        </div>
                        <button type="submit" className="btn">ログイン</button>
                    </form>
                </div>
                <div className="links"><a href="#">ヘルプ</a></div>
            </div>
        </>
    )
}

export default LoginPage
