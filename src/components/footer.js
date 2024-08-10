import React from 'react';
export default function Footer() {
    return (
        <div className="container-fluid fooer-container-fluid">
            <div className="row footer_row justify-content-center">
                <div className="col-6 col-md-3">
                    <a href="mailto:vivgangs@gmail.com">
                        <img src="/images/gmail-01.png" height="55px" alt="Gmail" />
                    </a>
                </div>
                <div className="col-6 col-md-3">
                    <a href="https://github.com/Viv31">
                        <img src="/images/github.png" height="55px" alt="GitHub" />
                    </a>
                </div>
                <div className="col-6 col-md-3">
                    <a href="https://stackoverflow.com/users/10657696/vaibhav">
                        <img src="/images/stackoverflow-01.png" height="55px" alt="Stack Overflow" />
                    </a>
                </div>
                <div className="col-6 col-md-3">
                    <a href="https://www.linkedin.com/in/vaibhav-gangrade-796387134">
                        <img src="/images/linkedin-01.png" height="55px" alt="LinkedIn" />
                    </a>
                </div>
            </div>
        </div>
    );
}
