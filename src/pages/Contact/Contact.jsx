import { useReducer, useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.styles.scss'

const ContactPage = () => {
    const form = useRef();

    const fullDate = new Date()
    const month = fullDate.getMonth()+1;
    const year = fullDate.getFullYear();
    const day = fullDate.getDate();
    const currentDate = month + "/" + day + "/" + year;
    console.log(currentDate)

    const sendEmail = (e) => {
      emailjs.sendForm('service_emvnbab', 'template_nljbpov', form.current, 'dWdldUeQp-bwHTTqj')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    const [validData, setValidData] = useState(0)

    const initalValues ={
        name: "",
        email:"",
        phone:"",
        message:"",
        emailcolor: "black",
        phonecolor: "black",
        messagecolor: "black"
    }

    const ACTION_TYPES = {
        CHANGE_NAME: "change_name",
        CHANGE_EMAIL: "change_email",
        CHANGE_PHONE: "change_phone",
        CHANGE_MESSAGE: "change_message",
        CHANGE_EMAIL_COLOR: "change_email_color",
        CHANGE_PHONE_COLOR: "change_phone_color",
        CHANGE_MESSAGE_COLOR: "change_message_color"
    }

    const reducer = (state, action) => {
        switch(action.type){
            case ACTION_TYPES.CHANGE_NAME:
                return{
                    ...state,
                    name: action.newNameValue
                }
            case ACTION_TYPES.CHANGE_EMAIL:
                return{
                    ...state,
                    email: action.newEmailValue
                }
            case ACTION_TYPES.CHANGE_PHONE:
                return{
                    ...state,
                    phone: action.newPhoneValue
                }
            case ACTION_TYPES.CHANGE_MESSAGE:
                return{
                    ...state,
                    message: action.newMessageValue
                }
            case ACTION_TYPES.CHANGE_EMAIL_COLOR:
                return{
                    ...state,
                    emailcolor: action.newEmailColor
                }
            case ACTION_TYPES.CHANGE_PHONE_COLOR:
                return{
                    ...state,
                    phonecolor: action.newPhoneColor
                }
            case ACTION_TYPES.CHANGE_MESSAGE_COLOR:
                return{
                     ...state,
                    messagecolor: action.newMessageColor
                }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initalValues)

    const handleNameChange = (event) =>{
        dispatch({
            type: ACTION_TYPES.CHANGE_NAME,
            newNameValue: event.target.value
        })
    }
    const handleEmailChange = (event) =>{
        dispatch({
            type: ACTION_TYPES.CHANGE_EMAIL,
            newEmailValue: event.target.value
        })
    }
    const handlePhoneChange = (event) =>{
        dispatch({
            type: ACTION_TYPES.CHANGE_PHONE,
            newPhoneValue: event.target.value
        })
    }
    const handleMessageChange = (event) =>{
        dispatch({
            type: ACTION_TYPES.CHANGE_MESSAGE,
            newMessageValue: event.target.value
        })
    }

    const validateData = () => {
        const mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
        const phoneFormat = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
        if (!state.email.match(mailFormat)){
                    dispatch({
                        type: ACTION_TYPES.CHANGE_EMAIL_COLOR,
                        newEmailColor: 'red'
                    })
                
                setValidData(1)
                return
            }
        else {
            dispatch({
                type: ACTION_TYPES.CHANGE_EMAIL_COLOR,
                newEmailColor: 'black'
            })
        }
        if (!state.phone.match(phoneFormat)){
            if (state.phone.length > 1){
                dispatch({
                    type: ACTION_TYPES.CHANGE_PHONE_COLOR,
                    newPhoneColor: 'red'
                })
            }
            setValidData(1)
            return
        }
        else {
            dispatch({
                type: ACTION_TYPES.CHANGE_PHONE_COLOR,
                newPhoneColor: 'black'
            })
        }
        if (state.message.length < 50) {
            if (state.message.length > 1){
                dispatch({
                    type: ACTION_TYPES.CHANGE_MESSAGE_COLOR,
                    newMessageColor: 'red'
                })
            }
            setValidData(1)
            return
        }
        else {
            dispatch({
                type: ACTION_TYPES.CHANGE_MESSAGE_COLOR,
                newMessageColor: 'black'
            })
        }
        const date = JSON.parse(localStorage.getItem('date'));
        console.log(date)
        if(currentDate !== date){
            localStorage.setItem('date', JSON.stringify(currentDate));
            setValidData(2) 
            clearFields()
            // sendEmail()
        }
        else setValidData(3)
    }

    const clearFields = () => {
        dispatch({
            type: ACTION_TYPES.CHANGE_MESSAGE,
            newMessageValue: ''
        })
        dispatch({
            type: ACTION_TYPES.CHANGE_PHONE,
            newPhoneValue: ''
        })
        dispatch({
            type: ACTION_TYPES.CHANGE_EMAIL,
            newEmailValue: ''
        })
        dispatch({
            type: ACTION_TYPES.CHANGE_NAME,
            newNameValue: ''
        })
    }

    const message = () => {
        if (validData === 0) return  ""
        if (validData === 1) return  <p style={{color:"red"}}>Something is wrong, check again!</p>
        if (validData === 2) return  <p style={{color:"red"}}>Message sent!</p> 
        if (validData === 3) return  <p style={{color:"red", width:"50%", marginLeft:"auto", marginRight:"auto"}}>I received your previous message, due to spam avoidance, you are limited to only one message per day.</p> 

    }

    return(
        <div className="circle">

            <h1 className="title">
                Contact
            </h1>
            <form className='form-component' ref={form} onSubmit={(e) => {
                e.preventDefault()
                validateData()
            }}>
                <div className="form-group-name">
                    <label>NAME:</label>
                    <input type="text" placeholder='Your name *' name="from_name" value={state.name}  onChange={handleNameChange}/>
                    <label>EMAIL:</label>
                    <input type="text" placeholder='Your email *' name="from_email" value={state.email} style={{color:state.emailcolor}} onChange={handleEmailChange}/>
                    <label>PHONE:</label>
                    <input type="text" placeholder='Your phone *' name="phone" value={state.phone} style={{color:state.phonecolor}} onChange={handlePhoneChange}/>
                    <label>MESSAGE:</label>
                    <textarea placeholder='Your message (min 50 characters) *' name="message" value={state.message} style={{color:state.messagecolor}} onChange={handleMessageChange}/>
                </div>

                {message()}

                <button className='submit-contact'>Send</button>
            </form>
        </div>
    )
}

export default ContactPage