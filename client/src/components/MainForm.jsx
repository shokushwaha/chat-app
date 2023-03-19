import { useState } from "react"
import { useNavigate } from "react-router-dom"
import '../css/MainForm.css'
const MainForm = () => {

    let navigate = useNavigate();

    const [error, setError] = useState("")
    const [data, setData] = useState({ name: "", room: "" })

    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const validation = () => {
        if (!data.name) {
            setError("Please enter your name...")
            return false
        }
        if (!data.room) {
            setError("Please enter room...")
            return false
        }
        setError("")
        return true
    }

    const handleSubmit = e => {
        e.preventDefault()
        const isValid = validation()
        if (isValid) {
            navigate(`/chat/${data.room}`, { state: data });
        }
    }

    return (
        <div className="outer-box">

            <div className="inner-box">

                <form onSubmit={handleSubmit}>
                    <div className="forms">
                        <h2 className="heading">Chatifyy</h2>


                        <input type="name" name="name" placeholder="Name...." onChange={handleChange} />


                        <input type="text" placeholder="Room...." name="room" onChange={handleChange} />



                        <button type="submit" className="btn">Join</button>
                        {error ? <small className="error">{error}</small> : ""}
                    </div>
                </form>
            </div>

        </div>
    )
}

export default MainForm