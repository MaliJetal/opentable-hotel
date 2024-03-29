"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import AuthInputs from "./AuthInputs";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "200%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function LoginModal({ isSignIn }: { isSignIn: boolean }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    password: "",
  });
  function renderContent(signInContent: string, signUpContent: string) {
    return isSignIn ? signInContent : signUpContent;
  }

  return (
    <div>
      <Button
        className={`${renderContent(
          "bg-blue-400 text-white",
          ""
        )} p-1 px-4 rounded mr-3`}
        onClick={handleOpen}
      >
        {renderContent("Sign In", "Sign Up")}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        className='w-72'
      >
        <Box sx={style}>
          <div className='p-2 h-600'>
            <div className='uppercase font-bold text-center pb-2 border-b mb-2'>
              <p className='text-sm'>
                {renderContent("Sign In", "Create Account")}
              </p>
            </div>
            <div className='m-auto'>
              <h2 className='text-2xl font-light text-center'>
                {renderContent(
                  "Login Into your account",
                  "Create Your Open table account"
                )}
              </h2>
              <AuthInputs inputs={inputs} />
              <Button className='uppercase bg-red-600 w-full text-white p-3 rounded text-sm mb-5 disabled:bg-gray-400'>
                {renderContent("Sign In", "Create Account")}
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
