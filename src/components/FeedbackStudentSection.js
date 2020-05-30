import React, { Component } from 'react'

export class FeedbackStudentSection extends Component {
    render() {
        return (
            <div className="feedback-student-section">
                <div>
                    <h1>What our students say about us...</h1>
                    <div className="feedback-box">
                        <div className="box">
                            <img src="https://source.unsplash.com/1600x900/?laptop,coding"/>
                            <h2>Name1</h2>
                            <p>You included all the necessary information for us to make a decision and presented the information in a one-page table that was easy to read. Your work made it really easy to make a decision. Great job!</p>
                        </div>
                        <div className="box">
                            <img src="https://source.unsplash.com/1600x900/?coffee,coding"/>
                            <h2>Name2</h2>
                            <p>I know that whatever I give you to do will get done the first time I ask and will be accurate. I don’t have to ask again or check your work. You check your work for typos and mistakes before submitting it.</p>
                        </div>
                        <div className="box">
                            <img src="https://source.unsplash.com/1600x900/?technology,coding" />
                            <h2>Name3</h2>
                            <p>Last week you noticed an invoice that didn’t seem accurate. You researched the invoice and got the mistake corrected before I even knew there was a problem. You make my job easy.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FeedbackStudentSection
