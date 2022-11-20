import { useEffect } from "react"
import { useDispatch } from 'react-redux'
import { checkStore } from "../store/user.actions"

export const HomePage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(checkStore())
    }, [])

    return (
        <div className="home-page">
            <h1>Hello from Home Page</h1>
        </div>
    )
}