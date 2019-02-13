package com.stackroute.deliverymanager.exception;

public class UserNameOrPasswordEmpty extends Exception {

    private String message;

    public UserNameOrPasswordEmpty()
    {}

    public UserNameOrPasswordEmpty(String message)
    {
        this.message=message;
    }
}
