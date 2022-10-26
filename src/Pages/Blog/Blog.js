import React from 'react';
import { useState } from 'react';
const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (

        <div className="border rounded shadow-sm">
            <button
                type="button"
                aria-label="Open item"
                title="Open item"
                className="flex items-center justify-between w-full p-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="text-lg font-medium">{title}</p>
                <div className="flex items-center justify-center w-8 h-8 border rounded-full">
                    <svg
                        viewBox="0 0 24 24"
                        className={`w-3 text-gray-600 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
                            }`}
                    >
                        <polyline
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            points="2,7 12,17 22,7"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </button>
            {isOpen && (
                <div className="p-4 pt-0">
                    <p className="text-gray-700">{children}</p>
                </div>
            )}
        </div>
    );
};


const Blog = () => {
    return (
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

            <div class="space-y-4">
                <Item title="What is cors?">
                    Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
                </Item>
                <Item title="why are you using firebase?What other option do you have to impliment authentication">
                    Firebase Hosting works out-of-the-box with Firebase services, including Cloud Functions, Authentication, Realtime Database, Cloud Firestore, and Cloud Messaging. You can build powerful microservices and web apps using Firebase services.

                    Authentication method's are Email & password,Google,Github,Microsoft,Twitter,Apple,Yahoo,Facebook etc.
                </Item>
                <Item title="How does the private route work?">The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is logged in.
                </Item>
                <Item title="What is Node?How dies it work?">Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser.Node. js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend.
                </Item>
            </div>
        </div>

    );
};

export default Blog;

