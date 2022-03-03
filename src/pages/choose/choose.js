import React from 'react';
import { Link } from 'react-router-dom';
import './choose.css';
import { Button } from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa';
// import Foooter from '../Footer/Footer'

export default function Choose() {
    return (
        <>
            <div className="Choose m-5">
                <div className="col-lg-12">
                    <hr />
                    <h5 className="text-center responsive-font-example">Are you a Client or a Contractor?</h5>
                    <hr />
                </div>
                <Link to={'/ClientLogin'}>
                    <Button className='btn-1 m-5 ' >
                        <FaUserAlt></FaUserAlt> <br />  
                        <span>Client</span> 
                    </Button>
                </Link>{' '}
                <Link to={'/ContractorLogin'}>
                    <Button className='btn-1 m-5 ' >
                        <FaUserAlt></FaUserAlt> <br /> 
                        <span>Contractor</span> 
                    </Button>
                </Link>{' '}
            </div >
        </>
    )
}