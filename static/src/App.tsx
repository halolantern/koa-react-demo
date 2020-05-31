import React, { useState } from 'react'
import './App.css'
import { ConfigProvider, message, Button, Input } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import 'antd/dist/antd.css'

moment.locale('zh-cn')

interface ICheckOptions {
    username: string | null
    password: string | null
}
function checkInput({ username, password }: ICheckOptions) {
    if (!username) {
        message.error('username is required')
        return false
    }
    if (!password) {
        message.error('password is required')
        return false
    }
    return true
}

const App = () => {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const handleUsername = (event: any) => {
        setUsername(event.currentTarget.value)
    }
    const handlePassword = (event: any) => {
        setPassword(event.currentTarget.value)
    }
    const handleSignup = async () => {
        if (!checkInput({ username, password })) return
        const res = await fetch('http://localhost:3721/api/user/signup', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {
                'content-type': 'application/json',
            },
        })
        const resJson = await res.json()
        const { code, response, msg } = resJson
        console.log('[ handleSignup ]', resJson)
        if (code === 0) {
            message.info(`Signup Success! Now you can signin with ${username}`)
        } else {
            message.error('Signup Fail! ' + msg)
        }
    }
    const handleSignin = async () => {
        if (!checkInput({ username, password })) return
        const res = await fetch('http://localhost:3721/api/user/signin', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {
                'content-type': 'application/json',
            },
        })
        const resJson = await res.json()
        const { code, response, msg } = resJson
        console.log('[ handleSignin ]', resJson)
        if (code === 0) {
            message.info(`Signin Success! Hello, ${username}`)
        } else {
            message.error(`Signin Fail! ` + msg)
        }
    }
    const handleAllUsers = async () => {
        const res = await fetch('http://localhost:3721/api/users')
        const resJson = await res.json()
        console.log('[ AllUser ]', resJson)
        message.info(`There are ${resJson.response.length} users totally`)
    }
    return (
        <ConfigProvider locale={zhCN}>
            <div style={{ width: 400, margin: '0 auto', paddingTop: '100px' }}>
                <div className="username">
                    username:
                    <Input onChange={handleUsername} placeholder="username" />
                </div>
                <div className="password">
                    password:
                    <Input onChange={handlePassword} placeholder="password" />
                </div>
                <Button type="primary" onClick={handleSignup}>
                    Signup
                </Button>
                <Button style={{ margin: '20px' }} type="primary" onClick={handleSignin}>
                    Signin
                </Button>
                <Button type="primary" onClick={handleAllUsers}>
                    AllUsers
                </Button>
            </div>
        </ConfigProvider>
    )
}

export default App
