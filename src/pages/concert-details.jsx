import { useEffect } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"

export const ConcertDetails = () => {

    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const id = params.id
        if (id) {
            console.log(id);
        }
    }, [])

    return (
        <MainWrapper>
            <h1>concert!</h1>
        </MainWrapper>
    )
}

const MainWrapper = styled.main`

`