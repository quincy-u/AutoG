import React from "react";
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'

const SearchBar = () => {
    return (
        <div className="SearchBar">
            <div className="dropdown">
                <Dropdown>
                    <Dropdown.Toggle
                        variant="secondary btn-sm"
                        id="dropdown-basic">
                        Language
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ backgroundColor: '#73a47' }}>
                        <Dropdown.Item href="#" >Arabic</Dropdown.Item>
                        <Dropdown.Item href="#">English</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Course"
                    aria-label="Course"
                    aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-search">
                    Search
                </Button>
            </InputGroup>

        </div>
    )
}

export default SearchBar;