import React, { useState } from 'react'
import Modal from 'react-modal'

const MyModal = () => {
  const [open, setOpen] = useState(true)

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <div>
      <Modal
        className="Modal"
        overlayClassName="Overlay"
        isOpen={open}
        onRequestClose={toggle}
      >
        <div className="close" onClick={toggle}>
          Close
        </div>
        <div className="Modal_Container">
          <p className="Web_Name">SoundBee</p>
          <div className="Modal_L">
            <div className="About_Container">
              <p className="About_web">
                SoundBee is a <strong style={{color:"white"}}>Mern Stack </strong> based ecommerce application. Provide
                all the basic features like searching a product, cart, payment
                gateway & admin panel. Major use of <strong style={{color:"white"}}> Components </strong>, <strong style={{color:"white"}}> REST APIs </strong> for routes,
                <strong style={{color:"white"}}> Asynchronous programming </strong>, <strong style={{color:"white"}}>Redux</strong> for state management, 
                <strong style={{color:"white"}}> Authentication </strong>and <strong style={{color:"white"}}>CRUD</strong> operations on database.
              </p>
              <div className="Tech">
                <p className="Tech_Used">Tech Used</p>
                <ul>
                  <li>React</li>
                  <li>Node</li>
                  <li>Mongodb</li>
                  <li>Redux</li>
                </ul>
              </div>
            </div>
            <div className="Modal_M">
              <p className="Developed">Developed</p>
              <div className="Developed_List">
                <p>
                  <i
                    style={{
                      fontSize: '8px',
                      marginRight: '10px',
                      color: 'greenyellow',
                    }}
                    className="fas fa-circle"
                  ></i>
                  Product listing
                </p>
                <p>
                  <i
                    style={{
                      fontSize: '8px',
                      marginRight: '10px',
                      color: 'greenyellow',
                    }}
                    className="fas fa-circle"
                  ></i>
                  Login feature
                </p>
                <p>
                  <i
                    style={{
                      fontSize: '8px',
                      marginRight: '10px',
                      color: 'greenyellow',
                    }}
                    className="fas fa-circle"
                  ></i>
                  Signup feature
                </p>
                <p>
                  <i
                    style={{
                      fontSize: '8px',
                      marginRight: '10px',
                      color: 'greenyellow',
                    }}
                    className="fas fa-circle"
                  ></i>
                  Order feature
                </p>
                <p>
                  <i
                    style={{
                      fontSize: '8px',
                      marginRight: '10px',
                      color: 'greenyellow',
                    }}
                    className="fas fa-circle"
                  ></i>
                  Payment gateway
                </p>
              </div>
            </div>
            <div className="Modal_R">
              <p className="In_Development">In Development</p>
              <div className="In_Development_List">
                <p>
                  <i
                    style={{
                      fontSize: '8px',
                      marginRight: '10px',
                      color: 'red',
                    }}
                    className="fas fa-circle"
                  ></i>
                  Non-responsive
                </p>
                <p>
                  <i
                    style={{
                      fontSize: '8px',
                      marginRight: '10px',
                      color: 'red',
                    }}
                    className="fas fa-circle"
                  ></i>
                 User validation
                </p>

                <p>
                  <i
                    style={{
                      fontSize: '8px',
                      marginRight: '10px',
                      color: 'red',
                    }}
                    className="fas fa-circle"
                  ></i>
                  Admin panel
                </p>
                <p>
                  <i
                    style={{
                      fontSize: '8px',
                      marginRight: '10px',
                      color: 'red',
                    }}
                    className="fas fa-circle"
                  ></i>
                  Error handling
                </p>
                <p>
                  <i
                    style={{
                      fontSize: '8px',
                      marginRight: '10px',
                      color: 'red',
                    }}
                    className="fas fa-circle"
                  ></i>
                  Testing
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default MyModal
