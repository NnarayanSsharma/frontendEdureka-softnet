import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export class SearchBar extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="search-bar">
                    <h1>Lean On Learning</h1>
                    <h3>Sale ends todays! Count on</h3> 
                    <h3>courses as low as $40</h3>
                    <Form>
                        <FormGroup>
                            <Input
                                type="text" 
                                placeholder="What do you want to learn?"
                            />
                        </FormGroup>
                    </Form>
                </div>
            </React.Fragment>
        )
    }
}

export default SearchBar
